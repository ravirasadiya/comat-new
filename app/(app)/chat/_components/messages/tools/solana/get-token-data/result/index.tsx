'use client'

import React from 'react'

import GetTokenDataResultHeading from './heading';
import Links from './links';

import type { GetTokenDataResultBodyType } from '@/ai';
import DexStats from './dex-stats';

interface Props {
    body: GetTokenDataResultBodyType
}

const GetTokenDataResult: React.FC<Props> = ({ body }) => {
    const { token, pairs } = body;

    const topPair = pairs[0];

    return (
        <div className="flex flex-col gap-2 min-w-[300px]">
            <GetTokenDataResultHeading token={token} topPair={topPair.pair} />
            <Links topPair={topPair.pair} />
            <DexStats pairs={pairs} />
        </div>
    )
}

export default GetTokenDataResult;
