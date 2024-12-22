import { SOLANA_GET_TRENDING_TOKENS_NAME } from "./name";
import { SOLANA_GET_TRENDING_TOKENS_PROMPT } from "./prompt";
import { GetTrendingTokensInputSchema } from "./input-schema";
import { GetTrendingTokensResultBodyType } from "./types";
import { getTrendingTokens } from "./function";
import { SolanaAction } from "../../solana-action";

export class GetTrendingTokensAction implements SolanaAction<typeof GetTrendingTokensInputSchema, GetTrendingTokensResultBodyType> {
  public name = SOLANA_GET_TRENDING_TOKENS_NAME;
  public description = SOLANA_GET_TRENDING_TOKENS_PROMPT;
  public argsSchema = GetTrendingTokensInputSchema;
  public func = getTrendingTokens;
} 