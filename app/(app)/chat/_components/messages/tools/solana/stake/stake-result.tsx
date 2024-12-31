import React from 'react';

import { StakeResultBodyType } from '@/agentkit/actions/solana/types';

interface Props {
    stakeResult: StakeResultBodyType;
    amount: number;
}

const StakeResult: React.FC<Props> = ({ amount }) => {

    return (
        <p className="text-xs text-muted-foreground">
            Staked {amount} SOL for JupSOL
        </p>
    );
};

export default StakeResult; 