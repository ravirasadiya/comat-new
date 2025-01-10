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
                    ? `Fetched Top Holders`
                    : `Failed to fetch top holders`,
                body: (result: TopHoldersResultType) => result.body 
                    ? <TopHolders topHolders={result.body.topHolders} />
                    :  "No top holders found"
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
        />
    )
}

const TopHolders = ({ topHolders }: { topHolders: TokenLargestAccount[] }) => {

    const [showAll, setShowAll] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            {topHolders.slice(0, showAll ? topHolders.length : 5).map((topHolder: TokenLargestAccount, index: number) => (
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

const TopHolder = ({ topHolder, index }: { topHolder: TokenLargestAccount, index: number }) => {
    return (
        <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
                {index + 1})
            </p>
            <Address address={topHolder.address} />
            <p className="text-sm font-bold">{topHolder.uiAmount.toLocaleString()}</p>
        </div>
    )
}

export default GetTopHolders;