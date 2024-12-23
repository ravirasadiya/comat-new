import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { GetTokenDataResultType } from '@/agentkit/actions/solana/types';
import { JupiterTokenData } from 'solana-agent-kit';
import { Card } from '@/components/ui';
import { PriceChart } from './line-chart';

interface Props {
    tool: ToolInvocation
}

const GetTokenData: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="ChartCandlestick"
            agentName="Market Agent"
            loadingText={`Getting Token Data...`}
            resultHeading={(result: GetTokenDataResultType) => `Fetched ${result.body?.token.symbol || "Token"} Data`}
            resultBody={(result: GetTokenDataResultType) => result.body 
                ? <TokenCard token={result.body.token} prices={result.body.prices} />
                :  "No token data found"}
            defaultOpen={true}
        />
    )
}

const TokenCard = ({ token, prices }: { token: JupiterTokenData, prices: [number, number][]}) => {
    return (
        <Card className="p-2 flex flex-col gap-2">
            <img src={token.logoURI} alt={token.name} className="w-10 h-10" />
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                        <p className="text-md font-bold">{token.name} ({token.symbol})</p>
                    </div>
                </div>
            </div>
            <p className="text-4xl font-bold">${prices[prices.length - 1][1].toFixed(2)}</p>
            <p className="text-xs text-muted-foreground">Daily Volume: ${token.daily_volume.toLocaleString()}</p>
            <PriceChart data={prices} />
        </Card>
    )
}

export default GetTokenData;