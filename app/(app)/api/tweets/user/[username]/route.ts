import { getUserByUsername, searchTweets } from "@/services/twitter";
import { getPostsByUserId } from "@/services/twitter/get-posts";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
    const user = await getUserByUsername(username);
    const tweets = await getPostsByUserId(user.id);
    return NextResponse.json(tweets);
}