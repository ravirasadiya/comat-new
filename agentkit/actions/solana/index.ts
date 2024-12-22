import { BalanceAction } from "./balance";
import { TransferAction } from "./transfer"; 
import { DeployTokenAction } from "./deploy-token";
import { DeployCollectionAction } from "./deploy-collection";
import { MintNFTAction } from "./mint-nft";
import { TradeAction } from "./trade";
import { RequestFundsAction } from "./request-funds";
import { RegisterDomainAction } from "./register-domain";
import { ResolveDomainAction } from "./resolve-domain";
import { GetDomainAction } from "./get-domain";
import { GetWalletAddressAction } from "./get-wallet-address";
import { LaunchPumpfunTokenAction } from "./launch-pumpfun-token";
import { GetTrendingTokensAction } from "./get-trending-tokens";
import { GetTokenDataAction } from "./get-token-data";


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
    new DeployCollectionAction(), 
    new MintNFTAction(),
    new TradeAction(),
    new RequestFundsAction(),
    new RegisterDomainAction(),
    new ResolveDomainAction(),
    new GetDomainAction(),
    new GetWalletAddressAction(),
    new LaunchPumpfunTokenAction(),
    new GetTrendingTokensAction(),
    new GetTokenDataAction()
  ];
}

export const SOLANA_ACTIONS = getAllSolanaActions();

export {
  BalanceAction,
  TransferAction,
  DeployTokenAction,
  DeployCollectionAction,
  MintNFTAction,
  TradeAction,
  RequestFundsAction,
  RegisterDomainAction,
  ResolveDomainAction,
  GetDomainAction,
  GetWalletAddressAction,
  LaunchPumpfunTokenAction,
  GetTrendingTokensAction,
  GetTokenDataAction
};
