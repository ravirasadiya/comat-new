import type { TokenPriceChartArgumentsType, TokenPriceChartResultBodyType } from "./types";
import type { SolanaActionResult } from "../../solana-action";
import { fetchOHLCV, OHLCVTimeframe } from "@/services/birdeye";

export async function getPriceChart(
  args: TokenPriceChartArgumentsType
): Promise<SolanaActionResult<TokenPriceChartResultBodyType>> {
  try {
    let prices = await fetchOHLCV({
      address: args.tokenAddress,
      timeframe: OHLCVTimeframe.FifteenMinutes,
      timeFrom: Math.floor(Date.now() / 1000) - 1 * 86400,
      timeTo: Math.floor(Date.now() / 1000)
    });

    return {
      body: {
        prices: prices.items,
      },
      message: `The price chart has been retrieved and displayed to the user. Do not reiterate the raw data.`,
    };
  } catch (error) {
    return {
      message: `Error getting top holders: ${error}`,
    };
  }
} 