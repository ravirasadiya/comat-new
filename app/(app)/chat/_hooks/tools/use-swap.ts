"use client"

import { useState } from "react";

import { TradeArgumentsType } from "@/agentkit/actions/solana/types";
import { Connection } from "@solana/web3.js";
import { useChat } from "../../_contexts/chat";
import { useSolanaWallets } from "@privy-io/react-auth/solana";
import { VersionedTransaction } from "@solana/web3.js";
import { useTokenDataByAddress } from "@/hooks/queries/token-data/use-token-data-by-address";
import { useSwapData } from "@/hooks/queries/swap/use-swap-data";

export const useSwap = (toolCallId: string, args: TradeArgumentsType, userPublicKey: string) => {

    const { addToolResult } = useChat();

    const { wallets } = useSolanaWallets();

    const [isSwapping, setIsSwapping] = useState(false);

    const { data: swapData, isLoading: swapDataLoading } = useSwapData({
      inputMint: args.inputMint ?? "So11111111111111111111111111111111111111112", 
      outputMint: args.outputMint, 
      inputAmount: args.inputAmount,
      slippageBps: args.slippageBps,
      userPublicKey,
    });

    const { data: inputTokenData, isLoading: inputTokenDataLoading } = useTokenDataByAddress(args.inputMint ?? "So11111111111111111111111111111111111111112");
    const { data: outputTokenData, isLoading: outputTokenDataLoading } = useTokenDataByAddress(args.outputMint);

    const onSwap = async () => {

        if (!wallets.length) return;

        setIsSwapping(true);

        try {
          

            // Deserialize the transaction
            const swapTransactionBuf = Buffer.from(swapData.swapTransaction, "base64");
            const transaction = VersionedTransaction.deserialize(swapTransactionBuf);

            const tx = await wallets[0].sendTransaction(
              transaction, 
              new Connection("https://api.mainnet-beta.solana.com"), 
              {
                skipPreflight: true,
              }
            );
            
        
            addToolResult(toolCallId, {
              message: `Successfully swapped ${args.inputAmount} ${args.inputMint || "SOL"} for ${args.outputMint}.`,
                body: {
                  transaction: tx,
                  inputAmount: args.inputAmount,
                  inputToken: inputTokenData!.symbol,
                  outputToken: outputTokenData!.symbol
                }
            });
          } catch (error) {
            console.error(error);
            addToolResult(toolCallId, {
                message: `Error executing trade: ${error}`,
            });
        }

        setIsSwapping(false);
    }

    const onCancel = () => {
        addToolResult(toolCallId, {
            message: `Cancelled swap`,
        });
    }

    return {
        onSwap,
        isSwapping,
        swapData,
        inputTokenData,
        outputTokenData,
        inputTokenDataLoading,
        outputTokenDataLoading,
        swapDataLoading,
        onCancel,
    }
}