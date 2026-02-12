import React from 'react';

export const metadata = {
    title: 'Terms and Conditions - Atomic Clock',
    description: 'Terms and Conditions for the Atomic Clock offline habit tracker application.',
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        For <strong>Atomic Clock</strong>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Last Updated: January 20, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">1. Acceptance of Terms</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            By downloading, installing, or using "Atomic Clock" (the "App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">2. Intellectual Property</h2>
                        <div className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                            <p>The App, including its name, logo, design, and original content, is the exclusive intellectual property of the Developer (Qamrosh Nazar).</p>
                            <p>Specifically, the <strong>"Lifeline"</strong> concept and the <strong>"Atomic Identity"</strong> methodology implementation are unique features of this software and are protected by applicable intellectual property laws.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">3. Liability & Disclaimers</h2>
                        <div className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                            <p><strong>"As-Is" Basis:</strong> The App is provided on an "AS IS" and "AS AVAILABLE" basis, without warranties of any kind, express or implied.</p>
                            <p><strong>Data Loss:</strong> The App operates offline and relies entirely on local device storage. The Developer is <strong>NOT</strong> responsible for any data loss resulting from device failure, factory resets, uninstallation of the App, or lost backup files. You are solely responsible for managing your own data backups.</p>
                            <p><strong>Not Medical Advice:</strong> The "Lifeline" feature and habit tracking tools are intended for productivity and self-improvement purposes only. They do <strong>not</strong> constitute medical, psychological, or professional advice. Consult a professional for any health-related concerns.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">4. Usage Restrictions</h2>
                        <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li>You may not reverse engineer, decompile, disassemble, copy, or distribute the App's source code or resources.</li>
                            <li>The App is intended for personal, non-commercial use only.</li>
                            <li>You may not use the App for any illegal or unauthorized purpose.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">5. Modifications</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            We reserve the right to modify or update the App and these Terms and Conditions at any time. Continued use of the App following any changes signifies your acceptance of the new terms.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">6. Governing Law</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            These Terms are governed by the applicable policies of the Apple App Store and Google Play Store, and the laws of Saudi Arabia, without regard to its conflict of law provisions.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">7. Contact</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            If you have any questions about these Terms, please contact us at: <a href="mailto:qamrosh.dev@gmail.com" className="text-blue-600 hover:text-blue-500 underline decoration-2 underline-offset-2">qamrosh.dev@gmail.com</a>
                        </p>
                    </section>
                </div>

                <div className="pt-12 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Atomic Clock. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
