import type { GetSolanaAdviceArgumentsType, GetSolanaAdviceResultBodyType } from "./types";
import type { SolanaActionResult } from "../solana-action";

export async function getAdvice(args: GetSolanaAdviceArgumentsType): Promise<SolanaActionResult<GetSolanaAdviceResultBodyType>> {
  return {
    message: args.advice,
    body: {
      advice: args.advice,
      buy: args.buy,
      tokenSymbol: args.tokenSymbol
    }
  };
} 