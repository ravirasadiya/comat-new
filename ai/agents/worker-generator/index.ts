import { WORKER_GENERATOR_AGENT_CAPABILITIES } from "./capabilities";
import { WORKER_GENERATOR_AGENT_DESCRIPTION } from "./description";
import { WORKER_GENERATOR_AGENT_NAME } from "./name";
import { WORKER_GENERATOR_TOOLS } from "./tools";

import type { Agent } from "@/ai/agent";

export const workerGeneratorAgent: Agent = {
    name: WORKER_GENERATOR_AGENT_NAME,
    slug: "worker-generator",
    systemPrompt: WORKER_GENERATOR_AGENT_DESCRIPTION,
    capabilities: WORKER_GENERATOR_AGENT_CAPABILITIES,
    tools: WORKER_GENERATOR_TOOLS
}