import { COPY_TRADER_WORKER_NAME, X_WATCHER_WORKER_NAME } from "@/ai/action-names";

import { XWatcherWorkerAction, CopyTraderWorkerAction } from "@/ai/worker/actions";
import { workerTool } from "@/ai/worker";

export const WORKER_GENERATOR_TOOLS = {
    [`workergenerator-${X_WATCHER_WORKER_NAME}`]: workerTool(new XWatcherWorkerAction()),
    [`workergenerator-${COPY_TRADER_WORKER_NAME}`]: workerTool(new CopyTraderWorkerAction()),
}