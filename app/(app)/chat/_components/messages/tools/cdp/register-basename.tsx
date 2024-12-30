import React from 'react'

import ToolCard from '../tool-card';

import { ToolInvocation } from 'ai';

import { RegisterBasenameActionResultType } from '@/agentkit';

interface Props {
    tool: ToolInvocation
}

const RegisterBasename: React.FC<Props> = ({ tool }) => {

    return (
        <ToolCard
            tool={tool}
            agentName="Basename Agent"
            icon="Globe"
            loadingText="Registering Basename..."
            resultHeading={() => "Basename Registered"}
            resultBody={(result: RegisterBasenameActionResultType) => result.body 
                ? result.body.basename
                : result.message}
        />
    )
}

export default RegisterBasename;