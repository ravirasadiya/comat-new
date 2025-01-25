import React from 'react'

import Tweet from './tweet';

import { getMentionsByUsername } from '@/services/twitter';

interface Props {
    username: string;
}

const AccountMentions: React.FC<Props> = async ({ username }) => {

    const tweets = await getMentionsByUsername(username);

    return (
        <div className="flex flex-col gap-2 h-full max-h-full overflow-y-hidden">
            <h2 className="text-lg font-bold">Mentions</h2>
            <div className="flex flex-col gap-2 flex-1 h-0 overflow-y-auto no-scrollbar">
                {tweets.map((tweet) => (
                    <Tweet 
                        key={tweet.tweet.id} 
                        tweet={tweet} 
                    />
                ))}
            </div>
        </div>
    )
}

export default AccountMentions;