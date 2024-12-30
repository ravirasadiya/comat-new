'use client'

import React from 'react'

import Link from 'next/link';

import { Logo as LogoBase, useSidebar } from '@/components/ui';

interface Props {}

const Logo: React.FC<Props> = ({  }) => {

    const { open } = useSidebar();

    return (
        <Link href="/">
            <LogoBase
                showText={open}
                className="w-8 h-8"
            />
        </Link>
    )
}

export default Logo;