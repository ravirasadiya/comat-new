'use client'

import React, { useState } from 'react'

import { Button, Input, Label, Separator } from '@/components/ui'

import { useChat } from '@/app/(app)/chat/_contexts/chat'

import { CopyTraderWorkerArgumentsType } from '@/ai/worker'

interface Props {
    toolCallId: string
    args: CopyTraderWorkerArgumentsType
}

const CallBody: React.FC<Props> = ({ toolCallId, args }) => {

    const { addToolResult } = useChat()

    const [accountAddress, setAccountAddress] = useState(args.accountAddress ?? "");
    const [amount, setAmount] = useState(args.amount ?? 0);
    const [threshold, setThreshold] = useState(args.threshold ?? 0);
    const [percentageGain, setPercentageGain] = useState(args.percentageGain ?? 0);

    const handleSubmit = () => {
        addToolResult(toolCallId, {
            message: "Copy Trader Created",
            body: {
                accountAddress,
                amount,
                threshold,
                percentageGain
            }
        })
    }

    return (
        <div className="flex flex-col gap-4 w-[400px]">
            <p className="text-xs text-neutral-700 dark:text-neutral-300">
                Create a worker that will copy trade a given address. The worker will buy an amount of SOL worth of every token that they buy above a certain threshold. The worker will sell the token if it gains a certain percentage.
            </p>
            <Separator />
            <div className="flex flex-col gap-1">
                <Label htmlFor="account-url" className="text-xs font-medium">
                    Account Address
                </Label>
                <Input 
                    id="account-url"
                    placeholder="Enter an account address"
                    value={accountAddress}
                    onChange={(e) => setAccountAddress(e.target.value)}
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
                    suffix="SOL"
                    min={0}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="threshold" className="text-xs font-medium">
                    Threshold
                </Label>
                <Input 
                    id="threshold"
                    placeholder="Enter the threshold for buying"
                    value={threshold}
                    type="number"
                    suffix="SOL"
                    min={0}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                />
            </div>
            <div className="flex flex-col gap-1">
                <Label htmlFor="percentage-gain" className="text-xs font-medium">
                    Percentage Gain
                </Label>
                <Input 
                    id="percentage-gain"
                    placeholder="Enter the percentage gain for selling"
                    value={percentageGain}
                    type="number"
                    suffix="%"
                    min={0}
                    onChange={(e) => setPercentageGain(Number(e.target.value))}
                />
            </div>
            <Button 
                onClick={handleSubmit}
                disabled={!accountAddress || !amount || !threshold || !percentageGain}
                variant="brand"
            >
                Create Copy Trader
            </Button>
        </div>
    )
}

export default CallBody;