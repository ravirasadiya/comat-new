import { z } from "zod";

export const ResolveDomainInputSchema = z.object({
    domain: z.string().describe("The domain name to resolve (e.g., 'mydomain.sol' or 'mydomain')"),
}); 