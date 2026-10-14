# Dexfomo — Decentralized Exchange Analytics & Crypto Market Intelligence

> **Discover the DEX Market with Greater Clarity.**  
> Dexfomo is building an institutional-grade crypto market-intelligence and decentralized analytics platform designed to help traders, quants, and token projects explore decentralized liquidity, analyze tokens, and understand real AMM market activity with algorithmic integrity.

**Target Domain:** [https://dexfomo.site](https://dexfomo.site)  
**Target Git Branch:** `master`  
**License:** Private / Proprietary  

---

## 🚀 1. Technology Stack

- **Framework:** Next.js 14.2 (App Router, Server & Client Components)
- **Runtime:** Node.js 20+
- **Language:** TypeScript 5.6
- **Styling:** Tailwind CSS 3.4 (Custom Dark Fintech Obsidian Theme)
- **Icons:** Lucide React
- **Security:** Strict CSP Headers, HSTS, X-Frame-Options DENY, Rate Limiting, Cryptographic Token Sessions
- **Data Persistence:** Serverless File Cache & In-Memory Sliding Window Rate Limiting

---

## 🗺️ 2. Platform Architecture & Required Pages

| # | Route | Purpose | Status |
|---|---|---|---|
| 1 | `/` | Startup Homepage with Hero, Real-Time DEX Telemetry, and Interactive Discovery | ✅ Implemented |
| 2 | `/about` | Company Background, Guiding Principles, & Architectural Vision | ✅ Implemented |
| 3 | `/product` | Four-Stage Ingestion Pipeline & Honeypot Detection Mechanics | ✅ Implemented |
| 4 | `/features` | Complete Feature Matrix with Honest Status Indicators | ✅ Implemented |
| 5 | `/market-intelligence` | Cross-Chain Liquidity & AMM Volume Concentration Analytics | ✅ Implemented |
| 6 | `/token-discovery` | Multi-Chain Pair Explorer with Risk Scoring (0–100) & Search/Filter | ✅ Implemented |
| 7 | `/roadmap` | Engineering Trajectory & Quarterly Milestones (Q3 2026 – Q3 2027) | ✅ Implemented |
| 8 | `/business-model` | Projected Subscription Tiers & Sustainable Monetization Channels | ✅ Implemented |
| 9 | `/developer` | REST API Specs, JSON Schemas, and cURL / JS / Python Snippets | ✅ Implemented |
| 10 | `/faq` | Frequently Asked Questions & Technical Explanations | ✅ Implemented |
| 11 | `/contact` | Rate-Limited Inquiries Form & Direct Communication Channels | ✅ Implemented |
| 12 | `/privacy` | Privacy Policy & Data Minimization Practices | ✅ Implemented |
| 13 | `/terms` | Terms of Use & Informational Software Disclaimers | ✅ Implemented |
| 14 | `/risk-disclosure` | Smart Contract, Rugpull, and Market Volatility Disclosures | ✅ Implemented |
| 15 | `/thank-you` | Waitlist Onboarding Confirmation & Next Steps | ✅ Implemented |
| 16 | `/not-found` | Custom Fintech 404 Error Page | ✅ Implemented |
| 17 | `/admin` | Secure Administrative Dashboard for Lead & Inquiry Review | ✅ Implemented |

---

## 🔌 3. Active REST API Endpoints

- `GET /api/tokens` — Query multi-chain token pairs with optional `chain` and `q` search parameters.
- `GET /api/market-intelligence` — Aggregated 24h DEX volume, TVL, and chain market share.
- `GET /api/health` — System status, uptime in seconds, environment, and node cluster telemetry.
- `POST /api/waitlist` — Rate-limited waitlist registration for early access cohorts.
- `POST /api/contact` — Rate-limited communication form with automated ticket generation.
- `POST /api/admin/auth` — Cryptographic session token issuance for administrators.
- `GET /api/admin/stats` — Authorized administrative statistics, waitlist leads, and inquiries.

---

## 🛠️ 4. Local Development & Setup

### Prerequisites
- Node.js `v20.x` or higher
- npm `v10.x` or higher
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/<your-org>/dexfomo.site.git
cd dexfomo.site

# Install dependencies
npm install

# Copy environment variables template
cp .env.example .env.local
```

### Development Server
```bash
npm run dev
# Open http://localhost:3000 in your browser
```

### Production Build & Lint
```bash
# Type check without emitting files
npx tsc --noEmit

# Run ESLint validation
npm run lint

# Generate production build
npm run build

# Start production server
npm run start
```

---

## 🔐 5. Environment Variables

All secrets must reside in `.env.local` and are excluded from Git via `.gitignore`.

| Variable | Description | Default / Example |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical public URL | `https://dexfomo.site` |
| `NEXT_PUBLIC_APP_ENV` | Application environment | `production` / `development` |
| `ADMIN_SECRET_KEY` | Admin authorization secret (32+ chars) | `change-this-to-a-secure-random-32-byte-hex-string` |
| `RATE_LIMIT_MAX_REQUESTS`| Sliding window rate limit cap | `20` |
| `RATE_LIMIT_WINDOW_MS` | Rate limit sliding window (ms) | `60000` |
| `ETHEREUM_RPC_URL` | Ethereum RPC endpoint | `https://eth.llamarpc.com` |
| `ARBITRUM_RPC_URL` | Arbitrum RPC endpoint | `https://arb1.arbitrum.io/rpc` |

---

## 🛡️ 6. Security Audit & Policies

1. **No Exposed Secrets:** Zero private keys, seed phrases, or administrative passwords are committed to Git.
2. **Strict Security Headers:** `next.config.mjs` configures:
   - `Content-Security-Policy`
   - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy`
3. **Admin Token Verification:** Administrative stats endpoints cryptographically verify token origin, expiration, and key prefix.
4. **Input Sanitization & Rate Limiting:** All user inputs are sanitized and throttled per IP network.

---

## ⚖️ 7. Honest Data & Status Disclosures

- **Sample Sandbox Data:** Active sandbox pages display clear notices indicating prototype architecture testing data.
- **Feature Truthfulness:** Features marked **Implemented** are genuinely functional in code. Features marked **In Beta**, **Planned**, or **Coming Soon** represent actual roadmap items and are never disguised as live mainnet feeds.
- **Financial Projections:** Dexfomo treats future subscription and advertising revenues strictly as projections, never claiming unverified historical profits.

---

## 🌐 8. Deployment Preparation for https://dexfomo.site

The repository is fully ready for deployment on Vercel, AWS Amplify, Docker, or Node.js VPS.
- DNS A / CNAME records should point to the edge deployment IP.
- Ensure `NEXT_PUBLIC_SITE_URL=https://dexfomo.site` and `ADMIN_SECRET_KEY` are configured in your production environment settings.
