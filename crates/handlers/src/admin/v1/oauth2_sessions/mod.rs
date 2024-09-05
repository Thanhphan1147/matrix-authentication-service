// Copyright (C) 2024 New Vector Ltd.
// Copyright 2024 The Matrix.org Foundation C.I.C.
//
// SPDX-License-Identifier: AGPL-3.0-only
// Please see LICENSE in the repository root for full details.

mod get;
mod list;

pub use self::{
    get::{doc as get_doc, handler as get},
    list::{doc as list_doc, handler as list},
};
