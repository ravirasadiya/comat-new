import { BaseAction, BaseActionResult, BaseActionSchemaAny } from "@/ai/base-action";

export type WorkerActionSchemaAny = BaseActionSchemaAny;
export type WorkerActionResult<TBody> = BaseActionResult<TBody>;

/**
 * Represents the structure for Twitter Actions.
 */
export interface WorkerAction<TActionSchema extends WorkerActionSchemaAny, TBody> extends BaseAction<TActionSchema, TBody, {}> {}