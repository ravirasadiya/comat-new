import { z } from "zod";

import { DeployTokenInputSchema } from "./input-schema";

import type { CdpActionResult } from "@/agentkit";

export type DeployTokenSchemaType = typeof DeployTokenInputSchema;

export type DeployTokenArgumentsType = z.infer<DeployTokenSchemaType>;

export type DeployTokenResultBodyType = {
    transactionHash: string;
    contractAddress: string;
}

export type DeployTokenActionResultType = CdpActionResult<DeployTokenResultBodyType>; 