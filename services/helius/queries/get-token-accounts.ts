import { heliusPath } from "../path";
import { TokenAccountsResponse } from "../types/token-account";

export const getTokenAccountsByOwner = async (address: string) => {
    try {
        const { result }: { result: TokenAccountsResponse } = await (await fetch(heliusPath, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "jsonrpc": "2.0",
              "id": 1,
              "method": "getTokenAccounts",
              "params": {
                "owner": address,
              }
            }),
        })).json();

        return result.token_accounts;
    } catch (error) {
        return [];
    }
}

export const getTokenAccountsByMint = async (mint: string) => {
    try {
        const { result }: { result: TokenAccountsResponse } = await (await fetch(heliusPath, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "jsonrpc": "2.0",
                "id": 1,
                "method": "getTokenAccounts",
                "params": {
                    "mint": mint,
                }
            }),
        })).json();

        return result.token_accounts;
    } catch (error) {
        return [];
    }
}