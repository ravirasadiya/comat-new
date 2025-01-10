'use client'

import React, { useState } from 'react'

import { XWatcherWorkerArgumentsType } from '@/ai/worker'
import { Button, Input, Label, Separator } from '@/components/ui'
import { useChat } from '@/app/(app)/chat/_contexts/chat'

interface Props {
    toolCallId: string
    args: XWatcherWorkerArgumentsType
}

const CallBody: React.FC<Props> = ({ toolCallId, args }) => {

    const { addToolResult } = useChat()

    const [accountUrl, setAccountUrl] = useState(args.accountUrl);
    const [amount, setAmount] = useState(args.amount);

    const handleSubmit = () => {
        addToolResult(toolCallId, {
            message: "X Sniper Created",
            body: {
                workerId: "",
                accountUrl,
                amount
            }
        })
    }

    return (
        <div className="flex flex-col gap-4 w-[400px]">
            <p className="text-xs text-neutral-700 dark:text-neutral-300">
                Create a worker that will watch a Twitter account for new tweets and buy SOL on contract drop.
            </p>
            <Separator />
            <div className="flex flex-col gap-1">
                <Label htmlFor="account-url" className="text-xs font-medium">
                    Twitter Account URL
                </Label>
                <Input 
                    id="account-url"
                    placeholder="Enter a Twitter account URL"
                    value={accountUrl}
                    onChange={(e) => setAccountUrl(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="amount" className="text-xs font-medium">
                    Sol Amount
                </Label>
                <Input 
                    id="amount"
                    placeholder="Enter the amount of SOL to buy on contract drop"
                    value={amount}
                    type="number"
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>
            <Button 
                onClick={handleSubmit}
                disabled={!accountUrl || !amount}
                variant="brand"
            >
                Create X Sniper
            </Button>
        </div>
    )
}

export default CallBody;