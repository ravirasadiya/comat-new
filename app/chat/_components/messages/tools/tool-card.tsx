import React from 'react'

import { AnimatedShinyText, Card } from '@/components/ui'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'

import { ToolInvocation } from 'ai'
import { IconName } from '@/types'
import { Icon } from '@/components/ui/icon'
import { CdpActionResult } from '@/agentkit'
import { cn } from '@/lib/utils'

interface Props<ActionResultBodyType> {
    tool: ToolInvocation,
    icon: IconName,
    loadingText: string,
    resultHeading: (result: CdpActionResult<ActionResultBodyType>) => string,
    resultBody: (result: CdpActionResult<ActionResultBodyType>) => React.ReactNode,
    agentName: string,
    defaultOpen?: boolean,
}

const ToolCard = <ActionResultBodyType,>({ tool, icon, loadingText, resultHeading, resultBody, agentName, defaultOpen = false }: Props<ActionResultBodyType>) => {

    return (
        <Card className={cn(
            "flex flex-col gap-2 p-2",
            tool.state === "result"
                ? (tool.result.body 
                    ? "border-brand-600/50 dark:border-brand-400/50"
                    : "border-red-500 dark:border-red-400")
                : "border-neutral-500 dark:border-neutral-400"
        )}>
            <div className="flex items-center gap-2">
                <Icon name={icon} className="w-4 h-4" />
                <p className="text-lg font-bold">{agentName}</p>
            </div>
            {
                tool.state === "partial-call" || tool.state === "call" ? (
                    <AnimatedShinyText>
                        {loadingText}
                    </AnimatedShinyText>
                ) : (
                    <Collapsible defaultOpen={defaultOpen}>
                        <CollapsibleTrigger className="flex items-center gap-2">
                            <p className="">{resultHeading(tool.result)}</p>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="text-sm">
                            {resultBody(tool.result)}
                        </CollapsibleContent>
                    </Collapsible>
                )
            }
        </Card>
    )
}

export default ToolCard