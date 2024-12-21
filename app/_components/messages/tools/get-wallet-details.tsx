import React from 'react'

import { ToolInvocation } from 'ai';
import { AnimatedShinyText, Card } from '@/components/ui';

interface Props {
    tool: ToolInvocation
}

const GetWalletDetails: React.FC<Props> = ({ tool }) => {


    return (
        <Card className="p-4">
            {
                (tool.state === "partial-call" || tool.state === "call") ? (
                    <AnimatedShinyText>
                        Getting Wallet Details...
                    </AnimatedShinyText>
                ) : (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold">
                            Wallet Details
                        </p>
                        <p>
                            {tool.result.address ?? "No address found"}
                        </p>
                    </div>
                )
            }
        </Card>
    )
}

export default GetWalletDetails;