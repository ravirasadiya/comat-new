import React from 'react'

import {
    Sidebar as SidebarUI, 
    SidebarHeader, 
    SidebarContent, 
    SidebarFooter, 
    SidebarInset 
} from '@/components/ui'

import SidebarGroup from './group';

import { platformGroup } from '../../_data';

import Logo from '@/components/ui/logo';

interface Props {
    children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
    return (
        <>
            <SidebarUI variant="inset">
                <SidebarHeader>
                    <Logo 
                        showText 
                        className="w-8 h-8"
                    />
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup group={platformGroup} />
                </SidebarContent>
                <SidebarFooter />
            </SidebarUI>
            <SidebarInset>
                {children}
            </SidebarInset>
        </>
    )
}

export default Sidebar;