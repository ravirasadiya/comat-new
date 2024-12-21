import { getAllCdpActions } from "../actions/cdp";

import { CdpAgentkit } from "../cdp_agentkit";

import { CoreTool } from "ai";
import { cdpTool } from "./cdp-tool";

export const tools = (agentkit: CdpAgentkit) => getAllCdpActions().reduce((acc, action) => {
    acc[action.name] = cdpTool(action, agentkit);
    return acc;
}, {} as Record<string, CoreTool>);