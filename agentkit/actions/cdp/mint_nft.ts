import { CdpAction, CdpActionResult } from "../cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { z } from "zod";
import { MINT_NFT } from "./action-names";

const MINT_NFT_PROMPT = `
This tool will mint an NFT (ERC-721) to a specified destination address onchain via a contract invocation. 
It takes the contract address of the NFT onchain and the destination address onchain that will receive the NFT as inputs. 
Do not use the contract address as the destination address. If you are unsure of the destination address, please ask the user before proceeding.
`;

/**
 * Input schema for mint NFT action.
 */
export const MintNftInput = z
  .object({
    contractAddress: z.string().describe("The contract address of the NFT to mint"),
    destination: z.string().describe("The destination address that will receive the NFT"),
  })
  .strip()
  .describe("Instructions for minting an NFT");

export type MintNftResultBody = {
  transactionHash: string;
};

/**
 * Mints an NFT (ERC-721) to a specified destination address onchain.
 *
 * @param wallet - The wallet to mint the NFT from.
 * @param args - The input arguments for the action.
 * @returns A message containing the NFT mint details.
 */
export async function mintNft(wallet: Wallet, args: z.infer<typeof MintNftInput>): Promise<CdpActionResult<MintNftResultBody>> {
  const mintArgs = {
    to: args.destination,
    quantity: "1",
  };

  try {
    const mintInvocation = await wallet.invokeContract({
      contractAddress: args.contractAddress,
      method: "mint",
      args: mintArgs,
    });

    const result = await mintInvocation.wait();

    const transaction = result.getTransaction();

    const transactionHash = transaction.getTransactionHash();

    console.log(transaction.content())

    if (!transactionHash) {
      throw new Error("Failed to get transaction hash");
    }

    return {
      message: `Minted NFT from contract ${args.contractAddress} to address ${args.destination} on network ${wallet.getNetworkId()}.\nTransaction hash for the mint: ${transactionHash}\nTransaction link for the mint: ${result.getTransaction().getTransactionLink()}`,
      body: {
        transactionHash
      }
    };
  } catch (error) {
    return {
      message: `Error minting NFT: ${error}`
    };
  }
}

/**
 * Mint NFT action.
 */
export class MintNftAction implements CdpAction<typeof MintNftInput, MintNftResultBody> {
  public name = MINT_NFT;
  public description = MINT_NFT_PROMPT;
  public argsSchema = MintNftInput;
  public func = mintNft;
}
