import { SolanaAgentKit } from "solana-agent-kit";
import { DeployCollectionArgumentsType, DeployCollectionResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Deploy a new NFT collection on Solana blockchain
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the deployment information
 */
export async function deployCollection(
  solanaKit: SolanaAgentKit,
  args: DeployCollectionArgumentsType
): Promise<SolanaActionResult<DeployCollectionResultBodyType>> {
  try {
    const result = await solanaKit.deployCollection({
      name: args.name,
      uri: args.uri,
      royaltyBasisPoints: args.royaltyBasisPoints
    });

    return {
      message: `Successfully deployed collection ${args.name}`,
      body: {
        collectionAddress: result.collectionAddress.toString(),
        name: args.name
      }
    };
  } catch (error) {
    return {
      message: `Error deploying collection: ${error}`,
    };
  }
} 