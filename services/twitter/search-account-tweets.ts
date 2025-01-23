import { searchTweets } from "./search-tweets";

import { getUserByUsername } from "./user";

export const searchAccountTweets = async (username: string) => {
    const tweets = await searchTweets(`from:${username}`);
    const user = await getUserByUsername(username);
    return tweets.map((tweet) => ({
        tweet,
        user
    }));
}