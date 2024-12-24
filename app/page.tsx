import React from 'react'

import Link from 'next/link';

import { Button } from '@/components/ui';

import GraphComponent from './_components'


const Graph = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full h-full flex flex-col items-center justify-center pt-16">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold text-brand-600">
                        Meet The Hive
                    </h1>
                    <p>
                        A modular network of interoperable DeFi agents
                    </p>
                    <Link href={"/chat"}>
                        <Button
                            variant={'brand'}
                        >
                            Get Started
                        </Button>
                    </Link>
                </div>
                <GraphComponent />
            </div>
        </div>
    )
}

export default Graph;