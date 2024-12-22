import { SOLANA_TRANSFER_NAME } from "./name";
import { SOLANA_TRANSFER_PROMPT } from "./prompt";
import { TransferInputSchema } from "./input-schema";
import { TransferResultBodyType } from "./types";
import { transfer } from "./function";
import { SolanaAction } from "../../solana-action";

export class TransferAction implements SolanaAction<typeof TransferInputSchema, TransferResultBodyType> {
  public name = SOLANA_TRANSFER_NAME;
  public description = SOLANA_TRANSFER_PROMPT;
  public argsSchema = TransferInputSchema;
  public func = transfer;
} 