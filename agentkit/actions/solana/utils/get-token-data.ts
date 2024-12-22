import { PublicKey } from "@solana/web3.js";
import { JupiterTokenData } from "solana-agent-kit";

export async function getTokenDataByAddress(
  mintAddresses: string[],
): Promise<JupiterTokenData | undefined> {
  try {
    if (!mintAddresses) {
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
      return mintAddresses.includes(token.address);
    });
    return token;
  } catch (error: any) {
    throw new Error(`Error fetching token data: ${error.message}`);
  }
}

export async function getTokenAddressFromTicker(
  ticker: string
): Promise<string[] | null> {
  try {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/search?q=${ticker}`
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
    
    // Return the address of the highest FDV Solana pair
    return Array.from(new Set(solanaPairs.map((pair: any) => pair.baseToken.address)));
  } catch (error) {
    return null;
  }
}

export async function getTokenDataByTicker(
  ticker: string
): Promise<JupiterTokenData | undefined> {
  const addresses = await getTokenAddressFromTicker(ticker);
  if (!addresses) {
    throw new Error(`Token address not found for ticker: ${ticker}`);
  }
  return getTokenDataByAddress(addresses);
}
