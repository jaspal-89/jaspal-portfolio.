import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StepBack } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md w-full glass-card p-10">
        <p className="text-red-400 text-xs tracking-[0.3em] uppercase mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Page not found.</h1>
        <p className="text-gray-400 mb-6">The page you're looking for doesn't exist or has been moved.</p>
        <Link href="/">
          <Button variant="outline" size="sm" className="cursor-pointer"><StepBack className="mr-2" /> Go Back Home</Button>
        </Link>
      </div>
    </main>
  );
}
