import { SolanaAgentKit } from "solana-agent-kit";
import { RequestFundsArgumentsType, RequestFundsResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Request SOL from Solana faucet (devnet/testnet only)
 *
 * @param solanaKit - The Solana agent kit instance
 * @param _args - The input arguments for the action (none required)
 * @returns A message containing the request information
 */
export async function requestFunds(
  solanaKit: SolanaAgentKit,
  _args: RequestFundsArgumentsType
): Promise<SolanaActionResult<RequestFundsResultBodyType>> {
  try {
    await solanaKit.requestFaucetFunds();

    return {
      message: "Successfully requested faucet funds",
      body: {
        network: solanaKit.connection.rpcEndpoint.split("/")[2]
      }
    };
  } catch (error) {
    return {
      message: `Error requesting funds: ${error}`,
    };
  }
} 