"use client"

import useSWR from "swr";

import { Token } from "@/db/types";

export const useTokenDataByAddress = (address: string) => {
    const { data, isLoading, error } = useSWR<Token | null>(
        `/api/token/${address}/data`, 
        (url: string) => fetch(url).then(res => res.json())
    );

    return { data, isLoading, error };
}