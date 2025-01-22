"use client"

import React, { useEffect, useRef } from 'react';

import { createChart, ColorType, IChartApi, Time } from 'lightweight-charts';
import { useColorMode } from '@/app/_contexts';

interface CandlestickData {
    time: Time;
    open: number;
    high: number;
    low: number;
    close: number;
}

interface CandlestickChartProps {
    data: CandlestickData[];
    colors?: {
        backgroundColor?: string;
        lineColor?: string;
        textColor?: string;
        upColor?: string;
        downColor?: string;
        wickUpColor?: string;
        wickDownColor?: string;
    };
    height?: number;
    width?: number;
}

export function CandlestickChart({
    data,
    colors = {
        backgroundColor: 'white',
        lineColor: '#2962FF',
        textColor: 'black',
        upColor: '#26a69a',
        downColor: '#ef5350',
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
    },
    height = 400,
    width = 600,
}: CandlestickChartProps) {

    const { mode } = useColorMode();

    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const handleResize = () => {
            if (chartRef.current) {
                chartRef.current.applyOptions({ 
                    width: chartContainerRef.current?.clientWidth || width,
                    height: height 
                });
            }
        };

        const chart = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: "transparent" },
                textColor: colors.textColor,
            },
            width: chartContainerRef.current.clientWidth,
            height: height,
        });
        chartRef.current = chart;

        const candlestickSeries = chart.addCandlestickSeries({
            upColor: colors.upColor,
            downColor: colors.downColor,
            borderVisible: false,
            wickUpColor: colors.wickUpColor,
            wickDownColor: colors.wickDownColor,
        });

        candlestickSeries.setData(data);

        chart.timeScale().fitContent();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (chartRef.current) {
                chartRef.current.remove();
            }
        };
    }, [data, colors, height, width]);

    return (
        <div 
            ref={chartContainerRef} 
            className="w-full"
            style={{ height: `${height}px` }}
        />
    );
}
