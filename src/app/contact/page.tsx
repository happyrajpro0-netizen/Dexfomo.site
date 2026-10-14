"use client";

import React, { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ticketId, setTicketId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setTicketId(data.ticketId);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  return (
    <div className="py-12 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-xs font-medium text-brand-accent">
            <Mail className="h-3.5 w-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact the Dexfomo Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Have questions regarding our multi-chain indexing, API integration, partnership, or risk audits? Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-surface-100 border border-surface-border space-y-6">
              <h3 className="text-base font-bold text-white">Direct Communication Channels</h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-200 border border-slate-800 text-brand-cyan">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Email Inquiries</span>
                    <a href="mailto:contact@dexfomo.site" className="text-brand-accent hover:underline">
                      contact@dexfomo.site
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-200 border border-slate-800 text-brand-cyan">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Community Discord</span>
                    <span className="text-slate-400">Join our developer and trader discussion server</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-surface-200 border border-slate-800 text-brand-cyan">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block">Security & Vulnerability Reports</span>
                    <a href="mailto:security@dexfomo.site" className="text-brand-accent hover:underline">
                      security@dexfomo.site
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
                Response times average within 24 to 48 business hours. For urgent API support, please indicate &quot;API Production&quot; in the subject line.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-100 border border-surface-border">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message Delivered Successfully</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                    Thank you for contacting Dexfomo. Your inquiry has been routed to our core engineering team.
                  </p>
                  {ticketId && (
                    <div className="inline-block px-3 py-1 rounded bg-surface-200 border border-slate-700 font-mono text-xs text-brand-cyan">
                      Ticket ID: {ticketId}
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-5 py-2.5 rounded-lg bg-surface-200 hover:bg-surface-50 text-white text-xs font-semibold border border-slate-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-xs text-rose-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Full Name <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Morgan"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-200 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email Address <span className="text-brand-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-surface-200 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject <span className="text-brand-accent">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Developer API Integration Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-200 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message <span className="text-brand-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details regarding your inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-200 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-accent transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-accent text-white font-semibold text-xs shadow-lg shadow-brand-500/20 disabled:opacity-50 transition-all cursor-pointer"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
