import { PublicKey, VersionedTransaction, Transaction } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { sendTx } from "../utils/send_tx";

export const JUP_API = "https://quote-api.jup.ag/v6";

/**
 * Swap tokens using Jupiter Exchange
 * @param agent SolanaAgentKit instance
 * @param outputMint Target token mint address
 * @param inputAmount Amount to swap (in token decimals)
 * @param inputMint Source token mint address (defaults to USDC)
 * @param slippageBps Slippage tolerance in basis points (default: 300 = 3%)
 * @returns Transaction signature
 */
export async function trade(
    agent: SolanaAgentKit,
    outputMint: PublicKey,
    inputAmount: number,
    inputDecimals: number,
    inputMint: PublicKey,
    slippageBps: number
  ): Promise<string> {
    try {
      const quoteResponse = await (
        await fetch(
          `${JUP_API}/quote?` +
            `inputMint=${inputMint.toString()}` +
            `&outputMint=${outputMint.toString()}` +
            `&amount=${inputAmount * (10 ** inputDecimals)}` +
            `&slippageBps=${slippageBps}` +
            `&onlyDirectRoutes=true` +
            `&maxAccounts=20`,
        )
      ).json();
  
      // Get serialized transaction
      const { swapTransaction } = await (
        await fetch("https://quote-api.jup.ag/v6/swap", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            quoteResponse,
            userPublicKey: agent.wallet_address.toString(),
            wrapAndUnwrapSol: true,
            dynamicComputeUnitLimit: true,
            prioritizationFeeLamports: 100000,
          }),
        })
      ).json();
      // Deserialize transaction
      const swapTransactionBuf = Buffer.from(swapTransaction, "base64");
      const versionedTransaction = VersionedTransaction.deserialize(swapTransactionBuf);
      
      // Use sendTx utility which handles priority fees
      const signature = await sendTx(agent, versionedTransaction);
      return signature;
    } catch (error: any) {
      throw new Error(`Swap failed: ${error.message}`);
    }
  }
  