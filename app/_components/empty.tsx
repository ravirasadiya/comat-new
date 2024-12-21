"use client"

import React from 'react'

import ChatInput from './input';

import { cn } from '@/lib/utils';

interface Props {}

const EmptyChat: React.FC<Props> = () => {

    return (
        <div className={cn(
            // Base
            "flex flex-col items-center justify-center w-full h-full px-4",
        )}>
            <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-4 md:gap-8">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-center text-2xl">
                            What would you like to do on Base today?
                        </h1>
                        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400">
                            Get answers with citations to your relevant files.
                        </p>
                    </div>
                </div>
                <ChatInput />
            </div>
        </div>
    )
}

export default EmptyChat;