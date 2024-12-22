import { PublicKey } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { BalanceArgumentsType, BalanceResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Gets the balance of a Solana wallet or token account.
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the balance information
 */
export async function getBalance(
  solanaKit: SolanaAgentKit,
  args: BalanceArgumentsType
): Promise<SolanaActionResult<BalanceResultBodyType>> {
  try {
    const tokenAddress = args.tokenAddress ? new PublicKey(args.tokenAddress) : undefined;
    const balance = await solanaKit.getBalance(tokenAddress);

    return {
      message: `Balance: ${balance} ${args.tokenAddress || "SOL"}`,
      body: {
        balance: balance ?? 0,
        token: args.tokenAddress || "SOL"
      }
    };
  } catch (error) {
    return {
      message: `Error getting balance: ${error}`,
      body: {
        balance: 0,
        token: args.tokenAddress || "SOL"
      }
    };
  }
} 