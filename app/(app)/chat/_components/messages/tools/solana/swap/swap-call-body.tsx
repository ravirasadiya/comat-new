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
                    <div className="flex items-center gap-2">
                        <Button 
                            variant="brand"
                            onClick={() => connectWallet()}
                            className="w-fit"
                        >
                            Connect Wallet
                        </Button>
                        <p className="text-sm text-muted-foreground">Connect your wallet to swap tokens</p>
                    </div>
                )
            }
        </div>
    );
};

export default SwapCallBody; 