import { z } from "zod";

export const MintNFTInputSchema = z.object({
    collectionMint: z.string().describe("The address of the collection to mint into"),
    name: z.string().describe("The name of the NFT"),
    uri: z.string().describe("The URI for the NFT's metadata"),
    recipient: z.string().optional().describe("The wallet to receive the NFT (defaults to agent's wallet)"),
}); 