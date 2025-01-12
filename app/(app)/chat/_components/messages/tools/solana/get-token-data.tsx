import React from 'react'

import { Button } from '@/components/ui';

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { GetTokenDataResultType } from '@/ai';
import type { JupiterTokenData } from 'solana-agent-kit';
import { DexScreenerPair } from '@/types';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Address from '@/app/_components/address';
import { RaydiumPoolInfo } from '@/services/raydium/types';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const GetTokenData: React.FC<Props> = ({ tool, prevToolAgent }) => {

    return (
        <ToolCard 
            tool={tool}
            loadingText={`Getting Token Data...`}
            result={{
                heading: (result: GetTokenDataResultType) => result.body 
                    ? `Fetched ${result.body.token.symbol || "Token"} Data`
                    : `Failed to fetch token data`,
                body: (result: GetTokenDataResultType) => result.body 
                    ? <TokenCard 
                        token={result.body.token} 
                        pair={result.body.pair} 
                        pool={result.body.pool}
                    />
                    :  "No token data found"
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
        />
    )
}

const TokenCard = ({ token, pair, pool }: { token: JupiterTokenData, pair: DexScreenerPair, pool: RaydiumPoolInfo }) => {

    return (
        <div className="flex flex-col gap-2 min-w-[300px]">
            <div className="flex items-center gap-2">
                <img 
                    src={token.logoURI} 
                    alt={token.name} 
                    className="w-10 h-10 rounded-full" 
                />
                <div className="flex flex-col">
                    <div className="flex gap-1">
                        <h1 className="text-xl font-bold">{token.name} ({token.symbol})</h1>
                        <Address address={token.address} />
                    </div>
                    <p className="text-sm font-semibold flex items-center gap-1">
                        ${pair.priceUsd} 
                        {
                            pair.priceChange && (
                                <span 
                                    className={cn(
                                        "text-xs",
                                        pair.priceChange.h24 > 0 ? "text-green-500" : "text-red-500"
                                    )}
                                >
                                    {pair.priceChange ? `(${pair.priceChange.h24 > 0 ? "+" : ""}${pair.priceChange.h24}%)` : ""}
                                </span>
                            )
                        }
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 justify-between">
                    <h2 className="text-lg font-bold">DEX Stats</h2>
                    <Link href={pair.url} target="_blank">
                        <Button 
                            variant="ghost"
                            size="sm"
                        >
                            View on DexScreener <ArrowUpRightIcon className="w-4 h-4" />
                        </Button>
                    </Link>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        pair.volume && (
                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold">Volume</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">24h</h4>
                                        <p className="text-sm font-medium">${pair.volume?.h24.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">1h</h4>
                                        <p className="text-sm font-medium">${pair.volume?.h1.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">5m</h4>
                                        <p className="text-sm font-medium">${pair.volume?.m5.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        pair.txns && (
                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold">Transactions</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">24h</h4>
                                        <p className="text-sm font-medium">{pair.txns?.h24.buys.toLocaleString()} Buys</p>
                                        <p className="text-sm font-medium">{pair.txns?.h24.sells.toLocaleString()} Sells</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">1h</h4>
                                        <p className="text-sm font-medium">{pair.txns?.h1.buys.toLocaleString()} Buys</p>
                                        <p className="text-sm font-medium">{pair.txns?.h1.sells.toLocaleString()} Sells</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">5m</h4>
                                        <p className="text-sm font-medium">{pair.txns?.m5.buys.toLocaleString()} Buys</p>
                                        <p className="text-sm font-medium">{pair.txns?.m5.sells.toLocaleString()} Sells</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {
                        pair.liquidity && (
                            <div className="flex flex-col gap-2">
                                <h3 className="text-md font-semibold">Liquidity</h3>
                                <p className="text-sm font-medium">${pair.liquidity?.usd.toLocaleString()} ({pool.burnPercent}% Burned)</p>
                                <h4 className="text-xs font-semibold">LP APR</h4>
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">Day</h4>
                                        <p className="text-sm font-medium">{(pool.day.apr / 100).toLocaleString()}%</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">Week</h4>
                                        <p className="text-sm font-medium">{(pool.week.apr / 100).toLocaleString()}%</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs text-muted-foreground">Month</h4>
                                        <p className="text-sm font-medium">{(pool.month.apr / 100).toLocaleString()}%</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold">Websites</h3>
                        {
                            pair.info ? (
                                <div className="flex flex-col gap-2">
                                    {
                                        pair.info.websites?.map((website) => (
                                            <Link 
                                                href={website.url} 
                                                target="_blank" 
                                                className="text-sm text-brand-600 hover:text-primary" 
                                                key={website.url}
                                            >
                                                {website.url}
                                            </Link>
                                        ))
                                    }
                                </div>
                            ) : (
                                <p>No links found</p>
                            )
                        }
                        {
                            pair.info?.socials && (
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-md font-semibold">Socials</h3>
                                    {
                                        pair.info.socials?.map((social) => (
                                            <p 
                                                key={social.url}
                                                className="text-sm text-muted-foreground"
                                            >
                                                {social.type[0].toUpperCase() + social.type.slice(1)}: <Link href={social.url} target="_blank" className="text-brand-600 hover:text-primary">{social.url}</Link>
                                            </p>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetTokenData;