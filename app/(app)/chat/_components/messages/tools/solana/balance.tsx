import React from 'react'

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { BalanceResultType } from '@/ai';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const GetBalance: React.FC<Props> = ({ tool, prevToolAgent }) => {
    

    return (
        <ToolCard 
            tool={tool}
            loadingText={`Getting ${tool.args.tokenAddress || "SOL"} Balance...`}
            result={{
                heading: (result: BalanceResultType) => result.body?.token 
                    ? `Fetched ${result.body.token} Balance` 
                    : `Failed to fetch balance`,
                body: (result: BalanceResultType) => result.body 
                    ? (
                        <div className="flex flex-row items-center gap-2">
                            <img src={result.body.logoURI} alt={result.body.name} className="w-8 h-8 rounded-full" />
                            <p>{result.body.balance.toFixed(4)} {result.body.name} ({result.body.token})</p>
                        </div>
                    ) : "No balance found"
            }}
            prevToolAgent={prevToolAgent}
        />
    )
}

export default GetBalance;