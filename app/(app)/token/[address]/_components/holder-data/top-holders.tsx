import React from "react";

import Image from "next/image";

import WalletAddress from "@/app/_components/wallet-address";

import { Connection, PublicKey } from "@solana/web3.js";

import { getTokenHolders } from "@/services/birdeye";
import { getStreamsByMint } from "@/services/streamflow";

import { knownAddresses } from "@/lib/known-addresses";

import type { TokenHolder } from "@/services/birdeye/types";

interface Props {
    mint: string;
}

const TopHolders: React.FC<Props> = async ({ mint }) => {

    const { items: topHolders } = await getTokenHolders({
        address: mint,
        offset: 0,
        limit: 10
    });

    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);
    const mintInfo = await connection.getTokenSupply(new PublicKey(mint));
    const totalSupply = Number(BigInt(mintInfo.value.amount) / BigInt(Math.pow(10, mintInfo.value.decimals)));

    const streamflowAccounts = await getStreamsByMint(mint);

    const knownAddressesWithStreamflow = {
        ...knownAddresses,
        ...streamflowAccounts.reduce((acc, account) => {
            acc[account.account.escrowTokens] = {
                name: "Streamflow Vault",
                logo: "/vesting/streamflow.png"
            }
            return acc;
        }, {} as Record<string, { name: string, logo: string }>)
    }

    return (
        <div className="flex flex-col gap-2 h-full max-h-full">
            <h2 className="text-lg font-bold">Top Holders</h2>
            <div className="flex flex-col gap-2 flex-1 h-0 overflow-y-auto">
                {topHolders.map((topHolder, index) => (
                    <TopHolder
                        key={topHolder.owner} 
                        topHolder={topHolder}
                        percentageOwned={topHolder.ui_amount / totalSupply * 100}
                        index={index}
                        knownAddresses={knownAddressesWithStreamflow}
                    />
                ))}
            </div>
        </div>
    )
}

interface TopHolderProps {
    topHolder: TokenHolder;
    percentageOwned: number;
    index: number;
    knownAddresses: Record<string, { name: string, logo: string }>;
}

const TopHolder = ({ topHolder, percentageOwned, index, knownAddresses }: TopHolderProps) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <p className="text-sm text-muted-foreground">
                {index + 1})
            </p>
            <div className="flex flex-col">
                {
                    knownAddresses[topHolder.owner] ? (
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                src={knownAddresses[topHolder.owner].logo}
                                alt={knownAddresses[topHolder.owner].name}
                                width={16}
                                height={16}
                            />
                            <p className="text-sm font-bold">
                                {knownAddresses[topHolder.owner].name}
                            </p>
                        </div>
                    ) : (
                        <WalletAddress 
                            address={topHolder.owner} 
                            className="text-sm font-bold"
                        />
                )}
                <p className="text-xs">{topHolder.ui_amount.toLocaleString()} ({percentageOwned.toFixed(2)}%)</p>
            </div>
        </div>
    )
}

export default TopHolders;