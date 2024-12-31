import React from 'react';

import { TradeResultType, TradeArgumentsType } from '@/agentkit/actions/solana/types';

import ToolCard from '../../tool-card';

import SwapCard from './swap-result';
import SwapCallBody from './swap-call-body';

import { ToolInvocation } from 'ai';

interface SwapProps {
    tool: ToolInvocation;
}

const Swap: React.FC<SwapProps> = ({ tool }) => {
    return (
        <ToolCard 
            tool={tool}
            icon="ArrowLeftRight"
            agentName="Trading Agent"
            loadingText="Completing Trade..."
            resultHeading={(result: TradeResultType) => result.body 
                ? "Trade Complete"
                : "Failed to complete trade"}
            resultBody={(result: TradeResultType) => result.body 
                ? <SwapCard tradeResult={result.body} />
                : result.message}
            callBody={(toolCallId: string, args: TradeArgumentsType) => (
                <SwapCallBody toolCallId={toolCallId} args={args} />
            )}
            defaultOpen={true}
        />
    );
};

export default Swap; 