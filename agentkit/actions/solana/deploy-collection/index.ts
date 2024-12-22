import { SOLANA_DEPLOY_COLLECTION_NAME } from "./name";
import { SOLANA_DEPLOY_COLLECTION_PROMPT } from "./prompt";
import { DeployCollectionInputSchema } from "./input-schema";
import { DeployCollectionResultBodyType } from "./types";
import { deployCollection } from "./function";
import { SolanaAction } from "../../solana-action";

export class DeployCollectionAction implements SolanaAction<typeof DeployCollectionInputSchema, DeployCollectionResultBodyType> {
  public name = SOLANA_DEPLOY_COLLECTION_NAME;
  public description = SOLANA_DEPLOY_COLLECTION_PROMPT;
  public argsSchema = DeployCollectionInputSchema;
  public func = deployCollection;
} 