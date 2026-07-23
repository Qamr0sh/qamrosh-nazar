'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);
    const [displayCount, setDisplayCount] = useState(6);

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
        <section id="certificates" className="relative w-full py-24 bg-[var(--background)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-12">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-8 bg-white" />
                        <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-white">
                            Credentials
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-space-grotesk font-extrabold text-white leading-tight mb-4">
                        Verified Certifications
                    </h2>

                    <p className="text-slate-400 font-inter text-base leading-relaxed">
                        Industry-recognized accreditations in programming, networking, system administration, and computer hardware.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCertificates.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => openCert(cert)}
                            className="exec-card overflow-hidden cursor-pointer flex flex-col group"
                        >
                            {/* Image Preview */}
                            <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden border-b border-white/10">
                                <Image
                                    src={`/certificates/${cert.file}`}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="px-4 py-2 bg-white text-slate-950 rounded-lg font-space-grotesk font-bold text-xs">
                                        Inspect Certificate
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                                <div>
                                    <span className="exec-pill text-[10px] uppercase font-semibold">
                                        {cert.issuer}
                                    </span>
                                    <h3 className="text-base font-space-grotesk font-bold text-white mt-2 line-clamp-2">
                                        {cert.title}
                                    </h3>
                                </div>
                                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                                    <span className="text-[11px] font-inter text-slate-500 uppercase tracking-wider">
                                        Verified Credential
                                    </span>
                                    <span className="text-xs text-slate-400 font-space-grotesk font-semibold group-hover:text-white transition-colors">
                                        View →
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                {certificates.length > displayCount && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setDisplayCount(prev => Math.min(prev + 3, certificates.length))}
                            className="px-7 py-3.5 bg-white text-slate-950 font-space-grotesk font-bold text-sm rounded-xl hover:bg-slate-200 transition-all duration-200 cursor-pointer"
                        >
                            View More Credentials ({certificates.length - displayCount} remaining)
                        </button>
                    </div>
                )}

                {/* Modal Viewer */}
                {selectedCert && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/85 backdrop-blur-md">
                        <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col exec-card p-6 space-y-4 shadow-2xl">
                            
                            {/* Modal Header */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <h3 className="text-xl font-space-grotesk font-bold text-white">
                                        {selectedCert.title}
                                    </h3>
                                    <p className="text-xs text-slate-400 font-inter uppercase tracking-widest mt-0.5">
                                        {selectedCert.issuer}
                                    </p>
                                </div>
                                <button
                                    onClick={closeCert}
                                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Certificate Image */}
                            <div className="relative flex-1 min-h-[350px] bg-slate-900 rounded-xl overflow-hidden border border-white/10">
                                <Image
                                    src={`/certificates/${selectedCert.file}`}
                                    alt={selectedCert.title}
                                    fill
                                    className="object-contain p-4"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
