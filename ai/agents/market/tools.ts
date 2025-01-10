import { Connection } from "@solana/web3.js";

import { 
    SolanaGetBubbleMapsAction, 
    SolanaGetTokenAddressAction, 
    SolanaGetTokenDataAction, 
    SolanaGetTrendingTokensAction, 
    SolanaTopHoldersAction 
} from "@/ai/solana/actions";

import { 
    SOLANA_BUBBLE_MAPS_NAME, 
    SOLANA_GET_TOKEN_ADDRESS_NAME, 
    SOLANA_GET_TOKEN_DATA_NAME, 
    SOLANA_GET_TRENDING_TOKENS_NAME, 
    SOLANA_TOP_HOLDERS_NAME 
} from "@/ai/action-names";

import { solanaTool } from "@/ai/solana";


export const MARKET_TOOLS = {
    [`market-${SOLANA_GET_TOKEN_DATA_NAME}`]: solanaTool(new SolanaGetTokenDataAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`market-${SOLANA_GET_TRENDING_TOKENS_NAME}`]: solanaTool(new SolanaGetTrendingTokensAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`market-${SOLANA_TOP_HOLDERS_NAME}`]: solanaTool(new SolanaTopHoldersAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`market-${SOLANA_GET_TOKEN_ADDRESS_NAME}`]: solanaTool(new SolanaGetTokenAddressAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!)),
    [`market-${SOLANA_BUBBLE_MAPS_NAME}`]: solanaTool(new SolanaGetBubbleMapsAction(), new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!))
}