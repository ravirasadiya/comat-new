import { CdpAction, CdpActionResult } from "../cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import Decimal from "decimal.js";
import { z } from "zod";
import { GET_BALANCE } from "./action-names";

const GET_BALANCE_PROMPT = `
This tool will get the balance of all the addresses in the wallet for a given asset. 
It takes the asset ID as input. Always use 'eth' for the native asset ETH and 'usdc' for USDC.
`;

/**
 * Input schema for get balance action.
 */
export const GetBalanceInput = z
  .object({
    assetId: z.string().describe("The asset ID to get the balance for"),
  })
  .strip()
  .describe("Instructions for getting wallet balance");

export type GetBalanceResultBody = {
  balance: Decimal;
};

/**
 * Gets balance for all addresses in the wallet for a given asset.
 *
 * @param wallet - The wallet to get the balance for.
 * @param args - The input arguments for the action.
 * @returns A message containing the balance information.
 */
export async function getBalance(
  wallet: Wallet,
  args: z.infer<typeof GetBalanceInput>,
): Promise<CdpActionResult<GetBalanceResultBody>> {
  try {
    const addresses = await wallet.getDefaultAddress();
    const balance = await addresses.getBalance(args.assetId);
    return {
      message: `Balances for wallet ${wallet.getId()}:\n${balance}`,
      body: {
        balance: balance
      }
    };
  } catch (error) {
    return {
      message: `Error getting balance for all addresses in the wallet: ${error}`,
    };
  }
}

/**
 * Get wallet balance action.
 */
export class GetBalanceAction implements CdpAction<typeof GetBalanceInput, GetBalanceResultBody> {
  public name = GET_BALANCE;
  public description = GET_BALANCE_PROMPT;
  public argsSchema = GetBalanceInput;
  public func = getBalance;
}
