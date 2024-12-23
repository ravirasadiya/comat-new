import { PublicKey } from "@solana/web3.js";
import { JupiterTokenData } from "solana-agent-kit";

export async function getTokenDataByAddress(
  mintAddress: string,
): Promise<JupiterTokenData | undefined> {
  try {
    if (!mintAddress) {
      throw new Error("Mint address is required");
    }

    const response = await fetch("https://tokens.jup.ag/tokens?tags=verified", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as JupiterTokenData[];

    const token = data.find((token: JupiterTokenData) => {
      return token.address === mintAddress;
    });
    return token;
  } catch (error: any) {
    console.log(error);
    throw new Error(`Error fetching token data: ${error.message}`);
  }
}

export async function getTokenAddressFromTicker(
  ticker: string
): Promise<string[] | null> {
  try {

    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${ticker.toLowerCase()}`
    );
    const data = await response.json();

    if (!data.pairs || data.pairs.length === 0) {
      return null;
    }

    // Filter for Solana pairs only and sort by FDV
    let solanaPairs = data.pairs
      .filter((pair: any) => pair.chainId === "solana")
      .sort((a: any, b: any) => (b.fdv || 0) - (a.fdv || 0));

    solanaPairs = solanaPairs.filter(
      (pair: any) =>
        pair.baseToken.symbol.toLowerCase() === ticker.toLowerCase()
    );

    console.log(solanaPairs);
    
    // Return the address of the highest FDV Solana pair
    return Array.from(new Set(solanaPairs.map((pair: any) => pair.baseToken.address)));
  } catch (error) {
    return null;
  }
}

export async function getTokenDataByTicker(
  ticker: string
): Promise<JupiterTokenData | undefined> {
    try {
        if (!ticker) {
          throw new Error("Ticker is required");
        }
    
        const response = await fetch("https://tokens.jup.ag/tokens?tags=verified", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const data = (await response.json()) as JupiterTokenData[];
    
        const token = data.find((token: JupiterTokenData) => {
          return token.symbol === ticker;
        });
        return token;
      } catch (error: any) {
        console.log(error);
        throw new Error(`Error fetching token data: ${error.message}`);
    }
}
