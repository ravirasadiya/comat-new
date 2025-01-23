import React from 'react'

import type { UserV2, TweetV2 } from 'twitter-api-v2';

interface Props {
    tweet: TweetV2;
    user: UserV2;
}

const Tweet: React.FC<Props> = ({ tweet, user }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 w-full overflow-hidden">
                <img src={user.profile_image_url} className="w-6 h-6 rounded-full" />
                <p className="text-md font-bold truncate">{user.name}</p>
                <p className="text-sm text-muted-foreground">@{user.username}</p>
            </div>
            <p className="text-md">{tweet.text}</p>
        </div>
    )
}

export default Tweet