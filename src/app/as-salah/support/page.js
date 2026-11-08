import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    ArrowLeft,
    ShieldCheck,
    Mail,
    HelpCircle,
    Bell,
    Compass,
    Headphones,
    CreditCard,
    CheckCircle2,
    AlertCircle,
    Smartphone,
    LifeBuoy,
    ExternalLink,
    Send,
    Languages
} from 'lucide-react';

export const metadata = {
    title: 'Support & Help Center - As-Salah',
    description: 'Official Help and Support Center for As-Salah: Prayer Times, Qibla & Quran. Troubleshooting for adhan notifications, compass calibration, offline audio downloads, and subscription management.',
};

export default function AsSalahSupport() {
    const supportEmail = 'qamrosh.dev@gmail.com';
    const emailSubject = encodeURIComponent('[As-Salah Support] Inquiry');
    const emailBody = encodeURIComponent(
        'Hello Qamrosh,\n\n' +
        'App: As-Salah (online.qamrosh.assalah)\n' +
        'Device Model: (e.g., iPhone 15 / Galaxy S24)\n' +
        'OS Version: (e.g., iOS 18.1 / Android 14)\n' +
        'As-Salah Version: (from App Settings)\n\n' +
        'Description of Issue / Feedback:\n' +
        '[Please write your issue or question here...]\n'
    );
    const mailtoUrl = `mailto:${supportEmail}?subject=${emailSubject}&body=${emailBody}`;

    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#93A5D5] selection:text-black">
            
            {/* Ambient Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-gradient-to-b from-[#C6A266]/10 via-[#1B4332]/15 to-transparent blur-3xl opacity-75" />
                <div className="absolute top-1/3 right-0 w-[420px] h-[420px] bg-[#93A5D5]/5 blur-3xl" />
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
                                    Support
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Language Switcher & Navigation Links */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Language Selector */}
                        <div className="flex items-center p-1 rounded-xl bg-white/5 border border-white/10 text-xs">
                            <span className="px-2.5 py-1 rounded-lg bg-[#C6A266] text-black font-semibold shadow-sm">
                                EN
                            </span>
                            <Link
                                href="/as-salah/support/tr"
                                className="px-2.5 py-1 rounded-lg text-slate-400 hover:text-white transition-colors"
                                title="Türkçe Destek Sayfası"
                            >
                                TR
                            </Link>
                        </div>

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
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C6A266]/10 border border-[#C6A266]/25 text-[#C6A266] text-xs font-semibold tracking-wide">
                        <LifeBuoy className="w-3.5 h-3.5" />
                        Official User Support &amp; Help Desk
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk tracking-tight text-white">
                        Help &amp; Support
                    </h1>
                    
                    <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                        We are here to assist with prayer timings, adhan alerts, Qibla compass accuracy, offline Quran downloads, and As-Salah Pro subscriptions.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Package ID: <code className="text-[#93A5D5]">online.qamrosh.assalah</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10">
                            Apple App Store ID: <code className="text-[#C6A266]">6818953512</code>
                        </span>
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                            Avg Response Time: 24-48 Hours
                        </span>
                    </div>

                    {/* Language Switch Notice */}
                    <div className="max-w-xl mx-auto p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                            <Languages className="w-4 h-4 text-[#C6A266]" />
                            <span>Looking for Turkish support? Türkçe yardım sayfası mevcuttur.</span>
                        </div>
                        <Link 
                            href="/as-salah/support/tr"
                            className="text-[#C6A266] hover:text-white underline underline-offset-2 transition-colors font-medium"
                        >
                            Türkçe Destek &rarr;
                        </Link>
                    </div>
                </div>

                {/* Quick Action Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <a
                        href={mailtoUrl}
                        className="p-5 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/40 hover:bg-white/[0.03] transition-all group space-y-3 block"
                    >
                        <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266] group-hover:scale-105 transition-transform">
                            <Mail className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base font-space-grotesk group-hover:text-[#C6A266] transition-colors">
                                Email Developer
                            </h3>
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                Send a direct support ticket to the engineer behind As-Salah.
                            </p>
                        </div>
                        <div className="text-[11px] font-mono text-[#93A5D5] flex items-center gap-1 pt-1">
                            <span>qamrosh.dev@gmail.com</span>
                            <ExternalLink className="w-3 h-3" />
                        </div>
                    </a>

                    <a
                        href="#faq"
                        className="p-5 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.03] transition-all group space-y-3 block"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base font-space-grotesk group-hover:text-emerald-400 transition-colors">
                                Frequent Questions
                            </h3>
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                Instant answers for adhan alerts, compass setup, and offline Quran.
                            </p>
                        </div>
                        <div className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1 pt-1">
                            <span>Explore Solutions &darr;</span>
                        </div>
                    </a>

                    <Link
                        href="/as-salah/privacy-policy"
                        className="p-5 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.03] transition-all group space-y-3 block"
                    >
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                            <ShieldCheck className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-base font-space-grotesk group-hover:text-blue-400 transition-colors">
                                Privacy Commitment
                            </h3>
                            <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                                Review our zero religious profiling and on-device storage pledge.
                            </p>
                        </div>
                        <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1 pt-1">
                            <span>Read Policy &rarr;</span>
                        </div>
                    </Link>
                </div>

                {/* FAQ Section */}
                <div id="faq" className="space-y-6 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C6A266]/10 border border-[#C6A266]/20 flex items-center justify-center text-[#C6A266]">
                            <HelpCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Troubleshooting Guide</span>
                            <h2 className="text-2xl sm:text-3xl font-bold font-space-grotesk text-white">
                                Frequently Asked Questions
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-4">
                        
                        {/* FAQ 1: Notifications */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                                    <Bell className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Why are my Adhan alerts or prayer reminders delayed or silent?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    Modern operating systems aggressively conserve battery by putting background processes to sleep. To guarantee prompt Adhan playback:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <strong className="text-white">Android:</strong> Go to <em>Settings &gt; Apps &gt; As-Salah &gt; Battery</em> and select <strong>&ldquo;Unrestricted&rdquo;</strong> (or disable Battery Optimization for As-Salah). Ensure &ldquo;Alarms &amp; Reminders&rdquo; permission is granted.
                                    </li>
                                    <li>
                                        <strong className="text-white">Samsung / Xiaomi / Huawei:</strong> Enable &ldquo;Auto-start&rdquo; and add As-Salah to the memory cleaner whitelist.
                                    </li>
                                    <li>
                                        <strong className="text-white">iOS (iPhone):</strong> In <em>Settings &gt; As-Salah &gt; Notifications</em>, make sure &ldquo;Allow Notifications&rdquo;, &ldquo;Sounds&rdquo;, and &ldquo;Time-Sensitive Notifications&rdquo; are turned on. Check that your physical mute switch or Focus mode is not silencing alerts.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ 2: Compass */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                                    <Compass className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    Why is the Qibla compass needle jumping or pointing incorrectly?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    The compass relies on your device&apos;s internal magnetometer hardware, which can be thrown off by external electromagnetic interference:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <strong className="text-white">Figure-8 Calibration:</strong> Hold your phone flat in your hand and move it in a smooth, wide &ldquo;figure 8&rdquo; motion 3 to 4 times in the air to recalibrate the sensor.
                                    </li>
                                    <li>
                                        <strong className="text-white">Magnetic Phone Cases:</strong> Cases with magnetic clasps, metal plates, or MagSafe wallets interfere with compass sensors. Remove them during calibration.
                                    </li>
                                    <li>
                                        <strong className="text-white">Precise Location:</strong> Verify that location permission is set to &ldquo;Precise&rdquo; for accurate mathematical calculation of the Kaaba azimuth angle.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ 3: Quran Audio */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
                                    <Headphones className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    How do I download Surahs for offline listening?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    As-Salah provides seamless high-speed streaming as well as full on-device offline storage:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>In the Quran index or Surah detail screen, tap the download icon next to any Surah to save it locally.</li>
                                    <li>Downloaded recitations are saved securely to your local app storage and can be played without Wi-Fi or cellular connectivity.</li>
                                    <li>Audio continues playing in the background even when your screen is locked.</li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ 4: Restore Purchases & Pro */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-[#C6A266]/10 text-[#C6A266] mt-0.5">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    I switched devices or reinstalled the app. How do I restore my Pro subscription?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    Your As-Salah Pro entitlement is permanently linked to your Google Play or Apple ID account:
                                </p>
                                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>Ensure you are logged into your phone with the same Google or Apple ID used for the initial purchase.</li>
                                    <li>Open As-Salah and navigate to <em>Settings &gt; Pro</em>.</li>
                                    <li>Tap <strong>&ldquo;Restore Purchases&rdquo;</strong>. RevenueCat will synchronize and restore your Pro access immediately.</li>
                                </ol>
                            </div>
                        </div>

                        {/* FAQ 5: Subscriptions & Refunds */}
                        <div className="p-6 rounded-2xl bg-[#08100C]/70 border border-white/10 hover:border-[#C6A266]/30 transition-all space-y-3">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-400 mt-0.5">
                                    <AlertCircle className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold text-lg text-white font-space-grotesk">
                                    How do I manage, cancel, or request a refund for a subscription?
                                </h3>
                            </div>
                            <div className="text-sm text-slate-300 pl-0 sm:pl-11 space-y-2 leading-relaxed">
                                <p>
                                    All subscription billing is handled exclusively by Apple and Google:
                                </p>
                                <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-400">
                                    <li>
                                        <strong className="text-white">Apple App Store:</strong> Go to iPhone <em>Settings &gt; [Your Name] &gt; Subscriptions &gt; As-Salah</em> to cancel. For refund requests, visit <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-[#93A5D5] underline">reportaproblem.apple.com</a>.
                                    </li>
                                    <li>
                                        <strong className="text-white">Google Play:</strong> Open the Google Play Store app &gt; tap your profile &gt; <em>Payments &amp; Subscriptions &gt; Subscriptions &gt; As-Salah</em> to manage or cancel.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Direct Contact Form / Email Box */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0E1A14] via-[#08100C] to-[#050B08] border border-[#C6A266]/30 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A266]">Direct Inquiries</span>
                            <h2 className="text-2xl font-bold font-space-grotesk text-white">
                                Still Need Help?
                            </h2>
                            <p className="text-slate-400 text-sm max-w-xl">
                                For bug reports, Surah translation suggestions, or custom feature ideas, drop an email directly to the engineer.
                            </p>
                        </div>
                        <a
                            href={mailtoUrl}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C6A266] text-black font-semibold text-sm hover:bg-[#d8b476] transition-all shadow-lg shadow-[#C6A266]/20 flex-shrink-0"
                        >
                            <Send className="w-4 h-4" />
                            <span>Contact Support</span>
                        </a>
                    </div>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2 text-xs text-slate-300">
                        <div className="font-semibold text-white flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            <span>For Faster Assistance, Please Include:</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 text-slate-400">
                            <li>Your phone model and operating system version (e.g. iPhone 15 on iOS 18.1, or Galaxy S24 on Android 14)</li>
                            <li>A short summary of what happened (screenshots are appreciated)</li>
                            <li>The As-Salah app build version</li>
                        </ul>
                    </div>
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
                        <Link href="/as-salah/support/tr" className="hover:text-[#C6A266] transition-colors">Türkçe Destek (TR)</Link>
                        <span className="text-white/20">&bull;</span>
                        <Link href="/as-salah/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
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

