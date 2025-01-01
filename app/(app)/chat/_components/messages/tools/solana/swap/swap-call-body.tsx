import React from 'react';

import { Button } from '@/components/ui';

import SwapDisplay from './swap-display';

import { useLogin } from '@/hooks';

import type { SolanaTradeArgumentsType } from '@/ai';

interface SwapCallBodyProps {
    toolCallId: string;
    args: SolanaTradeArgumentsType;
}

const SwapCallBody = ({ toolCallId, args }: SwapCallBodyProps) => {
    const { wallets, connectWallet } = useLogin();

    return (
        <div>
            {
                wallets.length ? (
                    <SwapDisplay toolCallId={toolCallId} args={args} userPublicKey={wallets[0].address} />
                ) : (
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-sm text-muted-foreground">Connect your wallet to swap tokens</p>
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

export default SwapCallBody; 