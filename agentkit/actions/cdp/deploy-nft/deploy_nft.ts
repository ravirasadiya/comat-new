
import { CdpAction } from "@/agentkit";

import { DEPLOY_NFT_NAME } from "./name";
import { DEPLOY_NFT_PROMPT } from "./prompt";
import { DeployNftInputSchema } from "./input-schema";
import { deployNft } from "./function";

import { DeployNftSchemaType, DeployNftResultBodyType } from "./types";

export class DeployNftAction implements CdpAction<DeployNftSchemaType, DeployNftResultBodyType> {
  public name = DEPLOY_NFT_NAME;
  public description = DEPLOY_NFT_PROMPT;
  public argsSchema = DeployNftInputSchema;
  public func = deployNft;
}
