import React from 'react';
import {Separator} from "@/components/ui/separator";
import DashboardSidebar from "@/components/dashboard-sidebar";
import BreadcrumbHeader from "@/components/breadcrumb-header";
import AppProvider from "@/components/providers/app-provider";

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <DashboardSidebar/>
            <div className="flex flex-col flex-1 min-h-screen">
               <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
                   <BreadcrumbHeader/>
               </header>
                <Separator/>
                <div className="flex-1 container py-4 text-accent-foreground">
                   <AppProvider>
                          {children}
                   </AppProvider>
                </div>

            </div>
        </div>
    );
}

export default layout;