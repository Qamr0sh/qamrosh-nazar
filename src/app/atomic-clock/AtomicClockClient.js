'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    ArrowLeft, 
    CheckCircle2, 
    Zap, 
    BarChart2, 
    Clock, 
    Trophy, 
    Sparkles, 
    Fingerprint, 
    ChevronDown, 
    Download,
    Flame
} from 'lucide-react';

const playStoreUrl = 'https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock';

const screensData = [
    {
        id: 'home',
        label: 'Dashboard',
        icon: '📱',
        src: '/atomic_clock/home screen.jpeg',
        title: 'Habit & Identity Dashboard',
        description: 'Organize habits under target identity pillars. Every completed routine casts a vote for who you become.'
    },
    {
        id: 'insights',
        label: 'Analytics',
        icon: '📊',
        src: '/atomic_clock/insights.jpeg',
        title: 'Deep Analytics & Heatmaps',
        description: 'GitHub-style activity heatmaps, streak trends, and completion rate graphs to measure long-term momentum.'
    },
    {
        id: 'themes',
        label: 'Dynamic Themes',
        icon: '🎨',
        src: '/atomic_clock/theme.jpeg',
        title: 'Bespoke Color Engines',
        description: 'Deep obsidian dark mode with custom accent customization tailored for high-focus executive environments.'
    },
    {
        id: 'streaks',
        label: 'Streaks',
        icon: '🔥',
        src: '/atomic_clock/streaks.jpeg',
        title: 'Momentum Tracking',
        description: 'Continuous streak momentum indicators and milestone rewards without toxic pressure.'
    },
    {
        id: 'history',
        label: 'Logs',
        icon: '📜',
        src: '/atomic_clock/history.jpeg',
        title: 'Historical Audit Logs',
        description: 'Comprehensive day-by-day retrospective logs stored 100% locally on your device in secure SQLite.'
    }
];

const faqsData = [
    {
        question: 'How does Atomic Clock differ from regular habit trackers?',
        answer: 'Atomic Clock is built explicitly on identity-based habits from James Clear’s Atomic Habits. Rather than focusing merely on arbitrary checklists, it frames habits as votes for your desired identity, reinforced with exact native alarm engines and zero cloud telemetry.'
    },
    {
        question: 'Is my habit and routine data truly private?',
        answer: 'Yes. 100% of your routines, progress logs, and history are stored strictly on your local device in an encrypted SQLite database. We do not require accounts, logins, or tracking servers.'
    },
    {
        question: 'When will the Apple App Store (iOS) version be available?',
        answer: 'The iOS version of Atomic Clock has been submitted to Apple App Store Connect and is currently under active review. It will be available for iPhone users in the App Store very soon.'
    },
    {
        question: 'How do subscriptions and the Lifetime license work?',
        answer: 'We offer Monthly ($0.99), Annual ($9.99), and Lifetime ($29.99) tiers managed securely through RevenueCat and processed by the Google Play Store billing platform.'
    }
];

