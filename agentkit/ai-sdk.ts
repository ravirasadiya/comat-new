import { CoreTool, tool } from "ai";

import { CdpAgentkit } from "./cdp_agentkit";

import { CdpAction, CdpActionSchemaAny, getAllCdpActions } from "./actions/cdp";

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