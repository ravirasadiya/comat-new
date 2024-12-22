import { z } from "zod";
import { GetDomainInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type GetDomainSchemaType = typeof GetDomainInputSchema;

export type GetDomainArgumentsType = z.infer<GetDomainSchemaType>;

export type GetDomainResultBodyType = {
    domain: string | null;
    account: string;
} 

export type GetDomainResultType = SolanaActionResult<GetDomainResultBodyType>;