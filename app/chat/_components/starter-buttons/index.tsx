import React from 'react'

import StarterButton from './starter-button';

const starterButtons = [
    {
        title: "What's Trending",
        description: "Search the trending tokens",
        icon: "Coins" as const,
        prompt: "Search the trending tokens"
    }, 
    {
        title: "What's Hot",
        description: "Search the hottest tokens",
        icon: "Coins" as const,
        prompt: "Search the hottest tokens"
    },
    {
        title: "Trade",
        description: "Trade tokens",
        icon: "ChartCandlestick" as const,
        prompt: "Trade tokens"
    },
    {
        title: "Search X",
        description: "Search X for a user",
        icon: "Search" as const,
        prompt: "Search X for a user"
    }
] as const

const StarterButtons = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {starterButtons.map((button) => (
                <StarterButton 
                    key={button.title} 
                    {...button}
                />
            ))}
        </div>
    )
}

export default StarterButtons