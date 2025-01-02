import React from 'react'

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { GetSolanaAdviceResultType } from '@/ai';

interface Props {
    tool: ToolInvocation
}

const GetSolanaAdvice: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            agentName="Financial Analyst"
            icon="BriefcaseBusiness"
            loadingText={`Writing advice...`}
            resultHeading={() => `Advice for ${tool.args.tokenSymbol}`}
            resultBody={(result: GetSolanaAdviceResultType) => result.body 
                ? (
                    <div className="flex flex-col gap-2">
                        <p className="text-lg text-brand-600 font-bold">{result.body.buy ? "Buy" : "Don't Buy"}</p>
                        <p className="text-sm text-neutral-300">{result.body.advice}</p>
                    </div>
                ) 
                :  "No advice found"}
            defaultOpen={true}
        />
    )
}

export default GetSolanaAdvice;