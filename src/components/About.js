'use client';

import { useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({ number, label, icon, shouldAnimate, index }) {
  const numericPart = parseFloat(number);
  const suffix = number.replace(/[0-9.]/g, '');
  const count = useCountUp(numericPart, 1600, shouldAnimate);

  return (
    <div
      className="group relative flex flex-col items-center justify-center p-4 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: 'rgba(155,92,255,0.06)',
        border: '1px solid rgba(155,92,255,0.15)',
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.95)',
        transition: `opacity 0.5s ease ${index * 80}ms, transform 0.5s ease ${index * 80}ms`,
      }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 50% 50%, rgba(155,92,255,0.14), transparent 70%)' }}
      />
      <span className="text-2xl mb-1">{icon}</span>
      <p
        className="text-2xl font-black font-space-grotesk leading-none mb-1"
        style={{
          background: 'linear-gradient(135deg, #5b6ef5, #9b5cff, #f059a8)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}
      >
        {shouldAnimate ? `${count}${suffix}` : '0'}
      </p>
      <p className="text-xs text-foreground/50 font-inter text-center leading-tight">{label}</p>
    </div>
  );
}

function TechTag({ label, color }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-semibold font-inter cursor-default select-none transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
      style={{ background: `${color}12`, border: `1px solid ${color}28`, color }}
      onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 3px 12px ${color}30`; }}
      onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; }}
    >
      {label}
    </span>
  );
}

export default function About() {
  const highlights = [
    { number: '2+', label: 'Years Experience', icon: '🗓️' },
    { number: '15+', label: 'Projects Done', icon: '🚀' },
    { number: '8+', label: 'Technologies', icon: '⚡' },
    { number: '100%', label: 'Passion', icon: '🔥' },
  ];

  const techTags = [
    { label: 'Flutter', color: '#5b6ef5' }, { label: 'Dart', color: '#22d3ee' },
    { label: 'Python', color: '#f59e0b' }, { label: 'IoT', color: '#9b5cff' },
    { label: 'Arduino', color: '#22c55e' }, { label: 'ESP32', color: '#f059a8' },
    { label: 'Firebase', color: '#f97316' }, { label: 'Figma', color: '#a78bfa' },
    { label: 'UI/UX', color: '#38bdf8' }, { label: 'Node.js', color: '#4ade80' },
    { label: 'Next.js', color: '#94a3b8' }, { label: 'Smart Home', color: '#fb7185' },
  ];

  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal(0.1);
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal(0.1);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);

  const cardRef = useRef(null);
  const onCardMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 16;
    const y = -((e.clientY - top) / height - 0.5) * 16;
    card.style.transform = `perspective(900px) rotateX(${y}deg) rotateY(${x}deg) scale(1.015)`;
  };
  const onCardLeave = () => {
    if (cardRef.current)
      cardRef.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', display: 'flex', alignItems: 'center' }}
    >
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">

        {/* ─── Section label ─── */}
        <div
          className="flex items-center gap-3 mb-6"
          style={{
            opacity: leftVisible ? 1 : 0,
            transform: leftVisible ? 'none' : 'translateY(10px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
          ref={leftRef}
        >
          <div className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, #9b5cff)' }} />
          <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em]" style={{ color: '#9b5cff' }}>
            About Me
          </span>
          <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(155,92,255,0.3), transparent)' }} />
        </div>

        {/* ─── Two-column grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div
            className="flex flex-col gap-5"
            style={{
              opacity: leftVisible ? 1 : 0,
              transform: leftVisible ? 'translateX(0)' : 'translateX(-28px)',
              transition: 'opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s',
            }}
          >
            {/* Headline */}
            <div>
              <h2
                className="font-space-grotesk font-black leading-[1.06] mb-3"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
              >
                <span className="text-foreground">Crafting </span>
                <span style={{
                  background: 'linear-gradient(135deg, #5b6ef5, #9b5cff, #f059a8)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Digital</span>
                <br />
                <span className="text-foreground">Excellence</span>
              </h2>
              <p className="font-inter text-sm leading-relaxed text-foreground/55 max-w-lg">
                A <span className="font-semibold text-foreground">passionate Flutter developer</span> and{' '}
                <span className="font-semibold text-foreground">software engineer</span> based in Riyadh — building
                cross-platform apps, IoT systems, and web solutions that{' '}
                <span style={{ color: '#9b5cff', fontWeight: 600 }}>blend creativity with engineering</span>.
              </p>
            </div>

            {/* Quote */}
            <blockquote
              className="pl-3 py-2 text-xs italic text-foreground/50 font-inter rounded-r-lg"
              style={{ borderLeft: '3px solid #9b5cff', background: 'rgba(155,92,255,0.05)' }}
            >
              &ldquo;Great software isn&rsquo;t just built — it&rsquo;s engineered with purpose, precision, and passion.&rdquo;
            </blockquote>

            {/* Tech Tags */}
            <div>
              <p className="text-[10px] text-foreground/40 font-inter font-semibold uppercase tracking-wider mb-2">
                Technologies &amp; Tools
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techTags.map((tag) => (
                  <TechTag key={tag.label} {...tag} />
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-space-grotesk font-bold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{ background: 'linear-gradient(135deg, #5b6ef5, #9b5cff)', boxShadow: '0 4px 16px rgba(155,92,255,0.3)' }}
              >
                View My Projects
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-space-grotesk font-bold text-sm transition-all duration-300 hover:gap-3"
                style={{ color: '#9b5cff' }}
              >
                Get In Touch
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className="flex flex-col gap-4"
            style={{
              opacity: rightVisible ? 1 : 0,
              transform: rightVisible ? 'translateX(0)' : 'translateX(28px)',
              transition: 'opacity 0.65s ease 0.15s, transform 0.65s ease 0.15s',
            }}
          >
            {/* 2×2 Stat grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <StatCard key={i} {...item} index={i} shouldAnimate={statsVisible} />
              ))}
            </div>

            {/* 3D Info Card */}
            <div
              ref={cardRef}
              onMouseMove={onCardMove}
              onMouseLeave={onCardLeave}
              className="relative rounded-2xl p-5 overflow-hidden transition-transform duration-200 ease-out"
              style={{ background: 'rgba(155,92,255,0.05)', border: '1px solid rgba(155,92,255,0.16)', transformStyle: 'preserve-3d' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(155,92,255,0.45), transparent)' }} />
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(91,110,245,0.18) 0%, transparent 70%)' }} />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #5b6ef5, #9b5cff)', boxShadow: '0 6px 20px rgba(155,92,255,0.4)', animation: 'glowPulse 3s ease-in-out infinite' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-space-grotesk font-bold text-sm text-foreground">Building the Future</h3>
                  <p className="font-inter text-xs text-foreground/45">One line of code at a time</p>
                </div>
              </div>

              <div className="flex gap-3 pt-3" style={{ borderTop: '1px solid rgba(155,92,255,0.1)' }}>
                {[
                  { label: 'Flutter Apps', value: '10+', color: '#5b6ef5' },
                  { label: 'IoT Devices', value: '5+', color: '#9b5cff' },
                  { label: 'Happy Clients', value: '100%', color: '#f059a8' },
                ].map(({ label, value, color }) => (
                  <div key={label} className="flex-1 text-center">
                    <p className="font-space-grotesk font-black text-base" style={{ color }}>{value}</p>
                    <p className="font-inter text-[10px] text-foreground/40 mt-0.5 leading-tight">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Currently Building */}
            <div
              className="flex items-start gap-3 p-4 rounded-xl"
              style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.14)' }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(34,211,238,0.1)' }}>💡</div>
              <div>
                <p className="font-space-grotesk font-bold text-xs text-foreground mb-0.5">Currently Building</p>
                <p className="font-inter text-xs text-foreground/50 leading-relaxed">
                  <span style={{ color: '#22d3ee', fontWeight: 600 }}>Atomic Clock</span> — a precision
                  time-tracking app with smart scheduling &amp; IoT integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(91,110,245,0.07) 0%, transparent 70%)', animation: 'orbFloat2 14s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(240,89,168,0.06) 0%, transparent 70%)', animation: 'orbFloat1 18s ease-in-out infinite' }} />
      </div>
    </section>
  );
}
