export const SOLANA_MINT_NFT_PROMPT = `Mint a new NFT in a collection on Solana blockchain.

Required parameters:
- collectionMint: The address of the collection to mint into (e.g., "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w")
- name: The name of the NFT (e.g., "My NFT")
- uri: The URI for the NFT's metadata (e.g., "https://example.com/nft.json")

Optional parameters:
- recipient: The wallet to receive the NFT (defaults to agent's wallet)`; 