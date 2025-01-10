import React from 'react';

import ToolCard from '../../tool-card';

import SwapCard from './swap-result';
import SwapCallBody from './swap-call-body';

import type { ToolInvocation } from 'ai';
import type { SolanaTradeResultType, SolanaTradeArgumentsType } from '@/ai';

interface SwapProps {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const Swap: React.FC<SwapProps> = ({ tool, prevToolAgent }) => {

    console.log(tool.args);

    return (
        <ToolCard 
            tool={tool}
            loadingText="Completing Trade..."
            result={{
                heading: (result: SolanaTradeResultType) => result.body 
                    ? "Trade Complete"
                    : "Failed to complete trade",
                body: (result: SolanaTradeResultType) => result.body 
                    ? <SwapCard tradeResult={result.body} />
                    : result.message
            }}
            call={{
                heading: "Swap",
                body: (toolCallId: string, args: SolanaTradeArgumentsType) => (
                    <SwapCallBody toolCallId={toolCallId} args={args} />
                )
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
        />
    );
};

export default Swap; 