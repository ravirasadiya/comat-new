import { X_WATCHER_WORKER_NAME } from "./name";
import { X_WATCHER_WORKER_PROMPT } from "./prompt";
import { XWatcherWorkerInputSchema } from "./input-schema";
import { XWatcherWorkerResultBodyType } from "./types";

import { WorkerAction } from "../worker-action";

export class XWatcherWorkerAction implements WorkerAction<typeof XWatcherWorkerInputSchema, XWatcherWorkerResultBodyType> {
  public name = X_WATCHER_WORKER_NAME;
  public description = X_WATCHER_WORKER_PROMPT;
  public argsSchema = XWatcherWorkerInputSchema;
} 