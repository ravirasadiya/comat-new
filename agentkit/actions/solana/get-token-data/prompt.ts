export const SOLANA_GET_TOKEN_DATA_PROMPT = `Use this function to get data for a token on Solana.
The token data will contain the address which is needed for other functions.
The token data function requires a symbol, not the name of a token.
If the user asks for your balance of a token that is not SOL and you do not have the token data, use this tool to get the token data and address.`; 