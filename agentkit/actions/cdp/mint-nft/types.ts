import { z } from "zod";

import { MintNftInputSchema } from "./input-schema";

import type { CdpActionResult } from "@/agentkit";

export type MintNftSchemaType = typeof MintNftInputSchema;

export type MintNftArgumentsType = z.infer<MintNftSchemaType>;

export type MintNftResultBodyType = {
    transactionHash: string;
}

export type MintNftActionResultType = CdpActionResult<MintNftResultBodyType>; 