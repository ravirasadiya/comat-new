'use client'

import React from 'react'

import { Button } from '@/components/ui'

import { useLogin } from '@/hooks'
import { Wallet } from '@privy-io/react-auth'

interface Props {
    onComplete?: (wallet: Wallet) => void
}

const LogInButton: React.FC<Props> = ({ onComplete }) => {

    const { login } = useLogin({
        onComplete
    })

    return (
        <Button 
            variant="brand"
            onClick={() => login()}
            className="w-full"
        >
            Connect Wallet
        </Button>
    )
}

export default LogInButton