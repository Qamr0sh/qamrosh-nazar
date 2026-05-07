
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Compass, Moon, Repeat, Palette, Star, Crown, CheckCircle2, Shield, Bell, MapPin, Download } from 'lucide-react';

export const metadata = {
    title: 'As-Salah - Elevate Your Daily Worship',
    description: 'A premium, high-accuracy Islamic lifestyle app featuring prayer times, Qibla compass, smart Tasbeeh, and elegant personalization.',
};

export default function AsSalahPage() {
    const goldColor = '#C6A266';
    const emeraldColor = '#1B4332';

    return (
        <div className="min-h-screen bg-[#050B08] text-slate-100 font-inter overflow-x-hidden selection:bg-[#C6A266] selection:text-black">
            {/* Premium Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#050B08]/80 backdrop-blur-xl border-b border-[#C6A266]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-white/5 transition-colors group">
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        </Link>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 ring-2 ring-[#C6A266]/20 rounded-xl p-1 bg-[#15422e]">
                                <Image
                                    src="/as-salah/logo.png"
                                    alt="As-Salah Logo"
                                    fill
                                    className="object-contain p-1 rounded-lg"
                                />
                            </div>
                            <span className="font-space-grotesk font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] to-white">As-Salah</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#features" className="text-sm font-medium text-slate-400 hover:text-[#C6A266] transition-colors hidden sm:block">Features</Link>
                        <Link href="#download" className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#C6A266] to-[#1B4332] rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button className="relative bg-[#050B08] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all border border-[#C6A266]/20">
                                Get App
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 overflow-hidden">
                {/* Spiritual Background Elements */}
                <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1B4332]/20 rounded-full blur-[120px] animate-pulse" />
                    <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#C6A266]/10 rounded-full blur-[100px] animate-pulse delay-1000" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(27,67,50,0.1)_0%,transparent_70%)]" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#C6A266]/20 text-[#C6A266] text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in-up backdrop-blur-md">
                            <Star className="w-3.5 h-3.5" />
                            <span>Modern Spiritual Companion</span>
                        </div>
                        <h1 className="text-6xl md:text-8xl font-extrabold font-space-grotesk tracking-tighter mb-10 leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500">
                            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A266] to-[#1B4332]">Daily Worship</span> with Precision.
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12 font-light">
                            Experience a state-of-the-art Islamic lifestyle app designed for the modern believer. Accuracy meets elegance in every prayer.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="#" className="group relative w-full sm:w-auto">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A266] to-[#1B4332] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <div className="relative flex items-center justify-center gap-3 px-10 py-5 bg-[#050B08] border border-[#C6A266]/20 hover:border-[#C6A266]/50 text-white rounded-2xl font-bold transition-all hover:-translate-y-1 text-lg">
                                    <Download className="w-6 h-6 text-[#C6A266]" />
                                    <span>Download App</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* App Mockup */}
                    <div className="relative mx-auto mt-24 max-w-5xl group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#C6A266]/20 to-[#1B4332]/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-[#C6A266]/10 bg-white/5 backdrop-blur-2xl p-4 lg:p-8">
                            <div className="relative rounded-3xl overflow-hidden aspect-[16/9] shadow-2xl">
                                <Image
                                    src="/as-salah/hero_mockup.png"
                                    alt="As-Salah Premium Interface"
                                    fill
                                    className="object-cover object-top hover:scale-[1.02] transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050B08] via-transparent to-transparent opacity-40" />
                            </div>
                        </div>

                        {/* Floating Micro-UI Elements */}
                        <div className="absolute -top-10 -right-10 hidden lg:block animate-bounce-slow">
                            <div className="bg-white/5 backdrop-blur-xl border border-[#C6A266]/20 p-6 rounded-3xl shadow-2xl">
                                <Moon className="w-8 h-8 text-[#C6A266] mb-2" />
                                <div className="text-xs font-bold text-[#C6A266] uppercase tracking-wider">Next Prayer</div>
                                <div className="text-2xl font-bold">Maghrib 7:42 PM</div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -left-10 hidden lg:block animate-bounce-slow delay-500">
                            <div className="bg-white/5 backdrop-blur-xl border border-[#C6A266]/20 p-6 rounded-3xl shadow-2xl">
                                <Compass className="w-8 h-8 text-[#1B4332] mb-2" />
                                <div className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">Qibla Accuracy</div>
                                <div className="text-lg font-medium">99.9% High-Precision</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section id="features" className="py-32 bg-[#050B08] relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24">
                        <h2 className="text-4xl md:text-6xl font-bold font-space-grotesk mb-8 tracking-tight">Spiritual Excellence</h2>
                        <p className="text-xl text-slate-400 font-light">Meticulously crafted for your journey of faith.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <FeatureCard
                            icon={<Bell />}
                            title="Precision Prayer Times"
                            description="Location-aware Adhan alerts with high-accuracy calculations for any corner of the world."
                            accent="#C6A266"
                        />
                        <FeatureCard
                            icon={<Repeat />}
                            title="Smart Tasbeeh"
                            description="Customizable routines with automated progression and tactile haptic feedback."
                            accent="#1B4332"
                        />
                        <FeatureCard
                            icon={<Compass />}
                            title="Qibla Compass"
                            description="High-accuracy rotation-vector-based tracking to find your direction instantly."
                            accent="#C6A266"
                        />
                        <FeatureCard
                            icon={<Palette />}
                            title="Premium Personalization"
                            description="Dynamic themes, dark mode, and elegant Arabic typography for a beautiful experience."
                            accent="#1B4332"
                        />
                    </div>
                </div>
            </section>


            {/* Pricing Section (RevenueCat Style) */}
            <section className="py-32 relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1 rounded-full bg-[#C6A266]/10 border border-[#C6A266]/20 text-[#C6A266] text-xs font-bold uppercase tracking-widest mb-4">
                            Unlock Full Potential
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold font-space-grotesk">As-Salah Pro</h2>
                        <p className="text-slate-400 mt-4">Support the development and get premium features.</p>
                    </div>

                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A266] to-[#1B4332] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-[#050B08] border border-[#C6A266]/30 rounded-[2.5rem] p-8 md:p-12">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-6">
                                    {[
                                        "Multiple Vocal Adhan choices",
                                        "Premium Arabic Fonts",
                                        "Advanced Haptic feedback",
                                        "Exclusive Dynamic Themes",
                                        "No Ads, Forever",
                                        "Support Independent Development"
                                    ].map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#C6A266]" />
                                            <span className="text-slate-200">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center p-8 bg-[#1B4332]/10 rounded-3xl border border-[#1B4332]/20">
                                    <div className="text-[#C6A266] font-bold text-lg mb-2">Lifetime Access</div>
                                    <div className="text-5xl font-bold text-white mb-6">$9.99</div>
                                    <button className="w-full py-4 bg-[#C6A266] text-black font-bold rounded-2xl hover:bg-[#D6B276] transition-colors shadow-[0_0_20px_rgba(198,162,102,0.3)]">
                                        Go Pro Now
                                    </button>
                                    <div className="text-slate-500 text-xs mt-4">One-time purchase. Secure via RevenueCat.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#020504] border-t border-white/5 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-16 mb-20">
                        <div className="col-span-2 space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="relative w-12 h-12 ring-2 ring-[#C6A266]/20 rounded-xl p-1 bg-[#15422e]">
                                    <Image
                                        src="/as-salah/logo.png"
                                        alt="As-Salah Logo"
                                        fill
                                        className="object-contain p-1 rounded-lg"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-3xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] to-white">As-Salah</span>
                            </div>
                            <p className="text-slate-400 text-lg font-light max-w-sm leading-relaxed">
                                Your journey of faith, beautifully guided. High-precision Islamic tools for the modern world.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-8 font-space-grotesk tracking-widest uppercase text-xs">Legal</h3>
                            <ul className="space-y-4 text-slate-500 font-medium">
                                <li><Link href="/as-salah/privacy-policy" className="hover:text-[#C6A266] transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/as-salah/terms-and-conditions" className="hover:text-[#1B4332] transition-colors">Terms of Service</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-white mb-8 font-space-grotesk tracking-widest uppercase text-xs">Support</h3>
                            <ul className="space-y-4 text-slate-500 font-medium">
                                <li><a href="mailto:qamrosh.dev@gmail.com" className="hover:text-[#C6A266] transition-colors">Contact Us</a></li>
                                <li><a href="https://qamrosh.dev" className="hover:text-[#1B4332] transition-colors">Developer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} As-Salah. All rights reserved.</p>
                        <p className="text-slate-600 text-sm font-medium tracking-wide">Built for the Ummah by <span className="text-white">Qamrosh Nazar</span></p>
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
            
            <div className="relative h-full p-8 rounded-[1.9rem] bg-[#050B08] border border-white/5 transition-all group-hover:border-[#C6A266]/20">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500`} 
                     style={{ backgroundColor: `${accent}10`, color: accent }}>
                    <div className="group-hover:scale-110 transition-transform duration-500">
                        {icon}
                    </div>
                </div>
                <h3 className="text-xl font-bold font-space-grotesk mb-4 text-white group-hover:text-white transition-colors">{title}</h3>
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
