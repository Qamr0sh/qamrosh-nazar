import React from 'react';

export const metadata = {
    title: 'Pre-Registration Offer Terms - AtomiClock',
    description: 'Exclusive Rewards for AtomiClock Early Adopters.',
};

export default function PreRegisterTerms() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0B0D17] text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#BC13FE]">
                        Pre-Registration Offer
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        Exclusive Rewards for <strong>AtomiClock</strong> Early Adopters
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Effective Date: April 25, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">1. The Offer</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Users who successfully "Pre-Register" for AtomiClock on the Google Play Store prior to the official launch are eligible for the Alchemist's Circle rewards.
                        </p>
                        <div className="bg-[#D4AF37]/5 rounded-2xl p-8 border border-[#D4AF37]/20 backdrop-blur-xl">
                            <h3 className="text-xl font-bold font-space-grotesk flex items-center gap-3 mb-6 text-[#D4AF37]">
                                <span className="text-2xl">✨</span> Alchemist's Circle Rewards
                            </h3>
                            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                                    <span>Unlock the exclusive <b>"Founding Alchemist"</b> Badge</span>
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
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">2. Eligibility</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            To claim your rewards, you must:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                            <li>Click "Pre-Register" on the Google Play Store before launch.</li>
                            <li>Download and open the app within 14 days of official release.</li>
                        <li>The rewards are automatically linked to your Store Account.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">3. General Terms</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            This offer is subject to the standard <a href="/atomic-clock/terms-and-conditions" className="text-[#BC13FE] hover:underline">Terms of Service</a> and <a href="/atomic-clock/privacy-policy" className="text-[#BC13FE] hover:underline">Privacy Policy</a>. We reserve the right to modify these rewards based on technical feasibility.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">4. Contact</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Issues claiming rewards? Contact our concierge at: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline">qamrosh.dev@gmail.com</a>
                        </p>
                    </section>
                </div>

                <div className="pt-12 mt-8 border-t border-slate-200 dark:border-white/10 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} AtomiClock. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}

