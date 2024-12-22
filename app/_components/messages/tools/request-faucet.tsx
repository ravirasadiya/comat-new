import React from 'react'

import ToolCard from './tool-card';

import { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation
}

const RequestFaucet: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard
            tool={tool}
            icon="Droplet"
            loadingText="Requesting Faucet Funds..."
            resultHeading={() => "Faucet Funds Success"}
            resultBody={(result: ) => result.body 
                ? `[Transaction Link](${result.body.transactionLink})` 
                : result.message}
        />
    )
}

export default RequestFaucet;