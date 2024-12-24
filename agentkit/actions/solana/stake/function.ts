import { SolanaAgentKit } from "solana-agent-kit";
import { StakeArgumentsType, StakeResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";
import { stakeWithJup } from "./utils";

/**
 * Get the wallet address of the agent
 *
 * @param solanaKit - The Solana agent kit instance
 * @param _args - The input arguments for the action (none required)
 * @returns A message containing the wallet address
 */
export async function stake(
  solanaKit: SolanaAgentKit,
  args: StakeArgumentsType
): Promise<SolanaActionResult<StakeResultBodyType>> {
  try {
    const tx = await stakeWithJup(solanaKit, args.amount);

    return {
      message: `Staked ${args.amount} SOL for JupSOL with transaction hash ${tx}`,
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