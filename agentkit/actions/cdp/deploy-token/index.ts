import { CdpAction } from "@/agentkit";

import { DEPLOY_TOKEN_NAME } from "./name";
import { DEPLOY_TOKEN_PROMPT } from "./prompt";
import { DeployTokenInputSchema } from "./input-schema";
import { deployToken } from "./function";

import { DeployTokenSchemaType, DeployTokenResultBodyType } from "./types";

export class DeployTokenAction implements CdpAction<DeployTokenSchemaType, DeployTokenResultBodyType> {
  public name = DEPLOY_TOKEN_NAME;
  public description = DEPLOY_TOKEN_PROMPT;
  public argsSchema = DeployTokenInputSchema;
  public func = deployToken;
} 