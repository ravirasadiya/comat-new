import React from 'react'

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { GetTrendingTokensResultType } from '@/ai';
import type { SolanaToken } from '@/types';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const GetTrendingTokens: React.FC<Props> = ({ tool, prevToolAgent }) => {
    

    return (
        <ToolCard 
            tool={tool}
            loadingText={`Getting Trending Tokens...`}
            result={{
                heading: (result: GetTrendingTokensResultType) => result.body 
                    ? `Fetched Trending Tokens`
                    : `Failed to fetch trending tokens`,
                body: (result: GetTrendingTokensResultType) => result.body 
                    ? <TrendingTokens tokens={result.body.tokens} prices={result.body.prices} />
                    :  "No trending tokens found"
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
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
        <div className="flex items-center gap-2">
            <img src={token.logoURI} alt={token.name} className="w-10 h-10" />
            <div className="flex flex-col">
                <p className="text-md font-bold">{token.name} ({token.symbol})</p>
                <p className="text-sm text-muted-foreground">${price.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Daily Volume: ${token.daily_volume.toLocaleString()}</p>
            </div>
        </div>
    )
}

export default GetTrendingTokens;