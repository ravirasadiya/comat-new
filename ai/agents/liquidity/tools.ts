import { SOLANA_DEPOSIT_LIQUIDITY_NAME, SOLANA_GET_POOLS_NAME } from "@/ai/action-names";
import { knowledgeTool } from "@/ai/knowledge";
import { SolanaDepositLiquidityAction, SolanaGetPoolsAction } from "@/ai/solana/actions";

export const LIQUIDITY_TOOLS = {
    [`liquidity-${SOLANA_GET_POOLS_NAME}`]: knowledgeTool(new SolanaGetPoolsAction()),
    [`liquidity-${SOLANA_DEPOSIT_LIQUIDITY_NAME}`]: knowledgeTool(new SolanaDepositLiquidityAction())
}