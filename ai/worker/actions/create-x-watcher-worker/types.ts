import { z } from "zod";

import { WorkerActionResult } from "../worker-action";

import { XWatcherWorkerInputSchema } from "./input-schema";

export type XWatcherWorkerSchemaType = typeof XWatcherWorkerInputSchema;

export type XWatcherWorkerArgumentsType = z.infer<XWatcherWorkerSchemaType>;

export type XWatcherWorkerResultBodyType = {
    workerId: string;
    accountUrl: string;
    amount: number;
}; 

export type XWatcherWorkerResultType = WorkerActionResult<XWatcherWorkerResultBodyType>;