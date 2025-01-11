import { RaydiumPoolResponse } from "./types";

export const getLPData = async (poolId: string): Promise<RaydiumPoolResponse> => {
    const response = await fetch(
        `https://api-v3.raydium.io/pools/info/ids?ids=${poolId}`,
        {
            headers: {
                accept: "application/json",
            },
        }
    );

    if (!response.ok) {
        throw new Error(`Failed to fetch LP data: ${response.statusText}`);
    }

    return response.json();
};
