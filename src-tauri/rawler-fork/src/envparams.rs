// SPDX-License-Identifier: LGPL-2.1
// Copyright 2021 Daniel Vogelbacher <daniel@chaospixel.com>

use log::warn;

pub(crate) fn rawler_ignore_previews() -> bool {
  match std::env::var("RAWLER_IGNORE_PREVIEWS").map(|val| val.parse::<u32>()) {
    Ok(Ok(value)) => value == 1,
    Ok(Err(_)) => {
      warn!("Invalid value for RAWLER_IGNORE_PREVIEWS");
      false
    }
    Err(_) => false,
  }
}

pub(crate) fn rawler_crx_raw_trak() -> Option<usize> {
  match std::env::var("RAWLER_CRX_RAW_TRAK").map(|val| val.parse::<usize>()) {
    Ok(Ok(value)) => Some(value),
    Ok(Err(_)) => {
      warn!("Invalid value for RAWLER_CRX_RAW_TRAK");
      None
    }
    Err(_) => None,
  }
}
