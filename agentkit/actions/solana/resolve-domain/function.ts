import { SolanaAgentKit } from "solana-agent-kit";
import { ResolveDomainArgumentsType, ResolveDomainResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Resolve a .sol domain to a Solana PublicKey
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the resolved address
 */
export async function resolveDomain(
  solanaKit: SolanaAgentKit,
  args: ResolveDomainArgumentsType
): Promise<SolanaActionResult<ResolveDomainResultBodyType>> {
  try {
    const publicKey = await solanaKit.resolveSolDomain(args.domain);

    return {
      message: `Successfully resolved domain ${args.domain} to ${publicKey.toBase58()}`,
      body: {
        publicKey: publicKey.toBase58(),
        domain: args.domain
      }
    };
  } catch (error) {
    return {
      message: `Error resolving domain: ${error}`,
    };
  }
} 