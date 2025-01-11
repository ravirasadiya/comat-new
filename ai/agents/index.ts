import { marketAgent } from "./market";
import { stakingAgent } from "./staking";
import { walletAgent } from "./wallet";
import { knowledgeAgent } from "./knowledge";
import { tradingAgent } from "./trading";
import { socialAgent } from "./social";
import { tokenAnalysisAgent } from "./token-analysis";

export const agents = [
    walletAgent,
    stakingAgent,
    marketAgent,
    tradingAgent,
    knowledgeAgent,
    socialAgent,
    tokenAnalysisAgent
]