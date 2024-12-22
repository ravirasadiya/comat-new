import React from 'react'

import { Card, AnimatedShinyText } from '@/components/ui'

import { ToolInvocation } from 'ai'
import { IconName } from '@/types'
import { Icon } from '@/components/ui/icon'
import { CdpActionResult } from '@/agentkit'

interface Props<ActionResultBodyType> {
    tool: ToolInvocation,
    icon: IconName,
    loadingText: string,
    resultHeading: (result: CdpActionResult<ActionResultBodyType>) => string,
    resultBody: (result: CdpActionResult<ActionResultBodyType>) => React.ReactNode
}

const ToolCard = <ActionResultBodyType,>({ tool, icon, loadingText, resultHeading, resultBody }: Props<ActionResultBodyType>) => {
    return (
        <Card className="p-4 w-fit">
            {
                (tool.state === "partial-call" || tool.state === "call") ? (
                    <AnimatedShinyText>
                        {loadingText}
                    </AnimatedShinyText>
                ) : (
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <Icon 
                                name={icon} 
                                className="w-4 h-4"
                            />
                            <p className="text-sm font-bold">
                                {resultHeading(tool.result)}
                            </p>
                        </div>
                        {resultBody(tool.result)}
                    </div>
                )
            }
        </Card>
    )
}

export default ToolCard