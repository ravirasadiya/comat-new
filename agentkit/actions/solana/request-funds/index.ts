import { SOLANA_REQUEST_FUNDS_NAME } from "./name";
import { SOLANA_REQUEST_FUNDS_PROMPT } from "./prompt";
import { RequestFundsInputSchema } from "./input-schema";
import { RequestFundsResultBodyType } from "./types";
import { requestFunds } from "./function";
import { SolanaAction } from "../../solana-action";

export class RequestFundsAction implements SolanaAction<typeof RequestFundsInputSchema, RequestFundsResultBodyType> {
  public name = SOLANA_REQUEST_FUNDS_NAME;
  public description = SOLANA_REQUEST_FUNDS_PROMPT;
  public argsSchema = RequestFundsInputSchema;
  public func = requestFunds;
} 