import { z } from "zod";

import { DeployNftInputSchema } from "./input-schema";

import type { CdpActionResult } from "@/agentkit";

export type DeployNftSchemaType = typeof DeployNftInputSchema;

export type DeployNftArgumentsType = z.infer<DeployNftSchemaType>;

export type DeployNftResultBodyType = {
    transactionHash: string;
    contractAddress: string;
}

export type DeployNftActionResultType = CdpActionResult<DeployNftResultBodyType>;
