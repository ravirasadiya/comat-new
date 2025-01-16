'use client'

import React from 'react'

import type { SolanaDepositLiquidityResultBodyType } from '@/ai'

interface Props {
    body: SolanaDepositLiquidityResultBodyType
}

const DepositLiquidityResult: React.FC<Props> = ({ body }) => {
    
    return (
        <p>
            Deposited liquidity into the pool!
        </p>
    )
}

export default DepositLiquidityResult;