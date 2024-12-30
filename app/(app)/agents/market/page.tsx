import React from 'react'

import AgentPage from '../_components';

import { marketAgent } from './_data';

interface Props {}

const MarketAgentPage: React.FC<Props> = () => {
    return (
        <AgentPage
            agent={marketAgent}
        />
    )
}

export default MarketAgentPage;