import { NextRequest } from "next/server";

import { streamText } from "ai";

import { openai } from "@ai-sdk/openai";

import { solanaTools, twitterTools } from "@/agentkit/ai-sdk";

import { getTwitterClient } from "@/agentkit/actions/twitter/client";
import { SolanaAgentKit } from "solana-agent-kit";


export const POST = async (req: NextRequest) => {

    const { messages, solanaPrivateKey } = await req.json();

    const result = streamText({
        model: openai("gpt-4o-mini"),
        tools: {
            ...solanaTools(new SolanaAgentKit(solanaPrivateKey, undefined, process.env.OPENAI_API_KEY!)),
            ...twitterTools(getTwitterClient())
        },
        messages,
        system: "You are a swarm of helpful agents called The Hive. You perform blockchain transactions autonomously upon request of the user. You can use tools to perform transactions. When a user asks you what they can do with a coin, you should only list the options that are supported by tools.",
    })

    return result.toDataStreamResponse();
}