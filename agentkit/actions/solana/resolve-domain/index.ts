import { SOLANA_RESOLVE_DOMAIN_NAME } from "./name";
import { SOLANA_RESOLVE_DOMAIN_PROMPT } from "./prompt";
import { ResolveDomainInputSchema } from "./input-schema";
import { ResolveDomainResultBodyType } from "./types";
import { resolveDomain } from "./function";
import { SolanaAction } from "../../solana-action";

export class ResolveDomainAction implements SolanaAction<typeof ResolveDomainInputSchema, ResolveDomainResultBodyType> {
  public name = SOLANA_RESOLVE_DOMAIN_NAME;
  public description = SOLANA_RESOLVE_DOMAIN_PROMPT;
  public argsSchema = ResolveDomainInputSchema;
  public func = resolveDomain;
} 