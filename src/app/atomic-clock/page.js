
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Zap, BarChart2, Calendar, Target, Clock, Trophy, Sparkles, Fingerprint } from 'lucide-react';

export const metadata = {
    title: 'AtomiClock - Build the Identity of Who You Want to Become',
    description: 'A premium habit-tracking experience built on the philosophy of Atomic Habits and Identity-Based Tracking. Privacy-first, locally stored, and designed for discipline.',
};

export default function AtomiClockPage() {
    const goldColor = '#D4AF37';
    const neonPurple = '#BC13FE';

    return (
        <div className="min-h-screen bg-[#0B0D17] text-slate-100 font-inter overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
            {/* Premium Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0B0D17]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 ring-2 ring-[#D4AF37]/20 rounded-xl p-1 bg-gradient-to-br from-[#1a1c2e] to-[#0B0D17]">
                                <Image
                                    src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                    alt="AtomiClock Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </div>
                            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-white">AtomiClock</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#features" className="text-sm font-medium text-slate-400 hover:text-[#D4AF37] transition-colors hidden sm:block">Experience</Link>
                        <Link href="#download" className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button className="relative bg-[#0B0D17] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all border border-white/10">
                                Get App
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section: The Identity Shift */}
            <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
                {/* Cosmic Background Elements */}
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#BC13FE]/10 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#D4AF37]/5 rounded-full blur-[100px] animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(188,19,254,0.05)_0%,transparent_70%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up backdrop-blur-md">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Premium Habit Mastery</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-extrabold font-space-grotesk tracking-tighter mb-10 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500">
                            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#BC13FE]">Identity</span> <br /> of who you want to become.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                            Experience the Alchemist’s approach to routine. A high-end, privacy-first habit companion designed for the disciplined few who seek transformation, not just tracking.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock&hl=en" target="_blank" rel="noopener noreferrer" className="group relative w-full sm:w-auto">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-[#0B0D17] border border-white/10 hover:border-[#D4AF37]/50 text-white rounded-2xl font-bold transition-all hover:-translate-y-1 text-lg">
                                    <Image src="/atomic_clock/logos/google-play.svg" alt="Google Play" width={24} height={24} className="brightness-0 invert" />
                                    <span>Get it on Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Premium Glassmorphism Mockup */}
                    <div className="relative mx-auto mt-24 max-w-6xl group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#D4AF37]/20 to-[#BC13FE]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl p-4 lg:p-8">
                            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl">
                                <Image
                                    src="/atomic_clock/Listing2.png"
                                    alt="AtomiClock Premium Interface"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D17] via-transparent to-transparent opacity-40" />
                            </div>
                        </div>

                        {/* Floating Micro-UI Elements */}
                        <div className="absolute -top-10 -right-10 hidden lg:block animate-bounce-slow">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                                <Trophy className="w-8 h-8 text-[#D4AF37] mb-2" />
                                <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider">Identity Streak</div>
                                <div className="text-2xl font-bold">42 Days</div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 hidden lg:block animate-bounce-slow delay-500">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl">
                                <Fingerprint className="w-8 h-8 text-[#BC13FE] mb-2" />
                                <div className="text-xs font-bold text-[#BC13FE] uppercase tracking-wider">Identity Verified</div>
                                <div className="text-lg font-medium">The Strategist</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Philosophy: Discipline Meets Design */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-10">
                            <div className="inline-block px-4 py-1 rounded-full bg-[#BC13FE]/10 border border-[#BC13FE]/20 text-[#BC13FE] text-xs font-bold uppercase tracking-widest">
                                The Philosophy
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk leading-tight">Beyond mere tracking. <br />This is <span className="text-[#D4AF37]">Alchemy</span>.</h2>
                            <p className="text-xl text-slate-400 leading-relaxed font-light">
                                AtomiClock isn't just an app; it's a digital sanctum for your personal evolution. Built on the core tenets of <i>Atomic Habits</i>, we focus on the identity shift. Every check-off is a vote for the person you wish to become.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { text: "Identity Progress Heatmaps", icon: <BarChart2 className="w-5 h-5" /> },
                                    { text: "Atomic Habit Stacking Logic", icon: <Target className="w-5 h-5" /> },
                                    { text: "Tactile Haptic Reward Systems", icon: <Zap className="w-5 h-5" /> },
                                    { text: "System-Level Reliable Reminders", icon: <Clock className="w-5 h-5" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 group">
                                        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                                            {item.icon}
                                        </div>
                                        <span className="text-lg font-medium text-slate-200">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#BC13FE] rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0B0D17] p-2">
                                <Image
                                    src="/atomic_clock/listing3.png"
                                    alt="AtomiClock Features"
                                    width={600}
                                    height={800}
                                    className="rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Features Grid */}
            <section id="features" className="py-32 bg-[#0B0D17] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 tracking-tight">The Premium Standard</h2>
                        <p className="text-xl text-slate-400 font-light">Meticulously crafted features for those who value discipline and aesthetics.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Fingerprint />}
                            title="Identity Tracking"
                            description="Link every habit to a specific character trait. Track 'votes' for your future self."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<Sparkles />}
                            title="Haptic Rewards"
                            description="Premium tactile feedback system that makes every completion feel physically satisfying."
                            accent="#BC13FE"
                        />
                        <FeatureCard
                            icon={<BarChart2 />}
                            title="Cosmic Heatmaps"
                            description="Visualize your consistency across time with high-end heatmap visualizations."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<Target />}
                            title="Habit Stacking"
                            description="Built-in logic for stacking routines, making it easier to build complex morning and evening rituals."
                            accent="#BC13FE"
                        />
                        <FeatureCard
                            icon={<Shield />}
                            title="Absolute Privacy"
                            description="Local SQLite storage. No accounts. Your journey is yours alone, stored only on your device."
                            accent="#D4AF37"
                        />
                        <FeatureCard
                            icon={<Zap />}
                            title="Reliable Reminders"
                            description="Custom AlarmManager implementation ensures notifications fire exactly when needed."
                            accent="#BC13FE"
                        />
                    </div>
                </div>
            </section>

            {/* Call to Action: Become the Identity */}
            <section id="download" className="py-40 relative">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="relative rounded-[3rem] overflow-hidden p-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#BC13FE] to-[#D4AF37] animate-gradient-x"></div>
                        <div className="relative bg-[#0B0D17] rounded-[2.9rem] px-8 py-24 text-center overflow-hidden">
                            {/* Decorative Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] pointer-events-none" />
                            
                            <div className="relative z-10 space-y-10">
                                <h2 className="text-5xl md:text-7xl font-bold font-space-grotesk text-white tracking-tighter">Ready to shift <br />your identity?</h2>
                                <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                                    Join the elite circle of individuals who track with purpose. AtomiClock is available now on Android.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                                    <a href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock&hl=en" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xl hover:bg-[#D4AF37] transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:-translate-y-1">
                                        Download AtomiClock
                                    </a>
                                </div>
                                <p className="text-slate-500 text-sm font-medium tracking-widest uppercase">Privacy First. Offline Always. Premium by Design.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#050505] border-t border-white/5 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 ring-2 ring-[#D4AF37]/20 rounded-xl p-1 bg-gradient-to-br from-[#1a1c2e] to-[#0B0D17]">
                                    <Image
                                        src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                        alt="AtomiClock Logo"
                                        fill
                                        className="object-contain p-1"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-3xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-white">AtomiClock</span>
                            </div>
                            <p className="text-slate-400 text-lg font-light max-w-sm leading-relaxed">
                                The high-end habit companion for the modern alchemist. Transform your life, one atomic shift at a time.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-8 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-4 text-slate-500 font-medium">
                                <li><Link href="/atomic-clock/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/atomic-clock/terms-and-conditions" className="hover:text-[#BC13FE] transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-8 font-space-grotesk tracking-widest uppercase text-xs">Connect</h3>
                            <ul className="space-y-4 text-slate-500 font-medium">
                                <li><a href="mailto:qamrosh.dev@gmail.com" className="hover:text-[#D4AF37] transition-colors">Concierge Support</a></li>
                                <li><a href="https://qamrosh.dev" className="hover:text-[#BC13FE] transition-colors">Developer Portal</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} AtomiClock. All rights reserved.</p>
                        <p className="text-slate-600 text-sm font-medium tracking-wide">Handcrafted with discipline by <span className="text-white">Qamrosh Nazar</span></p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description, accent }) {
    return (
        <div className="group relative p-1 rounded-[2rem] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-white/5 rounded-[2rem] transition-opacity group-hover:opacity-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="relative h-full p-8 rounded-[1.9rem] bg-[#0B0D17] border border-white/5 transition-all group-hover:border-white/20">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500`} 
                     style={{ backgroundColor: `${accent}10`, color: accent }}>
                    <div className="group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>
                </div>
                <h3 className="text-2xl font-bold font-space-grotesk mb-4 text-white group-hover:text-white transition-colors">{title}</h3>
                <p className="text-slate-400 leading-relaxed font-light">
                    {description}
                </p>
                
                {/* Micro-glow on hover */}
                <div className="absolute bottom-4 right-4 w-12 h-12 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity"
                     style={{ backgroundColor: accent }}></div>
            </div>
        </div>
    );
}

