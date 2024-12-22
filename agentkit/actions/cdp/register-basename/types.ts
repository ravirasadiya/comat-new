import { z } from "zod";
import { RegisterBasenameInputSchema } from "./input-schema";
import type { CdpActionResult } from "@/agentkit";

export type RegisterBasenameSchemaType = typeof RegisterBasenameInputSchema;

export type RegisterBasenameArgumentsType = z.infer<RegisterBasenameSchemaType>;

export type RegisterBasenameResultBodyType = {
  basename: string;
  transactionHash: string;
};

export type RegisterBasenameActionResultType = CdpActionResult<RegisterBasenameResultBodyType>; 