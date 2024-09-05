// Copyright (C) 2024 New Vector Ltd.
// Copyright 2022-2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

//! Repositories to interact with entities related to the upstream OAuth 2.0
//! providers

mod link;
mod provider;
mod session;

pub use self::{
    link::{UpstreamOAuthLinkFilter, UpstreamOAuthLinkRepository},
    provider::{
        UpstreamOAuthProviderFilter, UpstreamOAuthProviderParams, UpstreamOAuthProviderRepository,
    },
    session::UpstreamOAuthSessionRepository,
};
