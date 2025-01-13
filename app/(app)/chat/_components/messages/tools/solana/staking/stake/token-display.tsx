import React from 'react';

import { Skeleton } from '@/components/ui';

import { round } from '@/lib/utils';

import type { Token } from '@/db/types';

interface TokenDisplayProps {
    tokenData: Token | null;
    isLoading: boolean;
    amount?: number;
    decimals?: number;
}

const TokenDisplay = ({ tokenData, isLoading, amount, decimals }: TokenDisplayProps) => {
    if (isLoading) {
        return <Skeleton className="size-8" />;
    }

    if (!tokenData) {
        return (
            <div className="flex items-center gap-2">
                <div className="size-8 bg-muted rounded-full" />
                <p className="text-xs text-muted-foreground">Unknown</p>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-2">
            <img 
                src={tokenData.logoURI} 
                alt={tokenData.name} 
                className="size-8 rounded-full" 
            />
            <p className="text-xs text-muted-foreground">
                {amount !== undefined && decimals !== undefined 
                    ? `${round(amount / (10 ** decimals), 2)} ${tokenData.symbol}`
                    : amount !== undefined 
                        ? `${amount} ${tokenData.symbol}`
                        : tokenData.symbol
                }
            </p>
        </div>
    );
};

export default TokenDisplay; 