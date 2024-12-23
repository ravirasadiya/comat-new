import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { AllBalancesResultType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const AllBalances: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            agentName="Wallet Agent"
            icon="Wallet"
            loadingText={`Getting All Balances...`}
            resultHeading={() => `Fetched All Balances`}
            resultBody={(result: AllBalancesResultType) => result.body 
                ? (
                    <div className="flex flex-col gap-2">
                        {result.body.balances.map((balance) => (
                            <div className="flex flex-col" key={balance.token}>
                                <p>{balance.balance.toFixed(4)} {balance.token}</p>
                            </div>
                        ))}
                    </div>
                )
                :  "No balance found"}
        />
    )
}

export default AllBalances;