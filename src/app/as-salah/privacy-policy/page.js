
import React from 'react';

export const metadata = {
    title: 'Privacy Policy - As-Salah',
    description: 'Privacy policy for As-Salah Islamic lifestyle app. We value your privacy and spiritual data.',
};

export default function AsSalahPrivacyPolicy() {
    return (
        <main className="min-h-screen bg-[#050B08] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] to-[#1B4332]">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-400">
                        For <strong>As-Salah</strong>
                    </p>
                    <p className="text-sm text-slate-500">
                        Last Updated: May 7, 2026
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none space-y-8">
                    <p className="text-slate-400">
                        At As-Salah, we respect your spiritual journey and your personal data. This Privacy Policy outlines how we handle information within the As-Salah mobile application.
                    </p>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">1. Data Collection and Usage</h2>
                        <div className="space-y-4 text-slate-400">
                            <p><strong>Location Data:</strong> To provide accurate prayer times and Qibla direction, the app requires access to your location. This data is processed <strong>locally on your device</strong> to calculate astronomical positions. We do not store your location history on our servers.</p>
                            <p><strong>Local Database:</strong> Your Tasbeeh counts, routine settings, and theme preferences are stored locally on your device's secure storage. We do not have access to your personal dhikr logs or prayer habits.</p>
                            <p><strong>No Personal Religious Data Sale:</strong> We firmly believe that your worship is private. We <strong>never sell, rent, or trade</strong> your religious data or personal information to third parties.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">2. Third-Party Services</h2>
                        <div className="space-y-4 text-slate-400">
                            <p>We use a limited number of trusted third-party services to ensure the app functions correctly:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>RevenueCat:</strong> Used to manage and process premium subscriptions (As-Salah Pro). RevenueCat helps us verify your purchase status without us seeing your sensitive payment information.</li>
                                <li><strong>App Stores (Apple/Google):</strong> All financial transactions are handled by the respective app stores.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">3. Permissions</h2>
                        <div className="space-y-4 text-slate-400">
                            <p><strong>Notifications:</strong> Required to send you Adhan alerts and prayer reminders at the correct times.</p>
                            <p><strong>Haptics/Vibration:</strong> Used to provide physical feedback during Tasbeeh routines.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">4. Security</h2>
                        <p className="text-slate-400">
                            We implement industry-standard security measures to protect your data stored locally. However, please be aware that no method of electronic storage is 100% secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">5. Contact Us</h2>
                        <p className="text-slate-400">
                            If you have any questions regarding your privacy while using As-Salah, please reach out to us at: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#C6A266] hover:underline">qamrosh.dev@gmail.com</a>
                        </p>
                    </section>
                </div>

                <div className="pt-12 mt-8 border-t border-white/10 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} As-Salah. All rights reserved.</p>
                </div>
            </div>
        </main>
    );
}
