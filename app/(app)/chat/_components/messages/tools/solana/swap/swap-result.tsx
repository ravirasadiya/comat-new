import React from 'react';

import { TradeResultBodyType } from '@/agentkit/actions/solana/types';

interface Props {
    tradeResult: TradeResultBodyType;
}

const SwapResult: React.FC<Props> = ({ tradeResult }) => {

    return (
        <p className="text-xs text-muted-foreground">
            Swapped {tradeResult.inputAmount} {tradeResult.inputToken} for {tradeResult.outputToken}
        </p>
    );
};

export default SwapResult; 