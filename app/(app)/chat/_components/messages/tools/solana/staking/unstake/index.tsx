import React from 'react';

import ToolCard from '../../../tool-card';

import UnstakeCallBody from './unstake-call-body';
import UnstakeResult from './unstake-result';

import type { ToolInvocation } from 'ai';
import type { UnstakeResultType, UnstakeArgumentsType } from '@/ai';


interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const Unstake: React.FC<Props> = ({ tool, prevToolAgent }) => {
    return (
        <ToolCard 
            tool={tool}
            loadingText="Unstaking..."
            result={{
                heading: (result: UnstakeResultType) => result.body 
                    ? "Unstake Complete"
                    : "Failed to Unstake",
                body: (result: UnstakeResultType) => result.body 
                    ? <UnstakeResult amount={tool.args.amount} unstakeResult={result.body} />
                    : result.message
            }}
            call={{
                heading: "Unstake",
                body: (toolCallId: string, args: UnstakeArgumentsType) => (
                    <UnstakeCallBody toolCallId={toolCallId} args={args} />
                )
            }}
            defaultOpen={true}
            prevToolAgent={prevToolAgent}
        />
    );
};

export default Unstake; 