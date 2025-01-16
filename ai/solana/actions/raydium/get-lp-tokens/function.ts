import { getLpTokensByAddress } from "@/services/raydium";

import type { GetLpTokensArgumentsType, GetLpTokensResultBodyType } from "./types";
import type { SolanaActionResult } from "../../solana-action";

/**
 * Gets the token data for a given ticker.
 *
 * @param connection - The Solana connection instance
 * @param args - The input arguments for the action
 * @returns A message containing the token data
 */
export async function getLpTokens(args: GetLpTokensArgumentsType): Promise<SolanaActionResult<GetLpTokensResultBodyType>> {
    try {
        const lpTokens = await getLpTokensByAddress(args.address);

        return {
            message: `Successfully retrieved ${lpTokens.length} LP Tokens for address ${args.address}`,
            body: {
                lpTokens
            }
        }
    } catch (error) {
        return {
            message: `Failed to retrieve LP Tokens for address ${args.address}`
        }
    }
}