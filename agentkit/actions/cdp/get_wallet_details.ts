import { z } from "zod";
import { CdpAction } from "./cdp_action";
import { Wallet } from "@coinbase/coinbase-sdk";
import { GET_WALLET_DETAILS } from "./action-names";

/**
 * Input schema for get wallet details action.
 * This schema intentionally accepts no parameters as the wallet is injected separately.
 */
export const GetWalletDetailsInput = z.object({});

/**
 * Gets a wallet's details.
 *
 * @param wallet - The wallet to get details from.
 * @param _ - The input arguments for the action.
 * @returns A message containing the wallet details.
 */
export async function getWalletDetails(
  wallet: Wallet,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: z.infer<typeof GetWalletDetailsInput>,
): Promise<{
  message: string;
  address?: string;
}> {
  try {
    const defaultAddress = await wallet.getDefaultAddress();
    return {
      message: `Wallet: ${wallet.getId()} on network: ${wallet.getNetworkId()} with default address: ${defaultAddress.getId()}`,
      address: defaultAddress.getId()
    };
  } catch (error) {
    return {
      message: `Error getting wallet details: ${error}`,
    };
  }
}

/**
 * Get wallet details action.
 */
export class GetWalletDetailsAction implements CdpAction<typeof GetWalletDetailsInput> {
  /**
   * The name of the action
   */
  public name = GET_WALLET_DETAILS;

  /**
   * A description of what the action does
   */
  public description = "This tool will get details about the MPC Wallet.";

  /**
   * Schema for validating action arguments
   */
  public argsSchema = GetWalletDetailsInput;

  /**
   * The function to execute for this action
   */
  public func = getWalletDetails;
}
