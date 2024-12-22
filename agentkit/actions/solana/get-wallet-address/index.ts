import { SOLANA_GET_WALLET_ADDRESS_NAME } from "./name";
import { SOLANA_GET_WALLET_ADDRESS_PROMPT } from "./prompt";
import { GetWalletAddressInputSchema } from "./input-schema";
import { GetWalletAddressResultBodyType } from "./types";
import { getWalletAddress } from "./function";
import { SolanaAction } from "../../solana-action";

export class GetWalletAddressAction implements SolanaAction<typeof GetWalletAddressInputSchema, GetWalletAddressResultBodyType> {
  public name = SOLANA_GET_WALLET_ADDRESS_NAME;
  public description = SOLANA_GET_WALLET_ADDRESS_PROMPT;
  public argsSchema = GetWalletAddressInputSchema;
  public func = getWalletAddress;
} 