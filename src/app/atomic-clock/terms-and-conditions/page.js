import React from 'react';

export const metadata = {
    title: 'Terms of Service - AtomiClock',
    description: 'Professional terms of service for AtomiClock habit tracker.',
};

export default function TermsAndConditions() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0B0D17] text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#BC13FE]">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        For <strong>AtomiClock</strong>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Last Updated: April 25, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">1. Acceptance of Terms</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            By downloading or using AtomiClock, you agree to be bound by these Terms of Service. If you do not agree, please do not use the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">2. Description of Service</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            AtomiClock is a productivity tool designed for habit tracking based on identity-based progress. It includes features like Identity Progress Heatmaps, habit-stacking logic, and local notification scheduling.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">3. Subscriptions and Payments</h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400">
                            <p><strong>Premium Model:</strong> Some features require a paid subscription managed through RevenueCat and processed via the Apple App Store or Google Play Store.</p>
                            <p><strong>No Direct Refunds:</strong> AtomiClock does not handle refunds directly. All billing, cancellations, and refund requests must be managed through your respective App Store account.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">4. Disclaimer: Not Medical Advice</h2>
                        <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/50">
                            <p className="text-amber-800 dark:text-amber-200 font-medium mb-2">IMPORTANT:</p>
                            <p className="text-amber-700 dark:text-amber-300 text-sm">
                                AtomiClock is a productivity and habit-tracking tool. We are <strong>not</strong> a medical, health, or mental health provider. The app and its content are for informational purposes only and should not be considered professional medical advice, diagnosis, or treatment.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">5. Data Responsibility</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Since AtomiClock stores data locally on your device (SQLite), you are solely responsible for the security and backup of your data. We are not responsible for data loss if you lose your device or delete the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">6. Limitation of Liability</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            AtomiClock is provided "as is" without any warranties. To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">7. Contact</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            For any legal inquiries, please reach out via: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline">qamrosh.dev@gmail.com</a>
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

