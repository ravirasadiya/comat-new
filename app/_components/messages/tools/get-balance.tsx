import React from 'react'

import ToolCard from './tool-card';

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
            resultHeading={() => `${tool.args.assetId.toUpperCase()} Balance`}
            resultBody={(result: GetBalanceActionResultType) => result.body?.balance.toString() ?? "No balance found"}
        />
    )
}

export default GetBalance;