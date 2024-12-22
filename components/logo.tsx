import React from 'react';
import Link from "next/link";
import {cn} from "@/lib/utils";
import {SquareDashedMousePointer} from "lucide-react";


type LogoProps = {
    fontSize?: string;
    iconSize?: number;
}

function Logo({ fontSize = "2xl", iconSize = 20 }: LogoProps) {
    return (
        <Link href="/"
              className={cn("text-2xl font-extrabold flex items-center gap-2",fontSize)}>
            <div className="rounded-xl bg-gradient-to-r from-primary/90 to-primary p-2">
                <SquareDashedMousePointer size={iconSize} className="stroke-white"/>
            </div>
            <div>
                <span className="bg-gradient-to-r from-primary/90 to-primary text-transparent bg-clip-text">CI</span>
                <span className="text-stone-700 dark:text-stone-300">Flow</span>
            </div>
        </Link>
    );
}

export default Logo;