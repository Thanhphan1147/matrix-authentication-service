// Copyright 2021 The Matrix.org Foundation C.I.C.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//! Templates rendering

use std::{collections::HashSet, io::Cursor, path::Path, string::ToString, sync::Arc};

use anyhow::Context as _;
use serde::Serialize;
use tera::{Context, Error as TeraError, Tera};
use thiserror::Error;
use tokio::{fs::OpenOptions, io::AsyncWriteExt};
use tracing::{debug, info, warn};
use warp::reject::Reject;

mod context;
#[macro_use]
mod macros;

pub use self::context::{
    EmptyContext, ErrorContext, FormPostContext, IndexContext, LoginContext, LoginFormField,
    TemplateContext, WithCsrf, WithOptionalSession, WithSession,
};

/// Wrapper around [`tera::Tera`] helping rendering the various templates
#[derive(Debug, Clone)]
pub struct Templates(Arc<Tera>);

#[derive(Error, Debug)]
pub enum TemplateLoadingError {
    #[error("could not load and compile some templates")]
    Compile(#[from] TeraError),

    #[error("missing templates {missing:?}")]
    MissingTemplates {
        missing: HashSet<String>,
        loaded: HashSet<String>,
    },
}

impl Templates {
    /// Load the templates and check all needed templates are properly loaded
    ///
    /// # Arguments
    ///
    /// * `path` - An optional path to where templates should be loaded
    /// * `builtin` - Set to `true` to load the builtin templates as well
    pub fn load(path: Option<String>, builtin: bool) -> Result<Self, TemplateLoadingError> {
        let tera = {
            let mut tera = Tera::default();

            if builtin {
                info!("Loading builtin templates");

                for (name, source) in EXTRA_TEMPLATES {
                    tera.add_raw_template(name, source)?;
                }

                for (name, source) in TEMPLATES {
                    tera.add_raw_template(name, source)?;
                }
            }

            if let Some(path) = path {
                let path = format!("{}/**/*.{{html,txt}}", path);
                info!(%path, "Loading templates from filesystem");
                tera.extend(&Tera::parse(&path)?)?;
            }

            tera.build_inheritance_chains()?;
            tera.check_macro_files()?;

            tera
        };

        let loaded: HashSet<_> = tera.get_template_names().collect();
        let needed: HashSet<_> = std::array::IntoIter::new(TEMPLATES)
            .map(|(name, _)| name)
            .collect();
        debug!(?loaded, ?needed, "Templates loaded");
        let missing: HashSet<_> = needed.difference(&loaded).collect();

        if missing.is_empty() {
            Ok(Self(Arc::new(tera)))
        } else {
            let missing = missing.into_iter().map(ToString::to_string).collect();
            let loaded = loaded.into_iter().map(ToString::to_string).collect();
            Err(TemplateLoadingError::MissingTemplates { missing, loaded })
        }
    }

    /// Save the builtin templates to a folder
    pub async fn save(path: &Path, overwrite: bool) -> anyhow::Result<()> {
        tokio::fs::create_dir_all(&path)
            .await
            .context("could not create destination folder")?;

        let templates = std::array::IntoIter::new(TEMPLATES).chain(EXTRA_TEMPLATES);

        let mut options = OpenOptions::new();
        if overwrite {
            options.create(true).truncate(true).write(true);
        } else {
            // With the `create_new` flag, `open` fails with an `AlreadyExists` error to
            // avoid overwriting
            options.create_new(true).write(true);
        };

        for (name, source) in templates {
            let path = path.join(name);

            let mut file = match options.open(&path).await {
                Err(e) if e.kind() == std::io::ErrorKind::AlreadyExists => {
                    // Not overwriting a template is a soft error
                    warn!(?path, "Not overwriting template");
                    continue;
                }
                x => x.context(format!("could not open file {:?}", path))?,
            };

            let mut buffer = Cursor::new(source);
            file.write_all_buf(&mut buffer)
                .await
                .context(format!("could not write file {:?}", path))?;
            info!(?path, "Wrote template");
        }

        Ok(())
    }
}

#[derive(Error, Debug)]
pub enum TemplateError {
    #[error("could not prepare context for template {template:?}")]
    Context {
        template: &'static str,
        #[source]
        source: TeraError,
    },

    #[error("could not render template {template:?}")]
    Render {
        template: &'static str,
        #[source]
        source: TeraError,
    },
}

impl Reject for TemplateError {}

register_templates! {
    extra = { "base.html" };

    /// Render the login page
    pub fn render_login(WithCsrf<LoginContext>) { "login.html" }

    /// Render the registration page
    pub fn render_register(WithCsrf<EmptyContext>) { "register.html" }

    /// Render the home page
    pub fn render_index(WithCsrf<WithOptionalSession<IndexContext>>) { "index.html" }

    /// Render the re-authentication form
    pub fn render_reauth(WithCsrf<WithSession<EmptyContext>>) { "reauth.html" }

    /// Render the form used by the form_post response mode
    pub fn render_form_post<T: Serialize>(FormPostContext<T>) { "form_post.html" }

    /// Render the HTML error page
    pub fn render_error(ErrorContext) { "error.html" }
}
