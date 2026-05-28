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
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const socialRefs = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cleanup = [];
    socialRefs.current.forEach((el) => {
      if (!el) return;
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        el.style.transform = `translate(${(e.clientX - cx) * 0.28}px, ${(e.clientY - cy) * 0.28}px)`;
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
    { href: 'https://www.linkedin.com/in/qamr0sh/', icon: '/social_media_icon/linkedIn_icon.svg', alt: 'LinkedIn', color: '#0A66C2' },
    { href: 'https://www.instagram.com/qamr0sh/', icon: '/social_media_icon/instagram_icon.svg', alt: 'Instagram', color: '#E1306C' },
    { href: 'https://www.facebook.com/profile.php?id=100012883470553', icon: '/social_media_icon/facebook_icon.svg', alt: 'Facebook', color: '#1877F2' },
    { href: 'https://www.pinterest.com/QamroshNazar/', icon: '/social_media_icon/Pinterest_icon.svg', alt: 'Pinterest', color: '#E60023' },
    { href: 'https://discord.com/users/1098012603005009951', icon: '/social_media_icon/discord_icon.svg', alt: 'Discord', color: '#5865F2' },
    { href: 'http://t.me/qamr0sh', icon: '/social_media_icon/telegram_icon.svg', alt: 'Telegram', color: '#26A5E4' },
    { href: 'https://wa.me/923168661932?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!', icon: '/social_media_icon/whatsapp_icon.svg', alt: 'WhatsApp', color: '#25D366' },
  ];

  const stats = [
    { value: '2+', label: 'Years Exp.' },
    { value: '15+', label: 'Projects' },
    { value: '8+', label: 'Technologies' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-0 overflow-hidden bg-background"
    >
      {/* ─── Background Layers ─── */}
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
        {/* Bottom accent orb */}
        <div
          className="absolute bottom-0 left-[30%] w-[40%] h-[30%] rounded-full opacity-10 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, #f059a8 0%, transparent 70%)',
            animation: 'orbFloat3 18s ease-in-out infinite',
          }}
        />
      </div>

      {/* ─── Main Content ─── */}
      <div className="relative z-10 ml-0 sm:ml-[6%] lg:ml-[8%] max-w-[560px] w-full">

        {/* ── Availability Badge (clickable) ── */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-foreground/10 bg-foreground/[0.03] backdrop-blur-md mb-8 animate-fadeUp hover:border-emerald-500/30 hover:bg-emerald-500/[0.04] transition-all duration-300 cursor-pointer group"
          style={{ animationDelay: '0.1s' }}
          aria-label="Available for new opportunities — get in touch"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-space-grotesk font-medium tracking-wider text-foreground/70 uppercase group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
            Available for new opportunities
          </span>
          <svg
            className="w-3 h-3 text-foreground/30 group-hover:text-emerald-500 transition-colors duration-300"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* ── Text Content ── */}
        <div className="space-y-5">
          <p
            className="text-blue-500/80 font-space-grotesk font-bold tracking-[0.2em] uppercase text-sm animate-fadeUp"
            style={{ animationDelay: '0.2s' }}
          >
            Software Engineer &amp; Designer
          </p>

          <h1
            className="font-space-grotesk font-bold tracking-tight leading-[1.08] animate-fadeUp"
            style={{ fontSize: 'clamp(2.4rem, 7.5vw, 4.5rem)', animationDelay: '0.3s' }}
          >
            <span className="block text-foreground">Transforming ideas into</span>
            <span className="relative inline-block mt-1">
              <span className="shimmer-text">digital excellence.</span>
              {/* Underline accent */}
              <div className="absolute -bottom-2 left-0 w-1/3 h-[3px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #5b6ef5, #9b5cff, transparent)' }}
              />
            </span>
          </h1>

          <div
            className="font-inter text-lg sm:text-xl text-foreground/60 animate-fadeUp"
            style={{ animationDelay: '0.4s' }}
          >
            I am <TypewriterText texts={roles} typingSpeed={75} deletingSpeed={40} pauseDuration={2000} />
          </div>

          <p
            className="font-inter text-base text-foreground/50 max-w-md leading-relaxed animate-fadeUp"
            style={{ animationDelay: '0.5s' }}
          >
            Specializing in high-performance{' '}
            <span className="text-foreground/80 font-medium">mobile applications</span>,
            intelligent{' '}
            <span className="text-foreground/80 font-medium">IoT systems</span>, and
            immersive{' '}
            <span className="text-foreground/80 font-medium">web experiences</span>.
          </p>
        </div>

        {/* ── CTA Buttons ── */}
        <div
          className="flex flex-wrap items-center gap-4 mt-10 animate-fadeUp"
          style={{ animationDelay: '0.6s' }}
        >
          {/* Primary CTA */}
          <a
            href="#projects"
            className="group relative px-7 py-3.5 rounded-2xl font-space-grotesk font-bold text-sm overflow-hidden transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-purple-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </div>
            <span className="relative text-white flex items-center gap-2">
              Explore My Work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
              </svg>
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#contact"
            className="group px-7 py-3.5 rounded-2xl font-space-grotesk font-bold text-sm border border-foreground/15 bg-foreground/[0.02] backdrop-blur-sm hover:bg-foreground/[0.06] hover:border-foreground/25 transition-all duration-300 hover:shadow-md"
          >
            <span className="text-foreground/70 group-hover:text-foreground transition-colors duration-300 flex items-center gap-2">
              Get In Touch
              <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </a>
        </div>

        {/* ── Stats Strip ── */}
        <div
          className="flex items-center gap-6 mt-8 animate-fadeUp"
          style={{ animationDelay: '0.75s' }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span
                className="font-space-grotesk font-black text-xl leading-none"
                style={{
                  background: 'linear-gradient(135deg, #5b6ef5, #9b5cff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {stat.value}
              </span>
              <span className="font-inter text-xs text-foreground/45 mt-0.5">{stat.label}</span>
            </div>
          ))}
          <div className="h-8 w-px bg-foreground/10" />
          {/* All social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map((social, i) => (
              <a
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (socialRefs.current[i] = el)}
                className="relative w-8 h-8 rounded-lg flex items-center justify-center bg-foreground/[0.04] border border-foreground/10 transition-all duration-300 group"
                aria-label={social.alt}
                onMouseEnter={() => setHoveredSocial(i)}
                onMouseLeave={() => setHoveredSocial(null)}
                style={{
                  '--social-color': social.color,
                }}
              >
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `${social.color}15`, border: `1px solid ${social.color}40` }}
                />
                <div className="relative w-4 h-4 opacity-45 group-hover:opacity-100 transition-opacity duration-300">
                  <Image src={social.icon} alt={social.alt} fill className="object-contain" />
                </div>
                {/* Tooltip */}
                {hoveredSocial === i && (
                  <div
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] font-space-grotesk font-semibold text-white whitespace-nowrap pointer-events-none z-10 animate-fadeIn"
                    style={{ background: social.color, boxShadow: `0 4px 12px ${social.color}50` }}
                  >
                    {social.alt}
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                      style={{ borderLeft: '4px solid transparent', borderRight: '4px solid transparent', borderTop: `4px solid ${social.color}` }}
                    />
                  </div>
                )}
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
          <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[75%] h-[55%] rounded-full blur-[110px] animate-pulse"
            style={{ background: 'radial-gradient(circle, rgba(91,110,245,0.12) 0%, rgba(155,92,255,0.08) 50%, transparent 70%)' }}
          />
          <div className="absolute bottom-[14%] left-1/2 -translate-x-1/2 w-[55%] h-[40%] rounded-full blur-[80px] animate-pulse"
            style={{ animationDelay: '1s', background: 'radial-gradient(circle, rgba(240,89,168,0.1) 0%, transparent 70%)' }}
          />

          {/* Spinning orbit rings */}
          <div className="absolute bottom-[18%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] border border-blue-500/8 rounded-full"
            style={{ animation: 'ringRotate 22s linear infinite' }} />
          <div className="absolute bottom-[23%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] border border-purple-500/10 border-dashed rounded-full"
            style={{ animation: 'ringRotateReverse 30s linear infinite' }} />
          <div className="absolute bottom-[28%] left-1/2 -translate-x-1/2 w-[290px] h-[290px] border border-pink-500/8 rounded-full"
            style={{ animation: 'ringRotate 16s linear infinite' }} />

          {/* Orbit floating accent dots */}
          <div
            className="absolute bottom-[55%] left-[12%] w-3 h-3 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #5b6ef5, #9b5cff)',
              boxShadow: '0 0 12px rgba(91,110,245,0.8)',
              animation: 'orbFloat1 6s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-[65%] right-[18%] w-2 h-2 rounded-full"
            style={{
              background: 'linear-gradient(135deg, #9b5cff, #f059a8)',
              boxShadow: '0 0 10px rgba(240,89,168,0.8)',
              animation: 'orbFloat2 8s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-[40%] right-[10%] w-1.5 h-1.5 rounded-full"
            style={{
              background: '#22d3ee',
              boxShadow: '0 0 8px rgba(34,211,238,0.9)',
              animation: 'orbFloat3 5s ease-in-out infinite',
            }}
          />

          {/* Floating skill badges */}
          <div
            className="absolute bottom-[68%] left-[8%] px-3 py-1.5 rounded-full font-space-grotesk text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(91,110,245,0.9), rgba(155,92,255,0.9))',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              animation: 'floatY 5s ease-in-out infinite',
              boxShadow: '0 8px 24px rgba(91,110,245,0.35)',
            }}
          >
            <span>📱</span> Flutter Dev
          </div>

          <div
            className="absolute bottom-[72%] right-[5%] px-3 py-1.5 rounded-full font-space-grotesk text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(155,92,255,0.9), rgba(240,89,168,0.9))',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              animation: 'floatYSlow 7s ease-in-out infinite',
              animationDelay: '1.5s',
              boxShadow: '0 8px 24px rgba(155,92,255,0.35)',
            }}
          >
            <span>🔌</span> IoT Expert
          </div>

          <div
            className="absolute bottom-[30%] right-[4%] px-3 py-1.5 rounded-full font-space-grotesk text-[11px] font-bold text-white flex items-center gap-1.5 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.85), rgba(91,110,245,0.85))',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
              animation: 'floatY 6s ease-in-out infinite',
              animationDelay: '0.8s',
              boxShadow: '0 8px 24px rgba(34,211,238,0.3)',
            }}
          >
            <span>⚡</span> Full-Stack
          </div>

          {/* Profile Image */}
          <div
            className="relative w-full h-full flex items-end justify-center"
            style={{ animation: 'heroImageFloat 8s ease-in-out infinite' }}
          >
            <Image
              src="/images/profile_image.png"
              alt="Qamrosh Ali Nazar - Software Engineer and Flutter Developer"
              fill
              className="object-contain object-bottom drop-shadow-[0_20px_60px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_20px_60px_rgba(255,255,255,0.05)]"
              priority
            />
          </div>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <div
        className="absolute bottom-8 left-8 hidden md:flex flex-col items-center gap-3 animate-fadeIn"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-blue-500/70 to-transparent" />
        <div className="flex flex-col items-center gap-1.5 animate-bounceDown">
          <svg className="w-3.5 h-3.5 text-foreground/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <span className="text-[9px] text-foreground/35 font-space-grotesk tracking-[0.35em] uppercase vertical-text">
          Scroll
        </span>
      </div>
    </section>
  );
}
