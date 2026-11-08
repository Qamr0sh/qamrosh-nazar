import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    CheckCircle2,
    ShieldCheck,
    Mail,
    Building2,
    Globe,
    FileText,
    ExternalLink,
    Lock,
    Scale,
    CreditCard
} from 'lucide-react';

export const metadata = {
    title: 'Trader Status Declaration - As-Salah',
    description: 'Official app-level trader status declaration for As-Salah under EU Digital Services Act (DSA Articles 30 & 31) and Consumer Protection Regulations.',
};

export default function AsSalahTraderStatus() {
    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#93A5D5] selection:text-black">
            
            {/* Ambient Background Glow */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#C6A266]/10 via-[#1B4332]/10 to-transparent blur-3xl opacity-70" />
                <div className="absolute top-1/3 right-0 w-[350px] h-[350px] bg-[#93A5D5]/5 blur-3xl" />
            </div>

            {/* Navigation Bar */}
            <nav className="sticky top-0 w-full z-50 bg-[#050B08]/85 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link
                            href="/as-salah"
                            className="inline-flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C6A266]/40 transition-all group"
                            title="Back to As-Salah"
                        >
                            <ArrowLeft className="w-4 h-4 text-slate-300 group-hover:-translate-x-0.5 group-hover:text-[#C6A266] transition-all" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-9 h-9 ring-1 ring-[#C6A266]/30 rounded-xl p-1 bg-[#0E1A14]">
                                <Image
                                    src="/as-salah/logo.png"
                                    alt="As-Salah Logo"
                                    fill
                                    className="object-contain p-1 rounded-lg"
                                />
                            </div>
                            <div>
                                <span className="font-space-grotesk font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] via-blue-100 to-white">
                                    As-Salah
                                </span>
                                <span className="hidden sm:inline-block ml-2 text-[10px] uppercase tracking-wider text-slate-500 font-medium">
                                    Compliance
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/as-salah/terms-and-conditions"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/as-salah/privacy-policy"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
                
                {/* Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        EU Digital Services Act (DSA) Articles 30 &amp; 31 Mandate
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] via-blue-100 to-white">
                        Trader Status Declaration
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        Official regulatory declaration for <span className="text-white font-medium">As-Salah</span> confirming commercial publisher classification and European Economic Area (EEA) consumer rights compliance.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Identifier: <code className="text-[#93A5D5]">online.qamrosh.assalah</code> • Apple ID: 6818953512
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Status: <strong className="text-emerald-400">Verified Trader</strong>
                        </span>
                    </div>
                </div>

                {/* Status Hero Card */}
                <div className="p-6 sm:p-8 rounded-2xl border-2 border-[#C6A266]/40 bg-gradient-to-br from-[#0B1A12] via-[#050B08] to-[#0A121E] shadow-[0_15px_40px_rgba(198,162,102,0.08)] space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#C6A266]/20 border border-[#C6A266]/50 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">Official Regulatory Classification</span>
                            <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                Declared Trader under European Union Law
                            </h2>
                        </div>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-15">
                        In accordance with Regulation (EU) 2022/2065 (Digital Services Act) and consumer transparency standards enforced by Google Play and the Apple App Store, the developer confirms that Trader Status applies to <strong>As-Salah</strong> in connection with digital commercial offerings and in-app subscriptions.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-6">

                    {/* Section 1: Identity & Credentials */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 1</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Trader Identity &amp; Publisher Credentials
                                </h2>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="text-slate-400 uppercase tracking-wider font-semibold">Legal Trader Name</div>
                                <div className="text-white text-base font-semibold">Qamrosh Ali Nazar</div>
                                <div className="text-slate-400">Individual Developer / Sole Proprietorship</div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="text-slate-400 uppercase tracking-wider font-semibold">DSA Single Point of Contact (Arts. 11 &amp; 12)</div>
                                <a href="mailto:qamrosh.dev@gmail.com" className="text-[#C6A266] font-mono text-sm hover:underline block">
                                    qamrosh.dev@gmail.com
                                </a>
                                <div className="text-slate-400">Communication language: English</div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="text-slate-400 uppercase tracking-wider font-semibold">Developer Portal</div>
                                <a href="https://qamrosh-nazar.netlify.app" target="_blank" rel="noopener noreferrer" className="text-[#93A5D5] font-mono text-xs hover:underline block truncate">
                                    https://qamrosh-nazar.netlify.app
                                </a>
                                <div className="text-slate-400">Official Web Presence</div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="text-slate-400 uppercase tracking-wider font-semibold">Store Identifiers</div>
                                <div className="text-white font-mono text-xs">online.qamrosh.assalah • Apple ID: 6818953512</div>
                                <div className="text-slate-400">Google Play Store &amp; Apple App Store</div>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Grounds for Trader Classification */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                <Scale className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 2</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Legal Grounds for Trader Classification
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 space-y-3 text-sm text-slate-300">
                            <p>
                                Under European Union Directive 2005/29/EC and Regulation (EU) 2022/2065, an app publisher qualifies as a trader when engaging in activities related to trade, business, craft, or profession.
                            </p>
                            <div className="space-y-2 pt-1 text-xs sm:text-sm">
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>In-App Subscriptions:</strong> As-Salah offers commercial <em>As-Salah Pro</em> subscriptions unlocking premium vocal Adhans, exclusive Arabic calligraphy fonts, and spiritual telemetry widgets.</span>
                                </div>
                                <div className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>Secured Billing Pipeline:</strong> Managed through RevenueCat and processed via Google Play Store / Apple App Store.</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Consumer Rights & Withdrawal */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 3</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Consumer Rights &amp; Right of Withdrawal
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 space-y-3 text-sm text-slate-300">
                            <p>
                                In compliance with the <strong>EU Consumer Rights Directive (2011/83/EU)</strong>:
                            </p>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
                                <li><strong>Immediate Execution:</strong> Consumers expressly agree that digital subscription perks activate immediately upon purchase confirmation.</li>
                                <li><strong>Platform Refund Channels:</strong> All payments, renewals, and refunds are managed under the official customer protection rules of the Google Play Store and Apple App Store.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4: Self-Certification */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 4</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Statutory Self-Certification
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 text-sm text-slate-300">
                            <p>
                                The publisher self-certifies that <strong>As-Salah</strong> only offers digital products and services that comply with the applicable rules of Union law, including user privacy, spiritual data sovereignty, and transparent billing standards.
                            </p>
                        </div>
                    </section>

                </div>

                {/* Footer */}
                <footer className="pt-12 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-slate-500">
                    <div className="flex items-center gap-3">
                        <div className="relative w-6 h-6 ring-1 ring-white/20 rounded-lg p-0.5 bg-[#0E1A14]">
                            <Image
                                src="/as-salah/logo.png"
                                alt="As-Salah Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span>&copy; {new Date().getFullYear()} As-Salah. All rights reserved.</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link href="/as-salah" className="hover:text-white transition-colors">App Overview</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/as-salah/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/as-salah/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/as-salah/privacy-policy/tr" className="hover:text-[#C6A266] transition-colors">Gizlilik Politikası (TR)</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/" className="hover:text-white transition-colors">Portfolio</Link>
                    </div>
                </footer>

            </main>
        </div>
    );
}

