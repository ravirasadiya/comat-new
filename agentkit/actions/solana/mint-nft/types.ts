import { z } from "zod";
import { MintNFTInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type MintNFTSchemaType = typeof MintNFTInputSchema;

export type MintNFTArgumentsType = z.infer<MintNFTSchemaType>;

export type MintNFTResultBodyType = {
    mintAddress: string;
    name: string;
    uri: string;
    recipient: string;
} 

export type MintNFTResultType = SolanaActionResult<MintNFTResultBodyType>;