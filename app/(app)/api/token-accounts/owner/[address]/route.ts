import { NextResponse } from 'next/server';

import { getTokenDataByAddress } from '@/lib/solana';
import { getTokenAccountsByOwner } from '@/services/helius';

export const GET = async (request: Request, { params }: { params: Promise<{ address: string }> }) => {
    try {
        const { address } = await params;

        const tokenAccounts = await getTokenAccountsByOwner(address);

        const tokenDatas = (await Promise.all(tokenAccounts.map(async (tokenAccount) => {
            return getTokenDataByAddress(tokenAccount.mint!);
        }))).filter((tokenData) => tokenData !== null);

        return NextResponse.json(tokenAccounts.map((tokenAccount, index) => {
            return {
                ...tokenAccount,
                token_data: tokenDatas[index]
            };
        }));
    } catch (error) {
        console.error('Error fetching token accounts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch token accounts' },
            { status: 500 }
        );
    }
}