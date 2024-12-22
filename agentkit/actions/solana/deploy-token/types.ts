import { z } from "zod";
import { DeployTokenInputSchema } from "./input-schema";
import { SolanaActionResult } from "../../solana-action";

export type DeployTokenSchemaType = typeof DeployTokenInputSchema;

export type DeployTokenArgumentsType = z.infer<DeployTokenSchemaType>;

export type DeployTokenResultBodyType = {
    mintAddress: string;
    name: string;
    symbol: string;
    decimals: number;
} 

export type DeployTokenResultType = SolanaActionResult<DeployTokenResultBodyType>;