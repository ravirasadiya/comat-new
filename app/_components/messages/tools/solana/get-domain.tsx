import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { GetDomainResultType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const GetDomain: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            icon="Wallet"
            loadingText={`Getting Domain...`}
            resultHeading={() => `Read Domain`}
            resultBody={(result: GetDomainResultType) => result.body
                ? `${result.body.domain || "No domain found"}` 
                :  "No domain found"}
        />
    )
}

export default GetDomain;