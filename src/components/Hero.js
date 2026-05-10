'use client';

import Image from 'next/image';
import TypewriterText from './TypewriterText';
import ParticleCanvas from './ParticleCanvas';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const roles = [
    'A Software Engineer!',
    'A Graphic Designer!',
    'A Tech Lover!',
    'A Creative Problem Solver!',
    'A Flutter Developer!',
    'An IoT Enthusiast!',
    'An Electronics Hobbyist!',
    'A Gamer!',
    'A Full-Stack Explorer!',
  ];

  // Mouse parallax for profile image
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const socialRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 8;
      const y = (e.clientY / innerHeight - 0.5) * -8;
      setTilt({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic social icons
  useEffect(() => {
    const cleanup = [];
    socialRefs.current.forEach((el) => {
      if (!el) return;
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        el.style.transform = `translate(${(e.clientX - cx) * 0.32}px, ${(e.clientY - cy) * 0.32}px)`;
      };
      const onLeave = () => { el.style.transform = 'translate(0,0)'; };
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanup.push(() => {
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
      });
    });
    return () => cleanup.forEach((fn) => fn());
  }, []);

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/qamr0sh/', icon: '/social_media_icon/linkedIn_icon.svg', alt: 'LinkedIn' },
    { href: 'https://www.instagram.com/qamr0sh/', icon: '/social_media_icon/instagram_icon.svg', alt: 'Instagram' },
    { href: 'https://www.facebook.com/profile.php?id=100012883470553', icon: '/social_media_icon/facebook_icon.svg', alt: 'Facebook' },
    { href: 'https://www.pinterest.com/QamroshNazar/', icon: '/social_media_icon/Pinterest_icon.svg', alt: 'Pinterest' },
    { href: 'https://discord.com/users/1098012603005009951', icon: '/social_media_icon/discord_icon.svg', alt: 'Discord' },
    { href: 'http://t.me/qamr0sh', icon: '/social_media_icon/telegram_icon.svg', alt: 'Telegram' },
    { href: 'https://wa.me/923168661932?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!', icon: '/social_media_icon/whatsapp_icon.svg', alt: 'WhatsApp' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-0 overflow-hidden bg-background"
    >
      {/* ─── Elegant Background Layers ─── */}
      <div className="absolute inset-0 -z-20 hero-grid opacity-[0.35]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-20%,rgba(91,110,245,0.08),transparent_50%)]" />

      {/* ─── Particle canvas ─── */}
      <div className="absolute inset-0" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <ParticleCanvas />
      </div>

      {/* ─── Ambient Orbs ─── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full opacity-20 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #5b6ef5 0%, transparent 70%)',
            animation: 'orbFloat1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full opacity-15 blur-[120px]"
          style={{
            background: 'radial-gradient(circle, #9b5cff 0%, transparent 70%)',
            animation: 'orbFloat2 25s ease-in-out infinite',
          }}
        />
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-10 ml-0 sm:ml-[8%] lg:ml-[10%] max-w-4xl w-full">

        {/* Modern Badge */}
        <div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md mb-8 animate-fadeUp"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-space-grotesk font-medium tracking-wider text-foreground/80 uppercase">
            Available for new opportunities
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <p
            className="text-blue-500/80 font-space-grotesk font-bold tracking-[0.2em] uppercase text-sm animate-fadeUp"
            style={{ animationDelay: '0.2s' }}
          >
            Software Engineer & Designer
          </p>

          <h1
            className="font-space-grotesk font-bold tracking-tight leading-[1.1] animate-fadeUp"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', animationDelay: '0.3s' }}
          >
            <span className="block text-foreground">Transforming ideas into</span>
            <span className="relative inline-block">
              <span className="shimmer-text">digital excellence.</span>
              <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full" />
            </span>
          </h1>

          <div
            className="font-inter text-lg sm:text-xl md:text-2xl text-foreground/60 max-w-2xl animate-fadeUp"
            style={{ animationDelay: '0.4s' }}
          >
            I am <TypewriterText texts={roles} typingSpeed={75} deletingSpeed={40} pauseDuration={2000} />
          </div>

          <p
            className="font-inter text-base sm:text-lg text-foreground/50 max-w-xl leading-relaxed animate-fadeUp"
            style={{ animationDelay: '0.5s' }}
          >
            Specializing in high-performance <span className="text-foreground/80 font-medium">mobile applications</span>,
            intelligent <span className="text-foreground/80 font-medium">IoT systems</span>, and
            immersive <span className="text-foreground/80 font-medium">web experiences</span>.
          </p>
        </div>

        {/* CTA Section */}
        <div
          className="flex flex-wrap items-center gap-6 mt-12 animate-fadeUp"
          style={{ animationDelay: '0.6s' }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-2xl font-space-grotesk font-bold text-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:opacity-90 transition-opacity" />
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative text-white flex items-center gap-2">
              Explore My Work
              <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
              </svg>
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 rounded-2xl font-space-grotesk font-bold text-sm border border-foreground/10 bg-foreground/[0.02] backdrop-blur-sm hover:bg-foreground/[0.05] hover:border-foreground/20 transition-all duration-300"
          >
            <span className="text-foreground/80 group-hover:text-foreground transition-colors">
              Get In Touch
            </span>
          </a>

          {/* Magnetic Socials Inline */}
          <div className="flex items-center gap-3 ml-2">
            {socialLinks.slice(0, 3).map((social, i) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialRefs.current[i] = el)}
                className="w-10 h-10 rounded-xl flex items-center justify-center bg-foreground/[0.03] border border-foreground/10 hover:bg-foreground/[0.08] hover:border-foreground/20 transition-all duration-300 group"
                aria-label={social.alt}
              >
                <div className="relative w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Image src={social.icon} alt={social.alt} fill className="object-contain" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Premium Profile Presentation ─── */}
      <div
        className="absolute bottom-0 right-0 w-[45%] h-[90%] hidden lg:flex items-end justify-center pointer-events-none"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.2s cubic-bezier(0.2, 0, 0.2, 1)',
        }}
      >
        <div className="relative w-full h-full max-w-[700px]">
          {/* Layered Glows */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-purple-500/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Modern Rings */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] border border-foreground/5 rounded-full animate-spin-slow" />
          <div className="absolute bottom-[25%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-foreground/[0.03] rounded-full animate-reverse-spin-slow" />

          {/* Profile Image with subtle floating */}
          <div
            className="relative w-full h-full flex items-end justify-center"
            style={{ animation: 'heroImageFloat 8s ease-in-out infinite' }}
          >
            <Image
              src="/images/profile_image.png"
              alt="Qamrosh Ali Nazar"
              fill
              className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* ─── Subtle Scroll Indicator ─── */}
      <div
        className="absolute bottom-10 left-10 hidden md:flex flex-col items-center gap-4 animate-fadeIn"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
        <span className="text-[10px] text-foreground/40 font-space-grotesk tracking-[0.3em] uppercase vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}
