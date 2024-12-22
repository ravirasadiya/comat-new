'use client'

import React from 'react'

import {
    Balance,
    GetWalletAddress,
    GetDomain,
    RequestFunds,
    GetTrendingTokens,
    GetTokenData
} from './solana'

import { 
    SOLANA_BALANCE_NAME,
    SOLANA_GET_WALLET_ADDRESS_NAME,
    SOLANA_GET_DOMAIN_NAME,
    SOLANA_REQUEST_FUNDS_NAME,
    SOLANA_GET_TRENDING_TOKENS_NAME,
    SOLANA_GET_TOKEN_DATA_NAME
} from '@/agentkit/actions/solana/names'

import type { ToolInvocation as ToolInvocationType } from 'ai'

interface Props {
    tool: ToolInvocationType
}

const ToolInvocation: React.FC<Props> = ({ tool }) => {
    
    switch(tool.toolName) {
        case SOLANA_BALANCE_NAME:
            return <Balance tool={tool} />
        case SOLANA_GET_WALLET_ADDRESS_NAME:
            return <GetWalletAddress tool={tool} />
        case SOLANA_GET_DOMAIN_NAME:
            return <GetDomain tool={tool} />
        case SOLANA_REQUEST_FUNDS_NAME:
            return <RequestFunds tool={tool} />
        case SOLANA_GET_TRENDING_TOKENS_NAME:
            return <GetTrendingTokens tool={tool} />
        case SOLANA_GET_TOKEN_DATA_NAME:
            return <GetTokenData tool={tool} />
        // case DEPLOY_NFT_NAME:
        //     return <DeployNFT tool={tool} />
        // case DEPLOY_TOKEN_NAME:
        //     return <DeployToken tool={tool} />
        // case TRANSFER_NAME:
        //     return <Transfer tool={tool} />
        default:
            return (
                <pre className="whitespace-pre-wrap">
                    {JSON.stringify(tool, null, 2)}
                </pre>
            );
    }
}

export default ToolInvocation