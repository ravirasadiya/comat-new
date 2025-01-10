import { XWatcherWorkerAction } from "./create-x-watcher-worker";

import type { WorkerAction, WorkerActionSchemaAny } from "./worker-action";

export function getAllWorkerActions(): WorkerAction<WorkerActionSchemaAny, any>[] {
  return [
    new XWatcherWorkerAction()
  ];
}

export const WORKER_ACTIONS = getAllWorkerActions();

export * from './types';
export * from './worker-action';

export * from './create-x-watcher-worker';
export * from './create-copy-trader-worker';
