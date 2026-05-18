import React from 'react';

export const metadata = {
    title: 'Privacy Policy - Atomic Clock',
    description: 'Modern, privacy-first policy for Atomic Clock habit tracker.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#03050B] text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FCEB92] to-[#BC13FE] pb-2">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-400">
                        For <strong>Atomic Clock</strong>
                    </p>
                    <p className="text-sm text-slate-500">
                        Last Updated: April 25, 2026
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none space-y-8">
                    <p className="text-slate-300">
                        At Atomic Clock, we believe that your habits are your own business. Our philosophy is built on "Atomic Habits" and "Identity-Based Tracking," and privacy is a fundamental part of who you are becoming.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">1. Privacy First: On-Device Storage</h2>
                        <div className="space-y-4 text-slate-300">
                            <p><strong>Your Data stays with You:</strong> All habit logs, identity progress, and personal schedules are stored locally on your device using an encrypted SQLite database.</p>
                            <p><strong>No Accounts:</strong> We do not require you to create an account on our servers. We don't know your name, your habits, or your progress.</p>
                            <p><strong>No Tracking:</strong> We do not track your behavior within the app for marketing or profiling purposes.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">2. Data Backups</h2>
                        <p className="text-slate-300">
                            Since we don't store your data on our servers, we cannot recover it if you lose your device or delete the app. You are responsible for managing your own data backups via the app's native database export features or your Android cloud backup (Google Drive).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">3. Third-Party Service Providers</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>We use trusted third-party services to manage premium features:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>RevenueCat:</strong> Manages in-app subscriptions and verifies premium status.</li>
                                <li><strong>Google Play Store:</strong> All financial transactions are handled securely by the Google Play Store. We never see or store your payment details.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">4. Comprehensive System Permissions & API Usage</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>To provide robust offline habit-stacking triggers and alarms, Atomic Clock requests the following precise system permissions on your Android device:</p>
                            <ul className="list-disc pl-5 space-y-3">
                                <li><strong>SCHEDULE_EXACT_ALARM & USE_EXACT_ALARM:</strong> Used to schedule high-fidelity triggers for habit stacking and routines. This ensures reminders fire exactly when scheduled, bypassing low-power system standby terminations.</li>
                                <li><strong>RECEIVE_BOOT_COMPLETED:</strong> Required to re-register and restore your local habit alarms automatically when your device reboots. This is handled entirely locally without any network connections.</li>
                                <li><strong>POST_NOTIFICATIONS (Android 13+ / API 33):</strong> Allows the app to display habit notifications in your device's system tray. Reminders will not be shown if this permission is refused.</li>
                                <li><strong>VIBRATE / HAPTICS:</strong> Powers tactile physical vibration pulses to reward habit completions and simulate haptic alarm responses.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">5. On-Device SQLite Security & Storage Directory</h2>
                        <div className="space-y-4 text-slate-300">
                            <p>All database transactions are structured offline. The app stores entries in a local, sandboxed relational SQLite database housed strictly in your device's private directory:</p>
                            <code className="block bg-white/[0.03] p-4.5 rounded-2xl border border-white/5 text-xs text-slate-400 font-mono overflow-x-auto">
                                /data/data/online.qamrosh.atomicclock/databases/atomic_clock.db
                            </code>
                            <p>This path is highly secure and sandboxed by the Android Operating System, preventing other apps from accessing or modifying your routine telemetry. There are zero background network synchronization hooks to remote servers.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">6. International Compliance (GDPR, CCPA & COPPA)</h2>
                        <div className="space-y-4 text-slate-300">
                            <p><strong>GDPR (General Data Protection Regulation):</strong> Because we store 100% of your data locally, you have absolute ownership. You hold the ultimate rights of Access, Portability, and Erasure (Right to be Forgotten). You can instantly delete all database records by choosing "Clear Data" in your Android Settings or by uninstalling the application.</p>
                            <p><strong>CCPA (California Consumer Privacy Act):</strong> We do not collect any personal identifiable information (PII). Consequently, we never sell, lease, or distribute consumer data because no data collection occurs.</p>
                            <p><strong>COPPA Compliance (Children's Privacy):</strong> Atomic Clock is fully compliant with the Children's Online Privacy Protection Act. The app does not target, collect, or process any personal data from individuals under the age of 13. If you are a parent or guardian and believe your child has generated local records, please note that clearing the app storage removes all local entries instantly.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">7. Changes to this Policy</h2>
                        <p className="text-slate-300 leading-relaxed">
                            We may update our Privacy Policy periodically to reflect new offline application features or operational Android permissions. Any updates will be posted directly to this URL, and the "Last Updated" timestamp at the top will be updated accordingly.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#D4AF37]/20 pb-2 text-[#D4AF37]">8. Contact & Data Controller</h2>
                        <p className="text-slate-300">
                            If you have technical questions, concerns about offline storage mechanisms, or require clarification regarding permission structures, please reach out to our principal developer at: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#BC13FE] hover:underline font-bold">qamrosh.dev@gmail.com</a>
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

