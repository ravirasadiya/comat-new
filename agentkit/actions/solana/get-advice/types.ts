import { z } from "zod";

import { GetSolanaAdviceInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type GetSolanaAdviceSchemaType = typeof GetSolanaAdviceInputSchema;

export type GetSolanaAdviceArgumentsType = z.infer<GetSolanaAdviceSchemaType>;

export type GetSolanaAdviceResultBodyType = {
    advice: string;
    buy: boolean;
    tokenSymbol: string;
}; 

export type GetSolanaAdviceResultType = SolanaActionResult<GetSolanaAdviceResultBodyType>;