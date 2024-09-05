/* Copyright (C) 2024 New Vector Ltd.
* Copyright 2023, 2024 The Matrix.org Foundation C.I.C.
*
* SPDX-License-Identifier: AGPL-3.0-only
* Please see LICENSE in the repository root for full details.
 */

const DEVICE_PREFIX = "urn:matrix:org.matrix.msc2967.client:device:";

/**
 * Device scopes are suffixed with the deviceId
 * Isolate the suffix so we can display it
 * @param scope the full scope of the session
 * @returns deviceId, or undefined when not a device scope
 */
export const getDeviceIdFromScope = (scope: string): string | undefined => {
  const [, deviceId] = scope.split(DEVICE_PREFIX);
  return deviceId;
};
