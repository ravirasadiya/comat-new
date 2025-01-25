import React from "react";

import { Card } from "@/components/ui";

import Header from "./_components/header";
import TokenChart from "../../_components/token/chart";

import MarketStats from "./_components/market-stats";
import { TopHolders, TopTraders, BubbleMap } from "./_components/holder-data";
import { AccountTweets } from "./_components/tweets";
import AccountMentions from "./_components/tweets/account-mentions";

const TokenPage = async ({ params }: { params: Promise<{ address: string }> }) => {

    const { address } = await params;

    return (
        <div className="flex flex-col gap-2 h-full max-h-full overflow-y-auto">
            <Header address={address} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                <Card className="p-4 md:col-span-3">
                    <TokenChart mint={address} height={300} />
                </Card>
                <Card className="p-4 md:col-span-2">
                    <MarketStats address={address} />
                </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <Card className="p-4 h-full max-h-[300px]">
                    <TopHolders mint={address} />
                </Card>
                {/* <Card className="p-4 h-full max-h-[300px]">
                    <TopTraders address={address} />
                </Card>
                <Card className="p-4 h-full max-h-[300px]">
                    <BubbleMap address={address} />
                </Card> */}
            </div>
            {/* {
                tokenOverview.extensions.twitter && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <Card className="p-4 h-full max-h-[300px]">
                            <AccountTweets username={tokenOverview.extensions.twitter.split('/').pop()!} />
                        </Card>
                        <Card className="p-4 h-full max-h-[300px]">
                            <AccountMentions username={tokenOverview.extensions.twitter.split('/').pop()!} />
                        </Card>
                    </div>
                )
            } */}
        </div>
    )
}

export default TokenPage;