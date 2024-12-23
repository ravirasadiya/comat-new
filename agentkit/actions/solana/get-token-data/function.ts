import { JupiterTokenData, SolanaAgentKit } from "solana-agent-kit";
import { GetTokenDataArgumentsType, GetTokenDataResultBodyType } from "./types";
import { SolanaActionResult } from "../../solana-action";
import { getTokenDataByTicker } from "../utils/get-token-data";

/**
 * Gets the token data for a given ticker.
 *
 * @param solanaKit - The Solana agent kit instance
 * @param args - The input arguments for the action
 * @returns A message containing the token data
 */
export async function getTokenData(
  solanaKit: SolanaAgentKit,
  args: GetTokenDataArgumentsType
): Promise<SolanaActionResult<GetTokenDataResultBodyType>> {
  try {

    const token = await getTokenDataByTicker(args.ticker);

    if (!token) {
      throw new Error('Failed to fetch token data');
    }

    const prices = await getPrices(token);

    return {
      message: `Found token data for ${args.ticker}. The user is shown the token data in the UI, do not reiterate the token data. Ask the user what they want to do next.`,
      body: {
        token,
        prices,
        currentPrice: prices[prices.length - 1][1]
      }
    };
  } catch (error) {
    console.log(error);
    return {
      message: `Error getting token data: ${error}`,
    };
  }
}

const getPrices = async (tokenData: JupiterTokenData) => {
  const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;
  const BASE_URL = 'https://api.coingecko.com/api/v3';
  
  // Calculate timestamps for 7 days
  const to = Math.floor(Date.now() / 1000);
  const from = to - (7 * 24 * 60 * 60); // 7 days ago

  const params = new URLSearchParams({
    id: tokenData.extensions.coingeckoId!,
    vs_currency: 'usd',
    from: from.toString(),
    to: to.toString(),
    precision: '2'
  });

  try {
    const response = await fetch(
      `${BASE_URL}/coins/${tokenData.extensions.coingeckoId}/market_chart/range?${params}`, 
      {
        headers: {
          'accept': 'application/json',
          'x-cg-demo-api-key': COINGECKO_API_KEY || ''
        }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch price data');
    }

    const data = await response.json();

    const prices = data.prices;

    return prices;
  } catch (error) {
    console.error('Error fetching price data:', error);
    return null;
  }
}