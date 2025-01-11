import React, { useState } from 'react'

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { TopHoldersResultType } from '@/ai';
import { TokenLargestAccount } from '@/services/helius';
import Address from '@/app/_components/address';
import { Button } from '@/components/ui/button';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const GetTopHolders: React.FC<Props> = ({ tool, prevToolAgent }) => {
    

    return (
        <ToolCard 
            tool={tool}
            loadingText={`Getting Top Holders...`}
            result={{
                heading: (result: TopHoldersResultType) => result.body 
                    ? `Fetched Top 20 Holders`
                    : `Failed to fetch top holders`,
                body: (result: TopHoldersResultType) => result.body 
                    ? <TopHolders topHolders={result.body.topHolders} percentageOwned={result.body.percentageOwned} />
                    :  "No top holders found"
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
        />
    )
}

const TopHolders = ({ topHolders, percentageOwned }: { topHolders: (TokenLargestAccount & { percentageOwned: number })[], percentageOwned: number }) => {

    const [showAll, setShowAll] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">
                {(percentageOwned * 100).toFixed(2)}% of the total supply is owned by the top 20 holders
            </p>
            {topHolders.slice(0, showAll ? topHolders.length : 5).map((topHolder: (TokenLargestAccount & { percentageOwned: number }), index: number) => (
                <TopHolder
                    key={topHolder.address} 
                    topHolder={topHolder} 
                    index={index}
                />
            ))}
            <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show Less" : "Show All"}
            </Button>
        </div>
    )
}

const TopHolder = ({ topHolder, index }: { topHolder: (TokenLargestAccount & { percentageOwned: number }), index: number }) => {
    return (
        <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
                {index + 1})
            </p>
            <Address address={topHolder.address} />
            <p className="text-sm font-bold">{topHolder.uiAmount.toLocaleString()} ({topHolder.percentageOwned.toFixed(2)}%)</p>
        </div>
    )
}

export default GetTopHolders;