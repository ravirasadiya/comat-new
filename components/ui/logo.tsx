import React from 'react'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Props {
    className?: string
}

const Logo: React.FC<Props> = ({ className }) => {
    return (
        <Image 
            src="/logo.png" 
            alt="Logo" 
            width={100} 
            height={100} 
            className={cn("w-10 h-10", className)} 
        />
    )
}

export default Logo