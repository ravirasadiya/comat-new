import React from 'react';

import { UnstakeResultBodyType } from '@/agentkit/actions/solana/types';

interface Props {
    unstakeResult: UnstakeResultBodyType;
    amount: number;
}

const UnstakeResult: React.FC<Props> = ({ amount }) => {

    return (
        <p className="text-xs text-muted-foreground">
            Unstaked {amount} JupSOL
        </p>
    );
};

export default UnstakeResult; 