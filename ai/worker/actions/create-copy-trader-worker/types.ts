import { z } from "zod";

import { WorkerActionResult } from "../worker-action";

import { CopyTraderWorkerInputSchema } from "./input-schema";

export type CopyTraderWorkerSchemaType = typeof CopyTraderWorkerInputSchema;

export type CopyTraderWorkerArgumentsType = z.infer<CopyTraderWorkerSchemaType>;

export type CopyTraderWorkerResultBodyType = {
    workerId: string;
    accountAddress: string;
    amount: number;
    threshold: number;
    percentageGain: number;
}; 

export type CopyTraderWorkerResultType = WorkerActionResult<CopyTraderWorkerResultBodyType>;
