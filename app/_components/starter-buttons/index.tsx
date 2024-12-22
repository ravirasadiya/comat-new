import React from 'react'

import StarterButton from './starter-button';

const starterButtons = [
    {
        title: "Balance",
        description: "Check your balance",
        icon: "Activity",
        prompt: "Check your balance"
    }
] as const

interface Props {}

const StarterButtons: React.FC<Props> = ({ }) => {
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