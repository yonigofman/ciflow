"use client";

import {usePathname} from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbList
} from "@/components/ui/breadcrumb";

function BreadcrumbHeader() {
    const pathName = usePathname();
    const paths = pathName === '/' ? [""] : pathName.split('/');
    return (
        <div className="flex items-center flex-start">
            <Breadcrumb>
                <BreadcrumbList>
                    {paths.map((path, index) => (
                        <BreadcrumbItem key={index}>
                            <BreadcrumbLink className="capitalize" href={`/${path}`}>
                                {path || 'home'}
                            </BreadcrumbLink>

                        </BreadcrumbItem>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}

export default BreadcrumbHeader;