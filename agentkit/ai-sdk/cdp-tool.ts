import { tool } from "ai";
import { CdpAction, CdpActionSchemaAny } from "../actions/cdp";
import { CdpAgentkit } from "../cdp_agentkit";

export const cdpTool = <TActionSchema extends CdpActionSchemaAny>(action: CdpAction<TActionSchema>, agentkit: CdpAgentkit) => tool({
    description: action.description,
    parameters: action.argsSchema,
    execute: async (args) => {
        const result = await agentkit.run(action, args);
        return result;
    }
})