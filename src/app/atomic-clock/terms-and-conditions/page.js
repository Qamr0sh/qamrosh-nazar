import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    Shield,
    Scale,
    CreditCard,
    AlertTriangle,
    Database,
    Mail,
    ExternalLink,
    Building2,
    Clock,
    Lock
} from 'lucide-react';

export const metadata = {
    title: 'Terms of Service - Atomic Clock',
    description: 'Professional terms of service and plan comparison matrix for Atomic Clock habit tracker, including EU DSA trader declaration.',
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#03050B] text-slate-100 font-inter overflow-x-hidden selection:bg-[#BC13FE] selection:text-white">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-b from-[#BC13FE]/10 via-[#D4AF37]/10 to-transparent blur-3xl opacity-60" />
                <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#00F3FF]/5 blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#BC13FE]/5 blur-3xl" />
            </div>

            {/* Sticky Navigation Bar */}
            <nav className="sticky top-0 w-full z-50 bg-[#03050B]/85 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/atomic-clock"
                            className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#D4AF37]/40 transition-all group"
                            title="Back to Atomic Clock"
                        >
                            <ArrowLeft className="w-4 h-4 text-slate-300 group-hover:-translate-x-0.5 group-hover:text-[#D4AF37] transition-all" />
                        </Link>
                        
                        <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9 ring-1 ring-[#D4AF37]/30 rounded-xl p-1 bg-white/[0.04]">
                                <Image
                                    src="/atomic_clock/logos/logos with varient/dark_mode_logo.png"
                                    alt="Atomic Clock Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div>
                                <span className="font-space-grotesk font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE]">
                                    Atomic Clock
                                </span>
                                <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                    Legal Terms
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/atomic-clock/privacy-policy"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/atomic-clock/trader-status"
                            className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1.5 rounded-lg hover:bg-[#D4AF37]/20 transition-all inline-flex items-center gap-1.5"
                        >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Trader Status (DSA)</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Container */}
            <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
                
                {/* Hero Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-semibold tracking-wide">
                        <Sparkles className="w-3.5 h-3.5" />
                        Identity-Based Habit System Terms
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE]">
                        Terms of Service
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Binding terms governing access to <span className="text-white font-medium">Atomic Clock</span>, premium in-app billing plans, offline sandboxed storage, and EU consumer protection rights.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Identifier: <code className="text-[#00F3FF]">online.qamrosh.atomicclock</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Effective: November 2026
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1.5 font-sans font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            DSA & GDPR Compliant
                        </span>
                    </div>
                </div>

                {/* Core Architecture Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#00F3FF]">On-Device First</div>
                        <div className="text-white font-medium text-sm">Offline SQLite</div>
                        <p className="text-slate-400 text-xs">All habit logs remain strictly in local storage</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#BC13FE]">Zero Server Tracking</div>
                        <div className="text-white font-medium text-sm">No Accounts Needed</div>
                        <p className="text-slate-400 text-xs">No email, passwords, or profiling required</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37]">Fair Monetization</div>
                        <div className="text-white font-medium text-sm">Play Store Billing</div>
                        <p className="text-slate-400 text-xs">Subscribed via Google Play & RevenueCat</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">EU Regulations</div>
                        <div className="text-white font-medium text-sm">Trader Declared</div>
                        <p className="text-slate-400 text-xs">EU Digital Services Act verified</p>
                    </div>
                </div>

                {/* Document Body Sections */}
                <div className="space-y-6">

                    {/* Section 1 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-[#D4AF37]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 1</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Acceptance of Terms
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-13">
                            <p>
                                By downloading, launching, purchasing subscriptions, or using <strong>Atomic Clock</strong>, you acknowledge that you have read, understood, and consented to these Terms of Service. If you do not agree to these terms, you must refrain from using the app.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-[#D4AF37]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#00F3FF]/10 border border-[#00F3FF]/20 flex items-center justify-center text-[#00F3FF] flex-shrink-0">
                                <Clock className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 2</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Description of Service
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-13">
                            <p>
                                Atomic Clock is an executive productivity suite designed for identity-based personal development and habit execution. Key capabilities include:
                            </p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00F3FF] mt-0.5 flex-shrink-0" />
                                    <span><strong>Identity Heatmaps:</strong> Visual telemetry showing consistency streaks and habit density.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00F3FF] mt-0.5 flex-shrink-0" />
                                    <span><strong>Atomic Habit Stacking:</strong> High-precision trigger engines powered by native Android exact alarm schedulers.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#00F3FF] mt-0.5 flex-shrink-0" />
                                    <span><strong>Private Offline Vault:</strong> Complete database sandboxing with zero background remote telemetry syncing.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#BC13FE]/10 via-white/[0.02] to-white/[0.01] border border-[#BC13FE]/30 shadow-[0_10px_35px_rgba(188,19,254,0.04)] space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#BC13FE]/20 border border-[#BC13FE]/40 flex items-center justify-center text-[#BC13FE] flex-shrink-0">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#BC13FE]/20 text-[#BC13FE] text-[10px] font-black uppercase tracking-wider mb-0.5">
                                    <Sparkles className="w-3 h-3" /> Commercial Tiers
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Subscriptions, Payments & Licensing
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-13">
                            <p>
                                Atomic Clock offers a permanent Free Tier alongside optional Pro upgrades (Monthly at $0.99, Annual at $9.99, and Lifetime Access at $29.99) unlocking Deep Insights, custom luxury themes, and unlimited streak history.
                            </p>

                            <div className="space-y-3 pt-2 text-sm text-slate-300">
                                <p>
                                    <strong>Payment Processing:</strong> All in-app subscriptions and lifetime purchases are managed via <strong>RevenueCat</strong> and billed securely through the Google Play Store. The developer does not receive, view, or retain your credit card or financial credentials.
                                </p>
                                <p>
                                    <strong>Cancellation & Auto-Renewal:</strong> Subscriptions renew automatically at the selected cadence unless cancelled in your Google Play account at least 24 hours prior to renewal.
                                </p>
                                <p>
                                    <strong>Refunds & Consumer Rights:</strong> Refunds are handled exclusively by the Google Play Store under Google Play's standard refund terms and applicable regional statutory laws.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-amber-500/[0.03] border border-amber-500/20 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">Important Disclaimer</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Not Medical or Mental Health Advice
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-2">
                            <p>
                                Atomic Clock is strictly a behavioral productivity and organization utility. We are <strong>not</strong> medical, healthcare, psychiatric, or mental health providers. The app and its contents must not be construed as clinical diagnosis, medical therapy, or health intervention.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-[#D4AF37]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 5</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Local Data Responsibility & Backups
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-2">
                            <p>
                                Because Atomic Clock stores all data on your local device (in a sandboxed SQLite directory at <code>/data/data/online.qamrosh.atomicclock/databases/atomic_clock.db</code>) with zero remote telemetry servers, you maintain sole responsibility for preserving database backups via native export functions or Android cloud backups.
                            </p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/10 hover:border-[#D4AF37]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                                <Scale className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 6</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Limitation of Liability
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-2">
                            <p>
                                Atomic Clock is provided "as is" without warranty of any kind. To the greatest extent permissible by law, the developer shall not be held liable for indirect, incidental, or consequential damages resulting from your use of or inability to access the software.
                            </p>
                        </div>
                    </section>

                    {/* Section 7: Trader Status & EU Digital Services Act */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#120B20] via-[#05060E] to-[#161208] border-2 border-[#D4AF37]/40 shadow-[0_15px_40px_rgba(212,175,55,0.08)] space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        EU DSA Articles 30 & 31 Mandate
                                    </div>
                                    <h2 className="text-2xl font-bold font-space-grotesk text-white">
                                        7. Trader Status & EU Digital Services Act Declaration
                                    </h2>
                                </div>
                            </div>

                            <Link
                                href="/atomic-clock/trader-status"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] text-black font-bold text-xs hover:opacity-95 transition-all self-start sm:self-auto cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                            >
                                <span>Full Declaration</span>
                                <ExternalLink className="w-3.5 h-3.5 text-black" />
                            </Link>
                        </div>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Pursuant to Regulation (EU) 2022/2065 (Digital Services Act) and EU consumer rights provisions enforced on Google Play, the developer hereby officially declares **Trader Status** for <strong>Atomic Clock</strong> in connection with digital commercial offerings and in-app subscriptions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-semibold">
                                    <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" /> Legal Trader Identity
                                </div>
                                <div className="text-white text-sm font-semibold">Qamrosh Ali Nazar</div>
                                <div className="text-slate-400">Sole Proprietor / Independent Mobile Engineer</div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-semibold">
                                    <Mail className="w-3.5 h-3.5 text-[#BC13FE]" /> Official DSA Contact Point
                                </div>
                                <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] font-mono text-sm hover:underline block">
                                    qamrosh.dev@gmail.com
                                </a>
                                <div className="text-slate-400">Articles 11 & 12 Single Point of Contact</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-2">
                            <p>
                                <strong>Consumer Rights & Digital Delivery Notice:</strong> In conformity with the EU Consumer Rights Directive (2011/83/EU), purchasers of Atomic Clock Pro or Lifetime licenses acknowledge that digital capabilities activate immediately upon payment verification. Statutory withdrawal and refund requests are administered through Google Play Store billing channels.
                            </p>
                        </div>
                    </section>

                    {/* Section 8: Legal Inquiries */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#00F3FF]/10 border border-[#00F3FF]/20 flex items-center justify-center text-[#00F3FF] flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 8</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Contact & Legal Inquiries
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 space-y-3 text-sm text-slate-300">
                            <p>
                                For inquiries concerning these Terms, developer credentials, or technical clarification, please reach out to our primary desk:
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-sm">
                                <Mail className="w-4 h-4 text-[#BC13FE]" />
                                <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline">
                                    qamrosh.dev@gmail.com
                                </a>
                            </div>
                        </div>
                    </section>

                </div>

                {/* The Premium Plan Matrix */}
                <div className="pt-10 border-t border-white/10 space-y-10">
                    <div className="text-center space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                            Official Plan Matrix
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white">Plan Comparison Matrix</h2>
                        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light">
                            All upgrades, recurring subscription commitments, and lifetime purchases are legally bound under Section 3 of these Terms of Service.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        
                        {/* Free Card */}
                        <div className="relative group rounded-2xl border border-white/10 bg-white/[0.015] p-6 transition-all hover:border-white/20 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-1">Free Tier</div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Basic Citizen</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $0 <span className="text-[10px] font-normal text-slate-500">Free Forever</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-400 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Unlimited Basic Tracking</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>System Alarm Engines</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Offline local SQLite database</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Monthly Card */}
                        <div className="relative group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-[#00F3FF]/40 flex flex-col justify-between">
                            <div>
                                <div className="text-[#00F3FF] font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Premium Tier
                                </div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Monthly Premium</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $0.99 <span className="text-[10px] font-normal text-slate-400">/ month</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-300 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#00F3FF] flex-shrink-0" />
                                        <span><b>Deep Insights</b> trend graphs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#00F3FF] flex-shrink-0" />
                                        <span><b>Custom Themes</b> & skins</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#00F3FF] flex-shrink-0" />
                                        <span><b>Unlimited History</b> routine logs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Annual Card */}
                        <div className="relative group rounded-2xl border border-[#BC13FE]/40 bg-[#080714] p-6 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(188,19,254,0.06)] hover:border-[#BC13FE]">
                            <div className="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black text-[8px] font-black uppercase tracking-wider">
                                Save 15%
                            </div>
                            <div>
                                <div className="text-[#BC13FE] font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Popular Tier
                                </div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Annual Premium</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $9.99 <span className="text-[10px] font-normal text-slate-400">/ year</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-300 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#BC13FE] flex-shrink-0" />
                                        <span><b>Deep Insights</b> trend graphs (1-year access)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#BC13FE] flex-shrink-0" />
                                        <span><b>Custom Themes</b> & skins (1-year access)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#BC13FE] flex-shrink-0" />
                                        <span><b>Unlimited History</b> routine logs (1-year access)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Lifetime Card */}
                        <div className="relative group rounded-2xl border border-[#D4AF37]/50 bg-[#0B0A12] p-6 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(212,175,55,0.08)] hover:border-[#D4AF37]">
                            <div className="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black text-[8px] font-black uppercase tracking-wider">
                                Ultimate Value
                            </div>
                            <div>
                                <div className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Lifetime Tier
                                </div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Lifetime Premium</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $29.99 <span className="text-[10px] font-normal text-slate-400">One-Time</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-300 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>Deep Insights</b> trend graphs (lifetime access)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>Custom Themes</b> & skins (lifetime access)</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>Unlimited History</b> routine logs (lifetime access)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                        <div className="relative w-6 h-6 ring-1 ring-white/20 rounded-lg p-0.5 bg-white/[0.04]">
                            <Image
                                src="/atomic_clock/logos/logos with varient/dark_mode_logo.png"
                                alt="Atomic Clock Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span>&copy; {new Date().getFullYear()} Atomic Clock. All rights reserved.</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/atomic-clock" className="hover:text-white transition-colors">App Overview</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/atomic-clock/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/atomic-clock/trader-status" className="text-[#D4AF37] hover:underline font-medium">Trader Status</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/" className="hover:text-white transition-colors">Portfolio</Link>
                    </div>
                </footer>

            </main>
        </div>
    );
}
