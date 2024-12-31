import { SolanaBalanceAction } from "./balance";
import { SolanaTransferAction } from "./transfer"; 
import { SolanaTradeAction } from "./trade";
import { SolanaGetWalletAddressAction } from "./get-wallet-address";
import { SolanaGetTrendingTokensAction } from "./get-trending-tokens";
import { SolanaGetTokenDataAction } from "./get-token-data";
import { SolanaLendAction } from "./lend";
import { SolanaStakeAction } from "./stake";
import { SolanaUnstakeAction } from "./unstake";
import { SolanaGetAdviceAction } from "./get-advice";
import { SolanaAllBalancesAction } from "./all-balances";

import type { SolanaAction, SolanaActionSchemaAny } from "./solana-action";
/**
 * Retrieves all Solana action instances.
 * WARNING: All new SolanaAction classes must be instantiated here to be discovered.
 *
 * @returns - Array of Solana action instances
 */
export function getAllSolanaActions(): SolanaAction<SolanaActionSchemaAny, any>[] {
  return [
    new SolanaBalanceAction(),
    new SolanaTransferAction(),
    new SolanaTradeAction(),
    new SolanaGetWalletAddressAction(),
    new SolanaGetTrendingTokensAction(),
    new SolanaGetTokenDataAction(),
    new SolanaStakeAction(),
    new SolanaUnstakeAction(),
    new SolanaGetAdviceAction(),
    new SolanaAllBalancesAction()
  ];
}

export const SOLANA_ACTIONS = getAllSolanaActions();

export {
  SolanaBalanceAction,
  SolanaTransferAction,
  SolanaTradeAction,
  SolanaGetWalletAddressAction,
  SolanaGetTrendingTokensAction,
  SolanaGetTokenDataAction,
  SolanaLendAction,
  SolanaStakeAction,
  SolanaUnstakeAction,
  SolanaGetAdviceAction,
  SolanaAllBalancesAction
};