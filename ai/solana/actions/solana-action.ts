import { z } from "zod";

import { Connection } from "@solana/web3.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SolanaActionSchemaAny = z.ZodObject<any, any, any, any>;

export type SolanaActionResult<TBody> = {
    message: string;
    body?: TBody;
}

/**
 * Represents the base structure for CDP Actions.
 */
export interface SolanaAction<TActionSchema extends SolanaActionSchemaAny, TBody> {
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
  func?:
    | ((connection: Connection, args: z.infer<TActionSchema>) => Promise<SolanaActionResult<TBody>>)
    | ((args: z.infer<TActionSchema>) => Promise<SolanaActionResult<TBody>>)
}