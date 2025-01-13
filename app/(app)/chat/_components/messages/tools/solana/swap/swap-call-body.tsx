import React from 'react';

import SwapDisplay from './swap-display';

import { useLogin } from '@/hooks';

import type { SolanaTradeArgumentsType } from '@/ai';
import LogInButton from '@/app/(app)/_components/log-in-button';

interface SwapCallBodyProps {
    toolCallId: string;
    args: SolanaTradeArgumentsType;
}

const SwapCallBody = ({ toolCallId, args }: SwapCallBodyProps) => {
    
    const { wallets } = useLogin();

    return (
        <div>
            {
                wallets.length ? (
                    <SwapDisplay toolCallId={toolCallId} args={args} userPublicKey={wallets[0].address} />
                ) : (
                    <LogInButton />
                )
            }
        </div>
    );
};

export default SwapCallBody; 