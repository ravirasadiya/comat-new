import { SolanaAgentKit } from "solana-agent-kit";
import { LaunchPumpfunTokenArgumentsType, LaunchPumpfunTokenResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Launch a token on Pump.fun
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the launch information
 */
export async function launchPumpfunToken(
  solanaKit: SolanaAgentKit,
  args: LaunchPumpfunTokenArgumentsType
): Promise<SolanaActionResult<LaunchPumpfunTokenResultBodyType>> {
  try {
    await solanaKit.launchPumpFunToken(
      args.tokenName,
      args.tokenTicker,
      args.description,
      args.imageUrl,
      {
        twitter: args.twitter,
        telegram: args.telegram,
        website: args.website,
        initialLiquiditySOL: args.initialLiquiditySOL
      }
    );

    return {
      message: `Successfully launched token ${args.tokenName} (${args.tokenTicker}) on Pump.fun`,
      body: {
        tokenName: args.tokenName,
        tokenTicker: args.tokenTicker,
        description: args.description,
        imageUrl: args.imageUrl,
        socials: {
          twitter: args.twitter,
          telegram: args.telegram,
          website: args.website
        },
        initialLiquiditySOL: args.initialLiquiditySOL
      }
    };
  } catch (error) {
    return {
      message: `Error launching token on Pump.fun: ${error}`,
    };
  }
} 