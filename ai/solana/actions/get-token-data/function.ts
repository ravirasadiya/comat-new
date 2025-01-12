import { getTokenDataAndPairByTicker, getTokenDataAndPairByAddress } from "@/lib/solana";

import type { SolanaActionResult } from "../solana-action";

import type { GetTokenDataArgumentsType, GetTokenDataResultBodyType } from "./types";
import { getLPData } from "@/services/raydium/get-lp-data";

/**
 * Gets the token data for a given ticker.
 *
 * @param connection - The Solana connection instance
 * @param args - The input arguments for the action
 * @returns A message containing the token data
 */
export async function getTokenData(args: GetTokenDataArgumentsType): Promise<SolanaActionResult<GetTokenDataResultBodyType>> {
  try {

    if (args.address) {
        const token = await getTokenDataAndPairByAddress(args.address);
        if (!token) {
            throw new Error('Failed to fetch token data');
        }
        const pool = await getLPData(token.pair.pairAddress);
        if (!pool) {
            throw new Error('Failed to fetch pool data');
        }
        return {
            message: `Found token data for ${args.address}. The user is shown the following token data in the UI, DO NOT REITERATE THE TOKEN DATA. Ask the user what they want to do next.`,
            body: {
                token: token.token,
                pair: token.pair,
                pool: pool.data[0]
            }
        }
    } else if (args.ticker) {
        const token = await getTokenDataAndPairByTicker(args.ticker);
        if (!token) {
            throw new Error('Failed to fetch token data');
        }
        const pool = await getLPData(token.pair.pairAddress);
        if (!pool) {
            throw new Error('Failed to fetch pool data');
        }
        return {
            message: `Found token data for ${args.ticker}. The user is shown the following token data in the UI, DO NOT REITERATE THE TOKEN DATA. Ask the user what they want to do next.`,
            body: {
                token: token.token,
                pair: token.pair,
                pool: pool.data[0]
            }
        }
    } else {
        throw new Error('Invalid input');
    }
  } catch (error) {
    console.error(error);
    return {
      message: `Error getting token data: ${error}`,
    };
  }
}