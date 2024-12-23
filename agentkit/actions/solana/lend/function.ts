import { SolanaAgentKit } from "solana-agent-kit";
import { LendArgumentsType, LendResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";
import { lendAsset } from "./utils";

/**
 * Get the wallet address of the agent
 *
 * @param solanaKit - The Solana agent kit instance
 * @param _args - The input arguments for the action (none required)
 * @returns A message containing the wallet address
 */
export async function lend(
  solanaKit: SolanaAgentKit,
  args: LendArgumentsType
): Promise<SolanaActionResult<LendResultBodyType>> {
  try {
    const tx = await lendAsset(solanaKit, args.amount);

    return {
      message: `Lending ${args.amount} USDC`,
      body: {
        tx
      }
    };
  } catch (error) {
    return {
      message: `Error getting wallet address: ${error}`,
    };
  }
} 