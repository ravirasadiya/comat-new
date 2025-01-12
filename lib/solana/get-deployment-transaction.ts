import { Connection, PublicKey } from '@solana/web3.js';

export const getDeploymentTransaction = async (address: string) => {
    const connection = new Connection(process.env.NEXT_PUBLIC_SOLANA_RPC_URL!);
    const mintAddress = new PublicKey(address);

    let signatures: any[] = [];
    const options: any = { limit: 1000 };
    let fetchedSignatures;

    do {
        fetchedSignatures = await connection.getSignaturesForAddress(mintAddress, options);
        signatures = signatures.concat(fetchedSignatures);
        if (fetchedSignatures.length === 1000) {
            options.before = fetchedSignatures[fetchedSignatures.length - 1].signature;
        }
    } while (fetchedSignatures.length === 1000);

    // Return the oldest/first transaction
    return signatures[signatures.length - 1];
}