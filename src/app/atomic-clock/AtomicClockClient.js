'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    ArrowLeft, 
    CheckCircle2, 
    Shield, 
    Zap, 
    BarChart2, 
    Target, 
    Clock, 
    Trophy, 
    Sparkles, 
    Fingerprint, 
    ChevronDown, 
    Check, 
    Smartphone, 
    Flame, 
    Star, 
    ShieldCheck, 
    Info, 
    Plus, 
    Minus, 
    ArrowRight, 
    BatteryCharging, 
    Lock,
    EyeOff,
    CheckCircle
} from 'lucide-react';

const identitiesData = {
    athlete: {
        id: "athlete",
        emoji: "🏃‍♂️",
        name: "The Athlete",
        description: "Build a body engineered for longevity, strength, and raw physical discipline.",
        statement: "I am a disciplined athlete.",
        subText: "Every sweat-equity investment and conscious choice is a vote for physical mastery.",
        color: "#D4AF37", // Gold
        glowColor: "rgba(212, 175, 55, 0.25)",
        habits: [
            "Complete a 45-minute structured workout",
            "Hydrate with 3 Liters of mineral water",
            "Perform a 15-minute full body flexibility drill"
        ],
        heatmapColor: "bg-[#D4AF37]"
    },
    scholar: {
        id: "scholar",
        emoji: "📚",
        name: "The Scholar",
        description: "Cultivate a formidable intellect and commit to constant mental refinement.",
        statement: "I am a lifelong scholar.",
        subText: "Every paragraph parsed and complex problem solved is a vote for cognitive depth.",
        color: "#BC13FE", // Neon Purple
        glowColor: "rgba(188, 19, 254, 0.25)",
        habits: [
            "Read 15 pages of deep non-fiction literature",
            "Solve one algorithm or system architecture challenge",
            "Journal 3 critical reflections on my daily performance"
        ],
        heatmapColor: "bg-[#BC13FE]"
    },
    zen: {
        id: "zen",
        emoji: "🧘",
        name: "The Zen Master",
        description: "Achieve complete emotional composure, absolute presence, and inner silence.",
        statement: "I am a centered zen master.",
        subText: "Every minute of deliberate stillness and screen detox is a vote for absolute composure.",
        color: "#00F3FF", // Cyan
        glowColor: "rgba(0, 243, 255, 0.25)",
        habits: [
            "Practice 15 minutes of uninterrupted breath mindfulness",
            "Enforce total digital screen blackout by 9:30 PM",
            "Document 3 things that generated deep gratitude today"
        ],
        heatmapColor: "bg-[#00F3FF]"
    }
};

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
    // State for interactive simulator
    const [selectedId, setSelectedId] = useState("athlete");
    const [checkedHabits, setCheckedHabits] = useState(new Set());
    const [momentum, setMomentum] = useState(65);
    const [streak, setStreak] = useState(24);
    const [completedToday, setCompletedToday] = useState(false);
    const [sparkles, setSparkles] = useState([]);
    
    // State for FAQ
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    // State for pricing billing period (monthly, annual, lifetime)
    const [billingPeriod, setBillingPeriod] = useState("annual");

    // Dynamic color system
    const activeData = identitiesData[selectedId];

    // Heatmap mock data - start with all inactive to avoid SSR hydration mismatch
    const [heatmap, setHeatmap] = useState(
        Array.from({ length: 30 }).map((_, i) => ({
            day: i + 1,
            active: false
        }))
    );

    // Populate random heatmap data only on client mount to guarantee identical SSR output
    useEffect(() => {
        setHeatmap(
            Array.from({ length: 30 }).map((_, i) => ({
                day: i + 1,
                active: i < 20 ? Math.random() > 0.3 : i === 29 ? false : Math.random() > 0.7
            }))
        );
    }, []);

    // Track checked items to dynamically update momentum and streak
    useEffect(() => {
        const checkedCount = checkedHabits.size;
        const baseMomentum = 65;
        const newMomentum = baseMomentum + Math.round((checkedCount / 3) * 35);
        setMomentum(newMomentum);

        if (checkedCount === 3) {
            setCompletedToday(true);
            setStreak(25);
            // Toggle last heatmap day to true
            setHeatmap(prev => prev.map((h, i) => i === 29 ? { ...h, active: true } : h));
        } else {
            setCompletedToday(false);
            setStreak(24);
            setHeatmap(prev => prev.map((h, i) => i === 29 ? { ...h, active: false } : h));
        }
    }, [checkedHabits]);

    // Handle selecting a new identity
    const handleIdentitySelect = (id) => {
        setSelectedId(id);
        setCheckedHabits(new Set());
    };

    // Toggle a habit check state
    const handleHabitToggle = (index, e) => {
        const newChecked = new Set(checkedHabits);
        
        if (newChecked.has(index)) {
            newChecked.delete(index);
        } else {
            newChecked.add(index);
            // Trigger haptic particle burst
            triggerParticles(e);
        }
        setCheckedHabits(newChecked);
    };

    // Particle Burst Generator
    const triggerParticles = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newSparkles = Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const velocity = 2 + Math.random() * 4;
            return {
                id: Date.now() + i + Math.random(),
                x,
                y,
                dx: Math.cos(angle) * velocity,
                dy: Math.sin(angle) * velocity,
                size: 3 + Math.random() * 5,
                color: activeData.color
            };
        });

        setSparkles(prev => [...prev, ...newSparkles]);
        
        // Cleanup sparkles
        setTimeout(() => {
            setSparkles(prev => prev.filter(s => !newSparkles.find(ns => ns.id === s.id)));
        }, 800);
    };

    // Toggle a heatmap block directly
    const toggleHeatmapBlock = (index) => {
        setHeatmap(prev => prev.map((h, i) => i === index ? { ...h, active: !h.active } : h));
    };

    return (
        <div className="min-h-screen bg-[#03050B] text-slate-100 font-inter overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
            
            {/* Ambient Background Aura Meshes */}
            <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-15%] w-[50%] h-[50%] bg-[#BC13FE]/10 rounded-full blur-[140px] animate-pulse" />
                <div className="absolute top-[30%] right-[-10%] w-[45%] h-[45%] bg-[#D4AF37]/5 rounded-full blur-[140px] animate-pulse delay-1000" />
                <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-[#00F3FF]/5 rounded-full blur-[140px] animate-pulse delay-2000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(188,19,254,0.03)_0%,transparent_80%)]" />
                
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            {/* Premium Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#03050B]/85 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="inline-flex items-center justify-center p-2.5 rounded-full hover:bg-white/5 border border-white/0 hover:border-white/10 transition-all group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
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
                        <Link href="#features" className="text-sm font-semibold text-slate-400 hover:text-[#D4AF37] transition-all hover:scale-105">Experience</Link>
                        <Link href="#simulator" className="text-sm font-semibold text-slate-400 hover:text-[#BC13FE] transition-all hover:scale-105 hidden sm:block">Alchemist Simulator</Link>
                        <Link href="#download" className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button className="relative bg-[#03050B] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all border border-white/10 hover:border-white/20">
                                Get App
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-28 lg:pt-52 lg:pb-36 overflow-hidden z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        
                        {/* Golden pill badge */}
                        <div className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-[#BC13FE]/10 border border-[#D4AF37]/35 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8 animate-fadeUp backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.05)]">
                            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>100% Privacy-First Identity Alchemist</span>
                        </div>

                        {/* Cosmic Title */}
                        <h1 className="text-5xl md:text-8xl font-black font-space-grotesk tracking-tighter mb-8 leading-[0.95] bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-500 pb-2">
                            Build the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE]">Identity</span> <br /> of who you want to become.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                            Cast off normal checklists. Experience James Clear’s Atomic Habits philosophy materialized into a high-end, 100% offline companion designed to refine who you are.
                        </p>

                        {/* Interactive Play Store Action */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
                                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-2xl blur opacity-35 group-hover:opacity-75 transition duration-1000"></div>
                                <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-[#03050B] border border-[#D4AF37]/30 hover:border-[#D4AF37]/80 text-white rounded-2xl font-bold transition-all hover:-translate-y-1 text-lg shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                                    <svg viewBox="0 0 466 511.98" className="w-6 h-6 flex-shrink-0">
                                        <g fillRule="nonzero">
                                            <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
                                            <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
                                            <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
                                            <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
                                        </g>
                                    </svg>
                                    <span className="font-space-grotesk">Download from Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Hero App Mockup with Micro Floating Dashboard Cards */}
                    <div className="relative mx-auto mt-28 max-w-5xl group">
                        
                        {/* Glow halo behind mockup */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-[#D4AF37]/15 to-[#BC13FE]/15 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
                        
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-4 lg:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl bg-neutral-900 border border-white/5">
                                <Image
                                    src="/atomic_clock/Listing2.png"
                                    alt="Atomic Clock Premium Interface"
                                    fill
                                    className="object-cover object-top hover:scale-[1.015] transition-transform duration-[900ms]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#03050B]/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>
                        </div>

                        {/* Floating Micro-Card 1: Streaks (Animate Float Y) */}
                        <div className="absolute -top-12 -right-8 hidden lg:block animate-floatY pointer-events-none">
                            <div className="bg-[#03050B]/85 backdrop-blur-xl border border-[#D4AF37]/30 p-6 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                    <Flame className="w-6 h-6 fill-current animate-pulse" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Consistency Streak</div>
                                    <div className="text-2xl font-black font-space-grotesk">38 Days</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Micro-Card 2: Identity (Animate Float Y Slow) */}
                        <div className="absolute -bottom-10 -left-10 hidden lg:block animate-floatYSlow pointer-events-none">
                            <div className="bg-[#03050B]/85 backdrop-blur-xl border border-[#BC13FE]/35 p-6 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.4)] flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#BC13FE]/10 flex items-center justify-center text-[#BC13FE]">
                                    <Fingerprint className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-[#BC13FE] uppercase tracking-widest">Identity Status</div>
                                    <div className="text-xl font-bold font-space-grotesk text-white">The Strategist</div>
                                    <div className="text-[10px] text-slate-500 font-medium">92% Identity Cohesion</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Philosophy: Cast Your Votes */}
            <section className="py-24 relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#BC13FE]/10 border border-[#BC13FE]/25 text-[#BC13FE] text-xs font-bold uppercase tracking-widest">
                                The Psychology
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black font-space-grotesk leading-tight">
                                Cast a vote for who you want <span className="text-[#D4AF37]">to become</span>.
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed font-light">
                                Every action you take is a vote for the type of person you wish to become. Atomic Clock completely bypasses basic habit checklists in favor of <b>Identity Stacks</b>. By grouping your daily habits directly under identity pillars, you transform discipline from a task to a lifestyle.
                            </p>
                            
                            <div className="space-y-5 pt-4">
                                {[
                                    { text: "Identity Progress Heatmaps: Visualize your progress on GitHub-style streak grids.", icon: <BarChart2 className="w-5 h-5 text-[#D4AF37]" /> },
                                    { text: "Tactile Audio-Haptic Feedback: Satisfying clicks reward every completed habit.", icon: <Sparkles className="w-5 h-5 text-[#BC13FE]" /> },
                                    { text: "Native Battery-Resistant Reminders: Never miss triggers due to aggressive OS scripts.", icon: <Clock className="w-5 h-5 text-[#00F3FF]" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-start group">
                                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all flex-shrink-0">
                                            {item.icon}
                                        </div>
                                        <span className="text-base text-slate-300 font-light leading-relaxed pt-1.5">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#03050B] p-2.5">
                                <Image
                                    src="/atomic_clock/listing3.png"
                                    alt="Atomic Clock Habit Stacking UI"
                                    width={600}
                                    height={800}
                                    className="rounded-2xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Section: The Identity Alchemist Simulator */}
            <section id="simulator" className="py-28 relative border-t border-white/5 bg-gradient-to-b from-[#03050B] via-[#05070E] to-[#03050B]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#00F3FF]/10 border border-[#00F3FF]/20 text-[#00F3FF] text-xs font-bold uppercase tracking-widest mb-4">
                            Interactive Demonstration
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black font-space-grotesk mb-6">
                            The Identity Alchemist
                        </h2>
                        <p className="text-lg text-slate-400 font-light leading-relaxed">
                            Simulate how Atomic Clock cast votes for your identities in real time. Choose an identity below, check off habits inside the device, and watch your momentum and streaks transform.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        
                        {/* Selector Column (Left) */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2 block">Choose an Identity to Refine:</div>
                            
                            {Object.values(identitiesData).map((identity) => {
                                const isActive = selectedId === identity.id;
                                return (
                                    <button
                                        key={identity.id}
                                        onClick={() => handleIdentitySelect(identity.id)}
                                        className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex gap-5 ${
                                            isActive 
                                                ? 'bg-white/5 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.2)]'
                                                : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/[0.01]'
                                        }`}
                                    >
                                        {/* Glow stripe inside active selector */}
                                        {isActive && (
                                            <div 
                                                className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300"
                                                style={{ backgroundColor: identity.color }}
                                            />
                                        )}
                                        
                                        <div className="text-3xl p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0">
                                            {identity.emoji}
                                        </div>
                                        
                                        <div>
                                            <h3 className="text-lg font-bold font-space-grotesk text-white flex items-center gap-2.5">
                                                {identity.name}
                                                {isActive && <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-white/10 text-slate-200">Active</span>}
                                            </h3>
                                            <p className="text-sm text-slate-400 font-light leading-relaxed mt-1">{identity.description}</p>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Interactive Phone Simulator Column (Right) */}
                        <div className="lg:col-span-7 flex justify-center">
                            
                            {/* Device frame container */}
                            <div className="relative w-full max-w-[420px] rounded-[3rem] border border-white/10 p-4 bg-[#0A0D18] shadow-[0_25px_60px_rgba(0,0,0,0.6)] group">
                                
                                {/* Dynamic decorative ambient light around phone simulator */}
                                <div 
                                    className="absolute -inset-1 blur-2xl rounded-[3rem] opacity-25 group-hover:opacity-45 transition-all duration-700 pointer-events-none"
                                    style={{ backgroundColor: activeData.color }}
                                />

                                {/* Phone Speaker & Camera Notch */}
                                <div className="absolute top-7 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#03050B] rounded-full z-20 flex items-center justify-center">
                                    <div className="w-12 h-1 bg-white/10 rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-white/20 rounded-full ml-3" />
                                </div>

                                {/* Phone Screen Content Area */}
                                <div className="relative rounded-[2.5rem] bg-[#03050B] overflow-hidden p-6 pt-12 border border-white/5 min-h-[580px] flex flex-col justify-between">
                                    
                                    {/* App simulator Header */}
                                    <div className="flex justify-between items-center pb-4 border-b border-white/5">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs">
                                                {activeData.emoji}
                                            </div>
                                            <span className="font-space-grotesk font-black text-sm tracking-tight text-white">ATOMIC CLOCK</span>
                                        </div>
                                        <div className="flex items-center gap-1 bg-[#D4AF37]/10 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-bold">
                                            <Lock className="w-3 h-3" />
                                            <span>OFFLINE</span>
                                        </div>
                                    </div>

                                    {/* Selected Identity Statement card */}
                                    <div className="my-5 p-5 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-3 opacity-15">
                                            <Fingerprint className="w-16 h-16" style={{ color: activeData.color }} />
                                        </div>
                                        
                                        <div className="text-xs uppercase tracking-widest font-black text-slate-500 mb-1">Target Identity</div>
                                        <h4 className="text-xl font-black font-space-grotesk text-white leading-snug">
                                            "{activeData.statement}"
                                        </h4>
                                        <p className="text-xs text-slate-400 font-light leading-relaxed mt-2.5 max-w-[280px] mx-auto">
                                            {activeData.subText}
                                        </p>
                                    </div>

                                    {/* Interactive Habits checklist */}
                                    <div className="space-y-3.5 flex-grow">
                                        <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 block">Identity Affirming Tasks:</div>
                                        
                                        {activeData.habits.map((habit, index) => {
                                            const isChecked = checkedHabits.has(index);
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={(e) => handleHabitToggle(index, e)}
                                                    className={`w-full p-4 rounded-xl border text-left flex items-start gap-4 transition-all duration-300 relative overflow-hidden ${
                                                        isChecked
                                                            ? 'bg-white/5 border-white/10'
                                                            : 'bg-[#060812] border-white/5 hover:border-white/10'
                                                    }`}
                                                >
                                                    {/* Custom interactive particles */}
                                                    {sparkles.map((sparkle) => (
                                                        <div
                                                            key={sparkle.id}
                                                            className="absolute rounded-full pointer-events-none opacity-80"
                                                            style={{
                                                                left: sparkle.x,
                                                                top: sparkle.y,
                                                                width: sparkle.size,
                                                                height: sparkle.size,
                                                                backgroundColor: sparkle.color,
                                                                transform: `translate(${sparkle.dx}px, ${sparkle.dy}px)`,
                                                                transition: 'transform 0.8s cubic-bezier(0.1, 0.8, 0.25, 1), opacity 0.8s ease'
                                                            }}
                                                        />
                                                    ))}

                                                    {/* Animated Custom check ring */}
                                                    <div 
                                                        className={`w-5.5 h-5.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                                            isChecked 
                                                                ? 'border-transparent'
                                                                : 'border-slate-500 group-hover:border-slate-400'
                                                        }`}
                                                        style={{ backgroundColor: isChecked ? activeData.color : 'transparent' }}
                                                    >
                                                        {isChecked && <Check className="w-3.5 h-3.5 text-black stroke-[3px]" />}
                                                    </div>

                                                    <span className={`text-sm leading-tight transition-all duration-300 font-light ${
                                                        isChecked ? 'text-slate-500 line-through' : 'text-slate-200'
                                                    }`}>
                                                        {habit}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {/* Stats grid: Streak & Momentum */}
                                    <div className="mt-6 pt-5 border-t border-white/5 grid grid-cols-2 gap-4 items-center">
                                        <div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-orange-500 bg-orange-500/10">
                                                <Flame className="w-5 h-5 fill-current" />
                                            </div>
                                            <div>
                                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Streak</div>
                                                <div className="text-base font-black font-space-grotesk text-white flex items-center gap-1.5">
                                                    {streak}
                                                    {completedToday && <span className="text-xs text-orange-400 animate-pulse">🔥</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-3.5 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                                            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500/10" style={{ color: activeData.color }}>
                                                <Target className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Momentum</div>
                                                <div className="text-base font-black font-space-grotesk text-white">{momentum}%</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Interactive Heatmap grid preview inside phone */}
                                    <div className="mt-5">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">30-Day Vote Heatmap</div>
                                            <div className="text-[9px] text-slate-400 font-medium">Click block to toggle</div>
                                        </div>
                                        
                                        {/* Heatmap Grid */}
                                        <div className="grid grid-cols-10 gap-1.5">
                                            {heatmap.map((h, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => toggleHeatmapBlock(i)}
                                                    className={`aspect-square rounded-sm border border-white/5 transition-all duration-300 ${
                                                        h.active 
                                                            ? `${activeData.heatmapColor} opacity-90 scale-105 shadow-[0_0_8px_rgba(255,255,255,0.05)]` 
                                                            : 'bg-white/[0.02] hover:bg-white/10'
                                                    }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Cards Grid: Elevated and redesigned */}
            <section id="features" className="py-32 relative border-t border-white/5 bg-[#03050B]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#BC13FE]/10 border border-[#BC13FE]/20 text-[#BC13FE] text-xs font-bold uppercase tracking-widest mb-4">
                            Premium Architecture
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 tracking-tight">
                            Engineered for Consistency
                        </h2>
                        <p className="text-xl text-slate-400 font-light leading-relaxed">
                            Every aspect of Atomic Clock is built with robust technological decisions to bypass aggressive system limitations and protect personal integrity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            icon={<ShieldCheck className="w-6 h-6" />}
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

            {/* Deep-Dive: Bulletproof Alarms vs Normal Reminders */}
            <section className="py-28 relative border-t border-white/5 bg-gradient-to-b from-[#03050B] to-[#060814]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-5 space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                                Technology Breakdown
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black font-space-grotesk leading-tight text-white">
                                Missed reminders <br /><span className="text-[#D4AF37]">are failures</span>.
                            </h2>
                            <p className="text-slate-400 font-light leading-relaxed text-base">
                                Background restrictions on Android devices (especially from brands like Xiaomi, Samsung, and Oppo) kill background apps to conserve battery. Consequently, standard push notifications fail when the app is inactive.
                            </p>
                            <p className="text-slate-400 font-light leading-relaxed text-base">
                                Atomic Clock leverages deep system-level APIs to bypass normal restrictions, ensuring your routine stays uninterrupted.
                            </p>
                            
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-4 items-center mt-6">
                                <Info className="w-10 h-10 text-[#00F3FF] flex-shrink-0" />
                                <div className="text-xs text-slate-300 font-light leading-relaxed">
                                    Our notification system runs directly inside native low-level services. It does not run analytics or ping telemetry hubs.
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                    <BatteryCharging className="w-36 h-36" />
                                </div>

                                <h3 className="text-xl font-bold font-space-grotesk mb-6 text-white flex items-center gap-3">
                                    <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                                    Alert Delivery Matrix
                                </h3>

                                <div className="space-y-4">
                                    {/* Matrix Row 1 */}
                                    <div className="grid grid-cols-2 pb-3.5 border-b border-white/5 text-sm font-semibold text-slate-400">
                                        <div>Scenario</div>
                                        <div className="text-right">Reliability Check</div>
                                    </div>
                                    
                                    {/* Matrix Row 2 */}
                                    <div className="grid grid-cols-2 py-3 border-b border-white/5 text-sm items-center">
                                        <div className="text-slate-200">Device in Deep Sleep (Doze Mode)</div>
                                        <div className="text-right flex justify-end">
                                            <span className="px-3 py-1 rounded-full bg-[#00F3FF]/15 text-[#00F3FF] text-xs font-bold border border-[#00F3FF]/20 flex items-center gap-1.5">
                                                <Zap className="w-3.5 h-3.5 fill-current" /> Guaranteed
                                            </span>
                                        </div>
                                    </div>

                                    {/* Matrix Row 3 */}
                                    <div className="grid grid-cols-2 py-3 border-b border-white/5 text-sm items-center">
                                        <div className="text-slate-200">Power Saver Mode Active</div>
                                        <div className="text-right flex justify-end">
                                            <span className="px-3 py-1 rounded-full bg-[#00F3FF]/15 text-[#00F3FF] text-xs font-bold border border-[#00F3FF]/20 flex items-center gap-1.5">
                                                <Zap className="w-3.5 h-3.5 fill-current" /> Guaranteed
                                            </span>
                                        </div>
                                    </div>

                                    {/* Matrix Row 4 */}
                                    <div className="grid grid-cols-2 py-3 border-b border-white/5 text-sm items-center">
                                        <div className="text-slate-200">Xiaomi / Samsung Battery Optimization</div>
                                        <div className="text-right flex justify-end">
                                            <span className="px-3 py-1 rounded-full bg-[#00F3FF]/15 text-[#00F3FF] text-xs font-bold border border-[#00F3FF]/20 flex items-center gap-1.5">
                                                <Zap className="w-3.5 h-3.5 fill-current" /> Guaranteed
                                            </span>
                                        </div>
                                    </div>

                                    {/* Matrix Row 5 */}
                                    <div className="grid grid-cols-2 py-3 text-sm items-center">
                                        <div className="text-slate-200">Sticky Lockscreen Lock Alert</div>
                                        <div className="text-right flex justify-end">
                                            <span className="px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] text-xs font-bold border border-[#D4AF37]/20 flex items-center gap-1.5">
                                                <Star className="w-3.5 h-3.5 fill-current" /> Persistent
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Section (The Alchemist's Circle) */}
            <section className="py-20 md:py-32 relative border-t border-white/5 bg-[#03050B]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center mb-10 px-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">
                            Unlock Full Capability
                        </div>
                        <h2 className="text-3xl md:text-6xl font-black font-space-grotesk text-white">The Alchemist's Circle</h2>
                        <p className="text-slate-400 mt-4 text-base md:text-lg font-light max-w-2xl mx-auto">
                            Choose the level of discipline that matches your trajectory. Basic habit building remains 100% free, forever.
                        </p>
                    </div>

                    {/* Premium Tab Billing Selector */}
                    <div className="flex justify-center mb-12 md:mb-16 relative z-10 px-2">
                        <div className="inline-flex p-1 md:p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl gap-1.5 md:gap-2 max-w-full overflow-x-auto">
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
                                        className={`relative px-4 py-2.5 md:px-7 md:py-3.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 flex flex-col items-center gap-0.5 ${
                                            isActive 
                                                ? 'bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black shadow-lg scale-105 font-black' 
                                                : 'text-slate-400 hover:text-slate-200'
                                        }`}
                                    >
                                        <span>{tab.label}</span>
                                        <span className={`text-[9px] md:text-[10px] font-medium ${isActive ? 'text-black font-semibold' : 'text-slate-500'}`}>{tab.badge}</span>
                                        {tab.highlight && (
                                            <span className={`absolute -top-3 px-1.5 py-0.5 rounded-full text-[7px] md:text-[8px] font-black uppercase tracking-wider ${
                                                isActive 
                                                    ? 'bg-white text-black shadow-sm' 
                                                    : 'bg-white/10 text-[#D4AF37]'
                                            }`}>
                                                {tab.highlight}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Highly Spacious 2-Column Comparative Grid */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto items-stretch px-4">
                        
                        {/* Free Tier Card */}
                        <div className="relative group rounded-3xl border border-white/5 bg-white/[0.02] p-6 md:p-10 transition-all hover:border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-2">Free Version</div>
                                <h3 className="text-2xl md:text-3xl font-black font-space-grotesk text-white mb-3">Basic Citizen</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Core habit building with robust native offline structures.</p>
                                
                                <div className="text-4xl md:text-5xl font-black font-space-grotesk text-white my-6 md:my-8">
                                    $0 <span className="text-xs font-normal text-slate-500">Free Forever</span>
                                </div>

                                <ul className="space-y-4 pt-6 border-t border-white/5 text-xs md:text-sm text-slate-300 font-light">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
                                        <span>Unlimited Basic Habit Tracking</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
                                        <span>Bulletproof System Alarms (Basic)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
                                        <span>100% Offline Local SQLite Storage</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
                                        <span>30-Day Activity Heatmaps</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="w-4.5 h-4.5 text-slate-500 flex-shrink-0" />
                                        <span>Zero Ads & Zero Telemetry Tracking</span>
                                    </li>
                                </ul>
                            </div>

                            <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-8 md:mt-10 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all font-space-grotesk text-center text-sm">
                                Start Tracking Free
                            </a>
                        </div>

                        {/* Dynamic Premium Tier Card */}
                        {(() => {
                            let premiumTitle = "Monthly Alchemist";
                            let premiumPrice = "$0.99";
                            let premiumPeriod = "/ month";
                            let premiumSub = "Refine your routines with standard terms.";
                            let premiumBtn = "Subscribe Monthly";
                            let premiumBadge = "Monthly Plan";
                            let premiumBorder = "border-white/5 bg-white/[0.02]";
                            let premiumShadow = "hover:shadow-[0_15px_30px_rgba(255,255,255,0.02)] hover:border-white/10";
                            let iconColor = "text-[#00F3FF]";

                            if (billingPeriod === "annual") {
                                premiumTitle = "Annual Alchemist";
                                premiumPrice = "$9.99";
                                premiumPeriod = "/ year";
                                premiumSub = "Cast long-term votes for your new identity.";
                                premiumBtn = "Subscribe Annually";
                                premiumBadge = "Best Value";
                                premiumBorder = "border-[#BC13FE]/45 bg-[#080714]";
                                premiumShadow = "shadow-[0_20px_50px_rgba(188,19,254,0.06)]";
                                iconColor = "text-[#BC13FE]";
                            } else if (billingPeriod === "lifetime") {
                                premiumTitle = "Lifetime Alchemist";
                                premiumPrice = "$29.99";
                                premiumPeriod = "One-Time Payment";
                                premiumSub = "Ultimate infinite access. No renewals, ever.";
                                premiumBtn = "Unlock Lifetime Plan";
                                premiumBadge = "Founding Offer";
                                premiumBorder = "border-[#D4AF37]/45 bg-[#0B0A12]";
                                premiumShadow = "shadow-[0_20px_50px_rgba(212,175,55,0.1)]";
                                iconColor = "text-[#D4AF37]";
                            }

                            return (
                                <div className={`relative group rounded-3xl border ${premiumBorder} p-6 md:p-10 transition-all duration-500 flex flex-col justify-between ${premiumShadow}`}>
                                    {/* Glowing pill badge on active selection */}
                                    <div className="absolute top-0 right-8 -translate-y-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black text-[9px] font-black uppercase tracking-widest shadow-md">
                                        {premiumBadge}
                                    </div>

                                    <div>
                                        <div className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                                            <Sparkles className="w-4 h-4 text-[#D4AF37]" /> Premium Plan
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black font-space-grotesk text-white mb-3">{premiumTitle}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed">{premiumSub}</p>
                                        
                                        <div className="text-4xl md:text-5xl font-black font-space-grotesk text-white my-6 md:my-8">
                                            {premiumPrice} <span className="text-xs font-normal text-slate-400">{premiumPeriod}</span>
                                        </div>

                                        <ul className="space-y-4 pt-6 border-t border-white/5 text-xs md:text-sm text-slate-300 font-light">
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 className={`w-4.5 h-4.5 ${iconColor} flex-shrink-0`} />
                                                <span><b>Deep Insights</b>: Advanced 30-day analytics, graphs, & metrics</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 className={`w-4.5 h-4.5 ${iconColor} flex-shrink-0`} />
                                                <span><b>Custom Themes</b>: Access to app icons & Event Horizon styles</span>
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 className={`w-4.5 h-4.5 ${iconColor} flex-shrink-0`} />
                                                <span><b>Unlimited History</b>: Complete historical routine logs</span>
                                            </li>
                                            
                                            {billingPeriod === "lifetime" ? (
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle2 className={`w-4.5 h-4.5 ${iconColor} flex-shrink-0`} />
                                                    <span>Exclusive <b>"Founding Alchemist"</b> Profile Badge</span>
                                                </li>
                                            ) : (
                                                <li className="flex items-center gap-3">
                                                    <CheckCircle2 className={`w-4.5 h-4.5 ${iconColor} flex-shrink-0`} />
                                                    <span>Bypasses low-level system optimizer terminations</span>
                                                </li>
                                            )}

                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 className={`w-4.5 h-4.5 ${iconColor} flex-shrink-0`} />
                                                <span>Entitlement secured securely via RevenueCat</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-8 md:mt-10 bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black font-black rounded-2xl hover:brightness-110 transition-all text-center text-sm shadow-lg font-space-grotesk">
                                        {premiumBtn}
                                    </a>
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </section>

            {/* Redesigned Interactive Accordion FAQ Section */}
            <section className="py-28 relative border-t border-white/5 bg-[#03050B]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="text-center mb-20">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#00F3FF]/15 border border-[#00F3FF]/30 text-[#00F3FF] text-xs font-bold uppercase tracking-widest mb-4">
                            In-Depth Understanding
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black font-space-grotesk text-white">Frequently Asked Questions</h2>
                        <p className="text-slate-400 mt-4 font-light">Demystifying the engineering and philosophy of Atomic Clock.</p>
                    </div>

                    <div className="space-y-4">
                        {faqsData.map((faq, i) => {
                            const isOpen = openFaqIndex === i;
                            return (
                                <div 
                                    key={i} 
                                    className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                                        className="w-full p-6 text-left flex justify-between items-center gap-6 group hover:bg-white/[0.02] transition-colors"
                                    >
                                        <h3 className="text-lg font-bold font-space-grotesk text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                                            {faq.question}
                                        </h3>
                                        <div className={`p-2 rounded-lg bg-white/5 border border-white/10 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D4AF37] border-[#D4AF37]/30' : 'text-slate-400'}`}>
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </button>

                                    {/* Expandable answer panel */}
                                    <div 
                                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                            isOpen ? 'max-h-[300px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                                        }`}
                                    >
                                        <p className="p-6 text-sm text-slate-400 font-light leading-relaxed bg-[#050812]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Premium Call to Action */}
            <section id="download" className="py-40 relative border-t border-white/5">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="relative rounded-[3rem] overflow-hidden p-[1.5px]">
                        
                        {/* Rainbow neon border animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#BC13FE] to-[#00F3FF] animate-gradient"></div>
                        
                        <div className="relative bg-[#03050B] rounded-[2.9rem] px-8 py-24 text-center overflow-hidden">
                            {/* Decorative Radial Gold Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
                            
                            <div className="relative z-10 space-y-8">
                                <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white tracking-tighter">Ready to shift <br />your identity?</h2>
                                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                                    Join the circle of individuals who track routines with true alignment. Atomic Clock is available now on Android.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                                    <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-black font-black text-xl hover:bg-[#D4AF37] hover:text-black transition-all rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:-translate-y-1 font-space-grotesk">
                                        <svg viewBox="0 0 466 511.98" className="w-6 h-6 flex-shrink-0">
                                            <g fillRule="nonzero">
                                                <path fill="#EA4335" d="M199.9 237.8 1.4 470.17c7.22 24.57 30.16 41.81 55.8 41.81 11.16 0 20.93-2.79 29.3-8.37l244.16-139.46L199.9 237.8z"/>
                                                <path fill="#FBBC04" d="m433.91 205.1-104.65-60-111.61 110.22 113.01 108.83 104.64-58.6c18.14-9.77 30.7-29.3 30.7-50.23-1.4-20.93-13.95-40.46-32.09-50.22z"/>
                                                <path fill="#34A853" d="M199.42 273.45 329.27 145.1 87.9 8.37C79.53 2.79 68.36 0 57.2 0 30.7 0 6.98 18.14 1.4 41.86l198.02 231.59z"/>
                                                <path fill="#4285F4" d="M1.39 41.86C0 46.04 0 51.63 0 57.2v397.64c0 5.57 0 9.76 1.4 15.34l216.27-214.86L1.39 41.86z"/>
                                            </g>
                                        </svg>
                                        <span>Download Atomic Clock</span>
                                    </a>
                                </div>
                                
                                <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mt-4">100% PRIVATE. OFFLINE FOREVER. PREMIUM BY ARCHITECTURE.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#010206] border-t border-white/5 py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 ring-2 ring-[#D4AF37]/35 rounded-xl p-1 bg-gradient-to-br from-[#121424] to-[#03050B] shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                                    <Image
                                        src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                        alt="Atomic Clock Logo"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-3xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-white">
                                    Atomic Clock
                                </span>
                            </div>
                            <p className="text-slate-400 text-lg font-light max-w-sm leading-relaxed">
                                The high-end habit companion for the modern alchemist. Transform your life, one atomic shift at a time.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-8 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-4 text-slate-500 font-medium text-sm">
                                <li><Link href="/atomic-clock/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/atomic-clock/terms-and-conditions" className="hover:text-[#BC13FE] transition-colors">Terms of Service</Link></li>
                                <li><Link href="/atomic-clock/pre-register-terms" className="hover:text-[#00F3FF] transition-colors">Pre-Registration Offer Terms</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-8 font-space-grotesk tracking-widest uppercase text-xs font-semibold">Connect</h3>
                            <ul className="space-y-4 text-slate-500 font-medium text-sm">
                                <li><a href="mailto:qamrosh.dev@gmail.com" className="hover:text-[#D4AF37] transition-colors">Concierge Support</a></li>
                                <li><a href="https://qamrosh.online" target="_blank" rel="noopener noreferrer" className="hover:text-[#BC13FE] transition-colors">Developer Portal</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} Atomic Clock. All rights reserved.</p>
                        <p className="text-slate-600 text-sm font-medium tracking-wide">Handcrafted with absolute discipline by <span className="text-white">Qamrosh Nazar</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description, accent }) {
    return (
        <div className="group relative p-[1px] rounded-[2rem] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-white/5 rounded-[2rem] transition-opacity group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative h-full p-8 rounded-[1.9rem] bg-[#03050B] border border-white/5 transition-all group-hover:border-white/15">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500`} 
                     style={{ backgroundColor: `${accent}10`, color: accent }}>
                    <div className="group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4 text-white group-hover:text-[#D4AF37] transition-colors">{title}</h3>
                <p className="text-slate-400 leading-relaxed font-light text-sm">
                    {description}
                </p>
                
                {/* Micro-glow on hover */}
                <div className="absolute bottom-4 right-4 w-12 h-12 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                     style={{ backgroundColor: accent }}></div>
            </div>
        </div>
    );
}
