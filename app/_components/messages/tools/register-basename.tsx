import React from 'react'

import { AnimatedShinyText, Card } from '@/components/ui';

import { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation
}

const RegisterBasename: React.FC<Props> = ({ tool }) => {

    return (
        <Card className="p-4">
            {
                (tool.state === "partial-call" || tool.state === "call") ? (
                    <AnimatedShinyText>
                        Registering Basename...
                    </AnimatedShinyText>
                ) : (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold">
                            Basename Registered
                        </p>
                        <p>
                            {tool.result.basename ?? "No basename found"}
                        </p>
                    </div>
                )
            }
        </Card>
    )
}

export default RegisterBasename;