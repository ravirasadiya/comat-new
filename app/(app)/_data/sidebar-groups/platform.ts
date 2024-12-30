import { SidebarGroup } from "../../_types/sidebar";

export const platformGroup: SidebarGroup = {
    label: 'Platform',
    items: [
        {
            icon: 'MessageSquare',
            label: 'Chat',
            href: '/chat'
        },
        {
            icon: 'Book',
            label: 'Docs',
            href: 'https://docs.askthehive.ai',
            external: true
        }
    ]
}