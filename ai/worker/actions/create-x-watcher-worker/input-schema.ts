import { z } from "zod";

export const XWatcherWorkerInputSchema = z.object({
    accountUrl: z.string().optional().describe("The twitter account to watch"),
    amount: z.number().optional().describe("The amount of SOL to buy"),
}); 