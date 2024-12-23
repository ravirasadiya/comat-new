import { SolanaAgentKit } from "solana-agent-kit";
import { UnstakeArgumentsType, UnstakeResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";
import { unstakeWithJup } from "./utils";

/**
 * Get the wallet address of the agent
 *
 * @param solanaKit - The Solana agent kit instance
 * @param _args - The input arguments for the action (none required)
 * @returns A message containing the wallet address
 */
export async function unstake(
  solanaKit: SolanaAgentKit,
  args: UnstakeArgumentsType
): Promise<SolanaActionResult<UnstakeResultBodyType>> {
  try {
    const tx = await unstakeWithJup(solanaKit, args.amount);

    return {
      message: `Unstaked ${args.amount} JupSOL. Now get the balance of your SOL with the appropriate tools.`,
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