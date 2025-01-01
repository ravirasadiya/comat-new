import { GET_SOLANA_ADVICE_NAME } from "./name";
import { GET_SOLANA_ADVICE_PROMPT } from "./prompt";
import { GetSolanaAdviceInputSchema } from "./input-schema";
import { getAdvice } from "./function";

import type { GetSolanaAdviceResultBodyType } from "./types";
import type { SolanaAction } from "../solana-action";

export class SolanaGetAdviceAction implements SolanaAction<typeof GetSolanaAdviceInputSchema, GetSolanaAdviceResultBodyType> {
  public name = GET_SOLANA_ADVICE_NAME;
  public description = GET_SOLANA_ADVICE_PROMPT;
  public argsSchema = GetSolanaAdviceInputSchema;
  public func = getAdvice;
} 