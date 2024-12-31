"use client"

import { useState } from "react";

import { UnstakeArgumentsType } from "@/agentkit/actions/solana/types";
import { useChat } from "../../_contexts/chat";
import { useSolanaWallets } from "@privy-io/react-auth/solana";
import { VersionedTransaction } from "@solana/web3.js";
import { useTokenDataByAddress } from "@/hooks/queries/token-data/use-token-data-by-address";
import { useUnstakeData } from "@/hooks";
import { useSendTransaction } from "@/hooks/privy";

export const useUnstake = (toolCallId: string, args: UnstakeArgumentsType, userPublicKey: string) => {

    const { addToolResult } = useChat();
    const { sendTransaction } = useSendTransaction();

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

            const tx = await sendTransaction(transaction);
        
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