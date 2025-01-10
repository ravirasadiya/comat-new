'use client'

import React from 'react'

import CallBody from './call-body';
import Result from './result';

import ToolCard from '../../tool-card';

import type { ToolInvocation } from 'ai';
import { XWatcherWorkerArgumentsType, XWatcherWorkerResultType } from '@/ai/worker';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string
}

const XWatcherWorker: React.FC<Props> = ({ tool, prevToolAgent }) => {
    
    return (
        <ToolCard 
            tool={tool}
            loadingText={`Creating X Sniper...`}
            prevToolAgent={prevToolAgent}
            result={{
                heading: (result: XWatcherWorkerResultType) => result.body 
                    ? `X Sniper Created!`
                    :  "Failed to create X Sniper",
                body: (result: XWatcherWorkerResultType) => result.body 
                    ? <Result body={result.body} />
                    :  "Failed to create X Sniper"
            }}
            call={{
                heading: "Create X Sniper",
                body: (toolCallId: string, args: XWatcherWorkerArgumentsType) => <CallBody toolCallId={toolCallId} args={args} />
            }}
            defaultOpen={true}
        />
    )
}

export default XWatcherWorker;