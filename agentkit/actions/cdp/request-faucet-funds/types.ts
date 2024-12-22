import { z } from "zod";
import { RequestFaucetFundsInputSchema } from "./input-schema";
import type { CdpActionResult } from "@/agentkit";

export type RequestFaucetFundsSchemaType = typeof RequestFaucetFundsInputSchema;

export type RequestFaucetFundsArgumentsType = z.infer<RequestFaucetFundsSchemaType>;

export type RequestFaucetFundsResultBodyType = {
  transactionLink: string;
};

export type RequestFaucetFundsActionResultType = CdpActionResult<RequestFaucetFundsResultBodyType>; 