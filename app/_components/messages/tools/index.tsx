'use client'

import React from 'react'

import GetWalletDetails from './get-wallet-details';
import GetBalance from './get-balance';
import RegisterBasename from './register-basename';
import RequestFaucet from './request-faucet';
import DeployNFT from './deploy-nft';
import DeployToken from './deploy-token';
import Transfer from './transfer';

import { 
    DEPLOY_NFT_NAME,
    DEPLOY_TOKEN_NAME,
    GET_BALANCE_NAME, 
    GET_WALLET_DETAILS_NAME, 
    REGISTER_BASENAME_NAME, 
    REQUEST_FAUCET_FUNDS_NAME,
    TRANSFER_NAME
} from '@/agentkit/actions/names'

import type { ToolInvocation as ToolInvocationType } from 'ai'

interface Props {
    tool: ToolInvocationType
}

const ToolInvocation: React.FC<Props> = ({ tool }) => {
    
    switch(tool.toolName) {
        case GET_WALLET_DETAILS_NAME:
            return <GetWalletDetails tool={tool} />
        case GET_BALANCE_NAME:
            return <GetBalance tool={tool} />
        case REGISTER_BASENAME_NAME:
            return <RegisterBasename tool={tool} />
        case REQUEST_FAUCET_FUNDS_NAME:
            return <RequestFaucet tool={tool} />
        case DEPLOY_NFT_NAME:
            return <DeployNFT tool={tool} />
        case DEPLOY_TOKEN_NAME:
            return <DeployToken tool={tool} />
        case TRANSFER_NAME:
            return <Transfer tool={tool} />
        default:
            return null;
    }
}

export default ToolInvocation