export const SOLANA_DEPLOY_TOKEN_PROMPT = `Deploy a new token on Solana blockchain.

Required parameters:
- name: The name of the token (e.g., "My Token")
- uri: The URI for the token's metadata (e.g., "https://example.com/token.json")
- symbol: The token's symbol (e.g., "MTK")

Optional parameters:
- decimals: The number of decimals for the token (default: 9)
- initialSupply: The initial supply of tokens to mint`; 