import { SolanaAgentKit } from "solana-agent-kit";
import { GetWalletAddressArgumentsType, GetWalletAddressResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Get the wallet address of the agent
 *
 * @param solanaKit - The Solana agent kit instance
 * @param _args - The input arguments for the action (none required)
 * @returns A message containing the wallet address
 */
export async function getWalletAddress(
  solanaKit: SolanaAgentKit,
  _args: GetWalletAddressArgumentsType
): Promise<SolanaActionResult<GetWalletAddressResultBodyType>> {
  try {
    const address = solanaKit.wallet_address.toString();

    return {
      message: `Agent's wallet address: ${address}`,
      body: {
        address
      }
    };
  } catch (error) {
    return {
      message: `Error getting wallet address: ${error}`,
    };
  }
} 