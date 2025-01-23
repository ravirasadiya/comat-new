import { searchTweets } from "@/services/twitter";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
    const tweets = await searchTweets(`@${username} is:verified lang:en`);
    return NextResponse.json(tweets);
}