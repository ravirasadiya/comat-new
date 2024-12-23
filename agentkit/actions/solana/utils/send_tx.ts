import { Transaction, Keypair, TransactionInstruction, VersionedTransaction } from "@solana/web3.js";
import { Connection, ComputeBudgetProgram } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";

/**
 * Get priority fees for the current block
 * @param connection - Solana RPC connection
 * @returns Priority fees statistics and instructions for different fee levels
 */
export async function getPriorityFees(connection: Connection): Promise<{
  min: number;
  median: number;
  max: number;
  instructions?: {
    low: TransactionInstruction;
    medium: TransactionInstruction;
    high: TransactionInstruction;
  };
}> {
  try {
    // Get recent prioritization fees
    const priorityFees = await connection.getRecentPrioritizationFees();

    if (!priorityFees.length) {
      return {
        min: 0,
        median: 0,
        max: 0,
      };
    }

    // Sort fees by value
    const sortedFees = priorityFees
      .map((x) => x.prioritizationFee)
      .sort((a, b) => a - b);

    // Calculate statistics
    const min = sortedFees[0] ?? 0;
    const max = sortedFees[sortedFees.length - 1] ?? 0;
    const mid = Math.floor(sortedFees.length / 2);
    const median =
      sortedFees.length % 2 === 0
        ? ((sortedFees[mid - 1] ?? 0) + (sortedFees[mid] ?? 0)) / 2
        : sortedFees[mid] ?? 0;

    // Helper to create priority fee IX based on chosen strategy
    const createPriorityFeeIx = (fee: number) => {
      return ComputeBudgetProgram.setComputeUnitPrice({
        microLamports: fee,
      });
    };

    return {
      min,
      median,
      max,
      // Return instructions for different fee levels
      instructions: {
        low: createPriorityFeeIx(min),
        medium: createPriorityFeeIx(median),
        high: createPriorityFeeIx(max),
      },
    };
  } catch (error) {
    console.error("Error getting priority fees:", error);
    throw error;
  }
}

/**
 * Send a transaction with priority fees
 * @param agent - SolanaAgentKit instance
 * @param tx - Transaction to send
 * @param priorityLevel - Priority level for the transaction ('low', 'medium', 'high')
 * @returns Transaction ID
 */
export async function sendTx(
  agent: SolanaAgentKit,
  tx: VersionedTransaction,
  otherKeypairs?: Keypair[]
) {

  tx.sign([agent.wallet, ...(otherKeypairs ?? [])]);
  let txid = await agent.connection.sendRawTransaction(tx.serialize(), {
    maxRetries: 5,
  });
  await agent.connection.confirmTransaction(txid);
  return txid;
}
