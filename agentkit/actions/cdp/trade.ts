import { CdpAction, CdpActionResult } from "./cdp-action";
import { Wallet, Amount } from "@coinbase/coinbase-sdk";
import { z } from "zod";

const TRADE_PROMPT = `
This tool will trade a specified amount of a 'from asset' to a 'to asset' for the wallet.

It takes the following inputs:
- The amount of the 'from asset' to trade
- The from asset ID to trade 
- The asset ID to receive from the trade

Important notes:
- Trades are only supported on mainnet networks (ie, 'base-mainnet', 'base', 'ethereum-mainnet', 'ethereum', etc.)
- Never allow trades on any non-mainnet network (ie, 'base-sepolia', 'ethereum-sepolia', etc.)
- When selling a native asset (e.g. 'eth' on base-mainnet), ensure there is sufficient balance to pay for the trade AND the gas cost of this trade
`;

/**
 * Input schema for trade action.
 */
export const TradeInput = z
  .object({
    amount: z.custom<Amount>().describe("The amount of the from asset to trade"),
    fromAssetId: z.string().describe("The from asset ID to trade"),
    toAssetId: z.string().describe("The to asset ID to receive from the trade"),
  })
  .strip()
  .describe("Instructions for trading assets");

type TradeResultBody = {
  transactionHash: string;
  toAmount: Amount;
};

/**
 * Trades a specified amount of a from asset to a to asset for the wallet.
 *
 * @param wallet - The wallet to trade the asset from.
 * @param args - The input arguments for the action.
 * @returns A message containing the trade details.
 */
export async function trade(wallet: Wallet, args: z.infer<typeof TradeInput>): Promise<CdpActionResult<TradeResultBody>> {
  try {
    const tradeResult = await wallet.createTrade({
      amount: args.amount,
      fromAssetId: args.fromAssetId,
      toAssetId: args.toAssetId,
    });

    const result = await tradeResult.wait();

    const transaction = result.getTransaction();

    if (!transaction) {
      throw new Error("Failed to get transaction");
    }

    const transactionHash = transaction.getTransactionHash();

    if (!transactionHash) {
      throw new Error("Failed to get transaction hash");
    }

    return {
      message: `Traded ${args.amount} of ${args.fromAssetId} for ${result.getToAmount()} of ${args.toAssetId}.\nTransaction hash for the trade: ${transactionHash}\nTransaction link for the trade: ${transaction.getTransactionLink()}`,
      body: {
        transactionHash,
        toAmount: result.getToAmount(),
      }
    };
  } catch (error) {
    return {
      message: `Error trading assets: ${error}`
    };
  }
}

/**
 * Trade action.
 */
export class TradeAction implements CdpAction<typeof TradeInput, TradeResultBody> {
  public name = "trade";
  public description = TRADE_PROMPT;
  public argsSchema = TradeInput;
  public func = trade;
}
