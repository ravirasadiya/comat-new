import { Raydium } from "@raydium-io/raydium-sdk-v2";
import { Connection } from "@solana/web3.js";

export const raydiumClient = Raydium.load({
    connection: new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!),
})