import { PublicKey } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { TransferArgumentsType, TransferResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Transfer tokens or SOL to another address
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the transfer information
 */
export async function transfer(
  solanaKit: SolanaAgentKit,
  args: TransferArgumentsType
): Promise<SolanaActionResult<TransferResultBodyType>> {
  try {
    const recipient = new PublicKey(args.to);
    const mintAddress = args.mint ? new PublicKey(args.mint) : undefined;
    
    const tx = await solanaKit.transfer(recipient, args.amount, mintAddress);

    return {
      message: `Successfully transferred ${args.amount} ${args.mint || "SOL"} to ${args.to}`,
      body: {
        amount: args.amount,
        recipient: args.to,
        token: args.mint || "SOL",
        transaction: tx
      }
    };
  } catch (error) {
    return {
      message: `Error transferring tokens: ${error}`,
    };
  }
} 