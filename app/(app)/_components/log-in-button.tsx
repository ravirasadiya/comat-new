'use client'

import React from 'react'

import { Button } from '@/components/ui'

import { useLogin } from '@/hooks'

interface Props {}

const LogInButton: React.FC<Props> = () => {

    const { login } = useLogin()

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