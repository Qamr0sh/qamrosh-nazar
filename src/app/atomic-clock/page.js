
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Zap, BarChart2, Calendar, Target, Clock, Trophy } from 'lucide-react';

export const metadata = {
    title: 'Atomic Clock - Transform Your Life, One Habit at a Time',
    description: 'Your personal habit companion designed around the proven principles of atomic habits. Build better routines, track progress, and stay private.',
};

export default function AtomicClockPage() {
    const primaryColor = '#704ede';

    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 font-inter overflow-x-hidden selection:bg-[#704ede] selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="relative w-8 h-8">
                            <Image
                                src="/atomic_clock/logos/logos%20with%20varient/light_mode_logo.png"
                                alt="Atomic Clock Logo"
                                fill
                                className="object-contain dark:hidden"
                            />
                            <Image
                                src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                alt="Atomic Clock Logo"
                                fill
                                className="object-contain hidden dark:block"
                            />
                        </div>
                        <span className="font-space-grotesk font-bold text-xl tracking-tight">Atomic Clock</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#features" className="text-sm font-medium hover:text-[#704ede] transition-colors hidden sm:block">Features</Link>
                        <Link href="#download" className="bg-[#704ede] hover:bg-[#5f41b2] text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-[#704ede]/20">
                            Get App
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(112,78,222,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(112,78,222,0.3),rgba(0,0,0,0))] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#704ede]/10 text-[#704ede] text-sm font-medium mb-6 animate-fade-in-up">
                            <Zap className="w-4 h-4 fill-current" />
                            <span>Proven Principles of Atomic Habits</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400 pb-2">
                            Transform Your Life,<br /> One <span className="text-[#704ede]">Atomic Habit</span> at a Time
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            Build better routines, track meaningful progress, and become the person you want to be—all while keeping your data completely private and offline.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="w-full sm:w-auto px-8 py-4 bg-[#704ede] hover:bg-[#5f41b2] text-white rounded-2xl font-semibold transition-all shadow-xl shadow-[#704ede]/25 hover:shadow-[#704ede]/40 hover:-translate-y-1">
                                Join Open Testing (Android)
                            </button>
                        </div>
                    </div>

                    {/* Hero Image / Mockup */}
                    <div className="relative mx-auto mt-16 max-w-5xl">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#704ede]/10 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-neutral-900 p-2 sm:p-4">
                            {/* We use Listing1.png here as the main hero shot */}
                            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-200 dark:bg-neutral-800">
                                <Image
                                    src="/atomic_clock/Listing2.png"
                                    alt="Atomic Clock App Interface"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Elements (Decorative) */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#704ede] rounded-full blur-[60px] opacity-40 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-500 rounded-full blur-[60px] opacity-30 animate-pulse delay-700" />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-slate-50 dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">Unlike other habit trackers...</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                Atomic Clock focuses on what truly matters: making tiny, consistent improvements that compound into remarkable results. Whether you're building morning rituals, evening routines, or anytime habits, we help you stay on track with intelligent reminders and motivating insights.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Make habits obvious with smart reminders",
                                    "Make them attractive with streak tracking",
                                    "Make them easy with simple check-offs",
                                    "Make them satisfying with visual progress"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5">
                                        <div className="p-2 rounded-lg bg-[#704ede]/10 text-[#704ede]">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium pt-1.5">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Feature Image */}
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/atomic_clock/listing3.png"
                                alt="Identity Driven Habits"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Grid */}
            <section id="features" className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Key Features</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need to build lasting habits and break bad ones.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <FeatureCard
                            icon={<Clock />}
                            title="Smart Habit Organization"
                            description="Time-based sections (Morning, Afternoon, Evening) with custom schedules and color-coded categories."
                        />
                        {/* Card 2 */}
                        <FeatureCard
                            icon={<Trophy />}
                            title="Powerful Streak Tracking"
                            description="Monitor current & best streaks, get streak rescue alerts, and celebrate consistency milestones."
                        />
                        {/* Card 3 */}
                        <FeatureCard
                            icon={<BarChart2 />}
                            title="Deep Insights & Analytics"
                            description="Visualize your journey with consistency scores, trend graphs, and recovery speed insights."
                        />
                        {/* Card 4 */}
                        <FeatureCard
                            icon={<Target />}
                            title="Identity-Driven Growth"
                            description="Link habits to your desired identity and track 'votes' for the person you are becoming."
                        />
                        {/* Card 5 */}
                        <FeatureCard
                            icon={<Shield />}
                            title="Privacy-First"
                            description="100% offline architecture. Your data stays on your device. No cloud sync, no tracking."
                        />
                        {/* Card 6 */}
                        <FeatureCard
                            icon={<Zap />}
                            title="Beautiful Interface"
                            description="Clean, modern design with dark mode, smooth animations, and intuitive interactions."
                        />
                    </div>
                </div>
            </section>

            {/* Gallery / Carousel Section */}
            <section className="py-24 bg-[#704ede]/5 border-y border-[#704ede]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-16 text-center">Visual Excellence</h2>

                    {/* Simple Grid Gallery for now */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {['Listing1-2.png', 'Listing1-4.png', 'Listing1-5.png', 'Listing1-6.png'].map((img, idx) => (
                            <div key={idx} className={`relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 aspect-[9/19] hover:-translate-y-2 transition-transform duration-300 ${idx % 2 === 0 ? 'mt-0' : 'mt-8'}`}>
                                <Image
                                    src={`/atomic_clock/${img}`}
                                    alt={`Screenshot ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Premium Section */}
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <div className="inline-block p-3 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 mb-6">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Go Premium</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
                        Unlock advanced insights, detailed trend graphs, momentum indicators, and more with a one-time purchase or simple subscription.
                    </p>
                    <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl">
                        <div className="grid sm:grid-cols-2 gap-8 text-left">
                            <ul className="space-y-3">
                                {['Detailed trend graphs', 'Category distribution', 'Time-of-day performance', 'Momentum indicators'].map(f => (
                                    <li key={f} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#704ede]" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-3">
                                {['Recovery insights', 'Complete history calendar', 'Weekly consistency breakdown', 'Identity votes tracking'].map(f => (
                                    <li key={f} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#704ede]" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="download" className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[2.5rem] bg-[#704ede] overflow-hidden px-8 py-20 text-center">
                        {/* Background decoration */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-white/30 rotate-12 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white">Start Building the Life You Want</h2>
                            <p className="text-white/80 text-xl max-w-2xl mx-auto">
                                Download Atomic Clock today and experience the power of atomic habits. Your future self will thank you.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button className="bg-white text-[#704ede] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg">
                                    Join Open Testing
                                </button>
                            </div>
                            <p className="text-white/60 text-sm">Basic habit tracking is completely free forever.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-50 dark:bg-[#050505] border-t border-slate-200 dark:border-white/5 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative w-10 h-10">
                                    <Image
                                        src="/atomic_clock/logos/logos%20with%20varient/light_mode_logo.png"
                                        alt="Atomic Clock Logo"
                                        fill
                                        className="object-contain dark:hidden"
                                    />
                                    <Image
                                        src="/atomic_clock/logos/logos%20with%20varient/dark_mode_logo.png"
                                        alt="Atomic Clock Logo"
                                        fill
                                        className="object-contain hidden dark:block"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-2xl">Atomic Clock</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                                Transform your life, one atomic habit at a time. Designed for privacy, built for progress.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-6 font-space-grotesk">Legal</h3>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><Link href="/atomic-clock/privacy-policy" className="hover:text-[#704ede]">Privacy Policy</Link></li>
                                <li><Link href="/atomic-clock/terms-and-conditions" className="hover:text-[#704ede]">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-6 font-space-grotesk">Connect</h3>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><a href="mailto:qamrosh.dev@gmail.com" className="hover:text-[#704ede]">Contact Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Atomic Clock. All rights reserved.</p>
                        <p className="text-slate-400 text-sm">Made with ❤️ by Qamrosh Nazar</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-[#704ede]/30 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#704ede]/10 text-[#704ede] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-space-grotesk mb-3 group-hover:text-[#704ede] transition-colors">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
