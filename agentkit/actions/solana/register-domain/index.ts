import { SOLANA_REGISTER_DOMAIN_NAME } from "./name";
import { SOLANA_REGISTER_DOMAIN_PROMPT } from "./prompt";
import { RegisterDomainInputSchema } from "./input-schema";
import { RegisterDomainResultBodyType } from "./types";
import { registerDomain } from "./function";
import { SolanaAction } from "../../solana-action";

export class RegisterDomainAction implements SolanaAction<typeof RegisterDomainInputSchema, RegisterDomainResultBodyType> {
  public name = SOLANA_REGISTER_DOMAIN_NAME;
  public description = SOLANA_REGISTER_DOMAIN_PROMPT;
  public argsSchema = RegisterDomainInputSchema;
  public func = registerDomain;
} 