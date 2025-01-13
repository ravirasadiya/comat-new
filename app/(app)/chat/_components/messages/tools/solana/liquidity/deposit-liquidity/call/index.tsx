'use client'

import React from 'react'

import { usePool } from '@/hooks'

import type { SolanaDepositLiquidityArgumentsType } from '@/ai'
import { Card, Skeleton } from '@/components/ui'
import StandardPool from './standard-pool'
import { ApiV3PoolInfoStandardItem } from '@raydium-io/raydium-sdk-v2'
import { useSolanaWallets } from '@privy-io/react-auth'
import LogInButton from '@/app/(app)/_components/log-in-button'

interface Props {
    toolCallId: string,
    args: SolanaDepositLiquidityArgumentsType
}

const DepositLiquidityCall: React.FC<Props> = ({ toolCallId, args }) => {

    const { data: pool, isLoading: isPoolLoading } = usePool(args.poolId);

    const { wallets } = useSolanaWallets();

    if(!wallets[0]) {
        return (
            <div className="w-48">
                <LogInButton />
            </div>
        );
    }

    return (
        <Card className="w-full p-2">
            {
                isPoolLoading ? (
                    <Skeleton className="h-24 w-full" />
                ) : (
                    pool ? (
                        <StandardPool pool={pool as ApiV3PoolInfoStandardItem} wallet={wallets[0]} toolCallId={toolCallId} />
                    ) : (
                        <div>
                            <p>Pool not found</p>
                        </div>
                    )
                )
            }
        </Card>
    )
}

export default DepositLiquidityCall