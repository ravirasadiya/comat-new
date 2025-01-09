"use client"

import { useState } from "react";

import { VersionedTransaction } from "@solana/web3.js";

import { useSolanaWallets } from "@privy-io/react-auth/solana";

import { useChat } from "../../_contexts/chat";

import { useTokenDataByAddress } from "@/hooks";

import type { SolanaTransferArgumentsType } from "@/ai";
import { useSendTransaction } from "@/hooks/privy";
import { useTransferData } from "@/hooks/queries/transfer";

export const useTransfer = (toolCallId: string, args: SolanaTransferArgumentsType, from: string) => {

    const { addToolResult } = useChat();

    const { wallets } = useSolanaWallets();

    const { sendTransaction } = useSendTransaction();

    const [isTransferring, setIsTransferring] = useState(false);

    const { data: transferData, isLoading: transferDataLoading } = useTransferData({
      from,
      amount: args.amount,
      to: args.to,
      mint: args.mint,
    });

    const { data: tokenData, isLoading: tokenDataLoading } = useTokenDataByAddress(args.mint ?? "So11111111111111111111111111111111111111112");

    const onTransfer = async () => {

        if (!wallets.length) return;

        if (!transferData || (args.mint && !tokenData)) return;

        setIsTransferring(true);

        try {
            // Deserialize the transaction
            const transferTransactionBuf = Buffer.from(transferData.transaction, "base64");
            const transaction = VersionedTransaction.deserialize(transferTransactionBuf);

            const tx = await sendTransaction(transaction);
        
            addToolResult(toolCallId, {
              message: `Successfully transferred ${args.amount} ${args.mint || "SOL"} to ${args.to}.`,
                body: {
                  transaction: tx,
                  symbol: args.mint ? tokenData?.symbol : "SOL",
                }
            });
          } catch (error) {
            console.error(error);
            addToolResult(toolCallId, {
                message: `Error executing trade: ${error}`,
            });
        }

        setIsTransferring(false);
    }

    const onCancel = () => {
        addToolResult(toolCallId, {
            message: `Cancelled transfer`,
        });
    }

    return {
        onTransfer,
        isTransferring,
        transferData,
        tokenData,
        tokenDataLoading,
        transferDataLoading,
        onCancel,
    }
}