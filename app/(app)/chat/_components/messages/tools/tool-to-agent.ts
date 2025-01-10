import { KNOWLEDGE_AGENT_NAME, MARKET_AGENT_NAME, STAKING_AGENT_NAME, WALLET_AGENT_NAME, WORKER_GENERATOR_AGENT_NAME } from "@/ai/agents/names";
import { SOCIAL_AGENT_NAME } from "@/ai/agents/social/name";
import { TRADING_AGENT_NAME } from "@/ai/agents/trading/name";
import { IconName } from "@/types";

import { ToolInvocation } from "ai";

export const toolToAgent = {
    "staking": STAKING_AGENT_NAME,
    "wallet": WALLET_AGENT_NAME,
    "market": MARKET_AGENT_NAME,
    "knowledge": KNOWLEDGE_AGENT_NAME,
    "trading": TRADING_AGENT_NAME,
    "social": SOCIAL_AGENT_NAME,
    "workergenerator": WORKER_GENERATOR_AGENT_NAME
}

export const getAgentName = (tool: ToolInvocation) => {
    const toolParts = tool.toolName.split("-");
    const agentName = toolParts[0];
    return toolToAgent[agentName as keyof typeof toolToAgent] || "Unknown Agent";
}

export const getAgentIcon = (agentName: string): IconName => {
    switch(agentName) {
        case STAKING_AGENT_NAME:
            return "Beef";
        case WALLET_AGENT_NAME:
            return "Wallet";
        case MARKET_AGENT_NAME:
            return "ChartLine";
        case KNOWLEDGE_AGENT_NAME:
            return "Brain";
        case TRADING_AGENT_NAME:
            return "ChartCandlestick";
        case SOCIAL_AGENT_NAME:
            return "Twitter";
        case WORKER_GENERATOR_AGENT_NAME:
            return "Bot";
        default:
            return "Brain";
    }
}