import React from 'react';

import LoginButton from '@/app/(app)/_components/log-in-button';

import TransferDisplay from './transfer-display';

import { useLogin } from '@/hooks';

import type { SolanaTransferArgumentsType } from '@/ai';


interface TransferCallBodyProps {
    toolCallId: string;
    args: SolanaTransferArgumentsType;
}

const TransferCallBody = ({ toolCallId, args }: TransferCallBodyProps) => {
    
    const { wallets } = useLogin();

    return (
        <div>
            {
                wallets.length ? (
                    <TransferDisplay toolCallId={toolCallId} args={args} from={wallets[0].address} />
                ) : (
                    <LoginButton />
                )
            }
        </div>
    );
};

export default TransferCallBody; 