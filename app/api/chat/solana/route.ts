import { NextRequest } from "next/server";

import { streamText } from "ai";

import { openai } from "@ai-sdk/openai";

import { solanaTools, twitterTools } from "@/agentkit/ai-sdk";
import { SolanaAgentKit } from "@/agentkit";

import { getTwitterClient } from "@/agentkit/actions/twitter/client";


export const POST = async (req: NextRequest) => {

    const { messages } = await req.json();

    const result = streamText({
        model: openai("gpt-4o-mini"),
        tools: {
            ...solanaTools(SolanaAgentKit),
            ...twitterTools(getTwitterClient())
        },
        messages,
        system: "You are a helpful on-chain agent that can act on the user's behalf.",
    })

    return result.toDataStreamResponse();
}