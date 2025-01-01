"use client"

import { useState } from "react";

import { Connection } from "@solana/web3.js";
import { VersionedTransaction } from "@solana/web3.js";

import { useSolanaWallets } from "@privy-io/react-auth/solana";

import { useChat } from "../../_contexts/chat";

import { useTokenDataByAddress, useUnstakeData } from "@/hooks";

import type { UnstakeArgumentsType } from "@/ai";

export const useUnstake = (toolCallId: string, args: UnstakeArgumentsType, userPublicKey: string) => {

    const { addToolResult } = useChat();

    const { wallets } = useSolanaWallets();

    const [isUnstaking, setIsUnstaking] = useState(false);

    const { data: unstakeData, isLoading: unstakeDataLoading } = useUnstakeData({
      inputAmount: args.amount,
      slippageBps: 500,
      userPublicKey,
    });


    const { data: inputTokenData, isLoading: inputTokenDataLoading } = useTokenDataByAddress("jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v");
    const { data: outputTokenData, isLoading: outputTokenDataLoading } = useTokenDataByAddress("So11111111111111111111111111111111111111112");

    const onUnstake = async () => {

        if (!wallets.length) return;

        setIsUnstaking(true);

        try {
            // Deserialize the transaction
            const unstakeTransactionBuf = Buffer.from(unstakeData.swapTransaction, "base64");
            const transaction = VersionedTransaction.deserialize(unstakeTransactionBuf);

            const tx = await wallets[0].sendTransaction(
              transaction, 
              new Connection("https://api.mainnet-beta.solana.com"), 
              {
                skipPreflight: true,
              }
            );
            
        
            addToolResult(toolCallId, {
                message: `Successfully unstaked ${args.amount} jupSOL for SOL.`,
                body: {
                    transaction: tx,
                    inputAmount: args.amount,
                    inputToken: inputTokenData!.symbol,
                    outputToken: outputTokenData!.symbol
                }
            });
        } catch (error) {
            console.error(error);
            addToolResult(toolCallId, {
                message: `Error executing stake: ${error}`,
            });
        }

        setIsUnstaking(false);
    }

    const onCancel = () => {
        addToolResult(toolCallId, {
            message: `Cancelled stake`,
        });
    }

    return {
        onUnstake,
        isUnstaking,
        unstakeData,
        inputTokenData,
        outputTokenData,
        inputTokenDataLoading,
        outputTokenDataLoading,
        unstakeDataLoading,
        onCancel,
    }
}