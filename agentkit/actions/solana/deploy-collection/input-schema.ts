import { z } from "zod";

export const DeployCollectionInputSchema = z.object({
    name: z.string().describe("The name of the collection"),
    uri: z.string().describe("The URI for the collection's metadata"),
    royaltyBasisPoints: z.number().optional().describe("The royalty basis points (e.g., 500 for 5%)"),
}); 