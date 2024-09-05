// Copyright (C) 2024 New Vector Ltd.
// Copyright 2022-2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

//! Values from IANA registries, generated by the `mas-iana-codegen` crate

#![deny(missing_docs)]
#![allow(clippy::module_name_repetitions)]

pub mod jose;
pub mod oauth;

/// An error that occurred while parsing a value from a string.
pub struct ParseError {
    _private: (),
}

impl ParseError {
    fn new() -> Self {
        Self { _private: () }
    }
}

impl core::fmt::Debug for ParseError {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        f.write_str("ParseError")
    }
}

impl core::fmt::Display for ParseError {
    fn fmt(&self, f: &mut core::fmt::Formatter<'_>) -> core::fmt::Result {
        f.write_str("Parse error")
    }
}

impl std::error::Error for ParseError {}
