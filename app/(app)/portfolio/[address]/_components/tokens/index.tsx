import React from 'react'

import { Coins } from 'lucide-react';

import Decimal from 'decimal.js';

import {
    Table,
    TableHeader,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    Card
} from '@/components/ui'

import { Portfolio } from '@/services/birdeye';

interface Props {
    portfolio: Portfolio
}

const Tokens: React.FC<Props> = async ({ portfolio }) => {

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Coins className="w-4 h-4" />
                    <h2 className="text-lg font-bold">
                        Tokens
                    </h2>
                </div>
                <p>
                    ${portfolio.totalUsd.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                </p>
            </div>
            <Card className="p-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[200px]">Asset</TableHead>
                            <TableHead>Balance</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead className="text-right">Value</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="max-h-96 overflow-y-auto">
                        {
                            portfolio.items.filter((token) => Number(token.balance) > 0 && token.logoURI && token.symbol && token.priceUsd && token.valueUsd).map((token) => (
                                <TableRow key={token.address}>
                                    <TableCell className="font-medium flex gap-2 items-center">
                                        <img
                                            src={token.logoURI}
                                            alt={token.name}
                                            className="w-4 h-4 rounded-full"
                                        />
                                        <p>
                                            {token.symbol}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        {new Decimal(token.balance).div(10 ** token.decimals).toNumber().toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                                    </TableCell>
                                    <TableCell>
                                        ${token.priceUsd.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        ${token.valueUsd.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 })}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}

export default Tokens