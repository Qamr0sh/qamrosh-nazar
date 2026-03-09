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
    { href: 'https://wa.me/966569829451?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!', icon: '/social_media_icon/whatsapp_icon.svg', alt: 'WhatsApp' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-0 overflow-hidden"
    >
      {/* ─── Animated Grid Background ─── */}
      <div className="absolute inset-0 -z-20 hero-grid opacity-60" />

      {/* ─── Particle canvas ─── */}
      <div className="absolute inset-0" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <ParticleCanvas />
      </div>

      {/* ─── Background Gradient Orbs ─── */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Big primary orb — top left */}
        <div
          className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(91,110,245,0.18) 0%, transparent 70%)',
            animation: 'orbFloat1 12s ease-in-out infinite',
          }}
        />
        {/* Purple orb — center right */}
        <div
          className="absolute top-1/3 right-0 translate-x-1/4 w-[480px] h-[480px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(155,92,255,0.18) 0%, transparent 70%)',
            animation: 'orbFloat2 15s ease-in-out infinite',
          }}
        />
        {/* Pink orb — bottom center */}
        <div
          className="absolute bottom-0 left-1/3 translate-y-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(240,89,168,0.14) 0%, transparent 70%)',
            animation: 'orbFloat3 11s ease-in-out infinite',
          }}
        />
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative ml-0 sm:ml-[8%] lg:ml-[12%] max-w-3xl w-full" style={{ zIndex: 10 }}>

        {/* "Available for work" badge */}
        <div
          className="badge-pill mb-6 animate-fadeUp w-fit"
          style={{ animationDelay: '0.05s' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for Work
        </div>

        {/* Greeting */}
        <p
          className="font-inter text-base sm:text-lg text-foreground/60 mb-2 animate-fadeUp"
          style={{ animationDelay: '0.15s' }}
        >
          Hello, I&apos;m
        </p>

        {/* Name — big hero headline */}
        <h1
          className="font-space-grotesk font-black tracking-tight leading-[1.05] mb-4 animate-fadeUp"
          style={{ fontSize: 'clamp(2.4rem, 7vw, 5.5rem)', animationDelay: '0.25s' }}
        >
          <span className="shimmer-text">Qamrosh</span>
          <br />
          <span className="text-foreground">Ali Nazar</span>
        </h1>

        {/* Typewriter */}
        <div
          className="font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/60 min-h-[2.5rem] sm:min-h-[3rem] mb-6 animate-fadeUp"
          style={{ animationDelay: '0.4s' }}
        >
          <TypewriterText texts={roles} typingSpeed={75} deletingSpeed={40} pauseDuration={2000} />
        </div>

        {/* Subtitle */}
        <p
          className="font-inter text-sm sm:text-base text-foreground/50 max-w-lg leading-relaxed mb-10 animate-fadeUp"
          style={{ animationDelay: '0.52s' }}
        >
          Building cross-platform apps, IoT systems & modern web experiences with{' '}
          <span className="gradient-text-warm font-semibold">passion</span> and{' '}
          <span className="gradient-text-cool font-semibold">precision</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-3 mb-12 animate-fadeUp"
          style={{ animationDelay: '0.62s' }}
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-7 py-3 rounded-full font-space-grotesk font-bold text-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #5b6ef5, #9b5cff, #f059a8)', backgroundSize: '200%', backgroundPosition: '0% 50%', transition: 'background-position 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.backgroundPosition = '100% 50%'}
            onMouseLeave={e => e.currentTarget.style.backgroundPosition = '0% 50%'}
          >
            <span className="text-white">View My Work</span>
            <svg className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full font-space-grotesk font-bold text-sm border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-foreground"
            style={{ borderColor: 'rgba(155,92,255,0.5)', background: 'rgba(155,92,255,0.06)' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(155,92,255,0.12)'; e.currentTarget.style.borderColor = 'rgba(155,92,255,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(155,92,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(155,92,255,0.5)'; }}
          >
            Get In Touch
          </a>
        </div>

        {/* Social Icons */}
        <div
          className="flex gap-2 items-center animate-fadeUp"
          style={{ animationDelay: '0.72s' }}
        >
          {socialLinks.map((social, i) => (
            <a
              key={social.alt}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (socialRefs.current[i] = el)}
              className="group relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
              style={{ background: 'rgba(155,92,255,0.07)', border: '1px solid rgba(155,92,255,0.15)', transitionProperty: 'transform, background, border-color, box-shadow', transitionDuration: '0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(155,92,255,0.18)'; e.currentTarget.style.borderColor = 'rgba(155,92,255,0.5)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(155,92,255,0.3)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(155,92,255,0.07)'; e.currentTarget.style.borderColor = 'rgba(155,92,255,0.15)'; e.currentTarget.style.boxShadow = 'none'; }}
              aria-label={social.alt}
            >
              <div className="relative w-4 h-4">
                <Image
                  src={social.icon}
                  alt={social.alt}
                  fill
                  className="object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ─── Profile Image — bottom right, with rings ─── */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none select-none"
        style={{
          transform: `perspective(1200px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Decorative rings around image */}
        <div className="relative flex items-end justify-center">
          <div className="relative w-52 h-52 sm:w-80 sm:h-80 md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] xl:w-[640px] xl:h-[640px]">
            {/* Spinning rings */}
            <div className="hero-ring hero-ring-1" />
            <div className="hero-ring hero-ring-2" />

            {/* Subtle glow platform at bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full"
              style={{ background: 'radial-gradient(ellipse, rgba(155,92,255,0.3) 0%, transparent 70%)', filter: 'blur(12px)' }}
            />

            {/* Profile image */}
            <div
              className="relative w-full h-full opacity-20 sm:opacity-100"
              style={{ animation: 'heroImageFloat 6s ease-in-out infinite' }}
            >
              <Image
                src="/images/profile_image.png"
                alt="Qamrosh Ali Nazar - Mobile App Developer and Software Engineer Portfolio"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Scroll Down Indicator ─── */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-fadeIn"
        style={{ animationDelay: '1.4s' }}
      >
        <span className="text-[10px] text-foreground/30 font-inter tracking-[0.2em] uppercase">Scroll</span>
        <div className="animate-bounceDown" style={{ color: '#9b5cff', opacity: 0.7 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
