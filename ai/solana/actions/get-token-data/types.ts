import { z } from "zod";

import { GetTokenDataInputSchema } from "./input-schema";
import { SolanaActionResult } from "../solana-action";
import { JupiterTokenData } from "solana-agent-kit";
import { DexScreenerPair } from "@/types";
import { RaydiumPoolInfo } from "@/services/raydium/types";

export type GetTokenDataSchemaType = typeof GetTokenDataInputSchema;

export type GetTokenDataArgumentsType = z.infer<GetTokenDataSchemaType>;

export type GetTokenDataResultBodyType = {
    token: JupiterTokenData;
    pair: DexScreenerPair;
    pool: RaydiumPoolInfo;
}; 

export type GetTokenDataResultType = SolanaActionResult<GetTokenDataResultBodyType>;