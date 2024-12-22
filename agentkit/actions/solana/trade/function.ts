import { PublicKey } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { TradeArgumentsType, TradeResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Swap tokens using Jupiter Exchange
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the trade information
 */
export async function trade(
  solanaKit: SolanaAgentKit,
  args: TradeArgumentsType
): Promise<SolanaActionResult<TradeResultBodyType>> {
  try {
    const outputMint = new PublicKey(args.outputMint);
    const inputMint = args.inputMint ? new PublicKey(args.inputMint) : new PublicKey("So11111111111111111111111111111111111111112");

    const tx = await solanaKit.trade(
      outputMint,
      args.inputAmount,
      inputMint,
      args.slippageBps
    );

    return {
      message: `Successfully swapped ${args.inputAmount} ${args.inputMint || "SOL"} for ${args.outputMint}`,
      body: {
        transaction: tx,
        inputAmount: args.inputAmount,
        inputToken: args.inputMint || "SOL",
        outputToken: args.outputMint
      }
    };
  } catch (error) {
    return {
      message: `Error executing trade: ${error}`,
    };
  }
} 