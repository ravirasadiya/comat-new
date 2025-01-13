import React, { useState } from 'react'

import Image from 'next/image';

import { Button, Card } from '@/components/ui';

import WalletAddress from '@/app/_components/wallet-address';

import ToolCard from '../tool-card';

import type { TokenLargestAccount } from '@/services/helius';

import type { ToolInvocation } from 'ai';
import type { TopHoldersResultBodyType, TopHoldersResultType } from '@/ai';
import { raydiumAuthorityAddress } from '@/services/raydium';

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

const TopHolders = ({ topHolders, percentageOwned }: TopHoldersResultBodyType) => {

    const [showAll, setShowAll] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <p className="text-md">
                {(percentageOwned * 100).toFixed(2)}% of the total supply is owned by the top 20 holders
            </p>
            <div className="flex flex-col gap-2">
                {topHolders.slice(0, showAll ? topHolders.length : 5).map((topHolder, index) => (
                    <TopHolder
                        key={topHolder.owner} 
                        topHolder={topHolder}
                        index={index}
                    />
                ))}
            </div>
            <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
            >
                {showAll ? "Show Less" : "Show All"}
            </Button>
        </div>
    )
}

const TopHolder = ({ topHolder, index }: { topHolder: (TokenLargestAccount & { percentageOwned: number, owner: string }), index: number }) => {
    return (
        <Card className="flex flex-row items-center gap-2 p-2">
            <p className="text-sm text-muted-foreground">
                {index + 1})
            </p>
            <div className="flex flex-col">
                {
                    topHolder.owner === raydiumAuthorityAddress ? (
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                src="/dexes/raydium.png"
                                alt="Raydium"
                                width={16}
                                height={16}
                            />
                            <p className="text-sm font-bold">
                                Raydium
                            </p>
                        </div>
                    ) : (
                        <WalletAddress 
                            address={topHolder.owner} 
                            className="text-sm font-bold"
                        />
                )}
                <p className="text-xs">{topHolder.uiAmount.toLocaleString()} ({topHolder.percentageOwned.toFixed(2)}%)</p>
            </div>
        </Card>
    )
}

export default GetTopHolders;