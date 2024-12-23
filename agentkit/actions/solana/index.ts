import { BalanceAction } from "./balance";
import { TransferAction } from "./transfer"; 
import { DeployTokenAction } from "./deploy-token";
import { TradeAction } from "./trade";
import { GetWalletAddressAction } from "./get-wallet-address";
import { GetTrendingTokensAction } from "./get-trending-tokens";
import { GetTokenDataAction } from "./get-token-data";
import { LendAction } from "./lend";
import { StakeAction } from "./stake";
import { UnstakeAction } from "./unstake";
import { GetSolanaAdviceAction } from "./get-advice";

import { SolanaAction, SolanaActionSchemaAny } from "../solana-action";
/**
 * Retrieves all Solana action instances.
 * WARNING: All new SolanaAction classes must be instantiated here to be discovered.
 *
 * @returns - Array of Solana action instances
 */
export function getAllSolanaActions(): SolanaAction<SolanaActionSchemaAny, any>[] {
  return [
    new BalanceAction(),
    new TransferAction(),
    new DeployTokenAction(),
    new TradeAction(),
    new GetWalletAddressAction(),
    new GetTrendingTokensAction(),
    new GetTokenDataAction(),
    new LendAction(),
    new StakeAction(),
    new UnstakeAction(),
    new GetSolanaAdviceAction()
  ];
}

export const SOLANA_ACTIONS = getAllSolanaActions();

export {
  BalanceAction,
  TransferAction,
  DeployTokenAction,
  TradeAction,
  GetWalletAddressAction,
  GetTrendingTokensAction,
  GetTokenDataAction,
  LendAction,
  StakeAction,
  UnstakeAction,
  GetSolanaAdviceAction
};