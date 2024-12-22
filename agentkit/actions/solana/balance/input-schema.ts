import { z } from "zod";

export const BalanceInputSchema = z.object({
    tokenAddress: z.string().optional().describe("The token address to check balance for. If not provided, returns SOL balance"),
}); 