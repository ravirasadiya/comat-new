import React from 'react'

import { AnimatedShinyText, Card, Markdown } from '@/components/ui';

import { ToolInvocation } from 'ai';

interface Props {
    tool: ToolInvocation
}

const RequestFaucet: React.FC<Props> = ({ tool }) => {


    return (
        <Card className="p-4">
            {
                (tool.state === "partial-call" || tool.state === "call") ? (
                    <AnimatedShinyText>
                        Requesting Faucet Funds...
                    </AnimatedShinyText>
                ) : (
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-bold">
                            Faucet Funds {tool.result.transactionLink ? "Success" : "Failed"}
                        </p>
                        <Markdown>
                            {
                                tool.result.transactionLink ?
                                    `[Transaction Link](${tool.result.transactionLink})` :
                                    tool.result.message
                            }
                        </Markdown>
                    </div>
                )
            }
        </Card>
    )
}

export default RequestFaucet;