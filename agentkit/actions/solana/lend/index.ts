import { SOLANA_LEND_NAME } from "./name";
import { SOLANA_LEND_PROMPT } from "./prompt";
import { LendInputSchema } from "./input-schema";
import { LendResultBodyType } from "./types";
import { lend } from "./function";
import { SolanaAction } from "../../solana-action";

export class LendAction implements SolanaAction<typeof LendInputSchema, LendResultBodyType> {
  public name = SOLANA_LEND_NAME;
  public description = SOLANA_LEND_PROMPT;
  public argsSchema = LendInputSchema;
  public func = lend;
} 