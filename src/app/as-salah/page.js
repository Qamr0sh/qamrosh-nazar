'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowLeft,
    Compass,
    Moon,
    Repeat,
    Palette,
    Star,
    CheckCircle2,
    Bell,
    Download,
    BookOpen,
    Headphones,
    Sparkles,
    Radio,
    DownloadCloud,
    Play,
    Volume2,
    ShieldCheck
} from 'lucide-react';

export default function AsSalahPage() {
    const primaryAccent = '#93A5D5';
    const appStoreUrl = 'https://apps.apple.com/pk/app/as-salah-prayer-times-quran/id6818953512';
    const playStoreUrl = 'https://play.google.com/store/apps/details?id=online.qamrosh.assalah';

    const screens = [
        {
            id: 'home1',
            label: 'Home Dashboard',
            icon: '🕋',
            src: '/as-salah/Home 1.jpeg',
            title: 'Precision Prayer Dashboard',
            description: 'Location-aware prayer timings with remaining countdown, vocal Adhan notifications, and daily Hijri calendar.'
        },
        {
            id: 'quran',
            label: 'Holy Quran',
            icon: '📖',
            src: '/as-salah/Quran Screen.png',
            title: 'Holy Quran Index & Surah Library',
            description: 'Access the complete 114 Surahs with Juz indexing, search, revelation classifications, and quick verse bookmarks.'
        },
        {
            id: 'surah_details',
            label: 'Surah Reading',
            icon: '📜',
            src: '/as-salah/Surah Details.png',
            title: 'Immersive Quranic Ayah Reading',
            description: 'Crystal-clear Uthmani calligraphy with verse-by-verse translations, transliterations, and comfortable Arabic typography.'
        },
        {
            id: 'quran_audio',
            label: 'On-Demand Audio',
            icon: '🎧',
            src: '/as-salah/audio_Quran.png',
            title: 'On-Demand Audio Streaming & Downloads',
            description: 'Stream renowned recitations with zero lag or download complete Surahs to your device for 100% offline listening without internet.'
        },
        {
            id: 'qibla',
            label: 'Qibla Compass',
            icon: '🧭',
            src: '/as-salah/Qibla.jpeg',
            title: 'Real-Time Qibla Finder',
            description: 'Sensor-based rotation vector tracking ensuring pinpoint direction to the Holy Kaaba from anywhere on Earth.'
        },
        {
            id: 'tasbeeh',
            label: 'Smart Tasbeeh',
            icon: '📿',
            src: '/as-salah/Tasbeeh.jpeg',
            title: 'Digital Tasbeeh & Routine Builder',
            description: 'Tactile haptic feedback counters with preset Dhikr routines, target streaks, and customizable goals.'
        },
        {
            id: 'appearance',
            label: 'Dynamic Themes',
            icon: '🎨',
            src: '/as-salah/Appearnce.jpeg',
            title: 'Dynamic Color Engine & Dark Mode',
            description: 'Personalize your aesthetic with dynamic color engine support (#93A5D5 active), custom fonts, and AMOLED dark mode.'
        },
        {
            id: 'stats',
            label: 'Worship Stats',
            icon: '📊',
            src: '/as-salah/Stats 1.jpeg',
            title: 'Consistency & Analytics',
            description: 'Detailed monthly and weekly prayer tracking analytics to build lasting spiritual habits.'
        },
        {
            id: 'settings',
            label: 'Settings',
            icon: '⚙️',
            src: '/as-salah/settings.jpeg',
            title: 'Global Calculation Methods',
            description: 'Supports Muslim World League, ISNA, Umm Al-Qura, and custom Juristic (Hanafi/Shafi) calculation rules.'
        }
    ];

    const [activeScreenIndex, setActiveScreenIndex] = useState(0);
    const activeScreen = screens[activeScreenIndex];

    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#93A5D5] selection:text-black">
            
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#050B08]/85 backdrop-blur-xl border-b border-[#93A5D5]/15">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-white" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 ring-2 ring-[#93A5D5]/30 rounded-xl p-1 bg-[#152542]">
                                <Image
                                    src="/as-salah/logo.png"
                                    alt="As-Salah Logo"
                                    fill
                                    className="object-contain p-1 rounded-lg"
                                />
                            </div>
                            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#93A5D5] via-blue-200 to-white">
                                As-Salah
                            </span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-6">
                        <Link href="#quran" className="text-sm font-medium text-slate-300 hover:text-[#93A5D5] transition-colors hidden md:block">
                            Quran &amp; Audio
                        </Link>
                        <Link href="#gallery" className="text-sm font-medium text-slate-300 hover:text-[#93A5D5] transition-colors hidden sm:block">
                            Screenshots
                        </Link>
                        <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-[#93A5D5] transition-colors hidden sm:block">
                            Features
                        </Link>

                        {/* Dual Store Action Buttons */}
                        <div className="flex items-center gap-2">
                            <a
                                href={appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/15 transition-all shadow-sm"
                                title="Download on Apple App Store"
                            >
                                <AppleIcon className="w-3.5 h-3.5 text-white" />
                                <span className="hidden sm:inline">App Store</span>
                            </a>
                            <a
                                href={playStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#93A5D5] hover:bg-white text-slate-950 text-xs font-bold transition-all shadow-md shadow-[#93A5D5]/20"
                                title="Get on Google Play Store"
                            >
                                <GooglePlayIcon className="w-3.5 h-3.5 text-slate-950" />
                                <span>Google Play</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Glows */}
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#1B4332]/25 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] bg-[#93A5D5]/15 rounded-full blur-[110px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(147,165,213,0.1)_0%,transparent_70%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#93A5D5]/30 text-[#93A5D5] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5 text-[#93A5D5]" />
                            <span>Now Live on Apple App Store &amp; Google Play</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-space-grotesk tracking-tight mb-6 leading-[1.08] text-white">
                            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93A5D5] via-blue-100 to-white">Daily Worship</span> with Precision.
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
                            A complete Islamic ecosystem featuring the <strong className="text-white">Holy Quran with on-demand streaming and offline downloads</strong>, precision prayer times, rotation-vector Qibla, smart Tasbeeh, and dynamic color personalization.
                        </p>

                        {/* Dual Download Badges */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            {/* Apple App Store Button */}
                            <a 
                                href={appStoreUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group relative w-full sm:w-auto"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-[#93A5D5] rounded-2xl blur opacity-35 group-hover:opacity-75 transition duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 px-7 py-3.5 bg-white text-slate-950 rounded-xl font-space-grotesk font-extrabold text-sm sm:text-base transition-all hover:bg-slate-100 cursor-pointer shadow-xl">
                                    <AppleIcon className="w-5 h-5 text-black" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] font-medium uppercase tracking-wider text-slate-500">Download on the</div>
                                        <div className="font-bold text-sm sm:text-base">Apple App Store</div>
                                    </div>
                                </div>
                            </a>

                            {/* Google Play Button */}
                            <a 
                                href={playStoreUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group relative w-full sm:w-auto"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#93A5D5] to-[#1B4332] rounded-2xl blur opacity-35 group-hover:opacity-75 transition duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 px-7 py-3.5 bg-[#93A5D5] text-slate-950 rounded-xl font-space-grotesk font-extrabold text-sm sm:text-base transition-all hover:bg-white cursor-pointer shadow-xl">
                                    <GooglePlayIcon className="w-5 h-5 text-slate-950" />
                                    <div className="text-left leading-tight">
                                        <div className="text-[10px] font-medium uppercase tracking-wider text-slate-800">Get it on</div>
                                        <div className="font-bold text-sm sm:text-base">Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Interactive Tabbed Phone Mockup Switcher */}
                    <div className="mt-12 space-y-8">
                        {/* Tab Switcher Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
                            {screens.map((screen, idx) => (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreenIndex(idx)}
                                    className={`px-3.5 py-2 rounded-xl text-xs font-space-grotesk font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                                        activeScreenIndex === idx
                                            ? 'bg-[#93A5D5] text-slate-950 shadow-lg shadow-[#93A5D5]/25 font-bold scale-105'
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
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#93A5D5]/20 via-[#1B4332]/20 to-[#93A5D5]/20 rounded-[3rem] blur-2xl pointer-events-none" />

                            {/* Phone Shell */}
                            <div className="relative w-full max-w-[260px] sm:max-w-[290px] p-2.5 rounded-[2.5rem] bg-slate-950 border-4 border-[#93A5D5]/30 shadow-2xl shadow-black ring-1 ring-white/10">
                                
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

            {/* NEW FEATURE SPOTLIGHT: The Holy Quran & On-Demand Audio */}
            <section id="quran" className="py-24 bg-gradient-to-b from-[#050B08] via-[#091510] to-[#050B08] border-t border-b border-white/10 relative overflow-hidden">
                {/* Background Ambient Aura */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#93A5D5]/10 blur-[130px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#93A5D5]/15 border border-[#93A5D5]/35 text-[#93A5D5] text-xs font-bold uppercase tracking-widest">
                            <Sparkles className="w-3.5 h-3.5" />
                            Major Feature Release
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold font-space-grotesk text-white tracking-tight">
                            The Holy Quran, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#93A5D5] via-blue-200 to-white">On Demand</span>.
                        </h2>
                        <p className="text-slate-300 font-inter text-base leading-relaxed">
                            Read with crystal-clear Uthmani calligraphy, stream soul-stirring recitations instantly, or download entire Surahs to your local storage for 100% offline recitation without internet connection.
                        </p>
                    </div>

                    {/* 3-Column Visual Mockup Showcase of Quran Screens */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16">
                        
                        {/* Card 1: Surah Directory */}
                        <div className="exec-card p-6 flex flex-col items-center text-center space-y-5 border border-white/10 hover:border-[#93A5D5]/50 transition-all">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] text-[11px] font-bold text-[#93A5D5] uppercase tracking-wider">
                                    <BookOpen className="w-3.5 h-3.5" /> Surah Directory
                                </div>
                                <h3 className="text-lg font-bold font-space-grotesk text-white">Full 114 Surahs Library</h3>
                                <p className="text-xs text-slate-400">Fast indexing, search, Juz navigation, and Makki / Madani metadata.</p>
                            </div>

                            <div className="relative w-full max-w-[220px] p-2 rounded-[2rem] bg-slate-950 border-2 border-white/15 shadow-2xl">
                                <div className="w-16 h-2 rounded-full bg-slate-950 border border-white/10 mx-auto mb-1" />
                                <div className="relative rounded-[1.4rem] overflow-hidden aspect-[9/19] bg-slate-900">
                                    <Image
                                        src="/as-salah/Quran Screen.png"
                                        alt="Quran Screen"
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Surah Reading & Translations (Featured Centerpiece) */}
                        <div className="exec-card p-6 flex flex-col items-center text-center space-y-5 border-2 border-[#93A5D5]/40 bg-gradient-to-b from-[#152542]/30 via-white/[0.02] to-transparent shadow-2xl shadow-[#93A5D5]/10 md:-translate-y-4">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#93A5D5]/20 text-[11px] font-bold text-[#93A5D5] uppercase tracking-wider">
                                    <Sparkles className="w-3.5 h-3.5" /> Ayah Reading View
                                </div>
                                <h3 className="text-xl font-bold font-space-grotesk text-white">Uthmani Arabic Calligraphy</h3>
                                <p className="text-xs text-slate-300">Verse-by-verse translations, transliterations, and custom typography scaling.</p>
                            </div>

                            <div className="relative w-full max-w-[240px] p-2 rounded-[2.2rem] bg-slate-950 border-2 border-[#93A5D5]/40 shadow-2xl ring-1 ring-white/20">
                                <div className="w-18 h-2.5 rounded-full bg-slate-950 border border-white/10 mx-auto mb-1" />
                                <div className="relative rounded-[1.6rem] overflow-hidden aspect-[9/19.5] bg-slate-900">
                                    <Image
                                        src="/as-salah/Surah Details.png"
                                        alt="Surah Details"
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Card 3: On-Demand Audio & Downloads */}
                        <div className="exec-card p-6 flex flex-col items-center text-center space-y-5 border border-white/10 hover:border-[#93A5D5]/50 transition-all">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                                    <Headphones className="w-3.5 h-3.5" /> Stream &amp; Download
                                </div>
                                <h3 className="text-lg font-bold font-space-grotesk text-white">Audio Player Engine</h3>
                                <p className="text-xs text-slate-400">Stream on demand or download Surahs for 100% offline playback.</p>
                            </div>

                            <div className="relative w-full max-w-[220px] p-2 rounded-[2rem] bg-slate-950 border-2 border-white/15 shadow-2xl">
                                <div className="w-16 h-2 rounded-full bg-slate-950 border border-white/10 mx-auto mb-1" />
                                <div className="relative rounded-[1.4rem] overflow-hidden aspect-[9/19] bg-slate-900">
                                    <Image
                                        src="/as-salah/audio_Quran.png"
                                        alt="Audio Quran Player"
                                        fill
                                        className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 3 Pillars of Quran Audio */}
                    <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                            <div className="w-10 h-10 rounded-xl bg-[#93A5D5]/10 border border-[#93A5D5]/30 flex items-center justify-center text-[#93A5D5] mb-3">
                                <Radio className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-bold font-space-grotesk text-white">Zero-Lag Streaming</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Instant buffer-free streaming from high-speed Content Delivery Networks with smooth playback controls.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                                <DownloadCloud className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-bold font-space-grotesk text-white">100% Offline Downloads</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Download your favorite Surahs once. Listen offline on flights, journeys, or during deep retreats without mobile data.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                                <Volume2 className="w-5 h-5" />
                            </div>
                            <h4 className="text-base font-bold font-space-grotesk text-white">Background Audio Playback</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Seamless background playback with lock-screen audio notifications and automatic next-surah progression.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Screenshots Gallery Section */}
            <section id="gallery" className="py-24 bg-[#030705] border-t border-b border-white/10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 mb-3">
                            <div className="h-px w-8 bg-[#93A5D5]" />
                            <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-[#93A5D5]">
                                Visual Showcase
                            </span>
                            <div className="h-px w-8 bg-[#93A5D5]" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white tracking-tight mb-4">
                            Explore Application Screens
                        </h2>
                        <p className="text-slate-400 font-inter text-base">
                            Complete preview of all 9 mobile surfaces featuring dynamic color themes (<span className="text-[#93A5D5] font-semibold">#93A5D5 active</span>), responsive layouts, and clean typography.
                        </p>
                    </div>

                    {/* Screenshots Grid (9 Screens in a clean 3x3 layout) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {screens.map((screen, index) => (
                            <div
                                key={screen.id}
                                className="exec-card p-5 flex flex-col justify-between group cursor-pointer"
                                onClick={() => {
                                    setActiveScreenIndex(index);
                                    window.scrollTo({ top: 300, behavior: 'smooth' });
                                }}
                            >
                                <div className="space-y-4">
                                    {/* Smartphone Frame */}
                                    <div className="relative mx-auto w-full max-w-[210px] p-2 rounded-[2rem] bg-slate-950 border-2 border-white/15 shadow-xl group-hover:border-[#93A5D5]/50 transition-colors">
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
                                            <h3 className="font-space-grotesk font-bold text-white text-base group-hover:text-[#93A5D5] transition-colors">
                                                {screen.title}
                                            </h3>
                                        </div>
                                        <p className="font-inter text-xs text-slate-400 leading-relaxed">
                                            {screen.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#93A5D5] font-space-grotesk font-semibold">
                                    <span>Preview Screen</span>
                                    <span>→</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* Feature Grid */}
            <section id="features" className="py-24 bg-[#050B08] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-4 text-white tracking-tight">
                            Spiritual Engineering
                        </h2>
                        <p className="text-slate-400 font-inter text-base">
                            Meticulously designed for precision, Quranic engagement, beauty, dynamic themes, and complete privacy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Bell />}
                            title="Precision Prayer Times"
                            description="Location-aware calculations supporting globally recognized Islamic convention methods and vocal Adhans."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<BookOpen />}
                            title="Complete Quran &amp; Audio"
                            description="Full 114 Surahs with verse-by-verse translations, on-demand audio streaming, and offline download capability."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<Repeat />}
                            title="Smart Tasbeeh Builder"
                            description="Customizable counters with automated progression, custom dhikr targets, and tactile haptic feedback."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<Compass />}
                            title="Rotation-Vector Qibla"
                            description="Real-time rotation-vector sensor tracking to pinpoint the direction of the Holy Kaaba anywhere on Earth."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<Palette />}
                            title="Dynamic Themes"
                            description="Personalize your app with dynamic color engine support (#93A5D5 active), custom fonts, and dark mode."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<ShieldCheck />}
                            title="Privacy First &amp; On-Device"
                            description="Zero religious telemetry profiling. Your prayers, dhikr logs, and habit history stay private on your device."
                            accent="#93A5D5"
                        />
                    </div>
                </div>
            </section>

            {/* Pro Access Section */}
            <section className="py-24 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#93A5D5]/10 border border-[#93A5D5]/30 text-[#93A5D5] text-xs font-bold uppercase tracking-widest mb-3">
                            Lifetime Access
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white">As-Salah Premium</h2>
                        <p className="text-slate-400 mt-2 text-sm">Unlock full customization, dynamic theme choices, and support independent software engineering.</p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#93A5D5] to-[#1B4332] rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-700"></div>
                        <div className="relative bg-[#050B08] border border-[#93A5D5]/30 rounded-[2.5rem] p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    {[
                                        "Multiple Vocal Adhan Reciters",
                                        "Quran Audio Streaming & Offline Downloads",
                                        "Dynamic Color Engine Theme Choices (#93A5D5)",
                                        "Custom Haptic Vibration Profiles",
                                        "Smart Tasbeeh Routine Progression",
                                        "No Advertisements, Zero Tracking",
                                        "Lifetime Free Updates"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#93A5D5] flex-shrink-0" />
                                            <span className="text-slate-200 text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="text-center p-8 bg-[#1B4332]/20 rounded-3xl border border-[#93A5D5]/30 flex flex-col justify-between">
                                    <div>
                                        <div className="text-[#93A5D5] font-space-grotesk font-bold text-sm mb-2 uppercase tracking-wider">Single Purchase</div>
                                        <div className="text-5xl font-extrabold text-white mb-6 font-space-grotesk">$9.99</div>
                                    </div>

                                    {/* Dual Store Upgrade Buttons */}
                                    <div className="space-y-3">
                                        <a 
                                            href={appStoreUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-slate-950 font-space-grotesk font-extrabold rounded-xl hover:bg-slate-100 transition-colors shadow-lg text-center cursor-pointer text-sm"
                                        >
                                            <AppleIcon className="w-4 h-4 text-black" />
                                            <span>Get on App Store</span>
                                        </a>

                                        <a 
                                            href={playStoreUrl} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#93A5D5] text-slate-950 font-space-grotesk font-extrabold rounded-xl hover:bg-white transition-colors shadow-lg shadow-[#93A5D5]/25 text-center cursor-pointer text-sm"
                                        >
                                            <GooglePlayIcon className="w-4 h-4 text-slate-950" />
                                            <span>Get on Google Play</span>
                                        </a>
                                    </div>

                                    <div className="text-slate-400 text-xs mt-4">One-time payment. Verified via RevenueCat.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#020504] border-t border-white/10 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-2 space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="relative w-10 h-10 ring-2 ring-[#93A5D5]/30 rounded-xl p-1 bg-[#152542]">
                                    <Image
                                        src="/as-salah/logo.png"
                                        alt="As-Salah Logo"
                                        fill
                                        className="object-contain p-1 rounded-lg"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-2xl tracking-tight text-white">As-Salah</span>
                            </div>
                            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                                High-precision Islamic tools engineered for clarity, Holy Quran engagement with on-demand audio, accuracy, and spiritual focus with dynamic theme support.
                            </p>
                            
                            {/* App Store / Play Store pills in footer */}
                            <div className="flex items-center gap-3 pt-2">
                                <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all">
                                    <AppleIcon className="w-3.5 h-3.5" /> App Store
                                </a>
                                <a href={playStoreUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#93A5D5] px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#93A5D5]/40 transition-all">
                                    <GooglePlayIcon className="w-3.5 h-3.5" /> Google Play
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link href="/as-salah/privacy-policy" className="hover:text-[#93A5D5] transition-colors">Privacy Policy (EN)</Link></li>
                                <li><Link href="/as-salah/privacy-policy/tr" className="hover:text-[#93A5D5] transition-colors">Gizlilik Politikası (TR)</Link></li>
                                <li><Link href="/as-salah/terms-and-conditions" className="hover:text-[#93A5D5] transition-colors">Terms of Service</Link></li>
                                <li><Link href="/as-salah/trader-status" className="hover:text-[#93A5D5] transition-colors">Trader Status (DSA)</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Support</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link href="/as-salah/support" className="hover:text-[#93A5D5] transition-colors">Help &amp; FAQ (EN)</Link></li>
                                <li><Link href="/as-salah/support/tr" className="hover:text-[#93A5D5] transition-colors">Destek &amp; Yardım (TR)</Link></li>
                                <li><a href="mailto:qamrosh.dev@gmail.com" className="hover:text-[#93A5D5] transition-colors">Contact Developer</a></li>
                                <li><Link href="/" className="hover:text-[#93A5D5] transition-colors">Portfolio Home</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                        <p>© {new Date().getFullYear()} As-Salah. All rights reserved.</p>
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
                <h3 className="text-xl font-bold font-space-grotesk mb-2 text-white">
                    {title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
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
