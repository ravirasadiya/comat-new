"use client";

import React, { useState } from 'react'

import Link from 'next/link';

import { ArrowUpRight, Copy } from 'lucide-react';

import { Button, Skeleton, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

import { useTokenAccounts } from '@/hooks';

import { cn } from '@/lib/utils';
import TokenBalance from './token-balance';

interface Props {
    address: string;
    className?: string;
}

const WalletAddress: React.FC<Props> = ({ address, className }) => {
    
    const { data: tokenAccounts, isLoading: tokenAccountsLoading } = useTokenAccounts(address);

    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <p 
                        className={cn("text-sm text-muted-foreground cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md w-fit px-1", className)}
                    >
                        {`${address.slice(0, 4)}...${address.slice(-4)}`}
                    </p>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="flex flex-col gap-2">
                    <h3 className="text-sm font-bold">
                        Balances
                    </h3>
                    <div>
                        
                        {
                            tokenAccountsLoading ? (
                                <Skeleton className="h-8 w-full" />
                            ) : (
                                <div className="flex flex-col gap-2 max-h-48 overflow-y-auto">
                                    {tokenAccounts?.map((account) => (
                                        <TokenBalance 
                                            key={account.token_data.id}
                                            balance={account.amount / (10 ** account.token_data.decimals)}
                                            logoURI={account.token_data.logoURI}
                                            name={account.token_data.name}
                                            symbol={account.token_data.symbol}
                                        />
                                    ))}
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-row gap-2">
                        <Link href={`https://solscan.io/address/${address}`} target="_blank">
                            <Button variant="outline" size="sm">
                                Solscan <ArrowUpRight className="size-4" />
                            </Button>
                        </Link>
                        <Button variant="outline" size="sm" onClick={handleCopy}>
                            {copied ? "Copied" : "Copy"} <Copy className="size-4" />
                        </Button>
                    </div>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default WalletAddress;