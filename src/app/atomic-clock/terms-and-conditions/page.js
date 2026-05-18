import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Terms of Service - Atomic Clock',
    description: 'Professional terms of service for Atomic Clock habit tracker.',
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-[#03050B] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE] pb-2">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-slate-400">
                        For <strong>Atomic Clock</strong>
                    </p>
                    <p className="text-sm text-slate-500">
                        Last Updated: April 25, 2026
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">1. Acceptance of Terms</h2>
                        <p className="text-slate-300">
                            By downloading or using Atomic Clock, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">2. Description of Service</h2>
                        <p className="text-slate-300">
                            Atomic Clock is a productivity tool designed for habit tracking based on identity-based progress. It includes features like Identity Progress Heatmaps, habit-stacking logic, and local notification scheduling.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">3. Subscriptions and Payments</h2>
                        <div className="space-y-4 text-slate-300">
                            <p><strong>Premium Model:</strong> Some premium features (such as Deep Insights, Custom Themes, and Unlimited History) require a paid upgrade managed through RevenueCat and processed securely via the Google Play Store. Premium billing terms include a Monthly Subscription ($0.99/month), an Annual Subscription ($9.99/year), and a Lifetime Access Plan ($29.99 one-time payment).</p>
                            <p><strong>No Direct Refunds:</strong> Atomic Clock does not process or store card information, nor handle refunds directly. All active subscriptions, renewals, cancellations, and refund requests must be managed through your personal Google Play Store account.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">4. Disclaimer: Not Medical Advice</h2>
                        <div className="bg-amber-500/[0.03] p-6 rounded-2xl border border-amber-500/20">
                            <p className="text-amber-400 font-bold mb-2">IMPORTANT:</p>
                            <p className="text-slate-300 text-sm">
                                Atomic Clock is a productivity and habit-tracking tool. We are <strong>not</strong> a medical, health, or mental health provider. The app and its content are for informational purposes only and should not be considered professional medical advice, diagnosis, or treatment.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">5. Data Responsibility</h2>
                        <p className="text-slate-300">
                            Since Atomic Clock stores data locally on your device (SQLite), you are solely responsible for the security and backup of your data. We are not responsible for data loss if you lose your device or delete the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">6. Limitation of Liability</h2>
                        <p className="text-slate-300">
                            Atomic Clock is provided "as is" without any warranties. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">7. Contact</h2>
                        <p className="text-slate-300">
                            For any legal inquiries, please reach out via: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline">qamrosh.dev@gmail.com</a>
                        </p>
                    </section>
                </div>

                {/* The Alchemist's Circle Plan Matrix */}
                <div className="pt-20 border-t border-white/10 space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-widest">
                            Official Plan Matrix
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black font-space-grotesk text-white">Plan Comparison Matrix</h2>
                        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light">
                            All upgrades, subscription commitments, and lifetime purchases are legally bound under Section 3 of these Terms of Service.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                        
                        {/* Free Card */}
                        <div className="relative group rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all hover:border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mb-1">Free Tier</div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Basic Citizen</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $0 <span className="text-[10px] font-normal text-slate-500">Free Forever</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-400 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Unlimited Basic Tracking</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>System Alarm Engines</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                        <span>Offline local SQLite database</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Monthly Card */}
                        <div className="relative group rounded-2xl border border-white/5 bg-white/[0.01] p-6 transition-all hover:border-white/10 flex flex-col justify-between">
                            <div>
                                <div className="text-[#00F3FF] font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Premium Tier
                                </div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Monthly Alchemist</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $0.99 <span className="text-[10px] font-normal text-slate-400">/ month</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-300 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#00F3FF] flex-shrink-0" />
                                        <span><b>Deep Insights</b> trend graphs</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#00F3FF] flex-shrink-0" />
                                        <span><b>Custom Themes</b> & skins</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#00F3FF] flex-shrink-0" />
                                        <span><b>Unlimited History</b> routine logs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Annual Card */}
                        <div className="relative group rounded-2xl border border-[#BC13FE]/30 bg-[#080714] p-6 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(188,19,254,0.03)]">
                            <div className="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black text-[7px] font-black uppercase tracking-wider">
                                Save 15%
                            </div>
                            <div>
                                <div className="text-[#BC13FE] font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Premium Tier
                                </div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Annual Alchemist</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $9.99 <span className="text-[10px] font-normal text-slate-400">/ year</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-300 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#BC13FE] flex-shrink-0" />
                                        <span>All Monthly benefits included</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#BC13FE] flex-shrink-0" />
                                        <span>Bypasses system terminations</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#BC13FE] flex-shrink-0" />
                                        <span>Verified RevenueCat secure billing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Lifetime Card */}
                        <div className="relative group rounded-2xl border border-[#D4AF37]/30 bg-[#0B0A12] p-6 transition-all flex flex-col justify-between shadow-[0_10px_30px_rgba(212,175,55,0.05)]">
                            <div className="absolute top-0 right-6 -translate-y-1/2 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#BC13FE] to-[#D4AF37] text-black text-[7px] font-black uppercase tracking-wider">
                                Ultimate Value
                            </div>
                            <div>
                                <div className="text-[#D4AF37] font-bold text-[10px] uppercase tracking-widest mb-1 flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" /> Premium Tier
                                </div>
                                <h3 className="text-lg font-black font-space-grotesk text-white mb-2">Lifetime Alchemist</h3>
                                <div className="text-2xl font-black font-space-grotesk text-white my-4">
                                    $29.99 <span className="text-[10px] font-normal text-slate-400">One-Time</span>
                                </div>
                                <ul className="space-y-3 pt-4 border-t border-white/5 text-xs text-slate-300 font-light">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span>Infinite access with zero renewals</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span><b>"Founding Alchemist"</b> Badge</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                                        <span>Gold & Obsidian custom App Icon</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="pt-12 mt-8 border-t border-white/10 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Atomic Clock. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}

