import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
            <div className="max-w-md w-full text-center space-y-6">
                <h1 className="text-7xl font-light text-slate-300">404</h1>
                <div className="h-0.5 w-16 bg-slate-200 mx-auto"></div>
                <h2 className="text-2xl font-medium text-slate-800">Page Not Found</h2>
                <p className="text-slate-600">The page you're looking for doesn't exist.</p>
                <Link href="/">
                    <Button variant="outline">Go Home</Button>
                </Link>
            </div>
        </div>
    );
}
