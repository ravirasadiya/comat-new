import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { StakeResultType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const Stake: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="Beef"
            agentName="Staking Agent"
            loadingText={`Staking SOL...`}
            resultHeading={() => `Staking SOL`}
            resultBody={(result: StakeResultType) => result.body 
                ? <StakeCard amount={tool.args.amount} />
                :  "No token data found"}
            defaultOpen={true}
        />
    )
}

const StakeCard = ({ amount }: { amount: number}) => {
    return (
        <p>
            Successfully staked ${amount} SOL for JupSOL.
        </p>
    )
}

export default Stake;