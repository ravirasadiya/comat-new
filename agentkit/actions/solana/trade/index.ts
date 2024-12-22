import { SOLANA_TRADE_NAME } from "./name";
import { SOLANA_TRADE_PROMPT } from "./prompt";
import { TradeInputSchema } from "./input-schema";
import { TradeResultBodyType } from "./types";
import { trade } from "./function";
import { SolanaAction } from "../../solana-action";

export class TradeAction implements SolanaAction<typeof TradeInputSchema, TradeResultBodyType> {
  public name = SOLANA_TRADE_NAME;
  public description = SOLANA_TRADE_PROMPT;
  public argsSchema = TradeInputSchema;
  public func = trade;
} 