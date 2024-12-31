import React from 'react';

import { TradeResultBodyType } from '@/agentkit/actions/solana/types';

interface SwapCardProps {
    tradeResult: TradeResultBodyType;
}

const SwapCard: React.FC<SwapCardProps> = ({ tradeResult }) => {

    return (
        <p className="text-xs text-muted-foreground">
            Swapped {tradeResult.inputAmount} {tradeResult.inputToken} for {tradeResult.outputToken}
        </p>
    );
};

export default SwapCard; 