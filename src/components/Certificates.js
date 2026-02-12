'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [displayCount, setDisplayCount] = useState(3);

    const certificates = [
        {
            title: 'Python Essentials 1',
            issuer: 'Cisco Networking Academy',
            file: 'Python_Essentials_1_Badge20230923-30-koyo4u conv 1.png'
        },
        {
            title: 'Python Essentials 2',
            issuer: 'Cisco Networking Academy',
            file: 'Python_Essentials_2_Badge20230930-28-f6jefj conv 1.png'
        },
        {
            title: 'Networking Basics',
            issuer: 'Cisco Networking Academy',
            file: 'Networking_Basics_Badge20230923-28-v98m5e conv 1.png'
        },
        {
            title: 'Networking Devices and Initial Configuration',
            issuer: 'Cisco Networking Academy',
            file: 'Networking_Devices_and_Initial_Configuration_Badge20240504-8-pa2xrq conv 1.png'
        },
        {
            title: 'Network Addressing and Basic Troubleshooting',
            issuer: 'Cisco Networking Academy',
            file: 'Network_Addressing_and_Basic_Troubleshooting_Badge20240518-8-jf4yqo conv 1.png'
        },
        {
            title: 'Network Technician Career Path',
            issuer: 'Cisco Networking Academy',
            file: 'Network_Technician_Career_Path_Badge20240115-34-kh67t6 conv 1.png'
        },
        {
            title: 'Computer Hardware Basics',
            issuer: 'Cisco Networking Academy',
            file: 'Computer_Hardware_Basics_Badge20230923-28-e9hrtw_page-0001.jpg'
        },
        {
            title: 'NDG Linux Unhatched',
            issuer: 'Cisco Networking Academy',
            file: 'QamroshAli Nazar-NDG Linux Unhatc-certificate conv 1.png'
        },
        {
            title: 'DSTP Certificate (JTURUWNZA)',
            issuer: 'DSTP',
            file: 'DSTP_Certificate_ JTURUWNZA_page-0001.jpg'
        },
        {
            title: 'DSTP Certificate (K78AVAYZA_2)',
            issuer: 'DSTP',
            file: 'DSTP_Certificate_ K78AVAYZA_2 conv 1.png'
        }
    ];

    const openCert = (cert) => {
        setSelectedCert(cert);
        document.body.style.overflow = 'hidden';
    };

    const closeCert = () => {
        setSelectedCert(null);
        document.body.style.overflow = 'unset';
    };

    const displayedCertificates = certificates.slice(0, displayCount);

    return (
        <section id="certificates" className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background/95 to-background">
            <div className="max-w-7xl mx-auto w-full">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-sm sm:text-base font-space-grotesk text-blue-500 font-semibold uppercase tracking-wider mb-4">
                        Achievements
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            Professional Certifications
                        </span>
                    </h2>
                    <p className="text-foreground/60 font-inter text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                        A showcase of my professional growth, technical expertise, and industry-recognized certifications across diverse domains.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedCertificates.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => openCert(cert)}
                            className="group cursor-pointer bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl overflow-hidden hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl flex flex-col"
                        >
                            {/* Image Preview Container */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-foreground/5">
                                <Image
                                    src={`/certificates/${cert.file}`}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <div className="px-6 py-2 bg-blue-500 text-white rounded-full font-space-grotesk font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                                        View Achievement
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center mb-3">
                                    <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded border border-blue-500/20">
                                        {cert.issuer}
                                    </span>
                                </div>
                                <h3 className="text-lg font-space-grotesk font-bold text-foreground group-hover:text-blue-500 transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {certificates.length > displayCount && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setDisplayCount(prev => Math.min(prev + 3, certificates.length))}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-space-grotesk font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            Load More Certificates ({certificates.length - displayCount} remaining)
                        </button>
                    </div>
                )}

                {/* Show Less Button */}
                {displayCount > 3 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setDisplayCount(3)}
                            className="px-8 py-4 bg-foreground/10 text-foreground font-space-grotesk font-semibold rounded-full hover:bg-foreground/20 transition-all duration-300"
                        >
                            Show Less
                        </button>
                    </div>
                )}

                {/* Modal Viewer */}
                {selectedCert && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl transition-all duration-300">
                        <div className="relative w-full max-w-6xl h-full flex flex-col animate-in fade-in zoom-in duration-300">

                            {/* Modal Header */}
                            <div className="flex items-center justify-between mb-4 sm:mb-6">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-white">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-sm text-blue-400 font-inter uppercase tracking-widest mt-1">
                                        {selectedCert.issuer}
                                    </p>
                                </div>
                                <button
                                    onClick={closeCert}
                                    className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all group"
                                >
                                    <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Modal Content - Big Image */}
                            <div className="relative flex-1 bg-white/5 rounded-3xl overflow-hidden border border-white/10">
                                <Image
                                    src={`/certificates/${selectedCert.file}`}
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>

                            {/* Footer text */}
                            <div className="mt-4 text-center">
                                <p className="text-white/40 text-xs font-inter uppercase tracking-tighter">
                                    Verified Professional Certification
                                </p>
                            </div>
                        </div>

                        {/* Backdrop Click */}
                        <div className="absolute inset-0 -z-10" onClick={closeCert}></div>
                    </div>
                )}

                {/* Background Decorative elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>
            </div>
        </section>
    );
}
