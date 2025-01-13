'use client'

import React from 'react'

import Link from 'next/link';

import { AlertCircle } from 'lucide-react'

import { DexScreenerPair } from '@/services/dexscreener/types'

interface Props {
    topPair: DexScreenerPair
}

const Links: React.FC<Props> = ({ topPair }) => {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Links</h2>
            <h3 className="text-md font-semibold">Websites</h3>
            {
                topPair.info ? (
                    <div className="flex flex-col gap-2">
                        {
                            topPair.info.websites?.map((website) => (
                                <Link 
                                    href={website.url} 
                                    target="_blank" 
                                    className="text-sm text-brand-600 hover:text-primary" 
                                    key={website.url}
                                >
                                    {website.url}
                                </Link>
                            )) ?? (
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4 text-orange-500" />
                                    <p className="text-sm text-muted-foreground">No links found</p>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <p>No links found</p>
                )
            }
            <h3 className="text-md font-semibold">Socials</h3>
            {
                topPair.info?.socials ? (
                    <div className="flex flex-col gap-2">
                        {
                            topPair.info.socials?.map((social) => (
                                <p 
                                    key={social.url}
                                    className="text-sm text-muted-foreground"
                                >
                                    {social.type[0].toUpperCase() + social.type.slice(1)}: <Link href={social.url} target="_blank" className="text-brand-600 hover:text-primary">{social.url}</Link>
                                </p>
                            ))
                        }
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        <p className="text-sm text-muted-foreground">No socials found</p>
                    </div>
                )
            }
        </div>
    )
}

export default Links