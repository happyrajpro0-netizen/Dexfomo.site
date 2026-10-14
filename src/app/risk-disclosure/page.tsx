import type { Metadata } from "next";
import { AlertTriangle, ShieldAlert, Cpu, TrendingDown, Layers, Terminal } from "lucide-react";

export const metadata: Metadata = {
  title: "Risk Disclosure & Market Volatility Warning — Dexfomo",
  description:
    "Important risk disclosure concerning decentralized finance (DeFi), smart contract risks, liquidity volatility, and digital asset trading.",
};

export default function RiskDisclosurePage() {
  const risks = [
    {
      title: "1. Smart Contract & Protocol Vulnerabilities",
      description:
        "Smart contracts deployed on Ethereum, Arbitrum, Solana, and other networks are immutable software programs. Even audited contracts may contain undetected bugs, economic exploits, or reentrancy flaws that can result in complete capital loss.",
    },
    {
      title: "2. Liquidity & 'Rugpull' Risks",
      description:
        "Decentralized automated market makers (AMMs) permit permissionless pool creation. Rogue creators may mint unlimited tokens, dump developer allocations, remove liquidity reserves, or implement malicious blacklist hooks (honeypots).",
    },
    {
      title: "3. Extreme Market Volatility",
      description:
        "Digital assets on decentralized exchanges fluctuate wildly within seconds due to low circulating liquidity, mempool front-running (MEV sandwich attacks), and speculative trading volume. Losses can exceed initial expectations.",
    },
    {
      title: "4. Algorithmic Risk Scores Are Heuristic Estimates",
      description:
        "Dexfomo's Algorithmic Risk Scoring (ARS) operates as an automated screening heuristic. A high score (e.g., 90+) indicates that common automated vulnerability checks passed; it does not guarantee that a project is legitimate or profitable.",
    },
    {
      title: "5. Mempool & Network Latency Discrepancies",
      description:
        "Blockchain transactions are subject to variable block confirmation times and network re-organizations. Pricing displayed on Dexfomo may differ from the exact execution price settled on-chain.",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-medium text-rose-400">
            <AlertTriangle className="h-3.5 w-3.5" />
            <span>Essential Risk Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Risk Disclosure
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed">
            Please carefully review the following technical and economic risks associated with decentralized finance and automated market maker trading.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs sm:text-sm leading-relaxed space-y-2">
          <div className="flex items-center gap-2 font-bold text-white text-sm">
            <ShieldAlert className="h-5 w-5 text-rose-400" />
            <span>Trading Crypto Assets Involves Substantial Risk of Capital Loss</span>
          </div>
          <p>
            Do not deposit or trade funds you cannot afford to lose entirely. Dexfomo does not execute trades on your behalf and assumes zero liability for investment outcomes, impermanent loss, or protocol exploits.
          </p>
        </div>

        <div className="space-y-6">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="p-6 rounded-xl bg-surface-100 border border-surface-border space-y-2"
            >
              <h3 className="text-sm sm:text-base font-bold text-white">{risk.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {risk.description}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-xl bg-surface-200 border border-slate-800 text-xs text-slate-400 space-y-2">
          <h4 className="font-semibold text-slate-200">No Fiduciary Responsibility</h4>
          <p>
            Dexfomo and its contributors act strictly as software developers providing open analytics tools. Nothing provided on this platform constitutes a fiduciary or advisory relationship. Always perform thorough independent verification before transacting on decentralized protocols.
          </p>
        </div>
      </div>
    </div>
  );
}
