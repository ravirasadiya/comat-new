import React from 'react'

import { ToolInvocation } from 'ai';
import { AnimatedShinyText, Card } from '@/components/ui';

interface Props {
    tool: ToolInvocation
}

const GetBalance: React.FC<Props> = ({ tool }) => {

    return (
        <Card className="p-4">
            {
                (tool.state === "partial-call" || tool.state === "call") ? (
                    <AnimatedShinyText>
                        Getting {tool.args.assetId} Balance...
                    </AnimatedShinyText>
                ) : (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold">
                            {tool.args.assetId.toUpperCase()} Balance
                        </p>
                        <p>
                            {tool.result.balance ?? "No balance found"}
                        </p>
                    </div>
                )
            }
        </Card>
    )
}

export default GetBalance;