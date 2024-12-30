import React from 'react'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Props {
    className?: string,
    showText?: boolean
}

const Logo: React.FC<Props> = ({ className, showText = false }) => {
    return (
        <div className="flex items-center gap-2">
            <Image 
                src="/logo-dark.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className={cn("w-10 h-10 hidden dark:block", className)} 
            />
            <Image 
                src="/logo-light.png" 
                alt="Logo" 
                width={100} 
                height={100} 
                className={cn("w-10 h-10 block dark:hidden", className)} 
            />
            {showText && (
                <span className="text-lg font-bold">
                    The Hive
                </span>
            )}
        </div>
    )
}

export default Logo