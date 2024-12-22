import { SOLANA_GET_TOKEN_DATA_NAME } from "./name";
import { SOLANA_GET_TOKEN_DATA_PROMPT } from "./prompt";
import { GetTokenDataInputSchema } from "./input-schema";
import { GetTokenDataResultBodyType } from "./types";
import { getTokenData } from "./function";
import { SolanaAction } from "../../solana-action";

export class GetTokenDataAction implements SolanaAction<typeof GetTokenDataInputSchema, GetTokenDataResultBodyType> {
  public name = SOLANA_GET_TOKEN_DATA_NAME;
  public description = SOLANA_GET_TOKEN_DATA_PROMPT;
  public argsSchema = GetTokenDataInputSchema;
  public func = getTokenData;
} 