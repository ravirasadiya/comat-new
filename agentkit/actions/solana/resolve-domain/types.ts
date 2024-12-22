import { z } from "zod";
import { ResolveDomainInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type ResolveDomainSchemaType = typeof ResolveDomainInputSchema;

export type ResolveDomainArgumentsType = z.infer<ResolveDomainSchemaType>;

export type ResolveDomainResultBodyType = {
    publicKey: string;
    domain: string;
} 

export type ResolveDomainResultType = SolanaActionResult<ResolveDomainResultBodyType>;