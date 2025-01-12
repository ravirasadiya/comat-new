"use client"

import useSWR from "swr";

import { JupiterTokenData } from "solana-agent-kit";

export const useTokenDataByAddress = (address: string) => {
    const { data, isLoading, error } = useSWR<JupiterTokenData | null>(
        `/api/token/${address}/data`, 
        (url: string) => fetch(url).then(res => res.json())
    );

    return { data, isLoading, error };
}