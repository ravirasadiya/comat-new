'use client'

import React from 'react'

interface Props {
    address: string
}

export const BubbleMap: React.FC<Props> = ({ address }) => {
    return (
        <div className="flex flex-col gap-2 h-full max-h-full">
            <h2 className="text-lg font-bold">Bubble Map</h2>
            <iframe 
                className="w-full flex-1 max-w-full rounded-md"
                src={`https://app.bubblemaps.io/sol/token/${address}`} 
            />
        </div>
    )
}

export default BubbleMap