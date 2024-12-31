import { IconName } from "@/types";

export type SidebarGroup = {
    label: string;
    items: SidebarItem[];
}

export type SidebarItem = {
    icon: IconName;
    label: string;
    href: string;
    external?: boolean;
}