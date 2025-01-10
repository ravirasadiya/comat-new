import { z } from "zod";

import { CoreTool, tool } from "ai";

import { getAllWorkerActions } from ".";

import type { WorkerAction, WorkerActionResult, WorkerActionSchemaAny } from "./actions";

export const workerTool = <TActionSchema extends WorkerActionSchemaAny, TResultBody>(
    action: WorkerAction<TActionSchema, TResultBody>, 
) => {
    if (!action.func) {
        return tool({
            description: action.description,
            parameters: action.argsSchema,
        });
    }
    const func = action.func;
    return tool({
        description: action.description,
        parameters: action.argsSchema,
        execute: async (args) => {
            const result = func.length === 2 
                ? await func({}, args)
                : await (func as ((args: z.infer<TActionSchema>) => Promise<WorkerActionResult<TResultBody>>))(args);
            return result;
        }
    });
}

export const workerTools = () => getAllWorkerActions().reduce((acc, action) => {
    acc[action.name] = workerTool(action);
    return acc;
}, {} as Record<string, CoreTool>);