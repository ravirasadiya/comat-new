import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { getDeploymentTransaction } from "@/lib/solana/get-deployment-transaction";

interface Params {
    address: string;
}

export const GET = async (request: NextRequest, { params }: { params: Promise<Params> }) => {
    const address = (await params).address;
    const transaction = await getDeploymentTransaction(address);
    return NextResponse.json(transaction);
}