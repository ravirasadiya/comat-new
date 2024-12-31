import { z } from "zod";
import { TradeInputSchema } from "./input-schema";
import { SolanaActionResult } from "../solana-action";

export type TradeSchemaType = typeof TradeInputSchema;

export type TradeArgumentsType = z.infer<TradeSchemaType>;

export type TradeResultBodyType = {
    transaction: string;
    inputAmount: number;
    inputToken: string;
    outputToken: string;
} 

export type TradeResultType = SolanaActionResult<TradeResultBodyType>;