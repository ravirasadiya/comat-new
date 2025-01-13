import { NextRequest, NextResponse } from "next/server";

import { getTokenPairsFromAddress } from "@/services/dexscreener";
import { getRaydiumPoolById } from "@/services/raydium";

export const GET = async (request: NextRequest, { params }: { params: Promise<{ mintAddress: string }> }) => {
    const { mintAddress } = await params;

    const pairs = await getTokenPairsFromAddress(mintAddress);

    const pools = await Promise.all(pairs.map(async (pair) => {
        if(pair.dexId === "raydium") {
            return await getRaydiumPoolById(pair.pairAddress);
        } else if (pair.dexId === "orca") {
            return null;
        } else if (pair.dexId === "meteora") {
            return null;
        } else {
            return null;
        }
    }));

    return NextResponse.json({
        pairs,
        pools,
    });
}