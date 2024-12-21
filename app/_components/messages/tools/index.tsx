'use client'

import React from 'react'

import GetWalletDetails from './get-wallet-details'
import GetBalance from './get-balance'
import RegisterBasename from './register-basename'

import { 
    GET_BALANCE, 
    GET_WALLET_DETAILS, 
    REGISTER_BASENAME, 
    REQUEST_FAUCET_FUNDS
} from '@/agentkit/actions/cdp/action-names'

import type { ToolInvocation as ToolInvocationType } from 'ai'
import RequestFaucet from './request-faucet'

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
        default:
            return null;
    }
}

export default ToolInvocation