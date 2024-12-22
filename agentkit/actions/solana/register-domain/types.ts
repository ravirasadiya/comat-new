import { z } from "zod";
import { RegisterDomainInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type RegisterDomainSchemaType = typeof RegisterDomainInputSchema;

export type RegisterDomainArgumentsType = z.infer<RegisterDomainSchemaType>;

export type RegisterDomainResultBodyType = {
    transaction: string;
    domain: string;
    spaceKB: number;
} 

export type RegisterDomainResultType = SolanaActionResult<RegisterDomainResultBodyType>;