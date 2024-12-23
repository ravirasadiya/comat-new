import React from 'react'

import { Card } from '@/components/ui';

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { LendResultType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const Lend: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard 
            tool={tool}
            icon="Coins"
            agentName="Lending Agent"
            loadingText={`Lending USDC...`}
            resultHeading={() => `Lending USDC`}
            resultBody={(result: LendResultType) => result.body 
                ? <LendCard amount={tool.args.amount} />
                :  "No token data found"}
            defaultOpen={true}
        />
    )
}

const LendCard = ({ amount }: { amount: number}) => {
    return (
        <p>
            Successfully lent ${amount} USDC on Lulo.
        </p>
    )
}

export default Lend;