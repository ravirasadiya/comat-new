import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { GetBalanceActionResultType } from '@/agentkit';

interface Props {
    tool: ToolInvocation
}

const GetBalance: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            icon="HandCoins"
            loadingText={`Getting ${tool.args.assetId} Balance...`}
            resultHeading={() => `Read ${tool.args.assetId.toUpperCase()} Balance`}
            resultBody={(result: GetBalanceActionResultType) => result.body 
                ? `${result.body.balance.toFixed(4)} ${tool.args.assetId.toUpperCase()}` 
                :  "No balance found"}
        />
    )
}

export default GetBalance;