import React from 'react';
import Link from "next/link";
import {ArrowLeft, } from "lucide-react";

function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-md">
            Oops! It seems you've reached a page that doesn't exist. 🚧
            Maybe the URL is incorrect, or the page has been moved. 🤔
            Don't worry, you can always go back to the dashboard and start fresh! 🏠
                </p>
                
                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <Link href={'/'} className='flex items-center justify-center px-4 py-2 bg-primary text-white
                    rounded-md hover:bg:primary/80 transition-colors'>
                        <ArrowLeft className='w-4 h-4 mr-2'/>
                        Back to Dashboard
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default NotFoundPage;