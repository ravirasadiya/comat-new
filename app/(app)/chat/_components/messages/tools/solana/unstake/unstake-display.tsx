import React from 'react';

import { Button } from '@/components/ui';
import { ChevronRight } from 'lucide-react';
import TokenDisplay from './token-display';
import { UnstakeArgumentsType } from '@/agentkit/actions/solana/types';

import { useUnstake } from '@/app/(app)/chat/_hooks';

interface UnstakeDisplayProps {
    toolCallId: string;
    args: UnstakeArgumentsType;
    userPublicKey: string;
}

const UnstakeDisplay: React.FC<UnstakeDisplayProps> = ({ toolCallId, args, userPublicKey }) => {
    const { 
        isUnstaking, 
        onUnstake, 
        unstakeData, 
        inputTokenData, 
        outputTokenData, 
        inputTokenDataLoading, 
        outputTokenDataLoading,
        onCancel
    } = useUnstake(toolCallId, args, userPublicKey);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 w-full">
                    <TokenDisplay 
                        tokenData={inputTokenData ?? null}
                        isLoading={inputTokenDataLoading}
                        amount={args.amount}
                    />
                    <ChevronRight className="size-4" />
                    <TokenDisplay 
                        tokenData={outputTokenData ?? null}
                        isLoading={outputTokenDataLoading}
                        amount={unstakeData?.outAmount}
                        decimals={outputTokenData?.decimals}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <Button 
                    variant="brand"
                    onClick={onUnstake} 
                    disabled={isUnstaking || !unstakeData?.outAmount}
                    className="w-full"
                >
                    Unstake
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

export default UnstakeDisplay; 