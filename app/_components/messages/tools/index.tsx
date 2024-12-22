'use client'

import React from 'react'

import GetWalletDetails from './get-wallet-details';
import GetBalance from './get-balance';
import RegisterBasename from './register-basename';
import RequestFaucet from './request-faucet';
import DeployNFT from './deploy-nft';
import DeployToken from './deploy-token';

import { 
    DEPLOY_NFT,
    DEPLOY_TOKEN,
    GET_BALANCE, 
    GET_WALLET_DETAILS, 
    REGISTER_BASENAME, 
    REQUEST_FAUCET_FUNDS
} from '@/agentkit/actions/cdp/action-names'

import type { ToolInvocation as ToolInvocationType } from 'ai'

interface Props {
    tool: ToolInvocationType
}

const ToolInvocation: React.FC<Props> = ({ tool }) => {
    
    switch(tool.toolName) {
        case GET_WALLET_DETAILS:
            return <GetWalletDetails tool={tool} />
        case GET_BALANCE:
            return <GetBalance tool={tool} />
        case REGISTER_BASENAME:
            return <RegisterBasename tool={tool} />
        case REQUEST_FAUCET_FUNDS:
            return <RequestFaucet tool={tool} />
        case DEPLOY_NFT:
            return <DeployNFT tool={tool} />
        case DEPLOY_TOKEN:
            return <DeployToken tool={tool} />
        default:
            return null;
    }
}

export default ToolInvocation