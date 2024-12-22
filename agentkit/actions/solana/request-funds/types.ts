import { z } from "zod";
import { RequestFundsInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type RequestFundsSchemaType = typeof RequestFundsInputSchema;

export type RequestFundsArgumentsType = z.infer<RequestFundsSchemaType>;

export type RequestFundsResultBodyType = {
    network: string;
} 

export type RequestFundsResultType = SolanaActionResult<RequestFundsResultBodyType>;