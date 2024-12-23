import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { TradeArgumentsType, TradeResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";
import { trade as tradeUtil } from "./utils";
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

    const inputMintDecimals = await solanaKit.getTokenDataByAddress(inputMint.toString());
    if (!inputMintDecimals) {
      throw new Error("Input mint not found");
    }

    const tx = await tradeUtil(
      solanaKit,
      outputMint,
      args.inputAmount,
      inputMintDecimals.decimals,
      inputMint,
      args.slippageBps
    );
    

    return {
      message: `Successfully swapped ${args.inputAmount} ${args.inputMint || "SOL"} for ${args.outputMint}. Now call the solana_balance tool with ${args.outputMint} and show the user their new balance.`,
      body: {
        transaction: tx,
        inputAmount: args.inputAmount,
        inputToken: args.inputMint || "SOL",
        outputToken: args.outputMint
      }
    };
  } catch (error) {
    console.error(error);
    return {
      message: `Error executing trade: ${error}`,
    };
  }
} 