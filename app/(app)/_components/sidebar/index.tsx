import React from 'react'

import Link from 'next/link';

import {
    Sidebar as SidebarUI, 
    SidebarHeader, 
    SidebarContent, 
    SidebarFooter, 
    SidebarInset,
    Logo
} from '@/components/ui'

import SidebarGroup from './group';

import { platformGroup, agentsGroup } from '../../_data';

import AuthButton from './auth-button';

interface Props {
    children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
    return (
        <>
            <SidebarUI variant="inset">
                <SidebarHeader>
                    <Link href="/">
                        <Logo 
                            showText 
                            className="w-8 h-8"
                        />
                    </Link>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup group={platformGroup} />
                    <SidebarGroup group={agentsGroup} />
                </SidebarContent>
                <SidebarFooter>
                    <AuthButton />
                </SidebarFooter>
            </SidebarUI>
            <SidebarInset>
                {children}
            </SidebarInset>
        </>
    )
}

export default Sidebar;