import React from 'react';

export const metadata = {
    title: 'Pre-Registration Offer Terms - Atomic Clock',
    description: 'Exclusive Rewards for Atomic Clock Early Adopters.',
};

export default function PreRegisterTerms() {
    return (
        <main className="min-h-screen bg-[#03050B] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE] pb-2">
                        Pre-Registration Offer
                    </h1>
                    <p className="text-lg text-slate-400">
                        Exclusive Rewards for <strong>Atomic Clock</strong> Early Adopters
                    </p>
                    <p className="text-sm text-slate-500">
                        Effective Date: April 25, 2026
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">1. The Offer</h2>
                        <p className="text-slate-300">
                            Users who successfully "Pre-Register" for Atomic Clock on the Google Play Store prior to the official launch are eligible for the Early Adopters rewards.
                        </p>
                        <div className="bg-[#D4AF37]/5 rounded-2xl p-8 border border-[#D4AF37]/20 backdrop-blur-xl">
                            <h3 className="text-xl font-bold font-space-grotesk flex items-center gap-3 mb-6 text-[#D4AF37]">
                                <span className="text-2xl">✨</span> Early Adopters Rewards
                            </h3>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                    <span>Unlock the exclusive <b>"Founding Member"</b> Badge</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                    <span>Get the limited-edition <b>Gold & Obsidian</b> App Icon</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                    <span>Permanent access to <b>"Event Horizon"</b> Premium Theme</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">2. Eligibility</h2>
                        <p className="text-slate-300">
                            To claim your rewards, you must:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-300">
                            <li>Click "Pre-Register" on the Google Play Store before launch.</li>
                            <li>Download and open the app within 14 days of official release.</li>
                            <li>The rewards are automatically linked to your Store Account.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">3. General Terms</h2>
                        <p className="text-slate-300">
                            This offer is subject to the standard <a href="/atomic-clock/terms-and-conditions" className="text-[#BC13FE] hover:underline">Terms of Service</a> and <a href="/atomic-clock/privacy-policy" className="text-[#BC13FE] hover:underline">Privacy Policy</a>. We reserve the right to modify these rewards based on technical feasibility.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">4. Contact</h2>
                        <p className="text-slate-300">
                            Issues claiming rewards? Contact our concierge at: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline">qamrosh.dev@gmail.com</a>
                        </p>
                    </section>
                </div>

                <div className="pt-12 mt-8 border-t border-white/10 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Atomic Clock. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}

