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
        src: '/atomic_clock/themes.jpeg',
        title: 'Custom Color Engines',
        description: 'Personalize your interface with dynamic theme accent colors, dark mode, and Event Horizon styles.'
    },
    {
        id: 'color-change',
        label: 'Theme Preview',
        icon: '⚡',
        src: '/atomic_clock/Theme color change.jpeg',
        title: 'Real-Time Accent Customization',
        description: 'Switch between Gold, Neon Purple, Cyan, and Slate color accents with instant UI reflection.'
    },
    {
        id: 'notifications',
        label: 'Reminders',
        icon: '🔔',
        src: '/atomic_clock/notifications.jpeg',
        title: 'Bulletproof System Alarms',
        description: 'Direct integration with Android AlarmManager APIs ensuring non-suppressible reminders that bypass Doze mode.'
    },
    {
        id: 'insights-light',
        label: 'Light Mode',
        icon: '☀️',
        src: '/atomic_clock/insights light.jpeg',
        title: 'Clean Light Theme Option',
        description: 'Crisp light mode typography for daytime productivity and high contrast outdoor visibility.'
    }
];

const faqsData = [
    {
        question: "Why is Atomic Clock built as a 100% offline-only application?",
        answer: "Because your habits are your own business. Modern productivity apps capture your habits, sync them to remote servers, and monetize your behavioral profiles. Atomic Clock stores all your habit logs, streak data, and identity progress locally in an encrypted SQLite database on your device. Zero servers. Zero tracking. Zero cloud. Absolute privacy."
    },
    {
        question: "How do the 'Bulletproof Native Alarms' guarantee I never miss a habit reminder?",
        answer: "Standard apps rely on periodic push notifications or low-priority background workers, which are aggressively terminated by Android's built-in battery optimization scripts (especially on Xiaomi/MIUI, Samsung, and Oppo). Atomic Clock interfaces directly with the Android kernel via high-precision AlarmManager APIs (`setExactAndAllowWhileIdle`). These are prioritized alongside system-critical alarms, breaking through Doze Mode, Power Saver, and background restrictions to guarantee delivery exactly on time."
    },
    {
        question: "What is identity-first tracking, and why is it superior?",
        answer: "Most trackers focus on the outcome—like 'Running 5km' or 'Writing 1000 words'. Research shows that outcome-based habits fail quickly because they lack internal alignment. Atomic Clock shifts the focus from 'what I do' to 'who I am'. By linking every routine to an Identity (e.g. 'I am an Athlete' or 'I am a Scholar'), every checked-off habit acts as a literal 'vote' casting for your target identity. This triggers cognitive alignment, making your habits highly resilient."
    },
    {
        question: "Is there a mechanism to secure my data if it is completely offline?",
        answer: "Yes. You have total ownership of your data. The app provides a secure local backup feature that exports your entire database into an encrypted `.sqlite` file. You can easily archive this file locally or back it up manually to your own secure personal cloud storage (ProtonDrive, Google Drive, iCloud, etc.). Your data is never locked in, and it never leaves your control."
    }
];

