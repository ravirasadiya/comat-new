import React from "react";

import Image from "next/image";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui";

import { getTopTradersByToken } from "@/services/birdeye";

import WalletAddress from "@/app/_components/wallet-address";

import { knownAddresses } from "@/lib/known-addresses";
import BuySell from "@/app/(app)/_components/buy-sell";

interface Props {
    address: string;
}

const TopTokenTraders: React.FC<Props> = async ({ address }) => {

    const { items: topTraders } = await getTopTradersByToken({
        address,
        offset: 0,
        limit: 10
    });

    return (
        <div className="flex flex-col gap-2 w-full h-full max-h-full overflow-hidden">
            <h2 className="text-lg font-bold">Top Traders (24hr)</h2>
            <Table className="text-center flex-1 h-0 overflow-hidden">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-8 text-center">Rank</TableHead>
                        <TableHead className="text-center">Trader</TableHead>
                        <TableHead className="text-center">Trades</TableHead>
                        <TableHead className="text-center">Volume</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="h-0 overflow-y-auto no-scrollbar">
                    {topTraders.map((trader, index) => (
                        <TableRow key={trader.owner}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="">
                                {knownAddresses[trader.owner] ? (
                                    <div className="flex flex-row items-center gap-2">
                                        <Image
                                            src={knownAddresses[trader.owner].logo}
                                            alt={knownAddresses[trader.owner].name}
                                            width={16}
                                            height={16}
                                        />
                                        <span className="font-medium">
                                            {knownAddresses[trader.owner].name}
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <WalletAddress 
                                            address={trader.owner} 
                                            className="font-medium"
                                        />
                                    </div>
                                )}
                            </TableCell>
                            <TableCell className="">
                                <BuySell
                                    buy={trader.tradeBuy}
                                    sell={trader.tradeSell}
                                    buyLabel="Buy"
                                    sellLabel="Sell"
                                />
                            </TableCell>
                            <TableCell>
                                <BuySell
                                    buy={trader.volumeBuy}
                                    sell={trader.volumeSell}
                                    buyLabel="Buy"
                                    sellLabel="Sell"
                                    prefix="$"
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default TopTokenTraders;