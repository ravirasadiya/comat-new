"use client";

import React, { useState } from 'react'

import { Button, Icon } from '@/components/ui';

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
        <p 
            className="text-sm text-muted-foreground cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-md p-1"
            onClick={handleCopy}
        >
            {`${address.slice(0, 4)}...${address.slice(-4)}`}
        </p>
    )
}

export default Address;