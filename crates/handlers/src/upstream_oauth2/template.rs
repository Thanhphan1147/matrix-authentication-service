// Copyright 2024 New Vector Ltd.
// Copyright 2023, 2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

use std::{collections::HashMap, sync::Arc};

use base64ct::{Base64, Base64Unpadded, Base64Url, Base64UrlUnpadded, Encoding};
use minijinja::{Environment, Error, ErrorKind, Value};

fn b64decode(value: &str) -> Result<Value, Error> {
    // We're not too concerned about the performance of this filter, so we'll just
    // try all the base64 variants when decoding
    let bytes = Base64::decode_vec(value)
        .or_else(|_| Base64Url::decode_vec(value))
        .or_else(|_| Base64Unpadded::decode_vec(value))
        .or_else(|_| Base64UrlUnpadded::decode_vec(value))
        .map_err(|e| {
            Error::new(
                ErrorKind::InvalidOperation,
                "Failed to decode base64 string",
            )
            .with_source(e)
        })?;

    // It is not obvious, but the cleanest way to get a Value stored as raw bytes is
    // to wrap it in an Arc, because Value implements From<Arc<Vec<u8>>>
    Ok(Value::from(Arc::new(bytes)))
}

fn b64encode(bytes: &[u8]) -> String {
    Base64::encode_string(bytes)
}

/// Decode a Tag-Length-Value encoded byte array into a map of tag to value.
fn tlvdecode(bytes: &[u8]) -> Result<HashMap<Value, Value>, Error> {
    let mut iter = bytes.iter().copied();
    let mut ret = HashMap::new();
    loop {
        // TODO: this assumes the tag and the length are both single bytes, which is not
        // always the case with protobufs. We should properly decode varints
        // here.
        let Some(tag) = iter.next() else {
            break;
        };

        let len = iter
            .next()
            .ok_or_else(|| Error::new(ErrorKind::InvalidOperation, "Invalid ILV encoding"))?;

        let mut bytes = Vec::with_capacity(len.into());
        for _ in 0..len {
            bytes.push(
                iter.next().ok_or_else(|| {
                    Error::new(ErrorKind::InvalidOperation, "Invalid ILV encoding")
                })?,
            );
        }

        ret.insert(tag.into(), Value::from(Arc::new(bytes)));
    }

    Ok(ret)
}

fn string(value: &Value) -> String {
    value.to_string()
}

fn from_json(value: &str) -> Result<Value, minijinja::Error> {
    let value: serde_json::Value = serde_json::from_str(value).map_err(|e| {
        minijinja::Error::new(
            minijinja::ErrorKind::InvalidOperation,
            "Failed to decode JSON",
        )
        .with_source(e)
    })?;

    Ok(Value::from_serialize(value))
}

pub fn environment() -> Environment<'static> {
    let mut env = Environment::new();

    minijinja_contrib::add_to_environment(&mut env);

    env.add_filter("b64decode", b64decode);
    env.add_filter("b64encode", b64encode);
    env.add_filter("tlvdecode", tlvdecode);
    env.add_filter("string", string);
    env.add_filter("from_json", from_json);

    env.set_unknown_method_callback(minijinja_contrib::pycompat::unknown_method_callback);

    env
}

#[cfg(test)]
mod tests {
    use super::environment;

    #[test]
    fn test_split() {
        let env = environment();
        let res = env
            .render_str(r#"{{ 'foo, bar' | split(', ') | join(" | ") }}"#, ())
            .unwrap();
        assert_eq!(res, "foo | bar");
    }

    #[test]
    fn test_ilvdecode() {
        let env = environment();
        let res = env
            .render_str(
                r#"
                    {%- set tlv = 'Cg0wLTM4NS0yODA4OS0wEgRtb2Nr' | b64decode | tlvdecode -%}
                    {%- if tlv[18]|string != 'mock' -%}
                        {{ "FAIL"/0 }}
                    {%- endif -%}
                    {{- tlv[10]|string -}}
                "#,
                (),
            )
            .unwrap();
        assert_eq!(res, "0-385-28089-0");
    }

    #[test]
    fn test_base64_decode() {
        let env = environment();

        let res = env
            .render_str("{{ 'cGFkZGluZw==' | b64decode }}", ())
            .unwrap();
        assert_eq!(res, "padding");

        let res = env
            .render_str("{{ 'dW5wYWRkZWQ' | b64decode }}", ())
            .unwrap();
        assert_eq!(res, "unpadded");
    }
}
