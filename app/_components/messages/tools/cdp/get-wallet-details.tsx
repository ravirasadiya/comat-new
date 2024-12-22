import React from 'react'
import ToolCard from '../tool-card';
import { ToolInvocation } from 'ai';
import { GetWalletDetailsActionResultType } from '@/agentkit/actions/cdp/get-wallet-details/types';

interface Props {
    tool: ToolInvocation
}

const GetWalletDetails: React.FC<Props> = ({ tool }) => {
    return (
        <ToolCard
            tool={tool}
            icon="Wallet"
            loadingText="Getting Wallet Details..."
            resultHeading={() => "Fetched Wallet Details"}
            resultBody={(result: GetWalletDetailsActionResultType) => result.body?.address ?? "No address found"}
        />
    )
}

export default GetWalletDetails;