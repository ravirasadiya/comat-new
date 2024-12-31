import { Button } from '@/components/ui';
import { TradeArgumentsType } from '@/agentkit/actions/solana/types';
import { useLogin } from '@/hooks';
import SwapDisplay from './swap-display';

interface SwapCallBodyProps {
    toolCallId: string;
    args: TradeArgumentsType;
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