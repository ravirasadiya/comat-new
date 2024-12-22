import React from 'react'

import ToolCard from './tool-card';

import { ToolInvocation } from 'ai';

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
            resultBody={(result) => result.balance ?? "No balance found"}
        />
    )
}

export default GetBalance;