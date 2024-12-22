import { CdpAction } from "../../cdp_action";
import { SOLANA_DEPLOY_TOKEN_NAME } from "./name";
import { SOLANA_DEPLOY_TOKEN_PROMPT } from "./prompt";
import { DeployTokenInputSchema } from "./input-schema";
import { DeployTokenResultBodyType } from "./types";
import { deployToken } from "./function";
import { SolanaAction } from "../../solana-action";

export class DeployTokenAction implements SolanaAction<typeof DeployTokenInputSchema, DeployTokenResultBodyType> {
  public name = SOLANA_DEPLOY_TOKEN_NAME;
  public description = SOLANA_DEPLOY_TOKEN_PROMPT;
  public argsSchema = DeployTokenInputSchema;
  public func = deployToken;
} 