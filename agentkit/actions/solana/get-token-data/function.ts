import { SolanaAgentKit } from "solana-agent-kit";
import { GetTokenDataArgumentsType, GetTokenDataResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";
import { getTokenDataByTicker } from "../utils/get-token-data";

/**
 * Gets the token data for a given ticker.
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the token data
 */
export async function getTokenData(
  solanaKit: SolanaAgentKit,
  args: GetTokenDataArgumentsType
): Promise<SolanaActionResult<GetTokenDataResultBodyType>> {
  try {

    const token = await getTokenDataByTicker(args.ticker);

    if (!token) {
      throw new Error('Failed to fetch token data');
    }

    return {
      message: `Found token data for ${args.ticker}`,
      body: {
        token
      }
    };
  } catch (error) {
    return {
      message: `Error getting token data: ${error}`,
    };
  }
}
