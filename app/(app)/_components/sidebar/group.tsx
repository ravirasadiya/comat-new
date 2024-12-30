import React from 'react'

import Link from 'next/link';

import { 
    Icon,
    SidebarGroup as SidebarGroupUI, 
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton
} from '@/components/ui';

import { SidebarGroup as SidebarGroupType } from '../../_types';

interface Props {
    group: SidebarGroupType;
}

const SidebarGroup: React.FC<Props> = ({ group }) => {
    return (
        <SidebarGroupUI>
            <SidebarGroupLabel>
                {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {
                        group.items.map((item) => (
                            <SidebarMenuItem
                                key={item.label}
                            >
                                <SidebarMenuButton asChild>
                                    <Link 
                                        href={item.href} 
                                        target={item.external ? '_blank' : undefined}
                                    >
                                        <Icon name={item.icon} />
                                        {item.label}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))
                    }
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroupUI>
    )
}

export default SidebarGroup