import { getTokenDataAndPairByTicker } from "@/lib/solana";

import type { SolanaActionResult } from "../solana-action";

import type { GetTokenAddressArgumentsType, GetTokenAddressResultBodyType } from "./types";

/**
 * Gets the token data for a given ticker.
 *
 * @param connection - The Solana connection instance
 * @param args - The input arguments for the action
 * @returns A message containing the token data
 */
export async function getTokenAddress(args: GetTokenAddressArgumentsType): Promise<SolanaActionResult<GetTokenAddressResultBodyType>> {
  try {

    const response = await getTokenDataAndPairByTicker(args.symbol);
    if (!response) {
        throw new Error('Failed to fetch token data');
    }
    return {
        message: `Found token address for ${args.symbol}. The user is shown the following token address in the UI, DO NOT REITERATE THE TOKEN ADDRESS. Ask the user what they want to do next.`,
        body: {
            address: response.token.address,
        }
    }
  } catch (error) {
    return {
      message: `Error getting token data: ${error}`,
    };
  }
}