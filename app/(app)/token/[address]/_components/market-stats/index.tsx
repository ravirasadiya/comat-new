import React from 'react'

import { Card } from '@/components/ui'

import type { TokenOverview } from '@/services/birdeye';
import TimeStats from './time-stats';

interface Props {
    token: TokenOverview;
}

const MarketStats: React.FC<Props> = ({ token }) => {

    return (
        <div className='flex flex-col gap-2'>
            <h2 className="text-lg font-semibold">
                Market Stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                <StatItem label="Market Cap" value={token.mc} prefix="$" />
                <StatItem label="Liquidity" value={token.liquidity} prefix="$" />
                <StatItem label="# of Holders" value={token.holder} />
                <StatItem label="# of Markets" value={token.numberMarkets} />
            </div>
            <TimeStats token={token} />
        </div>
    )
}

interface StatItemProps {
    label: string;
    value: number;
    formatOptions?: Intl.NumberFormatOptions;
    prefix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, formatOptions = {}, prefix = '' }) => {
    return (
        <div className="flex flex-col border rounded-md p-2 border-neutral-100 dark:border-neutral-700">
            <h3 className="text-xs font-semibold">
                {label}
            </h3>
            <p className="text-sm">
                {prefix}{value.toLocaleString(undefined, { notation: 'compact', ...formatOptions })}
            </p>
        </div>
    );
};

export default MarketStats