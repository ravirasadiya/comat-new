import React from 'react'

import ToolCard from './tool-card';

import type { ToolInvocation } from 'ai';
import type { RequestFaucetFundsActionResultType } from '@/agentkit';

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
            resultBody={(result: RequestFaucetFundsActionResultType) => result.body 
                ? `[Transaction Link](${result.body.transactionLink})` 
                : result.message}
        />
    )
}

export default RequestFaucet;