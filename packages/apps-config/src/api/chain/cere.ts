// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

// structs need to be in order
/* eslint-disable sort-keys */

export default {
  ChainId: "u8",
  DepositNonce: "u64",
  ResourceId: "[u8; 32]",
  ProposalVotes: {
    votes_for: "Vec<AccountId>",
    votes_against: "Vec<AccountId>",
    status: "enum",
    expiry: "BlockNumber"
  },
  TokenId: "U256",
  Erc721Token: {
    id: "TokenId",
    metadata: "Vec<u8>"
  },
  Address: "AccountId",
  LookupSource: "Address"
};