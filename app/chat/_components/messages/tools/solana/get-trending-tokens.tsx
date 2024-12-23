import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { GetTrendingTokensResultType } from '@/agentkit/actions/solana/types';
import { SolanaToken } from '@/types/solana-token';
import { Card } from '@/components/ui';

interface Props {
    tool: ToolInvocation
}

const GetTrendingTokens: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            icon="ChartCandlestick"
            agentName="Market Agent"
            loadingText={`Getting Trending Tokens...`}
            resultHeading={() => `Fetched Trending Tokens`}
            resultBody={(result: GetTrendingTokensResultType) => result.body 
                ? <TrendingTokens tokens={result.body.tokens} prices={result.body.prices} />
                :  "No trending tokens found"}
            defaultOpen={true}
        />
    )
}

const TrendingTokens = ({ tokens, prices }: { tokens: SolanaToken[], prices: number[] }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {tokens.map((token: SolanaToken, index: number) => (
                <TokenCard
                    key={token.address} 
                    token={token} 
                    price={prices[index]}
                />
            ))}
        </div>
    )
}

const TokenCard = ({ token, price }: { token: SolanaToken, price: number }) => {
    return (
        <Card className="p-2 flex items-center gap-2">
            <img src={token.logoURI} alt={token.name} className="w-10 h-10" />
            <div className="flex flex-col">
                <p className="text-md font-bold">{token.name} ({token.symbol})</p>
                <p className="text-sm text-muted-foreground">${price.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Daily Volume: ${token.daily_volume.toLocaleString()}</p>
            </div>
        </Card>
    )
}

export default GetTrendingTokens;