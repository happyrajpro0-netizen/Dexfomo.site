import Link from "next/link";
import { Compass, Home, Search, Activity, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-20 sm:py-32 flex items-center justify-center">
      <div className="mx-auto max-w-md px-4 sm:px-6 text-center space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-600/10 border border-brand-500/20 text-brand-accent">
          <Compass className="h-8 w-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold text-brand-cyan tracking-wider">ERROR 404</span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The page or resource you requested could not be located in our decentralized directory.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-surface-100 border border-surface-border text-left space-y-2 text-xs">
          <span className="font-semibold text-slate-300 block">Helpful Navigation Links:</span>
          <div className="grid grid-cols-2 gap-2 pt-1">
            <Link
              href="/"
              className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200 hover:bg-surface-hover text-slate-300 hover:text-white transition-colors"
            >
              <Home className="h-3.5 w-3.5 text-brand-cyan" />
              <span>Homepage</span>
            </Link>
            <Link
              href="/token-discovery"
              className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200 hover:bg-surface-hover text-slate-300 hover:text-white transition-colors"
            >
              <Search className="h-3.5 w-3.5 text-brand-cyan" />
              <span>Token Discovery</span>
            </Link>
            <Link
              href="/market-intelligence"
              className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200 hover:bg-surface-hover text-slate-300 hover:text-white transition-colors"
            >
              <Activity className="h-3.5 w-3.5 text-brand-cyan" />
              <span>Market Intel</span>
            </Link>
            <Link
              href="/developer"
              className="flex items-center gap-1.5 p-2 rounded-lg bg-surface-200 hover:bg-surface-hover text-slate-300 hover:text-white transition-colors"
            >
              <ArrowRight className="h-3.5 w-3.5 text-brand-cyan" />
              <span>Developer API</span>
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white font-semibold text-xs transition-colors"
        >
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
