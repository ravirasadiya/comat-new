import React from 'react';

import LoginButton from '@/app/(app)/_components/log-in-button';

import StakeDisplay from './stake-display';

import { useLogin } from '@/hooks';

import type { StakeArgumentsType } from '@/ai';


interface StakeCallBodyProps {
    toolCallId: string;
    args: StakeArgumentsType;
}

const StakeCallBody = ({ toolCallId, args }: StakeCallBodyProps) => {
    
    const { wallets } = useLogin();

    return (
        <div>
            {
                wallets.length ? (
                    <StakeDisplay toolCallId={toolCallId} args={args} userPublicKey={wallets[0].address} />
                ) : (
                    <LoginButton />
                )
            }
        </div>
    );
};

export default StakeCallBody; 