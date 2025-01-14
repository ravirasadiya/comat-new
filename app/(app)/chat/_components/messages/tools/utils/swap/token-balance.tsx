'use client'

import { Button, Skeleton } from '@/components/ui'
import { useTokenBalance } from '@/hooks'
import React from 'react'

interface Props {
    address: string
    tokenAddress: string
    tokenSymbol: string,
    setAmount?: (amount: string) => void,
}

const TokenBalance: React.FC<Props> = ({ address, tokenAddress, tokenSymbol, setAmount }) => {

    const { balance, isLoading } = useTokenBalance(tokenAddress, address);

    if (isLoading) return <Skeleton className="w-16 h-4" />;

    return (
        <div className="flex items-center gap-2">
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {balance} {tokenSymbol}
            </p>
            {
                setAmount && (
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            className="text-xs px-2 py-1 h-fit w-fit"
                            onClick={() => setAmount((balance / 2).toString())}
                        >
                            Half
                        </Button>
                        <Button
                            variant="outline"
                            className="text-xs px-2 py-1 h-fit w-fit"
                            onClick={() => setAmount(balance.toString())}
                        >
                            Max
                        </Button>
                    </div>
                )
            }
        </div>
    )
}

export default TokenBalance