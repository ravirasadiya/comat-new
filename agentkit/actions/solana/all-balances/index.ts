import { SOLANA_ALL_BALANCES_NAME } from "./name";
import { SOLANA_ALL_BALANCES_PROMPT } from "./prompt";
import { AllBalancesInputSchema } from "./input-schema";
import { AllBalancesResultBodyType } from "./types";
import { getAllBalances } from "./function";
import { SolanaAction } from "../../solana-action";

export class AllBalancesAction implements SolanaAction<typeof AllBalancesInputSchema, AllBalancesResultBodyType> {
  public name = SOLANA_ALL_BALANCES_NAME;
  public description = SOLANA_ALL_BALANCES_PROMPT;
  public argsSchema = AllBalancesInputSchema;
  public func = getAllBalances;
} 