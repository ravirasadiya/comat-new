"use client"

import useSWR from "swr";

import { ApiV3PoolInfoItem } from "@raydium-io/raydium-sdk-v2";

export const usePool = (poolId: string) => {
    const { data, isLoading, error } = useSWR<ApiV3PoolInfoItem>(
        `/api/raydium/pool/${poolId}`,
        () => fetch(`/api/raydium/pool/${poolId}`).then(res => res.json()),
    );

    return { data, isLoading, error };
}