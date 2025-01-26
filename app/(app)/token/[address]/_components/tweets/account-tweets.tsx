"use client";

import React from 'react'

import { Skeleton } from '@/components/ui';

import Tweet from './tweet';

import { useAccountTweets } from '@/hooks';

interface Props {
    username: string;
}

const AccountTweets: React.FC<Props> = ({ username }) => {

    const { data: tweets, isLoading } = useAccountTweets(username);

    return (
        <div className="flex flex-col gap-2 h-full max-h-full overflow-y-hidden">
            <h2 className="text-lg font-bold">Tweets</h2>
            {isLoading ? <Skeleton className="h-full w-full" /> : (
                <div className="flex flex-col gap-2 flex-1 h-0 overflow-y-auto no-scrollbar">
                    {tweets.map((tweet) => (
                        <Tweet 
                            key={tweet.tweet.id} 
                            tweet={tweet} 
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default AccountTweets;