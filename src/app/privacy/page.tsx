import type { Metadata } from "next";
import { Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — Dexfomo",
  description: "Dexfomo's data protection practices, telemetry policies, and user privacy commitments.",
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Lock className="h-3.5 w-3.5" />
            <span>Compliance & Data Protection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono">Last Updated: October 2026 • Effective Date: October 2026</p>
        </div>

        <div className="p-8 rounded-2xl bg-surface-100 border border-surface-border text-xs sm:text-sm text-slate-300 leading-relaxed space-y-6">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Introduction</h2>
            <p>
              Dexfomo (&quot;we,&quot; &quot;our,&quot; or &quot;the Platform&quot;) operates the decentralized exchange analytics and crypto market-intelligence website accessible at <strong className="text-brand-accent">https://dexfomo.site</strong>. We respect your digital privacy and are committed to transparent data practices. This policy outlines what information we collect, how it is used, and how it is secured.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Information We Collect</h2>
            <p>We believe in minimal data collection:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li><strong className="text-slate-200">Voluntary Information:</strong> When you register for our waitlist or submit a message via our contact form, we collect the email address, name, and role preference you provide.</li>
              <li><strong className="text-slate-200">Technical Connection Data:</strong> To defend our infrastructure against Distributed Denial of Service (DDoS) and automated scraping attacks, our edge servers process network IP addresses and standard browser user-agent headers. IP addresses are hashed for rate limiting and not sold to third parties.</li>
              <li><strong className="text-slate-200">Public Blockchain Data:</strong> Smart contract addresses, liquidity transactions, and token balances queried through the platform are public on-chain information and are not associated with personal identity records.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. How Information is Used</h2>
            <p>Information collected is strictly utilized to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
              <li>Deliver requested waitlist notifications, product updates, and developer onboarding instructions.</li>
              <li>Enforce endpoint rate limits and safeguard system reliability.</li>
              <li>Improve platform responsiveness and user experience.</li>
              <li>Never sell, rent, or trade your personal email address to advertising networks.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Cookies & Local Storage</h2>
            <p>
              Dexfomo uses minimal local storage solely for preserving user interface preferences (such as selected blockchain filters or sorting criteria) and administrative session tokens. We do not embed intrusive third-party cross-site trackers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Security Standards</h2>
            <p>
              We implement industry-standard encryption protocols (HTTPS / TLS 1.3), Content Security Policy (CSP) headers, strict transport security, and encrypted storage protections to safeguard all user transmissions.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">6. Contacting the Data Controller</h2>
            <p>
              If you wish to update or permanently purge your email address from our waitlist records, please email <a href="mailto:privacy@dexfomo.site" className="text-brand-accent hover:underline">privacy@dexfomo.site</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
