import React from 'react'

import { AnimatedShinyText } from '@/components/ui'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

import { ToolInvocation } from 'ai'
import { IconName } from '@/types'
import { Icon } from '@/components/ui/icon'
import { CdpActionResult } from '@/agentkit'

interface Props<ActionResultBodyType> {
    tool: ToolInvocation,
    icon: IconName,
    loadingText: string,
    resultHeading: (result: CdpActionResult<ActionResultBodyType>) => string,
    resultBody: (result: CdpActionResult<ActionResultBodyType>) => React.ReactNode,
    defaultOpen?: boolean,
}

const ToolCard = <ActionResultBodyType,>({ tool, icon, loadingText, resultHeading, resultBody, defaultOpen = false }: Props<ActionResultBodyType>) => {

    if (tool.state === "partial-call" || tool.state === "call") {
        return (
            <AnimatedShinyText>
                {loadingText}
            </AnimatedShinyText>
        )
    }
    return (
        <Collapsible defaultOpen={defaultOpen}>
            <CollapsibleTrigger className="flex items-center gap-2">
                <Icon 
                    name={icon} 
                    className="w-4 h-4"
                />
                <p className="text-sm font-bold">
                    {resultHeading(tool.result)}
                </p>
            </CollapsibleTrigger>
            <CollapsibleContent className="text-sm">
                {resultBody(tool.result)}
            </CollapsibleContent>
        </Collapsible>
    )
}

export default ToolCard