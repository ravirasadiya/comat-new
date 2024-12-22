import { SOLANA_LAUNCH_PUMPFUN_TOKEN_NAME } from "./name";
import { SOLANA_LAUNCH_PUMPFUN_TOKEN_PROMPT } from "./prompt";
import { LaunchPumpfunTokenInputSchema } from "./input-schema";
import { LaunchPumpfunTokenResultBodyType } from "./types";
import { launchPumpfunToken } from "./function";
import { SolanaAction } from "../../solana-action";

export class LaunchPumpfunTokenAction implements SolanaAction<typeof LaunchPumpfunTokenInputSchema, LaunchPumpfunTokenResultBodyType> {
  public name = SOLANA_LAUNCH_PUMPFUN_TOKEN_NAME;
  public description = SOLANA_LAUNCH_PUMPFUN_TOKEN_PROMPT;
  public argsSchema = LaunchPumpfunTokenInputSchema;
  public func = launchPumpfunToken;
} 