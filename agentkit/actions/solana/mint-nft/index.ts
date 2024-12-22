import { SOLANA_MINT_NFT_NAME } from "./name";
import { SOLANA_MINT_NFT_PROMPT } from "./prompt";
import { MintNFTInputSchema } from "./input-schema";
import { MintNFTResultBodyType } from "./types";
import { mintNFT } from "./function";
import { SolanaAction } from "../../solana-action";

export class MintNFTAction implements SolanaAction<typeof MintNFTInputSchema, MintNFTResultBodyType> {
  public name = SOLANA_MINT_NFT_NAME;
  public description = SOLANA_MINT_NFT_PROMPT;
  public argsSchema = MintNFTInputSchema;
  public func = mintNFT;
} 