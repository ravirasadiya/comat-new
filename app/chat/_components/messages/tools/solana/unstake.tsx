import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { UnstakeResultType } from '@/agentkit/actions/solana/unstake/types';

interface Props {
    tool: ToolInvocation
}

const Unstake: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="Beef"
            agentName="Staking Agent"
            loadingText={`Unstaking JupSOL...`}
            resultHeading={() => `Unstaking JupSOL`}
            resultBody={(result: UnstakeResultType) => result.body 
                ? <UnstakeCard amount={tool.args.amount} />
                :  "No token data found"}
            defaultOpen={true}
        />
    )
}

const UnstakeCard = ({ amount }: { amount: number}) => {
    return (
        <p>
            Successfully unstaked ${amount} JupSOL.
        </p>
    )
}

export default Unstake;