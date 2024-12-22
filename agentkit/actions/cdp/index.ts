import { CdpAction, CdpActionSchemaAny } from "../cdp_action";
import { DeployNftAction } from "./deploy-nft/deploy_nft";
import { DeployTokenAction } from "./deploy_token";
import { GetBalanceAction } from "./get_balance";
import { GetWalletDetailsAction } from "./get_wallet_details";
import { MintNftAction } from "./mint_nft";
import { RegisterBasenameAction } from "./register_basename";
import { RequestFaucetFundsAction } from "./request_faucet_funds";
import { TradeAction } from "./trade";
import { TransferAction } from "./transfer";

/**
 * Retrieves all CDP action instances.
 * WARNING: All new CdpAction classes must be instantiated here to be discovered.
 *
 * @returns - Array of CDP action instances
 */
export function getAllCdpActions(): CdpAction<CdpActionSchemaAny, any>[] {
  return [
    new GetWalletDetailsAction(),
    new DeployNftAction(),
    new DeployTokenAction(),
    new GetBalanceAction(),
    new MintNftAction(),
    new RegisterBasenameAction(),
    new RequestFaucetFundsAction(),
    new TradeAction(),
    new TransferAction(),
  ];
}

export const CDP_ACTIONS = getAllCdpActions();

export * from './types';

export {
  type CdpAction,
  type CdpActionSchemaAny,
  GetWalletDetailsAction,
  DeployNftAction,
  DeployTokenAction,
  GetBalanceAction,
  MintNftAction,
  RegisterBasenameAction,
  RequestFaucetFundsAction,
  TradeAction,
  TransferAction,
};
