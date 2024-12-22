import { z } from "zod";

export const GetTokenDataInputSchema = z.object({
    ticker: z.string()
        .describe("The ticker of the token to get data for"),
}); 