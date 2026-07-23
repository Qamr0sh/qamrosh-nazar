'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Compass, Moon, Repeat, Palette, Star, CheckCircle2, Bell, Download } from 'lucide-react';

export default function AsSalahPage() {
    const primaryAccent = '#93A5D5';

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
            description: 'Choose your personal aesthetic with dynamic color engine support (shown in soft slate blue #93A5D5), custom fonts, and dark mode.'
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
                            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#93A5D5] via-blue-200 to-white">As-Salah</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#gallery" className="text-sm font-medium text-slate-300 hover:text-[#93A5D5] transition-colors hidden sm:block">Screenshots</Link>
                        <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-[#93A5D5] transition-colors hidden sm:block">Features</Link>
                        <a href="https://play.google.com/store/apps/details?id=online.qamrosh.assalah" target="_blank" rel="noopener noreferrer" className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#93A5D5] to-[#1B4332] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                            <button className="relative bg-[#050B08] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all border border-[#93A5D5]/30 hover:border-[#93A5D5] cursor-pointer">
                                Get App
                            </button>
                        </a>
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
                            <Star className="w-3.5 h-3.5 fill-[#93A5D5]" />
                            <span>Dynamic Themes &amp; Modern Islamic Platform</span>
                        </div>
                        
                        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-space-grotesk tracking-tight mb-6 leading-[1.08] text-white">
                            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93A5D5] via-blue-100 to-white">Daily Worship</span> with Precision.
                        </h1>

                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
                            Experience a state-of-the-art Islamic lifestyle app with <strong className="text-white">dynamic color engine support</strong>, high-accuracy calculations, smart Tasbeeh, and privacy-first architecture.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a 
                                href="https://play.google.com/store/apps/details?id=online.qamrosh.assalah" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="group relative w-full sm:w-auto"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#93A5D5] to-[#1B4332] rounded-2xl blur opacity-40 group-hover:opacity-80 transition duration-300"></div>
                                <div className="relative flex items-center justify-center gap-3 px-8 py-4 bg-[#93A5D5] text-slate-950 rounded-xl font-space-grotesk font-extrabold text-base transition-all hover:bg-white cursor-pointer">
                                    <Download className="w-5 h-5 text-slate-950" />
                                    <span>Get on Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Interactive Tabbed Phone Mockup Switcher */}
                    <div className="mt-12 space-y-8">
                        {/* Tab Switcher Pills */}
                        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
                            {screens.map((screen, idx) => (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreenIndex(idx)}
                                    className={`px-4 py-2 rounded-xl text-xs font-space-grotesk font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
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
                            Featuring dynamic color themes (<span className="text-[#93A5D5] font-semibold">#93A5D5 active</span>), responsive layouts, and clean typography.
                        </p>
                    </div>

                    {/* Screenshots Grid */}
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
                            Meticulously designed for precision, beauty, dynamic themes, and complete privacy.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={<Bell />}
                            title="Precision Prayer Times"
                            description="Location-aware calculations supporting globally recognized Islamic convention methods."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<Repeat />}
                            title="Smart Tasbeeh Builder"
                            description="Customizable counters with automated progression and tactile haptic feedback."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<Compass />}
                            title="Rotation-Vector Qibla"
                            description="Real-time rotation-vector sensor tracking to pinpoint the direction of the Kaaba."
                            accent="#93A5D5"
                        />
                        <FeatureCard
                            icon={<Palette />}
                            title="Dynamic Themes"
                            description="Personalize your app with dynamic color engine support (#93A5D5) and dark mode."
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
                                <div className="text-center p-8 bg-[#1B4332]/20 rounded-3xl border border-[#93A5D5]/30">
                                    <div className="text-[#93A5D5] font-space-grotesk font-bold text-sm mb-2 uppercase tracking-wider">Single Purchase</div>
                                    <div className="text-5xl font-extrabold text-white mb-6 font-space-grotesk">$9.99</div>
                                    <a 
                                        href="https://play.google.com/store/apps/details?id=online.qamrosh.assalah" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block w-full py-4 bg-[#93A5D5] text-slate-950 font-space-grotesk font-extrabold rounded-xl hover:bg-white transition-colors shadow-lg shadow-[#93A5D5]/25 text-center cursor-pointer"
                                    >
                                        Upgrade to Premium
                                    </a>
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
                                High-precision Islamic tools engineered for clarity, accuracy, and spiritual focus with dynamic theme support.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><Link href="/as-salah/privacy-policy" className="hover:text-[#93A5D5] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/as-salah/terms-and-conditions" className="hover:text-[#93A5D5] transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-4 font-space-grotesk tracking-widest uppercase text-xs">Support</h3>
                            <ul className="space-y-2 text-slate-400 text-sm">
                                <li><a href="mailto:qamrosh55@gmail.com" className="hover:text-[#93A5D5] transition-colors">Contact Developer</a></li>
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#93A5D5]/10 text-[#93A5D5] border border-[#93A5D5]/20">
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
