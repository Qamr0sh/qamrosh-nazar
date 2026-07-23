'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/qamr0sh/', icon: '/social_media_icon/linkedIn_icon.svg', alt: 'LinkedIn' },
    { href: 'https://www.instagram.com/qamr0sh/', icon: '/social_media_icon/instagram_icon.svg', alt: 'Instagram' },
    { href: 'https://www.facebook.com/profile.php?id=100012883470553', icon: '/social_media_icon/facebook_icon.svg', alt: 'Facebook' },
    { href: 'https://www.pinterest.com/QamroshNazar/', icon: '/social_media_icon/Pinterest_icon.svg', alt: 'Pinterest' },
    { href: 'https://discord.com/users/1098012603005009951', icon: '/social_media_icon/discord_icon.svg', alt: 'Discord' },
    { href: 'http://t.me/qamr0sh', icon: '/social_media_icon/telegram_icon.svg', alt: 'Telegram' },
    { href: 'https://wa.me/923168661932?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!', icon: '/social_media_icon/whatsapp_icon.svg', alt: 'WhatsApp' },
  ];

  const stats = [
    { value: '2+', label: 'Years Exp.' },
    { value: '15+', label: 'Projects Completed' },
    { value: '8+', label: 'Tech Stacks' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden bg-[var(--background)]"
    >
      {/* ─── Architectural Grid Overlay ─── */}
      <div className="absolute inset-0 hero-grid opacity-30 pointer-events-none" />

      {/* ─── Ambient Glow ─── */}
      <div className="absolute top-1/4 right-1/3 w-[450px] h-[450px] rounded-full bg-white/[0.015] blur-3xl pointer-events-none" />

      {/* ─── Main Content Wrapper ─── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Main Text & CTAs */}
        <div className="lg:col-span-7 space-y-8 animate-fadeUp">
          
          {/* Availability Pill */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 transition-all duration-300 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-space-grotesk font-semibold tracking-wider text-slate-300 uppercase group-hover:text-white transition-colors">
              Available for collaboration
            </span>
            <svg className="w-3 h-3 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="font-space-grotesk font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08]">
              Software Engineer <br />
              <span className="text-slate-400 font-semibold">&amp; Systems Developer</span>
            </h1>

            <p className="font-inter text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
              Specialized in engineering robust <strong className="text-white font-semibold">Flutter mobile apps</strong>,
              scalable <strong className="text-white font-semibold">IoT &amp; embedded hardware solutions</strong>, and responsive web platforms.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl font-space-grotesk font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 shadow-sm flex items-center gap-2"
            >
              View Featured Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl font-space-grotesk font-semibold text-sm border border-white/15 bg-white/[0.02] text-white hover:bg-white/[0.08] hover:border-white/30 transition-all duration-200 flex items-center gap-2"
            >
              Get In Touch
            </a>
          </div>

          {/* Stats & Social Links */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-space-grotesk font-extrabold text-2xl text-white leading-none">
                  {stat.value}
                </span>
                <span className="font-inter text-xs text-slate-400 mt-1">{stat.label}</span>
              </div>
            ))}

            <div className="h-8 w-px bg-white/10 hidden sm:block" />

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, i) => (
                <a
                  key={social.alt}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200 group"
                  aria-label={social.alt}
                  onMouseEnter={() => setHoveredSocial(i)}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <div className="relative w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity">
                    <Image src={social.icon} alt={social.alt} fill className="object-contain" />
                  </div>
                  {hoveredSocial === i && (
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded text-[11px] font-space-grotesk font-semibold text-slate-950 bg-white whitespace-nowrap pointer-events-none z-20 shadow-md">
                      {social.alt}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Executive Technical Architecture Terminal Card (No Image) */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-[460px] exec-card p-6 space-y-6 shadow-2xl">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="font-space-grotesk text-xs text-slate-400 font-semibold tracking-wider">
                qamrosh-system-spec.json
              </span>
            </div>

            {/* Architecture Details */}
            <div className="space-y-4 font-mono text-xs leading-relaxed">
              
              <div className="space-y-1">
                <p className="text-slate-500">// Primary Focus</p>
                <p className="text-slate-200">
                  <span className="text-emerald-400">"role"</span>: <span className="text-slate-300">"Software &amp; Mobile Engineer"</span>,
                </p>
                <p className="text-slate-200">
                  <span className="text-emerald-400 font-medium">"location"</span>: <span className="text-slate-300">"Pakistan"</span>
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-white/5">
                <p className="text-slate-500">// Engineering Specialties</p>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 font-sans">
                    <p className="font-space-grotesk font-bold text-white text-xs">Mobile Apps</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Flutter • Dart • Riverpod</p>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 font-sans">
                    <p className="font-space-grotesk font-bold text-white text-xs">IoT Hardware</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">ESP32 • Arduino • Sensors</p>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 font-sans">
                    <p className="font-space-grotesk font-bold text-white text-xs">Backend / Cloud</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Node.js • Python • Firebase</p>
                  </div>
                  <div className="p-2 rounded bg-white/[0.03] border border-white/5 font-sans">
                    <p className="font-space-grotesk font-bold text-white text-xs">UI/UX Design</p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Figma • Design Systems</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                <span className="text-slate-400 font-sans font-medium">Deployment Status:</span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active / Open for Collaboration
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
