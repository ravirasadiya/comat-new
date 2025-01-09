import React from 'react'

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { AllBalancesResultType } from '@/ai';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const AllBalances: React.FC<Props> = ({ tool, prevToolAgent }) => {
    

    return (
        <ToolCard 
            tool={tool}
            loadingText={`Getting All Balances...`}
            result={{
                heading: (result: AllBalancesResultType) => result.body 
                    ? `Fetched All Balances`
                    : `Failed to fetch balances`,
                body: (result: AllBalancesResultType) => result.body 
                    ? (
                        <div className="flex flex-col gap-2">
                            {result.body.balances.map((balance) => (
                                <div className="flex flex-row items-center gap-2" key={balance.token}>
                                    <img src={balance.logoURI} alt={balance.name} className="w-8 h-8 rounded-full" />
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium">{balance.name} ({balance.token})</p>
                                            <p>{balance.balance.toFixed(4)}</p>
                                        </div>
                                    </div>
                            ))}
                        </div>
                    )
                    :  "No balance found"
            }}
            prevToolAgent={prevToolAgent}
        />
    )
}

export default AllBalances;