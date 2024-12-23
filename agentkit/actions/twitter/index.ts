import { TwitterSearchRecentAction } from "./search-recent";

import { TwitterAction, TwitterActionSchemaAny } from "./twitter-action";

/**
 * Retrieves all Solana action instances.
 * WARNING: All new SolanaAction classes must be instantiated here to be discovered.
 *
 * @returns - Array of Solana action instances
 */
export function getAllTwitterActions(): TwitterAction<TwitterActionSchemaAny, any>[] {
  return [
    new TwitterSearchRecentAction(),
  ];
}

export const TWITTER_ACTIONS = getAllTwitterActions();

export {
  TwitterSearchRecentAction,
};