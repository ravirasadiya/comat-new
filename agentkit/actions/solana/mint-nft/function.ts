import { PublicKey } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { MintNFTArgumentsType, MintNFTResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Mint a new NFT in a collection on Solana blockchain
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the minting information
 */
export async function mintNFT(
  solanaKit: SolanaAgentKit,
  args: MintNFTArgumentsType
): Promise<SolanaActionResult<MintNFTResultBodyType>> {
  try {
    const collectionMint = new PublicKey(args.collectionMint);
    const recipient = args.recipient ? new PublicKey(args.recipient) : undefined;

    const result = await solanaKit.mintNFT(
      collectionMint,
      {
        name: args.name,
        uri: args.uri
      },
      recipient
    );

    return {
      message: `Successfully minted NFT ${args.name} in collection ${args.collectionMint}`,
      body: {
        mintAddress: result.mint.toString(),
        name: args.name,
        uri: args.uri,
        recipient: recipient?.toString() || result.mint.toString()
      }
    };
  } catch (error) {
    return {
      message: `Error minting NFT: ${error}`,
    };
  }
} 