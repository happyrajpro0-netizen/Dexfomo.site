import type { Metadata } from "next";
import { FileText, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use — Dexfomo",
  description: "Terms and conditions governing the access and use of the Dexfomo analytics platform.",
};

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <FileText className="h-3.5 w-3.5" />
            <span>Legal Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Terms of Use
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: October 2026</p>
        </div>

        <div className="p-8 rounded-2xl bg-surface-100 border border-surface-border text-xs sm:text-sm text-slate-300 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or utilizing any feature of the Dexfomo website (<strong className="text-brand-accent">https://dexfomo.site</strong>) or our developer APIs, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any portion of these terms, you must refrain from using the platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Informational Purpose Only — Not Financial Advice</h2>
            <div className="p-4 rounded-xl bg-surface-200 border border-slate-800 text-slate-300">
              <strong className="text-white block mb-1">CRITICAL NOTICE:</strong>
              Dexfomo is strictly an analytics and market data aggregation platform. None of the materials, metrics, risk scores, or charts published on dexfomo.site constitute financial, investment, trading, accounting, or legal advice. Dexfomo does not operate a broker-dealer, exchange, or custodian.
            </div>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Third-Party Decentralized Protocols</h2>
            <p>
              Dexfomo surfaces data indexed from independent third-party automated market maker protocols (including Uniswap, Camelot, Raydium, and Aerodrome) and decentralized smart contracts. Dexfomo does not own, control, or guarantee the operation, solvency, or integrity of these external decentralized contracts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Acceptable Use & API Etiquette</h2>
            <p>Users and programmatic developers agree not to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Engage in denial-of-service attempts or circumvent API rate limits.</li>
              <li>Scrape or extract data in a manner that degrades system performance for other users.</li>
              <li>Misrepresent Dexfomo&apos;s sandbox telemetry or algorithmic risk scores as official investment ratings.</li>
              <li>Use the platform for any unlawful activities or market manipulation.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Intellectual Property</h2>
            <p>
              The Dexfomo brand name, original logo mark, user interface designs, custom CSS styling, and proprietary algorithmic heuristics are the intellectual property of the Dexfomo project. You may not reproduce or mirror our core brand assets without prior written consent.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, Dexfomo and its contributors shall not be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from your use of, or inability to use, the platform or any on-chain transaction executed based on information displayed herein.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
