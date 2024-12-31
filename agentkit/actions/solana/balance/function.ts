import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";
import { SolanaAgentKit } from "solana-agent-kit";
import { BalanceArgumentsType, BalanceResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";

/**
 * Gets the balance of a Solana wallet or token account.
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the balance information
 */
export async function getBalance(
  solanaKit: SolanaAgentKit,
  args: BalanceArgumentsType
): Promise<SolanaActionResult<BalanceResultBodyType>> {
  try {
    let balance: number;
    
    if (!args.tokenAddress) {
      // Get SOL balance
      balance = await solanaKit.connection.getBalance(new PublicKey(args.walletAddress)) / LAMPORTS_PER_SOL;
    } else {

        
      // Get token balance

      const token_address = getAssociatedTokenAddressSync(
        new PublicKey(args.tokenAddress), 
        new PublicKey(args.walletAddress)
    );



      const token_account = await solanaKit.connection.getTokenAccountBalance(token_address);
      balance = token_account.value.uiAmount ?? 0;
    }

    const tokenData = args.tokenAddress ? (await solanaKit.getTokenDataByAddress(args.tokenAddress)) : null;
    const tokenSymbol = tokenData?.symbol || "Unknown Token";
    const tokenName = tokenData?.name || "Unknown Token";
    const tokenLogoURI = tokenData?.logoURI || "";

    return {
      message: `Balance: ${balance} ${tokenSymbol}`,
      body: {
        balance: balance,
        token: tokenSymbol,
        name: tokenName,
        logoURI: tokenLogoURI
      }
    };
  } catch (error) {
    console.error(error);
    return {
      message: `Error getting balance: ${error}`,
    };
  }
} 