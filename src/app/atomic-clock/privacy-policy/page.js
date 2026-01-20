import React from 'react';

export const metadata = {
    title: 'Privacy Policy - Atomic Clock',
    description: 'Privacy Policy for the Atomic Clock offline habit tracker application.',
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8 font-inter">
            <div className="max-w-3xl mx-auto space-y-10">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold font-space-grotesk sm:text-5xl">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        For <strong>Atomic Clock</strong>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Effective Date: January 20, 2026
                    </p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">1. App Overview</h2>
                        <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Name:</strong> Atomic Clock</li>
                            <li><strong>Type:</strong> Offline Habit Tracker and Time Management Tool.</li>
                            <li><strong>Platforms:</strong> iOS and Android.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">2. Data Handling (Crucial)</h2>
                        <div className="space-y-4 text-base text-gray-700 dark:text-gray-300">
                            <p><strong>Offline-First:</strong> The app operates 100% offline. No internet connection is required for core features.</p>
                            <p><strong>Data Storage:</strong> All user data (habits, logs, journal entries) is stored locally on the user's device using SQLite/Drift.</p>
                            <p><strong>No Data Collection:</strong> The developer (Qamrosh Nazar) does not collect, transmit, store, or share any user data. We have zero access to user information.</p>
                            <p><strong>Third-Parties:</strong> There are NO third-party tracking tools, analytics SDKs, or advertising networks integrated.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">3. Specific Features & Permissions</h2>
                        <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <li><strong>Notifications:</strong> Requested solely to schedule local reminders for habits.</li>
                            <li><strong>Storage Access:</strong> Requested only when the user chooses to "Export" or "Import" a local backup file.</li>
                            <li><strong>Backups:</strong> Are handled manually by the user as JSON files on their own device. We do not host these backups.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">4. User Rights</h2>
                        <div className="space-y-2 text-base text-gray-700 dark:text-gray-300">
                            <p>Users have full ownership of their data.</p>
                            <p>Users can permanently delete all data using the in-app "Clear All Data" button.</p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold font-space-grotesk border-b border-gray-200 dark:border-gray-800 pb-2">5. Contact</h2>
                        <p className="text-base text-gray-700 dark:text-gray-300">
                            For privacy concerns, users can contact: <a href="mailto:qamrosh.dev@gmail.com" className="text-blue-600 hover:text-blue-500 underline decoration-2 underline-offset-2">qamrosh.dev@gmail.com</a>
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
