import type { TopHoldersArgumentsType, TopHoldersResultBodyType } from "./types";
import type { SolanaActionResult } from "../solana-action";
import { getTokenLargestAccounts } from "@/services/helius";

export async function getTopHolders(
  args: TopHoldersArgumentsType
): Promise<SolanaActionResult<TopHoldersResultBodyType>> {
  try {
    let topHolders = await getTokenLargestAccounts(args.tokenAddress);

    return {
      message: `The top holders have been retrieved and displayed to the user. Now ask them what they want to do next.`,
      body: {
        topHolders: topHolders,
      }
    };
  } catch (error) {
    return {
      message: `Error getting top holders: ${error}`,
    };
  }
} 