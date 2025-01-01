import { z } from "zod";

import { CoreTool, tool } from "ai";

import { getAllTwitterActions } from ".";

import type { TwitterAction, TwitterActionResult, TwitterActionSchemaAny } from "./actions";
import type { TwitterApi } from "twitter-api-v2";

export const twitterTool = <TActionSchema extends TwitterActionSchemaAny, TResultBody>(action: TwitterAction<TActionSchema, TResultBody>, twitterApi: TwitterApi) => tool({
    description: action.description,
    parameters: action.argsSchema,
    execute: async (args) => {
        const result = action.func.length === 2 
            ? await action.func(twitterApi, args)
            : await (action.func as ((args: z.infer<TActionSchema>) => Promise<TwitterActionResult<TResultBody>>))(args);
        return result;
    }
})

export const twitterTools = (twitterApi: TwitterApi) => getAllTwitterActions().reduce((acc, action) => {
    acc[action.name] = twitterTool(action, twitterApi);
    return acc;
}, {} as Record<string, CoreTool>);