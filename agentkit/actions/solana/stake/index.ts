import { SOLANA_STAKE_NAME } from "./name";
import { SOLANA_STAKE_PROMPT } from "./prompt";
import { StakeInputSchema } from "./input-schema";
import { StakeResultBodyType } from "./types";
import { stake } from "./function";
import { SolanaAction } from "../../solana-action";

export class StakeAction implements SolanaAction<typeof StakeInputSchema, StakeResultBodyType> {
  public name = SOLANA_STAKE_NAME;
  public description = SOLANA_STAKE_PROMPT;
  public argsSchema = StakeInputSchema;
  public func = stake;
} 