export default function AtomicClockClient() {
    // Active mockup tab state
    const [activeScreenIdx, setActiveScreenIdx] = useState(0);
    const activeScreen = screensData[activeScreenIdx];

    // State for FAQ
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // State for pricing billing period (monthly, annual, lifetime)
    const [billingPeriod, setBillingPeriod] = useState("annual");

    return (
        <div className="min-h-screen bg-[#03050B] text-slate-100 font-inter overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
            
            {/* Ambient Background Aura Meshes */}
            <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-15%] w-[50%] h-[50%] bg-[#BC13FE]/10 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] bg-[#D4AF37]/5 rounded-full blur-[140px] animate-pulse delay-1000" />
                <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-[#00F3FF]/5 rounded-full blur-[140px] animate-pulse delay-2000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(188,19,254,0.03)_0%,transparent_80%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#03050B]/85 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="inline-flex items-center justify-center p-2.5 rounded-full hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-white" />
                        </Link>
                        <div className="flex items-center gap-3.5">
                            <div className="relative w-10 h-10 ring-2 ring-[#D4AF37]/35 rounded-xl p-1 bg-gradient-to-br from-[#121424] to-[#03050B] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                <Image
                                    src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                    alt="Atomic Clock Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-white">
                                Atomic Clock
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <Link href="#gallery" className="text-sm font-semibold text-slate-400 hover:text-[#D4AF37] transition-all hidden sm:block">Screenshots</Link>
                        <Link href="#features" className="text-sm font-semibold text-slate-400 hover:text-[#D4AF37] transition-all hidden sm:block">Features</Link>
                        <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                            <button className="relative bg-[#03050B] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all border border-white/10 hover:border-white/20 cursor-pointer">
                                Get App
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

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-1000"></div>
                                <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-slate-950 rounded-xl font-space-grotesk font-extrabold text-base transition-all hover:bg-white cursor-pointer shadow-lg">
                                    <Download className="w-5 h-5 text-slate-950" />
                                    <span>Get on Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Interactive Tabbed Phone Switcher */}
                    <div className="mt-12 space-y-8">
                        {/* Tab Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                            {screensData.map((screen, idx) => (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreenIdx(idx)}
                                    className={`px-4 py-2 rounded-xl text-xs font-space-grotesk font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                                        activeScreenIdx === idx
                                            ? 'bg-gradient-to-r from-[#D4AF37] to-[#FCEB92] text-slate-950 shadow-lg shadow-[#D4AF37]/20 font-bold scale-105'
                                            : 'bg-white/[0.04] text-slate-300 border border-white/10 hover:border-white/30 hover:bg-white/10'
                                    }`}
                                >
                                    <span>{screen.icon}</span>
                                    <span>{screen.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Smartphone Mockup */}
                        <div className="relative mx-auto max-w-sm flex flex-col items-center">
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 via-[#BC13FE]/20 to-[#D4AF37]/20 rounded-[3rem] blur-2xl pointer-events-none" />

                            {/* Phone Shell */}
                            <div className="relative w-full max-w-[260px] sm:max-w-[290px] p-2.5 rounded-[2.5rem] bg-slate-950 border-4 border-[#D4AF37]/30 shadow-2xl shadow-black ring-1 ring-white/10">
                                
                                {/* Dynamic Island / Notch */}
                                <div className="w-20 h-3 rounded-full bg-slate-950 border border-white/10 mx-auto mb-1.5 relative z-20" />

                                {/* Screen Container */}
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

                            {/* Screen Description Note */}
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
            <section id="gallery" className="py-24 bg-[#050711] border-t border-b border-white/10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="h-px w-8 bg-[#D4AF37]" />
                            <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-[#D4AF37]">
                                Interface Gallery
                            </span>
                            <div className="h-px w-8 bg-[#D4AF37]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white tracking-tight mb-4">
                            App Screenshots &amp; Themes
                        </h2>
                        <p className="text-slate-400 font-inter text-base">
                            Built with privacy-first SQLite architecture, bulletproof AlarmManager alerts, and real-time color engines.
                        </p>
                    </div>

                    {/* Screenshots Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {screensData.map((screen, index) => (
                            <div
                                key={screen.id}
                                className="exec-card p-5 flex flex-col justify-between group cursor-pointer"
                                onClick={() => {
                                    setActiveScreenIdx(index);
                                    window.scrollTo({ top: 300, behavior: 'smooth' });
                                }}
                            >
                                <div className="space-y-4">
                                    {/* Smartphone Frame */}
                                    <div className="relative mx-auto w-full max-w-[210px] p-2 rounded-[2rem] bg-slate-950 border-2 border-white/15 shadow-xl group-hover:border-[#D4AF37]/50 transition-colors">
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

                                    {/* Description */}
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

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#D4AF37] font-space-grotesk font-semibold">
                                    <span>Preview Screen</span>
                                    <span>→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* The Philosophy Section */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#BC13FE]/10 border border-[#BC13FE]/25 text-[#BC13FE] text-xs font-bold uppercase tracking-widest">
                                The Psychology
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black font-space-grotesk leading-tight text-white">
                                Cast a vote for who you want <span className="text-[#D4AF37]">to become</span>.
                            </h2>
                            <p className="text-base text-slate-400 leading-relaxed font-light">
                                Every action you take is a vote for the type of person you wish to become. Atomic Clock completely bypasses basic habit checklists in favor of <strong className="text-white">Identity Stacks</strong>. By grouping your daily habits directly under identity pillars, you transform discipline from a task to a lifestyle.
                            </p>
                            
                            <div className="space-y-4 pt-2">
                                {[
                                    { text: "Identity Progress Heatmaps: Visualize your progress on GitHub-style streak grids.", icon: <BarChart2 className="w-5 h-5 text-[#D4AF37]" /> },
                                    { text: "Tactile Audio-Haptic Feedback: Satisfying clicks reward every completed habit.", icon: <Sparkles className="w-5 h-5 text-[#BC13FE]" /> },
                                    { text: "Native Battery-Resistant Reminders: Never miss triggers due to aggressive OS scripts.", icon: <Clock className="w-5 h-5 text-[#00F3FF]" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3.5 items-start group">
                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-all flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <span className="text-sm text-slate-300 font-light leading-relaxed pt-1">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Heatmap Preview Card */}
                        <div className="exec-card p-6 space-y-4">
                            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                                    <Flame className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="font-space-grotesk font-bold text-white text-base">Identity Cohesion Engine</h3>
                                    <p className="font-inter text-xs text-slate-400">Offline SQLite database with 100% local persistence</p>
                                </div>
                            </div>
                            <div className="space-y-3 pt-2 text-xs font-inter text-slate-300">
                                <div className="flex justify-between items-center">
                                    <span>Target Identity:</span>
                                    <span className="font-space-grotesk font-bold text-white">The Systems Engineer</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Consistency Rate:</span>
                                    <span className="font-space-grotesk font-bold text-[#D4AF37]">94% Cohesion</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Active Streak:</span>
                                    <span className="font-space-grotesk font-bold text-emerald-400">38 Days 🔥</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Feature Cards Grid */}
            <section id="features" className="py-24 relative border-t border-white/5 bg-[#03050B]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#BC13FE]/10 border border-[#BC13FE]/20 text-[#BC13FE] text-xs font-bold uppercase tracking-widest mb-3">
                            Premium Architecture
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white tracking-tight mb-4">
                            Engineered for Consistency
                        </h2>
                        <p className="text-slate-400 font-inter text-base">
                            Built with robust technological decisions to bypass system limitations and protect personal integrity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Fingerprint className="w-6 h-6" />}
                            title="Identity-Based Structuring"
                            description="Organize habits directly under custom identity pillars. Every check cast validates your transformation."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<Zap className="w-6 h-6 animate-pulse" />}
                            title="Bulletproof Local Alarms"
                            description="Interfaces natively with system AlarmManager APIs to guarantee reminders bypass custom battery saver limits."
                            accent="#BC13FE"
                        />
                        <FeatureCard
                            icon={<BarChart2 className="w-6 h-6" />}
                            title="GitHub-Style Heatmaps"
                            description="Visualize your consistency over time with granular 30-day activity grids built directly inside each habit."
                            accent="#00F3FF"
                        />
                        <FeatureCard
                            icon={<CheckCircle2 className="w-6 h-6" />}
                            title="100% Offline Database"
                            description="Stores all routine logs locally inside a secure SQLite shell. Zero tracking scripts, zero ads, zero servers."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<Clock className="w-6 h-6" />}
                            title="Diurnal Routine Segments"
                            description="Sort your days smoothly into Morning, Afternoon, Evening, and Anytime quadrants to build routine flow."
                            accent="#BC13FE"
                        />
                        <FeatureCard
                            icon={<Trophy className="w-6 h-6" />}
                            title="Sticky Alert Reminders"
                            description="Generates sticky lockscreen notification alerts that persist deliberately until completed or paused."
                            accent="#00F3FF"
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-24 relative border-t border-white/5 bg-[#03050B]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3">
                            Unlock Full Capability
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white">Premium Plans</h2>
                        <p className="text-slate-400 mt-2 text-base font-light max-w-2xl mx-auto">
                            Choose the level of discipline that matches your trajectory. Basic habit building remains 100% free, forever.
                        </p>
                    </div>

                    <div className="flex justify-center mb-12 relative z-10 px-2">
                        <div className="inline-flex p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl gap-2">
                            {[
                                { id: "monthly", label: "Monthly", badge: "$0.99" },
                                { id: "annual", label: "Annual", badge: "$9.99", highlight: "Save 15%" },
                                { id: "lifetime", label: "Lifetime", badge: "$29.99", highlight: "One-Time" }
                            ].map((tab) => {
                                const isActive = billingPeriod === tab.id;
                                return (
                                    <button
                                        key={tab.id}
                                        onClick={() => setBillingPeriod(tab.id)}
                                        className={`relative px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex flex-col items-center gap-0.5 cursor-pointer ${
                                            isActive 
                                                ? 'bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-slate-950 shadow-lg scale-105 font-black' 
                                                : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                    >
                                        <span>{tab.label}</span>
                                        <span className={`text-[10px] ${isActive ? 'text-slate-950 font-bold' : 'text-slate-500'}`}>{tab.badge}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
                        
                        <div className="exec-card p-8 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Free Tier</div>
                                <h3 className="text-2xl font-black font-space-grotesk text-white mb-2">Basic Citizen</h3>
                                <p className="text-xs text-slate-400 leading-relaxed">Core habit building with robust native offline structures.</p>
                                
                                <div className="text-4xl font-black font-space-grotesk text-white my-6">
                                    $0 <span className="text-xs font-normal text-slate-500">Free Forever</span>
                                </div>

                                <ul className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300">
                                    <li className="flex items-center gap-2.5">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Unlimited Basic Habit Tracking</span>
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

                            <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 mt-8 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all font-space-grotesk text-center text-xs cursor-pointer">
                                Start Tracking Free
                            </a>
                        </div>

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

                            <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="w-full py-3.5 mt-8 bg-[#D4AF37] text-slate-950 font-space-grotesk font-extrabold rounded-xl hover:bg-white transition-all text-center text-xs cursor-pointer shadow-lg">
                                Unlock Premium Plan
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
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link href="/atomic-clock/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/atomic-clock/terms-and-conditions" className="hover:text-[#BC13FE] transition-colors">Terms of Service</Link></li>
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
