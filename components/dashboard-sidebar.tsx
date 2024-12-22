"use client";
import React from 'react';
import {HomeIcon, Layers2Icon, SearchIcon, ShieldCheckIcon} from "lucide-react";
import Logo from "@/components/logo";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {usePathname} from "next/navigation";

const routes = [
    {
        href: '',
        label: 'Home',
        icon: HomeIcon
    },
    {
        href: 'workflows',
        label: 'Workflows',
        icon: Layers2Icon
    },
    {
        href: 'search',
        label: 'Search',
        icon: SearchIcon
    },
    {
        href: 'auth',
        label: 'Authentication',
        icon: ShieldCheckIcon
    }
];

function DashboardSidebar() {
    const pathname = usePathname();
    const activeRoute = routes
        .find((route) =>
        route.href.length > 0 && pathname.includes(route.href)) || routes[0];

    return (
        <div
            className="hidden relative md:block min-w-[280px] max-w-[280px]
            h-screen overflow-hidden w-full bg-primary/5 dark:bg-secondary/30
            dark:text-foreground text-muted-foreground border-r-2 border-separate">
            <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4">
                <Logo/>
            </div>
            <div className="p-4">
            Todo: User Profile
            </div>
            <div className="flex flex-col p-2">
                {routes.map((route, index) => (
                    <Link key={index}
                       href={route.href}
                       className={buttonVariants({
                           variant: activeRoute.href === route.href ? 'sideBarActiveItem' : 'sideBarItem'
                       })}>
                        <route.icon/>
                        <span>{route.label}</span>
                    </Link>
                ))}
        </div>
    </div>
    )
}

export default DashboardSidebar;