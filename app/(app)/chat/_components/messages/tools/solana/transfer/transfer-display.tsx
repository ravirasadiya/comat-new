import React from 'react';

import { Button } from '@/components/ui';
import { ChevronRight } from 'lucide-react';

import { useTransfer } from '@/app/(app)/chat/_hooks/tools';

import type { SolanaTransferArgumentsType } from '@/ai';

import TokenDisplay from './token-display';
import Address from '@/app/_components/address';

interface TransferDisplayProps {
    toolCallId: string;
    args: SolanaTransferArgumentsType;
    from: string;
}

const TransferDisplay: React.FC<TransferDisplayProps> = ({ toolCallId, args, from }) => {
    const { 
        isTransferring, 
        onTransfer, 
        tokenData, 
        tokenDataLoading, 
        transferDataLoading,
        onCancel
    } = useTransfer(toolCallId, args, from);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 w-full">
                    <TokenDisplay 
                        tokenData={args.mint ? (tokenData ?? null) : {
                            address: "So11111111111111111111111111111111111111112",
                            name: "Solana",
                            symbol: "SOL",
                            decimals: 9,
                            logoURI: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
                            tags: [],
                            daily_volume: 0,
                            freeze_authority: "So11111111111111111111111111111111111111112",
                            mint_authority: "So11111111111111111111111111111111111111112",
                            permanent_delegate: null,
                            extensions: {},
                        }}
                        isLoading={tokenDataLoading}
                        amount={args.amount}
                    />
                    <ChevronRight className="size-4" />
                    <Address address={args.to} />
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Button 
                    variant="brand"
                    onClick={onTransfer} 
                    disabled={isTransferring || transferDataLoading}
                    className="w-full"
                >
                    Transfer
                </Button>
                <p className="text-sm text-muted-foreground">
                    or
                </p>
                <Button 
                    variant="ghost"
                    onClick={onCancel} 
                    className="w-full"
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
};

export default TransferDisplay; 