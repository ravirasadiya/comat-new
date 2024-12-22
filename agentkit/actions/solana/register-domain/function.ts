import { SolanaAgentKit } from "solana-agent-kit";
import { RegisterDomainArgumentsType, RegisterDomainResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Register a .sol domain name for your wallet
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the registration information
 */
export async function registerDomain(
  solanaKit: SolanaAgentKit,
  args: RegisterDomainArgumentsType
): Promise<SolanaActionResult<RegisterDomainResultBodyType>> {
  try {
    const tx = await solanaKit.registerDomain(args.name, args.spaceKB);

    return {
      message: `Successfully registered domain ${args.name}.sol`,
      body: {
        transaction: tx,
        domain: `${args.name}.sol`,
        spaceKB: args.spaceKB || 1
      }
    };
  } catch (error) {
    return {
      message: `Error registering domain: ${error}`,
    };
  }
} 