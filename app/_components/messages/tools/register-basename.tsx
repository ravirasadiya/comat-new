import React from 'react'

import ToolCard from './tool-card';

import { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation
}

const RegisterBasename: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard
            tool={tool}
            icon="Globe"
            loadingText="Registering Basename..."
            resultHeading={() => "Basename Registered"}
            resultBody={(result) => result.body 
                ? `[Basename Link](${result.body.basenameLink})` 
                : result.message}
        />
    )
}

export default RegisterBasename;