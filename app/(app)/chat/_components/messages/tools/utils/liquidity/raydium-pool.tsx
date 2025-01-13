import React from "react";

import { PoolStats } from "./pool-stats";

import type { DexScreenerPair } from "@/services/dexscreener/types";
import type { ApiV3PoolInfoItem } from "@raydium-io/raydium-sdk-v2";
import { Separator } from "@/components/ui/separator";
import Address from "@/app/_components/address";

interface Props {
    pair: DexScreenerPair;
    pool: ApiV3PoolInfoItem;
}

const timeframes = ["day", "week", "month"] as const;

const RaydiumPool: React.FC<Props> = ({ pair, pool }) => {

    return (
        <PoolStats pair={pair}>
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold">Raydium Pool ({pool.type})</h2>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Liquidity</h3>
                    <div className="grid grid-cols-3 gap-2 w-full justify-between">
                        <div className="flex flex-col">
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">Burned</p>
                            <p className="text-sm font-medium">{(pool.burnPercent).toLocaleString()}%</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">Fee Rate</p>
                            <p className="text-sm font-medium">{(pool.feeRate * 100).toLocaleString()}%</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs text-neutral-600 dark:text-neutral-400">ID</p>
                            <Address 
                                address={pool.id}
                                className="text-sm font-medium p-0"
                            />
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">APR</h3>
                    <div className="flex gap-2 w-full justify-between">
                        {timeframes.map((timeframe) => (
                            <div key={timeframe} className="flex flex-col w-full">
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">{timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}</p>
                                <p className="text-sm font-bold">{(pool[timeframe].apr).toLocaleString()}%</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PoolStats>
    )
}

export default RaydiumPool;