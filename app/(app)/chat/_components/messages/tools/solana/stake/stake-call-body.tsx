import React from 'react';

import { Button } from '@/components/ui';

import { useLogin } from '@/hooks';

import type { StakeArgumentsType } from '@/ai';

import StakeDisplay from './stake-display';

interface StakeCallBodyProps {
    toolCallId: string;
    args: StakeArgumentsType;
}

const StakeCallBody = ({ toolCallId, args }: StakeCallBodyProps) => {
    const { wallets, connectWallet } = useLogin();

    return (
        <div>
            {
                wallets.length ? (
                    <StakeDisplay toolCallId={toolCallId} args={args} userPublicKey={wallets[0].address} />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-muted-foreground">Connect your wallet to stake tokens</p>
                        <Button 
                            variant="brand"
                            onClick={() => connectWallet()}
                            className="w-full"
                        >
                            Connect Wallet
                        </Button>
                    </div>
                )
            }
        </div>
    );
};

export default StakeCallBody; 