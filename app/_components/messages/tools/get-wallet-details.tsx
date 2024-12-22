import React from 'react'

import ToolCard from './tool-card';

import { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation
}

const GetWalletDetails: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard
            tool={tool}
            icon="Wallet"
            loadingText="Getting Wallet Details..."
            resultHeading={() => "Wallet Details"}
            resultBody={(result) => result.address ?? "No address found"}
        />
    )
}

export default GetWalletDetails;