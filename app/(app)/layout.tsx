import React from 'react'

import { SidebarProvider } from '@/components/ui';

import Sidebar from './_components/sidebar';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <SidebarProvider>
            <Sidebar>
                {children}
            </Sidebar>
        </SidebarProvider>
    )
}

export default Layout;