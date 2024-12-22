import { PublicKey } from "@solana/web3.js";
import { SolanaAgentKit } from "solana-agent-kit";
import { GetDomainArgumentsType, GetDomainResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Get the primary .sol domain associated with a Solana account
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the domain information
 */
export async function getDomain(
  solanaKit: SolanaAgentKit,
  args: GetDomainArgumentsType
): Promise<SolanaActionResult<GetDomainResultBodyType>> {
  try {
    const account = new PublicKey(args.account);
    const domain = await solanaKit.getPrimaryDomain(account);

    return {
      message: domain 
        ? `Primary domain for ${args.account} is ${domain}`
        : `No primary domain found for ${args.account}`,
      body: {
        domain,
        account: args.account
      }
    };
  } catch (error) {
    return {
      message: `Error getting primary domain: ${error}`,
    };
  }
} 