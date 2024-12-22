import { z } from "zod";

export const RegisterDomainInputSchema = z.object({
    name: z.string().describe("The domain name to register (without .sol)"),
    spaceKB: z.number().optional().describe("The amount of space to allocate in KB (default: 1)"),
}); 