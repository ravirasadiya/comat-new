import { COPY_TRADER_WORKER_NAME } from "./name";
import { COPY_TRADER_WORKER_PROMPT } from "./prompt";
import { CopyTraderWorkerInputSchema } from "./input-schema";
import { CopyTraderWorkerResultBodyType } from "./types";

import { WorkerAction } from "../worker-action";

export class CopyTraderWorkerAction implements WorkerAction<typeof CopyTraderWorkerInputSchema, CopyTraderWorkerResultBodyType> {
  public name = COPY_TRADER_WORKER_NAME;
  public description = COPY_TRADER_WORKER_PROMPT;
  public argsSchema = CopyTraderWorkerInputSchema;
} 