export default function AtomicClockClient() {
    const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    const [billingPeriod, setBillingPeriod] = useState('lifetime'); // 'monthly' | 'annual' | 'lifetime'
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const activeScreen = screensData[activeScreenIndex];

    return (
        <div className="min-h-screen bg-[#03050B] text-slate-100 font-inter overflow-x-hidden selection:bg-[#BC13FE] selection:text-white">
            
            {/* Ambient Background Aura */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#BC13FE]/10 via-[#D4AF37]/5 to-transparent blur-3xl opacity-70" />
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#00F3FF]/5 blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#BC13FE]/5 blur-3xl" />
            </div>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#03050B]/85 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-white" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 ring-2 ring-[#D4AF37]/35 rounded-xl p-1 bg-[#121424]">
                                <Image
                                    src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                    alt="Atomic Clock Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE]">
                                Atomic Clock
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-6">
                        <Link href="#gallery" className="text-sm font-semibold text-slate-400 hover:text-[#D4AF37] transition-all hidden md:block">Screenshots</Link>
                        <Link href="#features" className="text-sm font-semibold text-slate-400 hover:text-[#D4AF37] transition-all hidden sm:block">Features</Link>
                        
                        {/* App Store In Review Pill */}
                        <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs" title="Apple App Store version is currently in review">
                            <AppleIcon className="w-3.5 h-3.5 text-white" />
                            <span className="text-[11px] text-amber-300 font-medium">App Store In Review</span>
                        </div>

                        {/* Google Play Action */}
                        <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                            <button className="relative bg-[#03050B] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all border border-white/10 hover:border-white/20 cursor-pointer flex items-center gap-1.5">
                                <GooglePlayIcon className="w-3.5 h-3.5" />
                                <span>Get on Play Store</span>
                            </button>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        
                        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-[#BC13FE]/10 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6 animate-fadeUp backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>100% Offline Identity Alchemist</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-space-grotesk tracking-tighter mb-6 leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-500 pb-2">
                            Build the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE]">Identity</span> <br /> of who you want to become.
                        </h1>

                        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8 font-light">
                            James Clear’s Atomic Habits philosophy materialized into a high-end, 100% offline companion designed to refine who you are.
                        </p>

                        {/* Dual Action / Availability Badges */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Google Play Live Button */}
                            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                                <div className="relative flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-slate-950 rounded-xl font-space-grotesk font-extrabold text-sm sm:text-base transition-all hover:bg-white cursor-pointer shadow-lg">
                                    <GooglePlayIcon className="w-5 h-5 text-slate-950" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] font-medium uppercase tracking-wider text-slate-800">Get it on</div>
                                        <div className="font-bold">Google Play</div>
                                    </div>
                                </div>
                            </a>

                            {/* Apple App Store In-Review Notice Badge */}
                            <div className="relative flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl border border-white/15 bg-white/[0.04] text-slate-300 font-space-grotesk font-medium text-sm backdrop-blur-md cursor-default w-full sm:w-auto">
                                <AppleIcon className="w-5 h-5 text-white" />
                                <div className="text-left leading-tight">
                                    <div className="text-[10px] uppercase tracking-wider text-slate-400">Apple App Store</div>
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <span>iOS Release</span>
                                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/35 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                                            In Review • Soon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Tabbed Phone Switcher */}
                    <div className="mt-12 space-y-8">
                        {/* Tab Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                            {screensData.map((screen, idx) => (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreenIndex(idx)}
                                    className={`px-4 py-2 rounded-xl text-xs font-space-grotesk font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                                        activeScreenIndex === idx
                                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] text-slate-950 font-bold scale-105 shadow-lg shadow-[#BC13FE]/20'
                                            : 'bg-white/[0.03] text-slate-400 border border-white/10 hover:border-white/30 hover:bg-white/5'
                                    }`}
                                >
                                    <span>{screen.icon}</span>
                                    <span>{screen.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Phone Mockup Frame */}
                        <div className="relative mx-auto max-w-sm flex flex-col items-center">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#BC13FE]/20 to-[#00F3FF]/20 rounded-[3rem] blur-2xl pointer-events-none" />

                            <div className="relative w-full max-w-[260px] sm:max-w-[290px] p-2.5 rounded-[2.5rem] bg-slate-950 border-4 border-[#D4AF37]/40 shadow-2xl shadow-black ring-1 ring-white/10">
                                <div className="w-20 h-3 rounded-full bg-slate-950 border border-white/10 mx-auto mb-1.5 relative z-20" />

                                <div className="relative rounded-[1.8rem] overflow-hidden aspect-[9/19.5] bg-slate-900 border border-white/10 shadow-inner">
                                    <Image
                                        src={activeScreen.src}
                                        alt={activeScreen.title}
                                        fill
                                        className="object-cover object-top transition-all duration-500"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="mt-6 text-center max-w-xs space-y-1">
                                <h3 className="font-space-grotesk font-bold text-white text-base">
                                    {activeScreen.title}
                                </h3>
                                <p className="font-inter text-xs text-slate-400 leading-relaxed">
                                    {activeScreen.description}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Screenshots Gallery Section */}
            <section id="gallery" className="py-24 bg-[#020308] border-t border-b border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="h-px w-8 bg-[#D4AF37]" />
                            <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-[#D4AF37]">
                                Visual Mastery
                            </span>
                            <div className="h-px w-8 bg-[#D4AF37]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white tracking-tight mb-4">
                            Designed for Pure Focus
                        </h2>
                        <p className="text-slate-400 font-light text-base">
                            High-density interfaces engineered to remove digital friction and elevate your daily disciplines.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {screensData.map((screen, index) => (
                            <div
                                key={screen.id}
                                className="exec-card p-5 flex flex-col justify-between group cursor-pointer"
                                onClick={() => {
                                    setActiveScreenIndex(index);
                                    window.scrollTo({ top: 350, behavior: 'smooth' });
                                }}
                            >
                                <div className="space-y-4">
                                    <div className="relative mx-auto w-full max-w-[210px] p-2 rounded-[2rem] bg-slate-950 border-2 border-white/10 shadow-xl group-hover:border-[#D4AF37]/50 transition-colors">
                                        <div className="w-16 h-2 rounded-full bg-slate-950 border border-white/10 mx-auto mb-1" />
                                        <div className="relative rounded-[1.4rem] overflow-hidden aspect-[9/19] bg-slate-900">
                                            <Image
                                                src={screen.src}
                                                alt={screen.title}
                                                fill
                                                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-sm">{screen.icon}</span>
                                            <h3 className="font-space-grotesk font-bold text-white text-base group-hover:text-[#D4AF37] transition-colors">
                                                {screen.title}
                                            </h3>
                                        </div>
                                        <p className="font-inter text-xs text-slate-400 leading-relaxed">
                                            {screen.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#D4AF37] font-space-grotesk font-semibold">
                                    <span>Preview Screen</span>
                                    <span>→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Features Breakdown */}
            <section id="features" className="py-24 bg-[#03050B] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white tracking-tight mb-4">
                            Architected for Momentum
                        </h2>
                        <p className="text-slate-400 font-light text-base">
                            Built from first principles: 100% offline, zero latency, zero cloud tracking.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Zap />}
                            title="Habit Stacking Engine"
                            description="Chain behavioral triggers so new routines naturally attach to established daily habits without friction."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<BarChart2 />}
                            title="Identity Heatmaps"
                            description="Visualize habit consistency density across months with deep GitHub-inspired activity maps."
                            accent="#BC13FE"
                        />
                        <FeatureCard
                            icon={<Clock />}
                            title="Exact Native Alarms"
                            description="Hardware-exact Android alarms that break through battery optimizations to fire at the precise moment."
                            accent="#00F3FF"
                        />
                        <FeatureCard
                            icon={<Flame />}
                            title="Streak Protection"
                            description="Smart recovery mechanisms so you never lose heart after a single off-day: never miss twice."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<Fingerprint />}
                            title="Sandboxed Vault"
                            description="Zero telemetry transmission. All database queries execute locally within your device’s sandboxed storage."
                            accent="#BC13FE"
                        />
                        <FeatureCard
                            icon={<Trophy />}
                            title="Milestone Mastery"
                            description="Earn permanent badges marking 30, 60, and 100-day identity transformations."
                            accent="#00F3FF"
                        />
                    </div>

                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative z-10 border-t border-white/5 bg-[#020409]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
                            Direct Investment
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white">Upgrade Your Identity</h2>
                        <p className="text-slate-400 mt-2 font-light text-sm">
                            Google Play Store live now • Apple App Store edition currently under review and releasing soon.
                        </p>

                        {/* Billing Switcher */}
                        <div className="mt-8 inline-flex p-1 rounded-xl bg-white/5 border border-white/10">
                            <button
                                onClick={() => setBillingPeriod('monthly')}
                                className={`px-4 py-2 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer ${
                                    billingPeriod === 'monthly' ? 'bg-[#D4AF37] text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                Monthly
                            </button>
                            <button
                                onClick={() => setBillingPeriod('annual')}
                                className={`px-4 py-2 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer ${
                                    billingPeriod === 'annual' ? 'bg-[#D4AF37] text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                Annual (Save 15%)
                            </button>
                            <button
                                onClick={() => setBillingPeriod('lifetime')}
                                className={`px-4 py-2 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer ${
                                    billingPeriod === 'lifetime' ? 'bg-[#D4AF37] text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                Lifetime Access
                            </button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        
                        {/* Free Tier Card */}
                        <div className="exec-card p-8 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Free Forever</div>
                                <h3 className="text-2xl font-black font-space-grotesk text-white mb-2">Basic Citizen</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">Full habit creation, tracking, and local alarms with zero tracking.</p>
                                
                                <div className="text-4xl font-black font-space-grotesk text-white my-6">
                                    $0 <span className="text-xs font-normal text-slate-400">/ forever</span>
                                </div>

                                <ul className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-400">
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Unlimited Habits &amp; Identity Stacking</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Bulletproof System Alarms (Basic)</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>100% Offline Local SQLite Storage</span>
                                    </li>
                                </ul>
                            </div>

                            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 mt-8 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all font-space-grotesk text-center text-xs cursor-pointer flex items-center justify-center gap-2">
                                <GooglePlayIcon className="w-4 h-4" />
                                <span>Start Tracking on Google Play</span>
                            </a>
                        </div>

                        {/* Premium Card */}
                        <div className="exec-card p-8 border-[#D4AF37]/40 flex flex-col justify-between shadow-xl">
                            <div>
                                <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                    <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Premium Access
                                </div>
                                <h3 className="text-2xl font-black font-space-grotesk text-white mb-2">Full Transformation</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">Advanced analytics, dynamic color engines, and complete customization.</p>
                                
                                <div className="text-4xl font-black font-space-grotesk text-white my-6">
                                    {billingPeriod === 'monthly' ? '$0.99' : billingPeriod === 'annual' ? '$9.99' : '$29.99'} 
                                    <span className="text-xs font-normal text-slate-400">
                                        {billingPeriod === 'monthly' ? '/ month' : billingPeriod === 'annual' ? '/ year' : ' one-time'}
                                    </span>
                                </div>

                                <ul className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300">
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>Deep Insights</b>: Advanced 30-day analytics &amp; graphs</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>Custom Themes</b>: Access to app icons &amp; color engines</span>
                                    </li>
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>Unlimited History</b>: Complete historical routine logs</span>
                                    </li>
                                </ul>
                            </div>

                            <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="w-full py-3.5 mt-8 bg-[#D4AF37] text-slate-950 font-space-grotesk font-extrabold rounded-xl hover:bg-white transition-all text-center text-xs cursor-pointer shadow-lg flex items-center justify-center gap-2">
                                <GooglePlayIcon className="w-4 h-4 text-slate-950" />
                                <span>Unlock Premium on Google Play</span>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-24 relative border-t border-white/5 bg-[#03050B]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#00F3FF]/15 border border-[#00F3FF]/30 text-[#00F3FF] text-xs font-bold uppercase tracking-widest mb-3">
                            In-Depth Understanding
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white">Frequently Asked Questions</h2>
                        <p className="text-slate-400 mt-2 font-light text-sm">Demystifying the engineering and philosophy of Atomic Clock.</p>
                    </div>

                    <div className="space-y-4">
                        {faqsData.map((faq, i) => {
                            const isOpen = openFaqIndex === i;
                            return (
                                <div 
                                    key={i} 
                                    className="exec-card overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                                        className="w-full p-6 text-left flex justify-between items-center gap-6 cursor-pointer"
                                    >
                                        <h3 className="text-base font-bold font-space-grotesk text-white leading-snug">
                                            {faq.question}
                                        </h3>
                                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#D4AF37]' : ''}`} />
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 text-xs text-slate-400 font-inter leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#010206] border-t border-white/5 py-16 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 ring-2 ring-[#D4AF37]/35 rounded-xl p-1 bg-[#121424]">
                                    <Image
                                        src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                        alt="Atomic Clock Logo"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-2xl tracking-tight text-white">
                                    Atomic Clock
                                </span>
                            </div>
                            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                                The high-end habit companion for the modern alchemist. Transform your life, one atomic shift at a time.
                            </p>

                            <div className="flex items-center gap-3 pt-2">
                                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#D4AF37] px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#D4AF37]/40 transition-all">
                                    <GooglePlayIcon className="w-3.5 h-3.5" /> Google Play
                                </a>
                                <span className="flex items-center gap-1.5 text-xs text-slate-400 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5">
                                    <AppleIcon className="w-3.5 h-3.5 text-slate-400" />
                                    <span>iOS In Review</span>
                                </span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link href="/atomic-clock/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/atomic-clock/terms-and-conditions" className="hover:text-[#BC13FE] transition-colors">Terms of Service</Link></li>
                                <li><Link href="/atomic-clock/trader-status" className="hover:text-[#D4AF37] transition-colors">Trader Status (DSA)</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Support</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><a href="mailto:qamrosh55@gmail.com" className="hover:text-[#D4AF37] transition-colors">Developer Contact</a></li>
                                <li><Link href="/" className="hover:text-[#D4AF37] transition-colors">Portfolio Home</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>© {new Date().getFullYear()} Atomic Clock. All rights reserved.</p>
                        <p>Engineered by <span className="text-white font-medium">Qamrosh Ali Nazar</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description, accent }) {
    return (
        <div className="exec-card p-6 flex flex-col justify-between">
            <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white/[0.04] border border-white/10" style={{ color: accent }}>
                    {icon}
                </div>
                <h3 className="text-lg font-bold font-space-grotesk mb-2 text-white">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}

function AppleIcon({ className = "w-5 h-5" }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2.02.61-2.66 1.36-.57.65-1.06 1.71-.93 2.74 1.01.08 2.06-.5 2.67-1.23z" />
        </svg>
    );
}

function GooglePlayIcon({ className = "w-5 h-5" }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
            <path d="M3.609 1.814L13.793 12 3.61 22.186a2.36 2.36 0 0 1-.22-.988V2.802c0-.363.08-.7.22-.988zm11.306 11.307l2.25 2.25-11.75 6.784 9.5-9.034zm0-2.242L5.415 1.845l11.75 6.784-2.25 2.25zM17.38 12l2.47-1.427a1.693 1.693 0 0 1 0 2.854L17.38 12z"/>
        </svg>
    );
}
