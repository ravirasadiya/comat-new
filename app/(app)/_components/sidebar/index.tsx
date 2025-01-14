import React from 'react'

import Link from 'next/link';

import { FaDiscord, FaXTwitter } from 'react-icons/fa6';

import {
    Sidebar as SidebarUI, 
    SidebarHeader, 
    SidebarContent, 
    SidebarInset,
    SidebarTrigger,
    Separator,
    SidebarFooter,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarSeparator,
} from '@/components/ui'


import AuthButton from './auth-button';
import ColorModeToggle from './color-mode-toggle';
import Logo from './logo';
import ChatsGroup from './chats-group';


interface Props {
    children: React.ReactNode;
}

const Sidebar: React.FC<Props> = ({ children }) => {
    return (
        <>
            <SidebarUI variant="inset" collapsible='icon'>
                <SidebarHeader>
                    <Logo />
                    <AuthButton />
                </SidebarHeader>
                <SidebarContent className="relative">
                    <ChatsGroup />
                </SidebarContent>
                <SidebarSeparator />
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton 
                                asChild 
                            >
                                <Link 
                                    href={"https://x.com/askthehive_ai"} 
                                    target={'_blank'}
                                >
                                    <FaXTwitter />
                                    <span className='truncate'>Follow Us</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                        <SidebarMenuItem>
                            <SidebarMenuButton 
                                asChild 
                            >
                                <Link 
                                    href={"https://discord.gg/6brt2aC9"} 
                                    target={'_blank'}
                                >
                                    <FaDiscord />
                                    <span className='truncate'>Join Discord</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </SidebarUI>
            <SidebarInset>
                <header className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger />
                        <Separator orientation="vertical" className="h-4" />    
                    </div>
                    <ColorModeToggle />
                </header>
                <div className="p-4 flex-1 h-0 overflow-y-hidden">
                    {children}
                </div>
            </SidebarInset>
        </>
    )
}

export default Sidebar;