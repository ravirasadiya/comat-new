import { CoreTool, tool } from "ai";

import { CdpAgentkit } from "./cdp_agentkit";

import { getAllCdpActions, CdpAction, CdpActionSchemaAny } from "./actions";
import { SolanaAction } from "./actions/solana-action";
import { SolanaActionSchemaAny } from "./actions/solana-action";
import { SolanaAgentKit } from "solana-agent-kit";
import { getAllSolanaActions } from "./actions/solana";
import { TwitterAction } from "./actions/twitter/twitter-action";
import { getAllTwitterActions } from "./actions/twitter";
import { TwitterActionSchemaAny } from "./actions/twitter/twitter-action";
import type { TwitterApi } from "twitter-api-v2";

export const cdpTool = <TActionSchema extends CdpActionSchemaAny, TResultBody>(action: CdpAction<TActionSchema, TResultBody>, agentkit: CdpAgentkit) => tool({
    description: action.description,
    parameters: action.argsSchema,
    execute: async (args) => {
        const result = await agentkit.run(action, args);
        return result;
    }
})

export const cdpTools = (agentkit: CdpAgentkit) => getAllCdpActions().reduce((acc, action) => {
    acc[action.name] = cdpTool(action, agentkit);
    return acc;
}, {} as Record<string, CoreTool>);

export const solanaTool = <TActionSchema extends SolanaActionSchemaAny, TResultBody>(action: SolanaAction<TActionSchema, TResultBody>, agentkit: SolanaAgentKit) => {
    if (!action.func) {
        return tool({
            description: action.description,
            parameters: action.argsSchema,
        });
    }
    return tool({
        description: action.description,
        parameters: action.argsSchema,
        execute: async (args) => {
            const result = await action.func!(agentkit, args);
            return result;
        }
    });
}

export const solanaTools = (agentkit: SolanaAgentKit) => getAllSolanaActions().reduce((acc, action) => {
    acc[action.name] = solanaTool(action, agentkit);
    return acc;
}, {} as Record<string, CoreTool>);

export const twitterTool = <TActionSchema extends TwitterActionSchemaAny, TResultBody>(action: TwitterAction<TActionSchema, TResultBody>, twitterApi: TwitterApi) => tool({
    description: action.description,
    parameters: action.argsSchema,
    execute: async (args) => {
        const result = await action.func(twitterApi, args);
        return result;
    }
})

export const twitterTools = (twitterApi: TwitterApi) => getAllTwitterActions().reduce((acc, action) => {
    acc[action.name] = twitterTool(action, twitterApi);
    return acc;
}, {} as Record<string, CoreTool>);