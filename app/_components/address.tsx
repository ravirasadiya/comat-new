"use client";

import React, { useState } from 'react'

import { Button, Icon, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui';

interface Props {
    address: string;
}

const Address: React.FC<Props> = ({ address }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                    <p 
                        className="text-sm text-muted-foreground cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md p-1 w-fit"
                        onClick={handleCopy}
                    >
                        {`${address.slice(0, 4)}...${address.slice(-4)}`}
                    </p>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                    {
                        copied ? "Copied to clipboard" : "Copy to clipboard"
                    }
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default Address;