import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { RequestFundsResultType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const RequestFunds: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            icon="HandCoins"
            loadingText={`Requesting Funds...`}
            resultHeading={() => `Request Funds`}
            resultBody={(result: RequestFundsResultType) => result.body 
                ? `Received 1 SOL` 
                :  "No network found"}
        />
    )
}

export default RequestFunds;