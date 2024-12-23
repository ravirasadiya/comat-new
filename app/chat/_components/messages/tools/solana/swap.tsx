import React from 'react'

import { Card } from '@/components/ui';

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { TradeResultType, TradeResultBodyType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const GetTokenData: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="ArrowLeftRight"
            agentName="Trading Agent"
            loadingText={`Completing Trade...`}
            resultHeading={(result: TradeResultType) => result.body 
                ? `Trade Complete`
                :  "Failed to complete trade"}
            resultBody={(result: TradeResultType) => result.body 
                ? <SwapCard tradeResult={result.body} />
                :  "No trade data found"}
            defaultOpen={true}
        />
    )
}

const SwapCard = ({ tradeResult }: { tradeResult: TradeResultBodyType }) => {
    return (
        <Card className="p-2 flex items-center gap-2 w-fit">
            <p className="text-xs text-muted-foreground">Swapped {tradeResult.inputAmount} {tradeResult.inputToken} for {tradeResult.outputToken}</p>
        </Card>
    )
}

export default GetTokenData;