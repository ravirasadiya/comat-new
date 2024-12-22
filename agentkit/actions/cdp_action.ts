import { z } from "zod";

import { Wallet } from "@coinbase/coinbase-sdk";
import { SolanaAgentKit } from "solana-agent-kit";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type CdpActionSchemaAny = z.ZodObject<any, any, any, any>;

export type CdpActionResult<TBody> = {
    message: string;
    body?: TBody;
}

/**
 * Represents the base structure for CDP Actions.
 */
export interface CdpAction<TActionSchema extends CdpActionSchemaAny, TBody> {
  /**
   * The name of the action
   */
  name: string;

  /**
   * A description of what the action does
   */
  description: string;

  /**
   * Schema for validating action arguments
   */
  argsSchema: TActionSchema;

  /**
   * The function to execute for this action
   */
  func:
    | ((wallet: Wallet, args: z.infer<TActionSchema>) => Promise<CdpActionResult<TBody>>)
    | ((args: z.infer<TActionSchema>) => Promise<CdpActionResult<TBody>>)
}