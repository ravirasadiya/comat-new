'use client'

import React from 'react'

import { Card, Skeleton } from '@/components/ui'

import StandardPool from './standard-pool'

import { useRaydiumPool } from '@/hooks'

import type { SolanaDepositLiquidityArgumentsType } from '@/ai'
import type { ApiV3PoolInfoStandardItem } from '@raydium-io/raydium-sdk-v2'

interface Props {
    toolCallId: string,
    args: SolanaDepositLiquidityArgumentsType
}

const DepositLiquidityCall: React.FC<Props> = ({ toolCallId, args }) => {

    const { data: pool, isLoading: isPoolLoading } = useRaydiumPool(args.poolId);

    return (
        <Card className="w-full p-2">
            {
                (isPoolLoading && !pool) ? (
                    <Skeleton className="h-48 w-96" />
                ) : (
                    pool ? (
                        <StandardPool pool={pool as ApiV3PoolInfoStandardItem} toolCallId={toolCallId} />
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