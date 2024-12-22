import { SolanaAgentKit } from "solana-agent-kit";
import { DeployTokenArgumentsType, DeployTokenResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Deploy a new token on Solana blockchain
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the deployment information
 */
export async function deployToken(
  solanaKit: SolanaAgentKit,
  args: DeployTokenArgumentsType
): Promise<SolanaActionResult<DeployTokenResultBodyType>> {
  try {
    const result = await solanaKit.deployToken(
      args.name,
      args.uri,
      args.symbol,
      args.decimals,
      args.initialSupply
    );

    return {
      message: `Successfully deployed token ${args.name} (${args.symbol})`,
      body: {
        mintAddress: result.mint.toString(),
        name: args.name,
        symbol: args.symbol,
        decimals: args.decimals || 9
      }
    };
  } catch (error) {
    return {
      message: `Error deploying token: ${error}`,
    };
  }
} 