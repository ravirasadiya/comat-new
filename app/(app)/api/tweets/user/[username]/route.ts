import { NextResponse } from "next/server";

import { getUserByUsername, getPostsByUserId } from "@/services/twitter";

export const GET = async (request: Request, { params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
    const user = await getUserByUsername(username);
    const tweets = await getPostsByUserId(user.id);
    return NextResponse.json(tweets);
}