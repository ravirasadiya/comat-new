import { searchTweets } from "./search-tweets";
import { getUserById } from "./user";

export const searchAccountMentions = async (username: string) => {
    const tweets = await searchTweets(`@${username} is:verified lang:en`);
    const tweetsWithUser = await Promise.all(tweets.map(async (tweet) => {
        if (!tweet.author_id) return null;
        const user = await getUserById(tweet.author_id);
        return {
            tweet,
            user
        }
    }));
    return tweetsWithUser.filter((tweet) => tweet !== null);
}