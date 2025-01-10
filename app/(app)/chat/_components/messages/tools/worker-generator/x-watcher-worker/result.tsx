'use client'

import React from 'react'

import { Button } from '@/components/ui'

import type { XWatcherWorkerResultBodyType } from '@/ai/worker'

interface Props {
    body: XWatcherWorkerResultBodyType
}

const Result: React.FC<Props> = ({ body }) => {

    const { workerId, accountUrl, amount } = body;

    return (
        <div className="flex flex-col gap-2">
            <p>
                Account URL: <a href={accountUrl} target="_blank" rel="noopener noreferrer" className="text-brand-600">{accountUrl.split('/').pop()}</a>
            </p>
            <p>
                Amount: {amount} SOL
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