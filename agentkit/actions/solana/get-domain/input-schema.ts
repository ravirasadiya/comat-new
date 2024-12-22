import { z } from "zod";

export const GetDomainInputSchema = z.object({
    account: z.string().describe("The account address to get the primary domain for"),
}); 