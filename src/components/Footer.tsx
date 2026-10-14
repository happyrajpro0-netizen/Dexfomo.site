import React from "react";
import Link from "next/link";
import { FOOTER_SECTIONS, SITE_CONFIG } from "@/lib/constants";
import { Shield, ExternalLink, Code2, Heart, ArrowUpRight } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-200 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center group">
              <Logo size={34} />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {SITE_CONFIG.description}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Public Sandbox Active
              </span>
              <span className="text-[11px] font-mono text-slate-500">
                Production Target: dexfomo.site
              </span>
            </div>
          </div>

          {/* Links Columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-3">
              <h4 className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-2 text-xs">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer box */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="rounded-xl bg-surface-100/60 p-4 border border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-300">
              <Shield className="h-4 w-4 text-brand-cyan" />
              <span>Important Risk & Market Data Disclaimer</span>
            </div>
            <p>
              Dexfomo is a crypto market-intelligence and decentralized analytics platform currently under active development. 
              Nothing published on dexfomo.site constitutes investment, tax, legal, or financial advice. 
              Decentralized exchange protocols, smart contracts, and crypto assets carry high market volatility, technical risk, 
              and potential total loss of capital. All data displayed in sandbox preview mode is for demonstration and architecture testing.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Dexfomo Platform. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
              <span>•</span>
              <Link href="/risk-disclosure" className="hover:text-slate-300 transition-colors">Risk Disclosure</Link>
              <span>•</span>
              <Link href="/developer" className="hover:text-slate-300 transition-colors">API</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
