import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';
import { GetWalletAddressResultType } from '@/agentkit/actions/solana/types';

interface Props {
    tool: ToolInvocation
}

const GetWalletAddress: React.FC<Props> = ({ tool }) => {
    

    return (
        <ToolCard 
            tool={tool}
            icon="Wallet"
            agentName="Wallet Agent"
            loadingText={`Getting Wallet Address...`}
            resultHeading={() => `Read Wallet Address`}
            resultBody={(result: GetWalletAddressResultType) => result.body 
                ? `${result.body.address}` 
                :  "No wallet address found"}
        />
    )
}

export default GetWalletAddress;