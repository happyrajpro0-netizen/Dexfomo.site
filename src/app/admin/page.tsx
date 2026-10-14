"use client";

import React, { useState, useEffect } from "react";
import { Lock, Shield, Users, Mail, Server, RefreshCw, LogOut, CheckCircle2, AlertCircle, Key, Eye, EyeOff } from "lucide-react";
import { WaitlistSubmission, ContactSubmission } from "@/lib/types";

interface AdminStats {
  totalWaitlistSignups: number;
  totalContactInquiries: number;
  serverUptimeSeconds: number;
  systemHealth: string;
  environment: string;
  lastDataRefresh: string;
}

export default function AdminPage() {
  const [token, setToken] = useState<string | null>(null);
  const [adminKey, setAdminKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(false);

  const [stats, setStats] = useState<AdminStats | null>(null);
  const [waitlist, setWaitlist] = useState<WaitlistSubmission[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"waitlist" | "contacts">("waitlist");

  const handleLogout = React.useCallback(() => {
    sessionStorage.removeItem("dexfomo_admin_token");
    setToken(null);
    setStats(null);
    setWaitlist([]);
    setContacts([]);
    setAdminKey("");
  }, []);

  const fetchDashboardData = React.useCallback(async (authToken: string) => {
    setDataLoading(true);
    try {
      const res = await fetch("/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fetch dashboard data.");
      }

      setStats(data.stats);
      setWaitlist(data.waitlist || []);
      setContacts(data.contacts || []);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : "Session expired.");
      handleLogout();
    } finally {
      setDataLoading(false);
    }
  }, [handleLogout]);

  // Check existing session token on mount
  useEffect(() => {
    const savedToken = sessionStorage.getItem("dexfomo_admin_token");
    if (savedToken) {
      setToken(savedToken);
      fetchDashboardData(savedToken);
    }
  }, [fetchDashboardData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    setAuthLoading(true);

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: adminKey }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      setToken(data.token);
      sessionStorage.setItem("dexfomo_admin_token", data.token);
      fetchDashboardData(data.token);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : "Authentication error.");
    } finally {
      setAuthLoading(false);
    }
  };

  if (!token) {
    return (
      <div className="py-20 flex items-center justify-center">
        <div className="mx-auto w-full max-w-md px-4">
          <div className="rounded-2xl bg-surface-100 border border-surface-border p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-accent border border-brand-500/20">
                <Lock className="h-6 w-6" />
              </div>
              <h1 className="text-xl font-bold text-white tracking-tight">
                Dexfomo Admin Portal
              </h1>
              <p className="text-xs text-slate-400">
                Enter your administrative key to manage waitlists and communications.
              </p>
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
                <AlertCircle className="h-4 w-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Administrative Key
                </label>
                <div className="relative">
                  <input
                    type={showKey ? "text" : "password"}
                    required
                    value={adminKey}
                    onChange={(e) => setAdminKey(e.target.value)}
                    placeholder="Enter ADMIN_SECRET_KEY..."
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-lg bg-surface-200 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowKey(!showKey)}
                    className="absolute right-3 top-2.5 text-slate-400 hover:text-white"
                  >
                    {showKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-accent text-white text-xs font-semibold shadow-md shadow-brand-500/20 disabled:opacity-50 transition-all cursor-pointer"
              >
                {authLoading ? "Authenticating..." : "Authenticate Session"}
              </button>
            </form>

            <div className="pt-2 text-[11px] text-slate-500 text-center">
              Protected administrative endpoint. All access attempts are recorded.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-surface-border">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Dexfomo Administration Portal
              </h1>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Live administrative monitoring and secure submission management.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchDashboardData(token)}
              disabled={dataLoading}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-100 hover:bg-surface-50 text-slate-300 text-xs border border-slate-700 transition-colors"
            >
              <RefreshCw className={`h-3.5 w-3.5 ${dataLoading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs border border-rose-500/30 transition-colors"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* System Stats Cards */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-surface-100 border border-surface-border">
              <span className="text-[11px] text-slate-400">Total Waitlist Registrations</span>
              <div className="text-xl font-bold text-white font-mono mt-1">
                {stats.totalWaitlistSignups}
              </div>
              <span className="text-[10px] text-brand-cyan">Verified Submissions</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-100 border border-surface-border">
              <span className="text-[11px] text-slate-400">Contact Inquiries</span>
              <div className="text-xl font-bold text-white font-mono mt-1">
                {stats.totalContactInquiries}
              </div>
              <span className="text-[10px] text-emerald-400">New Messages</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-100 border border-surface-border">
              <span className="text-[11px] text-slate-400">System Status</span>
              <div className="text-xl font-bold text-emerald-400 font-mono mt-1">
                {stats.systemHealth}
              </div>
              <span className="text-[10px] text-slate-400">{stats.environment} mode</span>
            </div>

            <div className="p-4 rounded-xl bg-surface-100 border border-surface-border">
              <span className="text-[11px] text-slate-400">Server Uptime</span>
              <div className="text-xl font-bold text-white font-mono mt-1">
                {Math.floor(stats.serverUptimeSeconds / 60)} min
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Process Active</span>
            </div>
          </div>
        )}

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-surface-border pb-3">
          <button
            onClick={() => setActiveTab("waitlist")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === "waitlist"
                ? "bg-brand-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white bg-surface-100"
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Waitlist Submissions ({waitlist.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 ${
              activeTab === "contacts"
                ? "bg-brand-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white bg-surface-100"
            }`}
          >
            <Mail className="h-4 w-4" />
            <span>Contact Messages ({contacts.length})</span>
          </button>
        </div>

        {/* Content Table */}
        {activeTab === "waitlist" ? (
          <div className="overflow-x-auto rounded-xl border border-surface-border bg-surface-100/90">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-surface-border bg-surface-200/90 text-slate-400 font-medium">
                <tr>
                  <th className="py-3 px-4">Registration ID</th>
                  <th className="py-3 px-4">Email</th>
                  <th className="py-3 px-4">Intended Role</th>
                  <th className="py-3 px-4">Timestamp (UTC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {waitlist.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-400">
                      No waitlist submissions recorded yet.
                    </td>
                  </tr>
                ) : (
                  waitlist.map((item) => (
                    <tr key={item.id} className="hover:bg-surface-hover/50">
                      <td className="py-3 px-4 font-mono text-[11px] text-slate-400">{item.id}</td>
                      <td className="py-3 px-4 font-semibold text-white">{item.email}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-brand-500/10 text-brand-accent border border-brand-500/20">
                          {item.intendedUse}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-mono text-slate-400">
                        {new Date(item.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-surface-border bg-surface-100/90">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-surface-border bg-surface-200/90 text-slate-400 font-medium">
                <tr>
                  <th className="py-3 px-4">Sender</th>
                  <th className="py-3 px-4">Subject</th>
                  <th className="py-3 px-4">Message</th>
                  <th className="py-3 px-4">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border">
                {contacts.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="py-8 text-center text-slate-400">
                      No contact inquiries received yet.
                    </td>
                  </tr>
                ) : (
                  contacts.map((msg) => (
                    <tr key={msg.id} className="hover:bg-surface-hover/50">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white">{msg.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{msg.email}</div>
                      </td>
                      <td className="py-3 px-4 font-medium text-brand-accent">{msg.subject}</td>
                      <td className="py-3 px-4 max-w-xs truncate text-slate-300">{msg.message}</td>
                      <td className="py-3 px-4 font-mono text-slate-400">
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
