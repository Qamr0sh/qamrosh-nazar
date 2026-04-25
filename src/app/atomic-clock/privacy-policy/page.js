import React from 'react';

export const metadata = {
    title: 'Privacy Policy - AtomiClock',
    description: 'Modern, privacy-first policy for AtomiClock habit tracker.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-50 dark:bg-[#0B0D17] text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#BC13FE]">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        For <strong>AtomiClock</strong>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Last Updated: April 25, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <p className="text-slate-600 dark:text-slate-400">
                        At AtomiClock, we believe that your habits are your own business. Our philosophy is built on "Atomic Habits" and "Identity-Based Tracking," and privacy is a fundamental part of who you are becoming.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">1. Privacy First: On-Device Storage</h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400">
                            <p><strong>Your Data stays with You:</strong> All habit logs, identity progress, and personal schedules are stored locally on your device using an encrypted SQLite database.</p>
                            <p><strong>No Accounts:</strong> We do not require you to create an account on our servers. We don't know your name, your habits, or your progress.</p>
                            <p><strong>No Tracking:</strong> We do not track your behavior within the app for marketing or profiling purposes.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">2. Data Backups</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Since we don't store your data on our servers, we cannot recover it if you lose your device or delete the app. You are responsible for managing your own data backups via the app's export features or your cloud service (iCloud/Google Drive).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">3. Third-Party Service Providers</h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400">
                            <p>We use trusted third-party services to manage premium features:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>RevenueCat:</strong> Manages in-app subscriptions and verifies premium status.</li>
                                <li><strong>App Stores (Apple/Google):</strong> All financial transactions are handled by the Apple App Store or Google Play Store. We never see your payment details.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">4. System Permissions</h2>
                        <div className="space-y-4 text-slate-600 dark:text-slate-400">
                            <p><strong>Notifications:</strong> Used solely to schedule local habit reminders (Android AlarmManager). These are not sent to any external server.</p>
                            <p><strong>Haptics:</strong> Used for tactile rewards during habit completion.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">5. We Do Not Sell Your Data</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            We do not sell, rent, or lease your data to third parties. Period. Since we don't collect your personal data to begin with, there’s nothing for us to sell.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-slate-200 dark:border-white/10 pb-2">6. Contact Us</h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline">qamrosh.dev@gmail.com</a>
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

