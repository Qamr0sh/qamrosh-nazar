
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Zap, FileText, Smartphone, HardDrive, Layout, ChevronRight } from 'lucide-react';

export const metadata = {
    title: 'Pure PDF Reader - Elegant. Fast. Ad-Free.',
    description: 'A premium reading experience that prioritizes your privacy and speed. No distractions, no tracking, just your documents.',
};

export default function PurePDFReaderPage() {
    const primaryColor = '#3b82f6';

    return (
        <div className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 font-inter overflow-x-hidden selection:bg-blue-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-blue-500/20 shadow-sm">
                            <Image
                                src="/pure-pdf-reader/logo.png"
                                alt="Pure PDF Reader Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="font-space-grotesk font-bold text-xl tracking-tight">Pure PDF</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="#features" className="text-sm font-medium hover:text-blue-500 transition-colors hidden sm:block">Features</Link>
                        <Link href="#download" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
                            Download
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(0,0,0,0))] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
                            <Zap className="w-4 h-4 fill-current" />
                            <span>Version 1.0 - Ad-Free & Pure</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-space-grotesk tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400 pb-2">
                            Elegant. Fast.<br /><span className="text-blue-600">Pure PDF Reader</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            A premium reading experience that prioritizes your privacy and speed. No distractions, no tracking, just your documents.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#download" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-all shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 text-center">
                                Get for Android
                            </a>
                            <Link href="#features" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 rounded-2xl font-semibold transition-all hover:bg-slate-50 dark:hover:bg-white/20 text-center">
                                Explore Features
                            </Link>
                        </div>
                    </div>

                    {/* Hero Image / Mockup */}
                    <div className="relative mx-auto mt-16 max-w-5xl">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-neutral-900 p-2 sm:p-4">
                            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-200 dark:bg-neutral-800">
                                <Image
                                    src="/pure-pdf-reader/screenshot1.jpeg"
                                    alt="Pure PDF Reader Dark Mode Interface"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Floating Elements (Decorative) */}
                        <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500 rounded-full blur-[60px] opacity-40 animate-pulse" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-500 rounded-full blur-[60px] opacity-30 animate-pulse delay-700" />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-slate-50 dark:bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk">The "Pure" Philosophy</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                We built Pure PDF Reader because we were tired of apps filled with intrusive ads, tracking scripts, and bloated features. Our mission is to provide the fastest, cleanest, and most private document reading experience on Android.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Zero Advertisements, ever",
                                    "Works 100% offline for total privacy",
                                    "No data collection or tracking",
                                    "Edge-to-edge minimalist design"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/5 shadow-sm">
                                        <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium pt-1.5">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-neutral-800">
                            <Image
                                src="/pure-pdf-reader/screenshot2.jpeg"
                                alt="Pure PDF Reader Smart Library"
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
                        <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk mb-6">Built for Performance</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Everything you need from a PDF reader, with none of the bloat.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Layout />}
                            title="Minimalist Design"
                            description="A clean, edge-to-edge interface that puts your content first, removing all visual clutter."
                        />
                        <FeatureCard
                            icon={<Zap />}
                            title="Instant Opening"
                            description="Seamlessly opens PDFs from file managers, email, or browsers without even showing a loading screen."
                        />
                        <FeatureCard
                            icon={<HardDrive />}
                            title="Smart Library"
                            description="Automatically scans your device to organize all your PDFs in one beautiful, searchable list."
                        />
                        <FeatureCard
                            icon={<Smartphone />}
                            title="Adaptive Theme"
                            description="Follows your system’s light or dark mode and supports Android 13+ Themed Icons."
                        />
                        <FeatureCard
                            icon={<Shield />}
                            title="Privacy-First"
                            description="Works entirely offline. Your documents never leave your device. No analytics, no tracking."
                        />
                        <FeatureCard
                            icon={<FileText />}
                            title="PDF Engine"
                            description="High-performance rendering engine ensures smooth scrolling and crisp text on any device."
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="download" className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-[2.5rem] bg-blue-600 overflow-hidden px-8 py-20 text-center">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[200%] bg-white/30 rotate-12 blur-3xl"></div>
                        </div>

                        <div className="relative z-10 space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white">Experience the Pure PDF Reader</h2>
                            <p className="text-white/80 text-xl max-w-2xl mx-auto">
                                Download now and enjoy a reading experience that respects your privacy and maximizes your productivity.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button disabled className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg transition-colors shadow-lg opacity-80 cursor-not-allowed">
                                    Coming Soon to Play Store
                                </button>
                            </div>
                            <p className="text-white/60 text-sm">Totally free. No ads. No tracking.</p>
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
                                <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-blue-500/20">
                                    <Image
                                        src="/pure-pdf-reader/logo.png"
                                        alt="Pure PDF Reader Logo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="font-space-grotesk font-bold text-2xl">Pure PDF Reader</span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                                Elegant. Fast. Ad-Free. The ultimate PDF reading experience for Android.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-bold mb-6 font-space-grotesk">Legal</h3>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><Link href="/pure-pdf-reader/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/pure-pdf-reader/terms-and-conditions" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-6 font-space-grotesk">Connect</h3>
                            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
                                <li><a href="mailto:qamrosh.dev@gmail.com" className="hover:text-blue-500 transition-colors">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Pure PDF Reader. All rights reserved.</p>
                        <p className="text-slate-400 text-sm">Made with ❤️ by Qamrosh Nazar</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="group p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-blue-500/30 transition-all hover:-translate-y-1 shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold font-space-grotesk mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
