'use client';

import Image from 'next/image';
import { useState } from 'react';
import ParticleCanvas from './ParticleCanvas';
import Hero3DCanvas from './Hero3DCanvas';
import { Reveal, GlowCard, Magnetic, Typewriter } from '@/lib/animatorlib';

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

  const dynamicRoles = [
    'Software Engineer',
    'Flutter Mobile Architect',
    'IoT Hardware Developer',
    'Full-Stack Systems Engineer',
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden bg-[var(--background)]"
    >
      {/* ─── Dynamic Particle Canvas Backdrop ─── */}
      <div className="absolute inset-0 opacity-40 pointer-events-auto">
        <ParticleCanvas />
      </div>

      {/* ─── Architectural Grid Overlay ─── */}
      <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />

      {/* ─── Ambient Glow Orbs ─── */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.03] blur-3xl pointer-events-none animate-ambientPulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/[0.02] blur-3xl pointer-events-none animate-ambientPulse delay-300" />

      {/* ─── Main Content Wrapper ─── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Main Text & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Availability Pill */}
          <Reveal direction="down" delay={0.05} duration={0.5}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 group shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-space-grotesk font-semibold tracking-wider text-slate-300 uppercase group-hover:text-white transition-colors">
                Available for collaboration &amp; projects
              </span>
              <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>

          {/* Headline */}
          <div className="space-y-4">
            <Reveal direction="up" delay={0.15} duration={0.6}>
              <p className="font-space-grotesk font-semibold text-lg sm:text-xl text-slate-300">
                Hi, I&apos;m <span className="text-white font-bold tracking-wide">Qamrosh Nazar</span> 👋
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25} duration={0.6}>
              <h1 className="font-space-grotesk font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.12]">
                <Typewriter phrases={dynamicRoles} className="text-white drop-shadow-sm" cursorClassName="bg-emerald-400" />
              </h1>
            </Reveal>

            <Reveal direction="up" delay={0.35} duration={0.6}>
              <p className="font-inter text-lg sm:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
                Specialized in engineering robust <strong className="text-white font-semibold">Flutter mobile apps</strong>,
                scalable <strong className="text-white font-semibold">IoT &amp; embedded hardware solutions</strong>, and high-performance web platforms.
              </p>
            </Reveal>
          </div>

          {/* CTAs */}
          <Reveal direction="up" delay={0.45} duration={0.6}>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic strength={0.2}>
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-xl font-space-grotesk font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
                >
                  View Featured Projects
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
                  </svg>
                </a>
              </Magnetic>

              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  className="px-7 py-3.5 rounded-xl font-space-grotesk font-semibold text-sm border border-white/15 bg-white/[0.03] backdrop-blur-sm text-white hover:bg-white/[0.08] hover:border-white/35 transition-all duration-200 flex items-center gap-2 shadow-md"
                >
                  Get In Touch
                </a>
              </Magnetic>
            </div>
          </Reveal>

          {/* Stats & Social Links */}
          <Reveal direction="up" delay={0.55} duration={0.6}>
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col group">
                  <span className="font-space-grotesk font-extrabold text-2xl text-white leading-none group-hover:text-emerald-400 transition-colors">
                    {stat.value}
                  </span>
                  <span className="font-inter text-xs text-slate-400 mt-1">{stat.label}</span>
                </div>
              ))}

              <div className="h-8 w-px bg-white/10 hidden sm:block" />

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social, i) => (
                  <Magnetic key={social.alt} strength={0.3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/12 transition-all duration-200 group"
                      aria-label={social.alt}
                      onMouseEnter={() => setHoveredSocial(i)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="relative w-4 h-4 opacity-65 group-hover:opacity-100 group-hover:scale-110 transition-all">
                        <Image src={social.icon} alt={social.alt} fill className="object-contain" />
                      </div>
                      {hoveredSocial === i && (
                        <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded text-[11px] font-space-grotesk font-semibold text-slate-950 bg-white whitespace-nowrap pointer-events-none z-20 shadow-lg animate-fadeUp">
                          {social.alt}
                        </div>
                      )}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN: Executive Technical Architecture Terminal Card & 3D Visual Backdrop */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          {/* Ambient 3D WebGL Interactive Sphere Layer */}
          <div className="absolute -inset-12 sm:-inset-20 flex items-center justify-center pointer-events-none z-0">
            <div className="w-full h-full max-w-[560px] max-h-[560px] opacity-75">
              <Hero3DCanvas />
            </div>
          </div>

          {/* Terminal Card Floating in Front */}
          <Reveal direction="scale" delay={0.3} duration={0.7} className="w-full max-w-[460px] relative z-10">
            <GlowCard
              glowColor="rgba(16, 185, 129, 0.12)"
              maxTilt={12}
              className="exec-card p-6 space-y-6 shadow-2xl rounded-2xl border border-white/10 bg-slate-950/85 backdrop-blur-xl"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block animate-pulse" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block animate-pulse delay-100" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block animate-pulse delay-200" />
                </div>
                <span className="font-space-grotesk text-xs text-slate-400 font-semibold tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  qamrosh-system-spec.json
                </span>
              </div>

              {/* Architecture Details */}
              <div className="space-y-4 font-mono text-xs leading-relaxed">
                
                <div className="space-y-1">
                  <p className="text-slate-500">// Primary Focus &amp; Profile</p>
                  <p className="text-slate-200">
                    <span className="text-emerald-400">"developer"</span>: <span className="text-slate-300">"Qamrosh Nazar"</span>,
                  </p>
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
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all font-sans">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1">
                        <span className="text-emerald-400">📱</span> Mobile Apps
                      </p>
                      <p className="text-slate-400 text-[10px] mt-0.5">Flutter • Dart • Riverpod</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all font-sans">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1">
                        <span className="text-amber-400">⚡</span> IoT Hardware
                      </p>
                      <p className="text-slate-400 text-[10px] mt-0.5">ESP32 • Arduino • Sensors</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all font-sans">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1">
                        <span className="text-blue-400">☁️</span> Backend / Cloud
                      </p>
                      <p className="text-slate-400 text-[10px] mt-0.5">Node.js • Python • Firebase</p>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all font-sans">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1">
                        <span className="text-purple-400">🎨</span> UI/UX Design
                      </p>
                      <p className="text-slate-400 text-[10px] mt-0.5">Figma • Design Systems</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-sans font-medium">Deployment Status:</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-sans font-bold flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active / Open for Collaboration
                  </span>
                </div>

              </div>
            </GlowCard>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
