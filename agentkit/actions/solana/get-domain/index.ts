import { SOLANA_GET_DOMAIN_NAME } from "./name";
import { SOLANA_GET_DOMAIN_PROMPT } from "./prompt";
import { GetDomainInputSchema } from "./input-schema";
import { GetDomainResultBodyType } from "./types";
import { getDomain } from "./function";
import { SolanaAction } from "../../solana-action";

export class GetDomainAction implements SolanaAction<typeof GetDomainInputSchema, GetDomainResultBodyType> {
  public name = SOLANA_GET_DOMAIN_NAME;
  public description = SOLANA_GET_DOMAIN_PROMPT;
  public argsSchema = GetDomainInputSchema;
  public func = getDomain;
} 