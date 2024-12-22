import { z } from "zod";

export const DeployTokenInputSchema = z.object({
    name: z.string().describe("The name of the token"),
    uri: z.string().describe("The URI for the token's metadata"),
    symbol: z.string().describe("The token's symbol"),
    decimals: z.number().optional().describe("The number of decimals for the token (default: 9)"),
    initialSupply: z.number().optional().describe("The initial supply of tokens to mint"),
}); 