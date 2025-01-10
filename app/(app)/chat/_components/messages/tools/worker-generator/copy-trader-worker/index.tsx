'use client'

import React from 'react'

import ToolCard from '../../tool-card';

import CallBody from './call-body';
import Result from './result';

import type { ToolInvocation } from 'ai';
import type { CopyTraderWorkerArgumentsType, CopyTraderWorkerResultType } from '@/ai/worker';


interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string
}

const XWatcherWorker: React.FC<Props> = ({ tool, prevToolAgent }) => {
    
    return (
        <ToolCard 
            tool={tool}
            loadingText={`Creating Copy Trader...`}
            prevToolAgent={prevToolAgent}
            result={{
                heading: (result: CopyTraderWorkerResultType) => result.body 
                    ? `Copy Trader Created`
                    :  "Failed to create copy trader",
                body: (result: CopyTraderWorkerResultType) => result.body 
                    ? <Result body={result.body} />
                    :  "Failed to create copy trader"
            }}
            call={{
                heading: "Create Copy Trader",
                body: (toolCallId: string, args: CopyTraderWorkerArgumentsType) => <CallBody toolCallId={toolCallId} args={args} />
            }}
            defaultOpen={true}
        />
    )
}

export default XWatcherWorker;