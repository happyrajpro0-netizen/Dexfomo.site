"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Menu, X, Shield, Activity, ChevronRight, Terminal } from "lucide-react";
import { useWaitlist } from "@/context/WaitlistContext";
import Logo from "@/components/Logo";

interface NavbarProps {
  onOpenWaitlist?: () => void;
}

export default function Navbar({ onOpenWaitlist }: NavbarProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openWaitlist } = useWaitlist();

  const handleWaitlistClick = () => {
    if (onOpenWaitlist) {
      onOpenWaitlist();
    } else {
      openWaitlist();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center group">
          <Logo size={36} priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                  isActive
                    ? "bg-surface-50 text-brand-accent shadow-sm"
                    : "text-slate-300 hover:text-white hover:bg-surface-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/token-discovery"
            className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-slate-700/60 hover:border-slate-500 transition-colors"
          >
            <Activity className="h-3.5 w-3.5 text-brand-cyan" />
            <span>Discover DEX</span>
          </Link>
          <button
            onClick={handleWaitlistClick}
            className="flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-accent text-white shadow-sm shadow-brand-600/30 hover:shadow-brand-accent/20 transition-all cursor-pointer"
          >
            <span>{SITE_CONFIG.secondaryCTA}</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-surface-50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-surface-border bg-surface-100/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-1">
          <div className="grid grid-cols-2 gap-1 py-2 border-b border-slate-800 mb-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-xs font-medium rounded-md ${
                  pathname === link.href
                    ? "bg-brand-500/20 text-brand-accent font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-surface-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/token-discovery"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-200"
            >
              <Activity className="h-4 w-4 text-brand-cyan" />
              <span>Explore Dexfomo</span>
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWaitlistClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-xs font-semibold text-white cursor-pointer"
            >
              <span>{SITE_CONFIG.secondaryCTA}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
