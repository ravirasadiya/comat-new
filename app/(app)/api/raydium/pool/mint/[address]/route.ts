import { NextRequest, NextResponse } from "next/server";

import { getPoolFromLpMint } from "@/services/raydium";

export const GET = async (request: NextRequest, { params }: { params: { address: string } }) => {
    const address = params.address;
    
    const pool = await getPoolFromLpMint(address);
    
    return NextResponse.json(pool);
}