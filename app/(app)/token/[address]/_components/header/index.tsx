import React from 'react'

import { Card } from '@/components/ui'

import Address from '@/app/_components/address'

import Links from './token-links'

import type { TokenOverview } from '@/services/birdeye'

interface Props {
    token: TokenOverview
}

const Header: React.FC<Props> = ({ token }) => {
    return (
        <div className="p-2 flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-center gap-2">
                <img 
                    src={token.logoURI} 
                    alt={token.name} 
                    className="w-10 h-10 rounded-full" 
                />
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                        <h1 className="text-xl font-bold">{token.name} ({token.symbol})</h1>
                        <Address address={token.address} />
                    </div>
                </div>
            </div>
            <Links extensions={token.extensions} />
        </div>
    )
}

export default Header