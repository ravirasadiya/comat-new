import React from 'react'

import StarterButton from './starter-button';

const starterButtons = [
    {
        title: "Trending Tokens",
        description: "Search the trending tokens",
        icon: "Coins" as const,
        prompt: "Search the trending tokens"
    }, 
    {
        title: "Balance",
        description: "Check your balance",
        icon: "Coins" as const,
        prompt: "Check your balance"
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