import React from 'react';

import { StakeResultType, UnstakeResultType, UnstakeArgumentsType } from '@/agentkit/actions/solana/types';

import ToolCard from '../../tool-card';

import UnstakeCallBody from './unstake-call-body';
import UnstakeResult from './unstake-result';

import { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation;
}

const Stake: React.FC<Props> = ({ tool }) => {
    return (
        <ToolCard 
            tool={tool}
            icon="Beef"
            agentName="Staking Agent"
            loadingText="Staking..."
            resultHeading={(result: StakeResultType) => result.body 
                ? "Stake Complete"
                : "Failed to Stake"}
            resultBody={(result: UnstakeResultType) => result.body 
                ? <UnstakeResult amount={tool.args.amount} unstakeResult={result.body} />
                : result.message}
            callBody={(toolCallId: string, args: UnstakeArgumentsType) => (
                <UnstakeCallBody toolCallId={toolCallId} args={args} />
            )}
            defaultOpen={true}
        />
    );
};

export default Stake; 