export const getIsVault = async (address: string) => {
    const response = await fetch(`https://api.streamflow.xyz/v1/vaults/${address}`);
    const data = await response.json();
    return data;
}