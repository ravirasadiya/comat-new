import { SOLANA_DEPOSIT_LIQUIDITY_NAME, SOLANA_GET_POOLS_NAME } from "@/ai/action-names";

import { solanaTool } from "@/ai/solana";

import { SolanaDepositLiquidityAction, SolanaGetPoolsAction } from "@/ai/solana/actions";
import { Connection } from "@solana/web3.js";

export const LIQUIDITY_TOOLS = {
    [`liquidity-${SOLANA_GET_POOLS_NAME}`]: solanaTool(new SolanaGetPoolsAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`liquidity-${SOLANA_DEPOSIT_LIQUIDITY_NAME}`]: solanaTool(new SolanaDepositLiquidityAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
}