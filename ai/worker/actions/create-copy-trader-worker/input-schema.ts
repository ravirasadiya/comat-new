import { z } from "zod";

export const CopyTraderWorkerInputSchema = z.object({
    accountAddress: z.string().describe("The address to watch").nullable().default(null),
    amount: z.number().describe("The amount of SOL to buy").nullable().default(null),
    threshold: z.number().describe("The threshold to buy the token").nullable().default(null),
    percentageGain: z.number().describe("The percentage gain to sell the token").nullable().default(null),
}); 