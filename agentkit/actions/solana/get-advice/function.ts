import { SolanaAgentKit } from "solana-agent-kit";
import { GetSolanaAdviceArgumentsType, GetSolanaAdviceResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Gets the balance of a Solana wallet or token account.
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the balance information
 */
export async function getAdvice(
  solanaKit: SolanaAgentKit,
  args: GetSolanaAdviceArgumentsType
): Promise<SolanaActionResult<GetSolanaAdviceResultBodyType>> {
  return {
    message: args.advice,
    body: {
      advice: args.advice,
      buy: args.buy,
      tokenSymbol: args.tokenSymbol
    }
  };
} 