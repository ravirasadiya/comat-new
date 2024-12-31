import { z } from "zod";

import { GetTrendingTokensInputSchema } from "./input-schema";
import { SolanaActionResult } from "../solana-action";
import { SolanaToken } from "@/types/solana/solana-token";

export type GetTrendingTokensSchemaType = typeof GetTrendingTokensInputSchema;

export type GetTrendingTokensArgumentsType = z.infer<GetTrendingTokensSchemaType>;

export type GetTrendingTokensResultBodyType = {
    tokens: SolanaToken[];
    prices: number[];
}; 

export type GetTrendingTokensResultType = SolanaActionResult<GetTrendingTokensResultBodyType>;