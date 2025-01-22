import React from 'react'

import { CandlestickChart, Card } from '@/components/ui';

import ToolCard from '../tool-card';

import type { ToolInvocation } from 'ai';
import type { TokenPriceChartResultBodyType, TokenPriceChartResultType } from '@/ai';
import type { UTCTimestamp } from 'lightweight-charts';

interface Props {
    tool: ToolInvocation,
    prevToolAgent?: string,
}

const PriceChart: React.FC<Props> = ({ tool, prevToolAgent }) => {
    return (
        <ToolCard 
            tool={tool}
            loadingText={`Getting Token Price Chart...`}
            result={{
                heading: (result: TokenPriceChartResultType) => result.body 
                    ? `Fetched Token Price Chart` 
                    : `Failed to fetch token price chart`,
                body: (result: TokenPriceChartResultType) => result.body 
                    ? <PriceChartBody body={result.body} /> 
                    : "No token price chart found"
            }}
            prevToolAgent={prevToolAgent}
            className="w-full"
        />
    )
}

const PriceChartBody = ({ body }: { body: TokenPriceChartResultBodyType }) => {
    return (
        <Card className="w-full p-4">
            <CandlestickChart 
                data={body.prices.map(price => ({
                    time: price.unixTime as UTCTimestamp,
                    open: price.o,
                    high: price.h,
                    low: price.l,
                    close: price.c,
                }))} 
                height={400}
            />
        </Card>
    )
}

export default PriceChart;