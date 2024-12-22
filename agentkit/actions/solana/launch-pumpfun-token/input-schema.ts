import { z } from "zod";

export const LaunchPumpfunTokenInputSchema = z.object({
    tokenName: z.string().describe("The name of the token"),
    tokenTicker: z.string().describe("The token's ticker symbol"),
    description: z.string().describe("Description of the token"),
    imageUrl: z.string().describe("URL of the token's image"),
    twitter: z.string().optional().describe("Twitter handle or URL"),
    telegram: z.string().optional().describe("Telegram group URL"),
    website: z.string().optional().describe("Project website URL"),
    initialLiquiditySOL: z.number().optional().describe("Initial liquidity in SOL to provide"),
}); 