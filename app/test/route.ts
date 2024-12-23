import { getTwitterClient } from "@/agentkit/actions/twitter/client";
import { NextResponse } from "next/server";

export const GET = async () => {
    const twitterClient = getTwitterClient();

    const tweets = await twitterClient.v2.search({
        query: "solana is:verified lang:en",
        max_results: 10,
    });

    return NextResponse.json(tweets);
}