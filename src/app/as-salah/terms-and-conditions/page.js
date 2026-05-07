
import React from 'react';

export const metadata = {
    title: 'Terms & Conditions - As-Salah',
    description: 'Terms and conditions for As-Salah Islamic lifestyle app.',
};

export default function AsSalahTermsAndConditions() {
    return (
        <main className="min-h-screen bg-[#050B08] text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#C6A266] to-[#1B4332]">
                        Terms & Conditions
                    </h1>
                    <p className="text-lg text-slate-400">
                        For <strong>As-Salah</strong>
                    </p>
                    <p className="text-sm text-slate-500">
                        Last Updated: May 7, 2026
                    </p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">1. Acceptance of Terms</h2>
                        <p className="text-slate-400">
                            By downloading, installing, or using the As-Salah mobile application, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the app.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">2. Description of Service</h2>
                        <p className="text-slate-400">
                            As-Salah is a utility and lifestyle application designed to provide Islamic prayer times, Qibla direction, Tasbeeh counter, and related features. These features are provided for informational and personal worship purposes.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">3. Subscriptions (As-Salah Pro)</h2>
                        <div className="space-y-4 text-slate-400">
                            <p><strong>Premium Access:</strong> As-Salah offers a 'Pro' version which includes additional features such as vocal Adhans, premium fonts, and advanced themes.</p>
                            <p><strong>Payments:</strong> All payments are processed through RevenueCat via the Apple App Store or Google Play Store. Subscription terms, including pricing and renewal, are governed by the respective store's policies.</p>
                            <p><strong>Refunds:</strong> Refunds are handled exclusively by the Apple App Store or Google Play Store according to their standard terms.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">4. Intellectual Property</h2>
                        <p className="text-slate-400">
                            All content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the developer and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">5. User Responsibility</h2>
                        <p className="text-slate-400">
                            You are responsible for ensuring your device settings (such as location and notifications) are correctly configured for the app to function as intended. We are not responsible for missed prayers due to incorrect device settings or technical failures.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">6. Limitation of Liability</h2>
                        <p className="text-slate-400">
                            In no event shall the developer be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the application.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">7. Changes to Terms</h2>
                        <p className="text-slate-400">
                            We reserve the right to modify or replace these terms at any time. We will provide notice of any significant changes by updating the "Last Updated" date at the top of this page.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-[#C6A266]/20 pb-2 text-[#C6A266]">8. Contact</h2>
                        <p className="text-slate-400">
                            If you have any questions about these Terms, please contact: <a href="mailto:qamrosh.dev@gmail.com" className="text-[#C6A266] hover:underline">qamrosh.dev@gmail.com</a>
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
