'use client'

import React from 'react'

import type { SolanaDepositLiquidityResultBodyType } from '@/ai'

interface Props {
    body: SolanaDepositLiquidityResultBodyType
}

const GetPoolsResult: React.FC<Props> = ({ body }) => {
    
    return (
        <p>
            Deposited liquidity into the pool!
        </p>
    )
}

export default GetPoolsResult;