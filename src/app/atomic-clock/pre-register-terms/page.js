import React from 'react';

export const metadata = {
    title: 'Pre-Registration Offer Terms - Atomic Clock',
    description: 'Terms and Conditions for the Atomic Clock Pre-Registration Exclusive Offer.',
};

export default function PreRegisterTerms() {
    return (
        <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl">
                        Pre-Registration Offer Terms
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Exclusive Rewards for <strong>Atomic Clock</strong> Early Adopters
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Effective Date: February 16, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">1. The Offer</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            Users who successfully "Pre-Register" for Atomic Clock on the Google Play Store or Apple App Store prior to the official public launch date are eligible to receive the following exclusive benefits ("Founder's Pack"):
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Lifetime Premium Access:</strong> Permanent unlock of all current and future Premium features without any subscription fees.</li>
                            <li><strong>Custom Founder Icon:</strong> An exclusive app icon variant available only to pre-registered users.</li>
                            <li><strong>Custom Theme:</strong> An exclusive "Founder's Edition" color theme for the app interface.</li>
                            <li><strong>Custom Badge:</strong> A special "Founder" profile badge displayed within the app.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">2. Eligibility</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            To be eligible for this offer, you must:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li>Click the "Pre-Register" button on the Atomic Clock store listing page before the app is released.</li>
                            <li>Download and open the app within 30 days of the official launch.</li>
                            <li>Sign in with the same Google or Apple account used for pre-registration to claim your rewards.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">3. Redemption & Limitations</h2>
                        <div className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                            <p><strong>Automatic Activation:</strong> In most cases, the "Founder's Pack" will be automatically applied to your account upon first login. If not, a "Restore Purchases" or "Claim Offer" button will be available in the settings.</p>
                            <p><strong>Non-Transferable:</strong> The offer is linked to your specific app store account and cannot be transferred to another user or exchanged for cash.</p>
                            <p><strong>One Per User:</strong> Limit one redemption per pre-registered account.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">4. General Terms</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            This offer is subject to the standard <a href="/atomic-clock/terms-and-conditions" className="text-blue-600 hover:text-blue-500 underline">Terms and Conditions</a> and <a href="/atomic-clock/privacy-policy" className="text-blue-600 hover:text-blue-500 underline">Privacy Policy</a> of Atomic Clock. We reserve the right to modify or cancel this offer at any time for reasons including but not limited to technical errors or fraud.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">5. Contact</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            If you have issues claiming your pre-registration rewards, please contact us at: <a href="mailto:qamrosh.dev@gmail.com" className="text-blue-600 hover:text-blue-500 underline decoration-2 underline-offset-2">qamrosh.dev@gmail.com</a>
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
