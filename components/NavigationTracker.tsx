"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/providers/AuthProvider';

export default function NavigationTracker() {
    const pathname = usePathname();
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isAuthenticated || !pathname) return;
        // Mock logging
        console.log(`[Navigation] User at ${pathname}`);
    }, [pathname, isAuthenticated]);

    return null;
}
