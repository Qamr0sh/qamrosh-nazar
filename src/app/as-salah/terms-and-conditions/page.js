import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    ShieldCheck,
    Shield,
    CheckCircle2,
    CreditCard,
    Scale,
    Compass,
    Mail,
    ExternalLink,
    AlertCircle,
    Sparkles,
    RefreshCw,
    FileCheck,
    Building2,
    Globe
} from 'lucide-react';

export const metadata = {
    title: 'Terms & Conditions - As-Salah',
    description: 'Terms and Conditions for As-Salah Islamic lifestyle app, including Pro subscription terms and EU DSA trader declaration.',
};

export default function AsSalahTermsAndConditions() {
    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#93A5D5] selection:text-black">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#C6A266]/10 via-[#1B4332]/10 to-transparent blur-3xl opacity-70" />
                <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#93A5D5]/5 blur-3xl" />
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
                                    Legal
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/as-salah/privacy-policy"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden sm:block"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/as-salah/trader-status"
                            className="text-xs font-semibold text-[#C6A266] bg-[#C6A266]/10 border border-[#C6A266]/30 px-3 py-1.5 rounded-lg hover:bg-[#C6A266]/20 transition-all inline-flex items-center gap-1.5"
                        >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Trader Status (DSA)</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
                
                {/* Hero Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A266]/10 border border-[#C6A266]/25 text-[#C6A266] text-xs font-semibold tracking-wide">
                        <FileCheck className="w-3.5 h-3.5" />
                        Official Legal Agreement
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-white">
                        Terms & Conditions
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light">
                        Governing your use of the <span className="text-white font-medium">As-Salah</span> mobile application, premium subscriptions, and affiliated digital services.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Identifier: <code className="text-[#93A5D5]">online.qamrosh.assalah</code>
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

                {/* Quick Summary Highlights */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#C6A266]">Worship Utility</div>
                        <div className="text-white font-medium text-sm">Spiritual & Accurate</div>
                        <p className="text-slate-400 text-xs">Precise prayer calculations & Qibla</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#93A5D5]">Zero Data Sale</div>
                        <div className="text-white font-medium text-sm">Privacy Honored</div>
                        <p className="text-slate-400 text-xs">Religious telemetry never sold or rented</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">Pro Subscriptions</div>
                        <div className="text-white font-medium text-sm">Store Managed</div>
                        <p className="text-slate-400 text-xs">Direct via Google Play & RevenueCat</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-purple-400">EU Regulations</div>
                        <div className="text-white font-medium text-sm">Trader Certified</div>
                        <p className="text-slate-400 text-xs">EU Digital Services Act verified</p>
                    </div>
                </div>

                {/* Document Body Sections */}
                <div className="space-y-6">

                    {/* Section 1 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <FileCheck className="w-5 h-5" />
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
                                By downloading, installing, accessing, or using the <strong>As-Salah</strong> mobile application across any platform (including Google Play Store and Apple App Store), you confirm that you have read, understood, and agreed to be legally bound by these Terms and Conditions.
                            </p>
                            <p className="text-slate-400 text-sm">
                                If you do not accept or agree with any portion of these Terms, you must discontinue use and uninstall the application immediately.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#93A5D5]/10 border border-[#93A5D5]/20 flex items-center justify-center text-[#93A5D5] flex-shrink-0">
                                <Compass className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 2</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Description of Service & Spiritual Use
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-13">
                            <p>
                                As-Salah is a spiritual lifestyle and precision utility application engineered to facilitate Islamic devotional practices. Core features include:
                            </p>
                            <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>Astronomical Prayer Calculations:</strong> On-device calculation of Fajr, Dhuhr, Asr, Maghrib, and Isha based on verified geographic coordinates.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>Qibla Direction:</strong> Sensor-driven magnetic compass heading pointing directly to the Holy Kaaba in Makkah.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                                    <span><strong>Digital Tasbeeh & Routine Tracking:</strong> Haptic-assisted dhikr tallying saved strictly in on-device secure storage.</span>
                                </li>
                            </ul>
                            <p className="text-slate-400 text-xs italic pt-1">
                                Notice: All calculation algorithms (Muslim World League, ISNA, Umm al-Qura, Karachi, Egyptian General Authority) are provided for religious guidance. Users should also consult local mosque timetables where specialized geographic horizons apply.
                            </p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#C6A266]/10 via-[#08100C]/80 to-[#08100C]/70 border border-[#C6A266]/30 shadow-[0_10px_35px_rgba(198,162,102,0.05)] space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/20 border border-[#C6A266]/40 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#C6A266]/20 text-[#C6A266] text-[10px] font-black uppercase tracking-wider mb-0.5">
                                    <Sparkles className="w-3 h-3" /> Commercial Offering
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Subscriptions & In-App Purchases (As-Salah Pro)
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-13">
                            <p>
                                While all fundamental prayer timing tools are available free of charge, As-Salah offers optional premium upgrades under the <strong>As-Salah Pro</strong> designation.
                            </p>

                            <div className="grid sm:grid-cols-3 gap-3 pt-1">
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                                    <div className="text-[#C6A266] font-bold text-xs">Vocal Adhans</div>
                                    <p className="text-slate-400 text-xs">Authentic recitations from Makkah, Madinah, and Al-Aqsa</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                                    <div className="text-[#C6A266] font-bold text-xs">Advanced Themes</div>
                                    <p className="text-slate-400 text-xs">Custom calligraphy, Islamic geometry skins, and AMOLED styles</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                                    <div className="text-[#C6A266] font-bold text-xs">Priority Features</div>
                                    <p className="text-slate-400 text-xs">Early access to spiritual widgets and routine analytics</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-2 text-sm text-slate-300">
                                <p>
                                    <strong>Billing & Authentication:</strong> All transactions are securely routed through <strong>RevenueCat</strong> and finalized directly by the Google Play Store (for Android) or Apple App Store (for iOS). The developer does not process, inspect, or hold payment card credentials.
                                </p>
                                <p>
                                    <strong>Auto-Renewal & Cancellation:</strong> Subscriptions renew automatically unless cancelled at least 24 hours prior to the close of the current billing cycle. You may cancel anytime directly in your Google Play or App Store account settings.
                                </p>
                                <p>
                                    <strong>Refund Policy:</strong> In compliance with app marketplace guidelines, refund requests are evaluated and issued exclusively by the respective store (Google Play / Apple) according to their standard consumer refund terms.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                                <Shield className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 4</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Intellectual Property Rights
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13">
                            <p>
                                The application interface, logos, graphics, typography selections, animations, database schemas, audio compositions, and proprietary software architecture are the intellectual property of the developer and are protected by applicable international copyright, trademark, and trade secret laws. You may not reverse engineer, decompile, redistribute, or create unauthorized derivative works of the software.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                                <AlertCircle className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 5</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Device Settings & User Obligations
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 pl-0 sm:pl-13">
                            <p>
                                You are responsible for configuring required device permissions so that prayer schedules function accurately:
                            </p>
                            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-300">
                                <li><strong>Location Permissions:</strong> Required to pinpoint accurate solar zenith angles.</li>
                                <li><strong>Battery Optimization:</strong> You must exclude As-Salah from aggressive OEM battery management so background Adhan alarm reminders trigger promptly.</li>
                                <li><strong>Notification Authority:</strong> Must be granted in system settings to receive timely alerts.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
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
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-3">
                            <p>
                                To the maximum extent permitted by applicable law, the application is provided on an "as is" and "as available" basis. The developer disclaims all warranties, express or implied. Under no circumstances shall the developer be liable for indirect, incidental, or consequential damages resulting from device misconfiguration, hardware sensor anomalies, or missed prayer notifications.
                            </p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                                <RefreshCw className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 7</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Modifications to Terms
                                </h2>
                            </div>
                        </div>
                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13">
                            <p>
                                We reserve the right to amend these terms at any time. When substantial modifications occur, we will update the "Effective" date displayed at the head of this document. Continued usage after revised terms are posted constitutes binding agreement.
                            </p>
                        </div>
                    </section>

                    {/* Section 8: Trader Status & EU Digital Services Act */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B1A12] via-[#050B08] to-[#0A121E] border-2 border-[#C6A266]/40 shadow-[0_15px_40px_rgba(198,162,102,0.08)] space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-2xl bg-[#C6A266]/20 border border-[#C6A266]/50 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                        EU DSA Articles 30 & 31 Mandate
                                    </div>
                                    <h2 className="text-2xl font-bold font-space-grotesk text-white">
                                        8. Trader Status & EU Digital Services Act Declaration
                                    </h2>
                                </div>
                            </div>

                            <Link
                                href="/as-salah/trader-status"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C6A266] text-black text-xs font-bold hover:bg-[#d6b47c] transition-all self-start sm:self-auto cursor-pointer shadow-lg shadow-[#C6A266]/20"
                            >
                                <span>Full Declaration</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            Under European Union law (Regulation (EU) 2022/2065 - Digital Services Act) and consumer transparency standards enforced by Google Play and the Apple App Store, the developer hereby officially declares **Trader Status** for <strong>As-Salah</strong> in connection with commercial transactions and in-app subscriptions.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-semibold">
                                    <Building2 className="w-3.5 h-3.5 text-[#C6A266]" /> Legal Trader Identity
                                </div>
                                <div className="text-white text-sm font-semibold">Qamrosh Ali Nazar</div>
                                <div className="text-slate-400">Sole Proprietor / Independent Mobile Engineer</div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
                                <div className="flex items-center gap-2 text-slate-400 uppercase tracking-wider font-semibold">
                                    <Mail className="w-3.5 h-3.5 text-[#C6A266]" /> Official DSA Contact Point
                                </div>
                                <a href="mailto:qamrosh.dev@gmail.com" className="text-[#C6A266] font-mono text-sm hover:underline block">
                                    qamrosh.dev@gmail.com
                                </a>
                                <div className="text-slate-400">Articles 11 & 12 Single Point of Contact</div>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 space-y-2">
                            <p>
                                <strong>Consumer Rights & Digital Delivery Notice:</strong> In conformity with the EU Consumer Rights Directive (2011/83/EU), purchasers of As-Salah Pro acknowledge and expressly consent that delivery of digital content begins immediately upon purchase verification. All statutory cancellation and refund processes are administered directly by the authorized storefront (Google Play / Apple App Store).
                            </p>
                        </div>
                    </section>

                    {/* Section 9: Legal Contact */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 9</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Contact & Legal Inquiries
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 space-y-3 text-sm text-slate-300">
                            <p>
                                If you have questions concerning these Terms, require clarification on in-app billing policies, or need to reach our compliance desk, please reach out via:
                            </p>
                            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono text-sm">
                                <Mail className="w-4 h-4 text-[#C6A266]" />
                                <a href="mailto:qamrosh.dev@gmail.com" className="text-[#C6A266] hover:underline">
                                    qamrosh.dev@gmail.com
                                </a>
                            </div>
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
                        <Link href="/as-salah/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/as-salah/trader-status" className="text-[#C6A266] hover:underline font-medium">Trader Status</Link>
                        <span className="text-white/20">•</span>
                        <Link href="/" className="hover:text-white transition-colors">Portfolio</Link>
                    </div>
                </footer>

            </main>
        </div>
    );
}
