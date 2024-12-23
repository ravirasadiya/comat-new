import { z } from "zod";

export const GetSolanaAdviceInputSchema = z.object({
    tokenSymbol: z.string().describe("The token symbol to tell the user whether or not they should buy"),
    advice: z.string().describe("The advice to give the user"),
    buy: z.boolean().describe("Whether or not the user should buy the token"),
}); 