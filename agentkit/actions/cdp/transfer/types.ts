import { z } from "zod";
import { TransferInput } from "./input-schema";
import type { CdpActionResult } from "@/agentkit";

export type TransferSchemaType = typeof TransferInput;

export type TransferArgumentsType = z.infer<TransferSchemaType>;

export type TransferResultBodyType = {
  transactionHash: string;
};

export type TransferActionResultType = CdpActionResult<TransferResultBodyType>; 