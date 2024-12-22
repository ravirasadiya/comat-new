import { z } from "zod";

import type { TwitterApi } from "twitter-api-v2";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TwitterActionSchemaAny = z.ZodObject<any, any, any, any>;

export type TwitterActionResult<TBody> = {
    message: string;
    body?: TBody;
}

/**
 * Represents the base structure for CDP Actions.
 */
export interface TwitterAction<TActionSchema extends TwitterActionSchemaAny, TBody> {
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
    | ((twitterApi: TwitterApi, args: z.infer<TActionSchema>) => Promise<TwitterActionResult<TBody>>)
    | ((args: z.infer<TActionSchema>) => Promise<TwitterActionResult<TBody>>)
}