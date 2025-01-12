import type { TopHoldersArgumentsType, TopHoldersResultBodyType } from "./types";
import type { SolanaActionResult } from "../solana-action";
import { getTokenLargestAccounts } from "@/services/helius";
import { Connection, PublicKey } from "@solana/web3.js";

export async function getTopHolders(
  args: TopHoldersArgumentsType
): Promise<SolanaActionResult<TopHoldersResultBodyType>> {
  try {
    let topHolders = await getTokenLargestAccounts(args.tokenAddress);

    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);
    const mintInfo = await connection.getTokenSupply(new PublicKey(args.tokenAddress));
    const totalSupply = Number(BigInt(mintInfo.value.amount) / BigInt(Math.pow(10, mintInfo.value.decimals)));

    return {
      message: `The top holders have been retrieved and displayed to the user. Now ask them what they want to do next.`,
      body: {
        topHolders: topHolders.map(holder => ({
          ...holder,
          percentageOwned: (holder.uiAmount / totalSupply) * 100
        })),
        percentageOwned: topHolders.reduce((acc, holder) => acc + Number(holder.uiAmount), 0) / totalSupply
      }
    };
  } catch (error) {
    return {
      message: `Error getting top holders: ${error}`,
    };
  }
} 