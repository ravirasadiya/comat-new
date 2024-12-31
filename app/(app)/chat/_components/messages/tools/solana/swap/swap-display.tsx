import { Button } from '@/components/ui';
import { TradeArgumentsType } from '@/agentkit/actions/solana/types';
import { ChevronRight } from 'lucide-react';
import { useSwap } from '@/app/(app)/chat/_hooks/tools/use-swap';
import TokenDisplay from './token-display';

interface SwapDisplayProps {
    toolCallId: string;
    args: TradeArgumentsType;
    userPublicKey: string;
}

const SwapDisplay = ({ toolCallId, args, userPublicKey }: SwapDisplayProps) => {
    const { 
        isSwapping, 
        onSwap, 
        swapData, 
        inputTokenData, 
        outputTokenData, 
        inputTokenDataLoading, 
        outputTokenDataLoading 
    } = useSwap(toolCallId, args, userPublicKey);

    return (
        <div className="flex gap-4">
            <Button 
                variant="brand"
                onClick={onSwap} 
                disabled={isSwapping}
                className="w-fit"
            >
                Swap
            </Button>
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 w-full">
                    <TokenDisplay 
                        tokenData={inputTokenData ?? null}
                        isLoading={inputTokenDataLoading}
                        amount={args.inputAmount}
                    />
                    <ChevronRight className="size-4" />
                    <TokenDisplay 
                        tokenData={outputTokenData ?? null}
                        isLoading={outputTokenDataLoading}
                        amount={swapData?.outAmount}
                        decimals={outputTokenData?.decimals}
                    />
                </div>
            </div>
            
        </div>
    );
};

export default SwapDisplay; 