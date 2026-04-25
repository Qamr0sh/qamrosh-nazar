
import React from 'react';

export const metadata = {
    title: 'Privacy Policy - Pure PDF Reader',
    description: 'Privacy Policy for the Pure PDF Reader application.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400">
                        For <strong>Pure PDF Reader</strong>
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                        Effective Date: March 27, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">1. App Overview</h2>
                        <ul className="list-disc pl-5 space-y-2 text-base text-slate-700 dark:text-slate-300">
                            <li><strong>Name:</strong> Pure PDF Reader</li>
                            <li><strong>Type:</strong> Offline PDF Reading Application.</li>
                            <li><strong>Platform:</strong> Android (Min SDK 21 / Android 5.0+).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">2. Data Collection (Pure & Simple)</h2>
                        <div className="space-y-4 text-base text-slate-700 dark:text-slate-300">
                            <p><strong>No Personal Data:</strong> Pure PDF Reader does not collect, store, or transmit any personal information, usage data, or document content.</p>
                            <p><strong>Offline Operation:</strong> The app does not request or use Internet permission. It cannot send your data anywhere. Your documents never leave your device.</p>
                            <p><strong>No Tracking:</strong> There are no third-party tracking tools, analytics SDKs (like Firebase), or advertising networks included in the app.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">3. Permissions Explained</h2>
                        <ul className="list-disc pl-5 space-y-2 text-base text-slate-700 dark:text-slate-300">
                            <li><strong>Storage Access (MANAGE_EXTERNAL_STORAGE):</strong> Required solely to scan your device for PDF files and display them in the app library.</li>
                            <li><strong>Exact Alarm (USE_EXACT_ALARM):</strong> Used specifically to provide precise, timely reminders for your scheduled reading sessions. This ensures you never miss a document you intended to read.</li>
                            <li><strong>File Handling:</strong> The app reads files locally to render them on your screen. No data is cached on external servers.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">4. Document Security</h2>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                            PDFs are rendered locally on your device using a high-performance rendering engine. We do not have access to your files, and they are not uploaded or processed on any remote infrastructure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">5. Contact</h2>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                            For privacy concerns or questions regarding the app, you can contact: <a href="mailto:qamrosh.dev@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline decoration-2 underline-offset-2">qamrosh.dev@gmail.com</a>
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
