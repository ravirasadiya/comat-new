import { Keypair } from "@solana/web3.js";
import { NextResponse } from "next/server";
import bs58 from "bs58";

export const GET = async () => {
    const keypair = Keypair.generate();
    return NextResponse.json(bs58.encode(keypair.secretKey));
}