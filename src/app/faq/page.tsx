"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useWaitlist } from "@/context/WaitlistContext";

export default function FAQPage() {
  const { openWaitlist } = useWaitlist();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Dexfomo and what problem does it solve?",
      a: "Dexfomo is building a crypto market-intelligence and decentralized exchange analytics platform. We help traders, developers, and institutions explore decentralized markets, analyze tokens, and understand real liquidity activity with complete algorithmic transparency, free from manipulated volume or undisclosed paid promotions.",
    },
    {
      q: "How is Dexfomo different from DEX Screener or DexTools?",
      a: "Dexfomo features an original dark fintech design and codebase engineered around automated risk scoring (ARS) and mempool heuristics. Rather than prioritizing paid banners or vanity rankings, our platform evaluates liquidity locks, honeypot behaviors, and contract bytecode safety first, ensuring users have verifiable context before executing trades.",
    },
    {
      q: "How does the Algorithmic Risk Scoring (ARS) work?",
      a: "Our ARS engine computes a 0 to 100 safety score based on multiple deterministic factors: smart contract ownership status (renounced vs private key control), liquidity vault timelocks, buy/sell transfer tax limits, minting functions, and automated fork-based trade simulation to identify honeypots.",
    },
    {
      q: "What does the 'Sample Sandbox Data' notice mean?",
      a: "Dexfomo is currently deployed in an active Alpha sandbox. The sandbox presents real architectural data schemas and prototype telemetry to demonstrate the platform's UI, risk algorithms, and API structures. As dedicated validator RPC clusters complete testing, live mainnet feeds will replace sandbox models.",
    },
    {
      q: "Which blockchains and AMM protocols are supported?",
      a: "Our ingestion architecture currently indexes EVM chains (Ethereum, Arbitrum, Base, Polygon, Optimism) and non-EVM networks like Solana. Supported automated market makers include Uniswap v2/v3, Camelot, Raydium, Aerodrome, QuickSwap, and Velodrome.",
    },
    {
      q: "Is Dexfomo free to use?",
      a: "Yes. Core community features including public pair discovery, standard token searches, and basic risk scores will remain free forever. We project introducing advanced institutional tiers (Pro Analyst and Developer REST API) in future milestone releases.",
    },
    {
      q: "Does Dexfomo provide investment advice or endorse tokens?",
      a: "No. Dexfomo is an informational analytics platform and does not provide financial, legal, or investment advice. Crypto assets and decentralized trading involve extreme market volatility and smart-contract risks. Users must always conduct independent diligence.",
    },
    {
      q: "How can developers access the Dexfomo API?",
      a: "Our developer REST endpoints (/api/tokens, /api/market-intelligence, /api/health) are publicly testable today. High-throughput keys with dedicated quotas and streaming WebSocket access can be requested by joining our early access waitlist.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>Got Questions?</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about the Dexfomo platform, risk scoring engine, and product roadmap.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-surface-100 border border-surface-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold text-white hover:text-brand-accent transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4 text-brand-accent shrink-0" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 bg-surface-200/40">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="p-8 rounded-2xl bg-surface-100 border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base font-bold text-white">Have a specific inquiry?</h3>
            <p className="text-xs text-slate-400">
              Our engineering team is always ready to assist partners, traders, and developers.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg bg-surface-200 hover:bg-surface-50 text-white text-xs font-semibold border border-slate-700 transition-colors"
            >
              Contact Team
            </Link>
            <button
              onClick={openWaitlist}
              className="px-5 py-2.5 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold shadow-md shadow-brand-500/20 transition-colors cursor-pointer"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
