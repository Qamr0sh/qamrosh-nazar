import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    ShieldCheck,
    Lock,
    Compass,
    Database,
    Bell,
    Mail,
    FileCheck,
    CreditCard,
    Headphones,
    DownloadCloud,
    Languages
} from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy - As-Salah',
    description: 'Privacy policy for As-Salah Islamic lifestyle app. We value your privacy and spiritual data.',
};

export default function AsSalahPrivacyPolicy() {
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
                                    Privacy
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Switcher */}
                        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                            <span className="px-2.5 py-1 rounded-lg bg-[#C6A266] text-black font-semibold shadow-sm">
                                EN
                            </span>
                            <Link
                                href="/as-salah/privacy-policy/tr"
                                className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition-colors"
                                title="Türkçe Gizlilik Politikası (KVKK)"
                            >
                                TR
                            </Link>
                        </div>

                        <Link
                            href="/as-salah/support"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden md:block"
                        >
                            Support
                        </Link>
                        <Link
                            href="/as-salah/terms-and-conditions"
                            className="text-xs font-medium text-slate-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors hidden lg:block"
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="/as-salah/trader-status"
                            className="text-xs font-semibold text-[#C6A266] bg-[#C6A266]/10 border border-[#C6A266]/30 px-3 py-1.5 rounded-lg hover:bg-[#C6A266]/20 transition-all inline-flex items-center gap-1.5"
                        >
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">Trader Status (DSA)</span>
                            <span className="sm:hidden">DSA</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
                
                {/* Hero Header */}
                <div className="text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide">
                        <Lock className="w-3.5 h-3.5" />
                        Privacy-First &bull; Zero Religious Data Sale
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-white">
                        Privacy Policy
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        At <span className="text-white font-medium">As-Salah</span>, your spiritual journey is sacred. We treat your devotional habits, prayers, Quranic listening, and dhikr logs with absolute confidentiality.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Identifier: <code className="text-[#93A5D5]">online.qamrosh.assalah</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Effective: November 2026
                        </span>
                    </div>

                    {/* Turkish Language Alternate Banner */}
                    <div className="max-w-xl mx-auto p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <Languages className="w-4 h-4 text-[#C6A266]" />
                            <span>Türkçe Gizlilik Politikası ve KVKK Aydınlatma Metni mevcuttur.</span>
                        </div>
                        <Link 
                            href="/as-salah/privacy-policy/tr"
                            className="text-[#C6A266] hover:text-white underline underline-offset-2 transition-colors font-medium"
                        >
                            Türkçe Oku &rarr;
                        </Link>
                    </div>
                </div>

                {/* Document Sections */}
                <div className="space-y-6">

                    {/* Section 1 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <Database className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 1</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Data Collection and Usage
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4 pl-0 sm:pl-13">
                            <div>
                                <strong className="text-white">Location Data:</strong> To provide accurate prayer times and Qibla direction, the app requests access to your device location. This data is computed <strong>strictly locally on your device</strong> to determine astronomical solar angles. We do not store, log, or transmit your location history to external servers.
                            </div>
                            <div>
                                <strong className="text-white">Local Database &amp; Dhikr Logs:</strong> Your Tasbeeh counts, target routine settings, and theme preferences are stored in on-device secure storage. We have zero visibility into your personal worship frequency.
                            </div>
                            <div>
                                <strong className="text-white">Quran Audio Streaming &amp; Offline Downloads:</strong> When you download Surahs for offline listening, audio files are stored solely in your local application directory. Audio streaming connects directly to high-speed CDN audio servers without harvesting or recording your listening logs.
                            </div>
                            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                                <strong className="text-white">Zero Religious Profiling:</strong> We firmly believe that worship is between the believer and the Creator. We <strong>never sell, lease, commercialize, or trade</strong> your personal or religious telemetry to third parties.
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 2</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Third-Party Service Providers
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-3">
                            <p>We work exclusively with trusted, certified infrastructure partners:</p>
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
                                <li><strong>RevenueCat:</strong> Manages subscription entitlement tokens for As-Salah Pro without revealing credit card information to the developer.</li>
                                <li><strong>Google Play Store &amp; Apple App Store:</strong> All monetary payments and store subscriptions are handled entirely by the respective storefronts.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                                <Bell className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 3</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    App Permissions
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-2">
                            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-400">
                                <li><strong>Notifications:</strong> Required to schedule Adhan alerts and reminders for prayer windows.</li>
                                <li><strong>Foreground Service / Audio Playback:</strong> Required to support background Quran recitation playback while your device screen is locked or while using other applications.</li>
                                <li><strong>Haptics &amp; Vibration:</strong> Powers tactile physical feedback during Tasbeeh routines.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                                <Lock className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 4</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Security &amp; Data Rights
                                </h2>
                            </div>
                        </div>

                        <div className="text-slate-300 text-sm sm:text-base leading-relaxed pl-0 sm:pl-13 space-y-2">
                            <p>
                                Because As-Salah utilizes an on-device architecture, you have absolute ownership of your data. You may delete all local entries instantly at any time by selecting "Clear Data" in your device settings or uninstalling the app.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="p-6 sm:p-8 rounded-2xl bg-[#08100C]/70 border border-white/10 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] flex-shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Section 5</span>
                                <h2 className="text-xl sm:text-2xl font-bold font-space-grotesk text-white">
                                    Contact &amp; Data Controller
                                </h2>
                            </div>
                        </div>

                        <div className="pl-0 sm:pl-13 space-y-3 text-sm text-slate-300">
                            <p>
                                For any questions regarding your privacy rights or data handling:
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
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/support" className="hover:text-white transition-colors">Support</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/privacy-policy/tr" className="hover:text-[#C6A266] transition-colors">Türkçe (TR)</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/trader-status" className="text-[#C6A266] hover:underline font-medium">Trader Status</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/" className="hover:text-white transition-colors">Portfolio</Link>
                    </div>
                </footer>

            </main>
        </div>
    );
}
