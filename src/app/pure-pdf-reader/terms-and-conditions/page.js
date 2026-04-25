
import React from 'react';

export const metadata = {
    title: 'Terms and Conditions - Pure PDF Reader',
    description: 'Terms and Conditions for the Pure PDF Reader application.',
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        For <strong>Pure PDF Reader</strong>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Last Updated: March 27, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">1. Acceptance of Terms</h2>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                            By downloading, installing, or using "Pure PDF Reader" (the "App"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the App.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">2. License & Intellectual Property</h2>
                        <div className="space-y-4 text-base text-slate-700 dark:text-slate-300">
                            <p>You are granted a personal, non-exclusive, non-transferable, and limited license to use the application on your personal Android devices.</p>
                            <p>The App, its design, logos, and original code are the exclusive intellectual property of the Developer (Qamrosh Nazar).</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">3. Prohibited Use</h2>
                        <ul className="list-disc pl-5 space-y-2 text-base text-slate-700 dark:text-slate-300">
                            <li>You may not reverse engineer, decompile, or disassemble the App's source code.</li>
                            <li>You may not use the app for any illegal distribution of copyrighted documents.</li>
                            <li>You may not attempt to bypass any security features or restrictions within the App.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">4. Disclaimers & Liability</h2>
                        <div className="space-y-4 text-base text-slate-700 dark:text-slate-300">
                            <p><strong>"As-Is" Basis:</strong> The software is provided on an "AS IS" and "AS AVAILABLE" basis, without warranty of any kind, express or implied.</p>
                            <p><strong>Liability:</strong> The developer is not liable for any data loss, performance issues, or any indirect, incidental, or consequential damages arising from the use or inability to use the App.</p>
                            <p><strong>Data Management:</strong> Since the app operates 100% offline, you are solely responsible for managing and backing up your PDF documents.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">5. App Features & Permissions</h2>
                        <div className="space-y-4 text-base text-slate-700 dark:text-slate-300">
                            <p><strong>Reminders:</strong> The App includes a reminder feature to help you schedule and manage your reading sessions. To provide precise and timely notifications, the App utilizes the <code>USE_EXACT_ALARM</code> permission.</p>
                            <p><strong>Storage:</strong> The App requires storage access to function as a PDF reader. You are responsible for ensuring you have the legal right to view and store any documents you open with the App.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">6. Monetization & Updates</h2>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                            The App is currently provided ad-free. If there are future premium features or subscription models introduced, they will be clearly disclosed to you within the App.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">7. Contact</h2>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                            If you have any questions about these Terms, please contact us at: <a href="mailto:qamrosh.dev@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-2">qamrosh.dev@gmail.com</a>
                        </p>
                    </section>
                </div>

                <div className="pt-12 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Pure PDF Reader. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
