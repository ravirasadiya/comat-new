import { NextResponse } from 'next/server';

import { getTokenAccountsByOwner } from '@/services/helius';
import { getToken } from '@/db/services';

export const GET = async (request: Request, { params }: { params: Promise<{ address: string }> }) => {
    try {
        const { address } = await params;

        const tokenAccounts = await getTokenAccountsByOwner(address);

        const tokenDatas = (await Promise.all(tokenAccounts.map(async (tokenAccount) => {
            return getToken(tokenAccount.mint!);
        })))

        return NextResponse.json(tokenAccounts.map((tokenAccount, index) => {
            return {
                ...tokenAccount,
                token_data: tokenDatas[index]
            };
        }).filter((tokenAccount) => tokenAccount.token_data !== null));
    } catch (error) {
        console.error('Error fetching token accounts:', error);
        return NextResponse.json(
            { error: 'Failed to fetch token accounts' },
            { status: 500 }
        );
    }
}