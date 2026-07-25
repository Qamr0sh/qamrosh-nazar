'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Reveal, GlowCard, Magnetic } from '@/lib/animatorlib';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [displayCount, setDisplayCount] = useState(6);

  const designShowcase = {
    7: {
      title: 'Green Metro Coaches UK',
      description: 'Professional logo design for UK transportation company',
      image: '/images/green_metro_coaches_logo.jpg',
      website: 'https://greenmetrocoaches.co.uk',
      details: 'Modern, eco-friendly design reflecting sustainable transportation values with clean typography and green color palette.'
    },
    8: {
      title: 'Spectrave Solar Inspection',
      description: 'Logo for AI-powered solar inspection company',
      image: '/images/spectrave_logo.jpg',
      website: 'https://spectrave.com',
      details: 'Futuristic design combining solar energy symbolism with drone and AI elements, using modern gradients and geometric shapes.'
    }
  };

  const openDesignModal = (projectId) => {
    setSelectedDesign(designShowcase[projectId]);
  };

  const closeDesignModal = () => {
    setSelectedDesign(null);
  };

  const projects = [
    {
      id: 13,
      title: 'As-Salah',
      category: 'mobile',
      type: 'Personal Project',
      description: 'Elevate Your Daily Worship. A premium Islamic lifestyle app with high-precision prayer times and spiritual tools.',
      longDescription: 'As-Salah is a state-of-the-art Islamic lifestyle app. Features include highly accurate prayer times with vocal Adhan, a precision Qibla compass, an automated Tasbeeh routine builder with haptic feedback, and a beautiful, customizable UI with dynamic themes.',
      tech: ['Flutter', 'RevenueCat', 'Geolocator', 'Haptics', 'Custom UI'],
      features: ['Precision Prayer Times', 'Smart Tasbeeh Builder', 'High-Accuracy Qibla Compass', 'Premium Personalization'],
      status: 'Live',
      year: '2026',
      link: '/as-salah'
    },
    {
      id: 1,
      title: 'Atomic Clock',
      category: 'mobile',
      type: 'Personal Project',
      description: 'Transform Your Life, One Atomic Habit at a Time. A privacy-first offline habit tracker.',
      longDescription: 'Atomic Clock is your personal habit companion designed around the proven principles of atomic habits. Build better routines, track meaningful progress, and become the person you want to be—all while keeping your data completely private and offline.',
      tech: ['Flutter', 'Offline First', 'Local Storage', 'Analytics', 'Dark Mode'],
      features: ['Smart Habit Organization', 'Powerful Streak Tracking', 'Deep Insights & Analytics', 'Privacy-First Architecture'],
      status: 'Live',
      year: '2026',
      link: '/atomic-clock'
    },
    {
      id: 3,
      title: 'MZ Food Complete Solution',
      category: 'mobile',
      type: 'Client Project',
      description: 'Comprehensive food delivery solution for Afghanistan with separate apps for customers and vendors, featuring real-time tracking and local payment integration.',
      longDescription: 'Developed a complete food delivery ecosystem for the Afghan market with dual applications - a customer app for ordering and a vendor app for restaurant management.',
      tech: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Payment Integration', 'Real-time Tracking'],
      features: ['Dual App Architecture (Customer & Vendor)', 'Real-time GPS Order Tracking', 'Local Afghan Payment Methods Integration', 'Multi-Vendor Management Dashboard'],
      status: 'Live',
      year: '2025',
      link: 'https://mzfoodonline.com/'
    },
    {
      id: 4,
      title: 'Sunnis4Marriage',
      category: 'mobile',
      type: 'Client Project',
      description: 'Modern matchmaking application connecting Sunni Muslim singles worldwide with advanced filtering and privacy features.',
      longDescription: 'Built a comprehensive matchmaking platform with user verification, advanced search filters, privacy controls, and real-time messaging.',
      tech: ['Flutter', 'Firebase', 'Dart', 'REST APIs', 'Push Notifications', 'Payment Integration'],
      features: ['Secure User Verification System', 'Advanced Multi-Criteria Search Filters', 'Real-time Encrypted Messaging', 'Granular Privacy & Profile Controls'],
      status: 'Live',
      year: '2024',
      link: 'https://sunnis4marriage.com/'
    },
    {
      id: 5,
      title: 'Document Organizer',
      category: 'mobile',
      type: 'Company Project',
      description: 'Corporate document management system with cloud synchronization, encryption, and collaborative features.',
      longDescription: 'Developed a secure document management solution for enterprises with end-to-end encryption, cloud synchronization, version control, and collaborative editing capabilities.',
      tech: ['Flutter', 'Encryption', 'Cloud Sync', 'SQLite', 'File Management'],
      features: ['End-to-End Encrypted Storage', 'Automated Cloud Sync', 'Offline Access & SQLite Caching', 'Document Version Control'],
      status: 'Live',
      year: '2025',
      link: 'https://play.google.com/store/apps/details?id=com.wondelo.document_organizer&hl=en'
    },
    {
      id: 6,
      title: 'Password Manager',
      category: 'mobile',
      type: 'Company Project',
      description: 'Secure password management solution with multi-device sync, biometric authentication, and enterprise-grade security.',
      longDescription: 'Built a comprehensive password management system for enterprises with military-grade encryption, biometric authentication, cross-device synchronization, and secure sharing capabilities.',
      tech: ['Flutter', 'Biometric Auth', 'Encryption', 'Secure Storage', 'Cross-platform Sync'],
      features: ['Military-Grade AES Encryption', 'Biometric Face & Touch Authentication', 'Cross-Device Synchronization', 'Secure Encrypted Vault Sharing'],
      status: 'Live',
      year: '2025',
      link: 'https://play.google.com/store/apps/details?id=com.wondelo.passwordmanager&hl=en'
    },
    {
      id: 10,
      title: 'Water Level Monitoring System',
      category: 'iot',
      type: 'Hardware Project',
      description: 'Automated water level monitoring and control system with web dashboard and mobile notifications.',
      longDescription: 'Built a complete water level monitoring solution using NodeMCU microcontroller with ultrasonic sensors, automatic pump control, and web-based dashboard.',
      tech: ['NodeMCU', 'C++', 'Flutter', 'HTML', 'CSS', 'JavaScript', 'IoT Sensors'],
      features: ['Real-Time Ultrasonic Water Level Monitoring', 'Automated Relay Pump Control', 'Web & Mobile Dashboard Integration', 'Instant High/Low Threshold Alerts'],
      status: 'Deployed',
      year: '2024'
    },
    {
      id: 7,
      title: 'Green Metro Coaches UK',
      category: 'design',
      type: 'Brand Identity',
      description: 'Professional logo design for UK-based transportation company specializing in eco-friendly coach services.',
      longDescription: 'Created a modern, professional logo that reflects the company\'s commitment to sustainable transportation.',
      tech: ['Adobe Illustrator', 'Brand Strategy', 'Typography', 'Color Theory'],
      features: ['Vector Scalable Brand Identity', 'Eco-Friendly Visual Concept', 'Full Print & Digital Assets'],
      status: 'Delivered',
      year: '2023'
    },
    {
      id: 8,
      title: 'Spectrave Solar Inspection',
      category: 'design',
      type: 'Brand Identity',
      description: 'Modern logo design for AI-powered solar inspection company using drone technology and machine learning.',
      longDescription: 'Designed a futuristic logo that represents advanced technology and solar energy.',
      tech: ['Adobe Illustrator', 'AI Concepts', 'Solar Energy Theme'],
      features: ['Futuristic Tech & Drone Symbolism', 'Vector Asset Suite', 'Clean Modern Typography'],
      status: 'Delivered',
      year: '2025'
    },
    {
      id: 9,
      title: 'WS8108 Matrix Controller',
      category: 'iot',
      type: 'Hardware Project',
      description: 'WiFi-enabled LED matrix controller with Android app for remote control and pattern programming.',
      longDescription: 'Developed a comprehensive LED matrix control system using ESP32 microcontroller with WiFi connectivity.',
      tech: ['Flutter', 'C++', 'ESP32', 'WiFi Networks', 'Bluetooth'],
      features: ['ESP32 WiFi & Bluetooth Control', 'Custom Pattern Sequence Builder', 'Multi-Unit Sync Protocol'],
      status: 'Completed',
      year: '2024'
    },
    {
      id: 11,
      title: 'Contextual Lighting System',
      category: 'iot',
      type: 'Hardware Project',
      description: 'Windows screen color capture system that analyzes display content and syncs ambient lighting to ESP32 LED matrix.',
      longDescription: 'Developed an intelligent lighting system that captures colors from Windows screen content using computer vision techniques.',
      tech: ['Python', 'Computer Vision', 'C++', 'ESP32', 'OpenCV'],
      features: ['Real-Time Windows Screen Capture', 'OpenCV Color Extraction Algorithm', 'Zero-Latency ESP32 LED Sync'],
      status: 'Completed',
      year: '2024'
    },
    {
      id: 2,
      title: 'Smart Parking Management System',
      category: 'iot',
      type: 'Academic Project',
      description: 'Computer Vision and IoT-based solution for automated parking management with real-time monitoring and mobile app control.',
      longDescription: 'Developed a comprehensive smart parking system using computer vision for vehicle detection, OCR for license plate recognition, and IoT sensors.',
      tech: ['Python', 'OpenCV', 'OCR', 'C++', 'Kotlin', 'IoT'],
      features: ['Automatic License Plate Recognition (OCR)', 'Real-Time Parking Space Allocation', 'Mobile App Booking Interface'],
      status: 'Completed',
      year: '2023'
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'iot', name: 'IoT & Hardware' },
    { id: 'design', name: 'Design & Branding' },
    { id: 'enterprise', name: 'Enterprise Solutions' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
      switch (activeFilter) {
        case 'mobile': return project.category === 'mobile';
        case 'iot': return project.category === 'iot';
        case 'design': return project.category === 'design';
        case 'enterprise': return project.type.includes('Company') || project.type.includes('Client') || project.type.includes('Enterprise');
        default: return true;
      }
    });

  const displayedProjects = filteredProjects.slice(0, displayCount);

  return (
    <section id="projects" className="relative w-full py-24 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Reveal direction="down" delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-white" />
              <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-white">
                Selected Portfolio
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h2 className="text-3xl sm:text-5xl font-space-grotesk font-extrabold text-white leading-tight mb-4">
              Engineering &amp; Hardware Showcase
            </h2>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <p className="text-slate-400 font-inter text-base leading-relaxed">
              Production-ready mobile applications, hardware automation architectures, and enterprise software solutions.
            </p>
          </Reveal>
        </div>

        {/* Filter Bar */}
        <Reveal direction="up" delay={0.35}>
          <div className="flex flex-wrap gap-2.5 mb-12 border-b border-white/10 pb-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveFilter(category.id);
                  setDisplayCount(6);
                }}
                className={`px-5 py-2.5 rounded-xl font-space-grotesk text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activeFilter === category.id
                    ? 'bg-white text-slate-950 shadow-md scale-105'
                    : 'bg-white/[0.04] text-slate-300 border border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, idx) => (
            <Reveal key={project.id} direction="scale" delay={idx * 0.08} duration={0.5}>
              <GlowCard
                glowColor="rgba(255, 255, 255, 0.08)"
                maxTilt={10}
                className="exec-card p-6 flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-slate-900/60"
              >
                <div>
                  {/* Header info */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-space-grotesk font-semibold bg-white/[0.06] border border-white/10 text-slate-300">
                      {project.type}
                    </span>
                    <span className="text-xs font-inter text-slate-500">{project.year}</span>
                  </div>

                  <h3 className="text-xl font-space-grotesk font-bold text-white mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 font-inter text-xs leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mb-5">
                    <p className="text-[10px] font-space-grotesk font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Technologies &amp; Tools
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="exec-pill text-[11px] py-1 px-2.5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="exec-pill text-[11px] py-1 px-2.5 text-slate-400">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List Items */}
                  <div className="mb-6">
                    <p className="text-[10px] font-space-grotesk font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </p>
                    <div className="space-y-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="list-item-pro">
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-inter text-slate-400">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'Live' || project.status === 'Deployed' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-500'}`} />
                    {project.status}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.category === 'design' && (
                      <Magnetic strength={0.2}>
                        <button
                          onClick={() => openDesignModal(project.id)}
                          className="px-3.5 py-1.5 bg-white text-slate-950 text-xs font-space-grotesk font-bold rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                        >
                          View Branding
                        </button>
                      </Magnetic>
                    )}
                    {project.link && (
                      <Magnetic strength={0.2}>
                        <a
                          href={project.link}
                          className="px-3.5 py-1.5 bg-white text-slate-950 text-xs font-space-grotesk font-bold rounded-lg hover:bg-slate-200 transition-colors inline-flex items-center gap-1 cursor-pointer shadow-sm"
                        >
                          View Details
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
                          </svg>
                        </a>
                      </Magnetic>
                    )}
                  </div>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > displayCount && (
          <Reveal direction="up" delay={0.2}>
            <div className="flex justify-center mt-12">
              <Magnetic strength={0.25}>
                <button
                  onClick={() => setDisplayCount(prev => prev + 3)}
                  className="px-7 py-3.5 bg-white text-slate-950 font-space-grotesk font-bold text-sm rounded-xl hover:bg-slate-200 transition-all duration-200 cursor-pointer shadow-lg"
                >
                  Load More Projects ({filteredProjects.length - displayCount} remaining)
                </button>
              </Magnetic>
            </div>
          </Reveal>
        )}

      </div>

      {/* Design Showcase Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="exec-card p-6 max-w-xl w-full space-y-6 shadow-2xl rounded-2xl border border-white/10 animate-scaleIn">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-space-grotesk font-bold text-white">
                {selectedDesign.title}
              </h3>
              <button
                onClick={closeDesignModal}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="aspect-video relative rounded-xl border border-white/10 bg-slate-900 overflow-hidden flex items-center justify-center">
              <Image
                src={selectedDesign.image}
                alt={selectedDesign.title}
                fill
                className="object-contain p-6"
              />
            </div>

            <div>
              <p className="text-sm font-inter text-slate-300 leading-relaxed">
                {selectedDesign.details}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={selectedDesign.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2.5 bg-white text-slate-950 font-space-grotesk font-bold text-xs rounded-lg hover:bg-slate-200 text-center transition-colors shadow-sm"
              >
                Visit Website
              </a>
              <button
                onClick={closeDesignModal}
                className="px-4 py-2.5 bg-white/10 text-white font-space-grotesk font-semibold text-xs rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
