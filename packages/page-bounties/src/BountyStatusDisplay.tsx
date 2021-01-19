// Copyright 2017-2021 @polkadot/app-bounties authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveCollectiveProposal } from '@polkadot/api-derive/types';
import type { BountyStatus } from '@polkadot/types/interfaces';

import React, { useMemo } from 'react';
import styled from 'styled-components';

import { LabelHelp } from '@polkadot/react-components';

import { useTranslation } from './translate';
import VotingDescription from './VotingDescription';

interface Props {
  bountyStatus: string;
  className?: string;
  proposals?: DeriveCollectiveProposal[];
  status: BountyStatus;
}

function BountyStatusDisplay ({ bountyStatus, className = '', proposals, status }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const statusHelpMessages: Record<string, string> = useMemo(() => ({
    Active: t('This bounty has received general approval and is currently being implemented.'),
    Approved: t("This bounty was approved by the council, it will get funded after a treasury's spend period."),
    CuratorProposed: t('The voting for a curator is in progress.'),
    Funded: t('This bounty was approved and funded by council.'),
    PendingPayout: t('This bounty was completed and the beneficiary was awarded by the curator.'),
    Proposed: t('After a bounty was proposed the council decides whether to fund it or not.')
  }), [t]);

  return (
    <div className={className}>
      <div className='bountyStatus'>
        {bountyStatus}
        <LabelHelp
          help={statusHelpMessages[status.type]}
        />
      </div>
      {proposals && (
        <div>
          <VotingDescription
            proposals={proposals}
            status={status}
          />
        </div>
      )}
    </div>
  );
}

export default React.memo(styled(BountyStatusDisplay)`
  .bountyStatus {
    display: flex;
    align-items: flex-end;
  }
`);
