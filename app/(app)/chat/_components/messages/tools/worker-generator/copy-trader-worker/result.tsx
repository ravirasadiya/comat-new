'use client'

import React from 'react'

import { CopyTraderWorkerResultBodyType } from '@/ai/worker'
import { Button } from '@/components/ui'

interface Props {
    body: CopyTraderWorkerResultBodyType
}

const Result: React.FC<Props> = ({ body }) => {


    const { workerId, accountAddress, amount, threshold, percentageGain } = body;

    return (
        <div className="flex flex-col gap-2">
            <p>
                Account Address: {accountAddress}
            </p>
            <p>
                Amount: {amount} SOL
            </p>
            <p>
                Threshold: {threshold} SOL
            </p>
            <p>
                Percentage Gain: {percentageGain}%
            </p>
            <Button
                variant="brand"
            >
                View Worker
            </Button>
        </div>
    )
}

export default Result;