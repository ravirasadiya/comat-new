'use client'

import React from 'react'

interface Props {
    symbol: string,
    balance: number,
    logoURI: string,
    name: string,
}

const TokenBalance: React.FC<Props> = ({ symbol, balance, logoURI, name }) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <img src={logoURI} alt={name} className="w-8 h-8 rounded-full" />
            <div className="flex flex-col">
                <p className="text-xs text-neutral-600 dark:text-neutral-400">{name} ({symbol})</p>
                <p className="text-md font-bold">{balance.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
            </div>
        </div>
    )
}

export default TokenBalance