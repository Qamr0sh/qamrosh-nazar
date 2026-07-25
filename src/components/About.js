'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';
import { Reveal, GlowCard, Magnetic } from '@/lib/animatorlib';

function StatCard({ number, label, icon, shouldAnimate, index }) {
  const numericPart = parseFloat(number);
  const suffix = number.replace(/[0-9.]/g, '');
  const count = useCountUp(numericPart, 1600, shouldAnimate);

  return (
    <GlowCard
      glowColor="rgba(255, 255, 255, 0.08)"
      maxTilt={10}
      className="exec-card flex flex-col items-center justify-center p-5 cursor-default text-center rounded-xl bg-slate-900/60 border border-white/10"
      style={{
        opacity: shouldAnimate ? 1 : 0,
        transform: shouldAnimate ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
      }}
    >
      <span className="text-2xl mb-1.5">{icon}</span>
      <p className="text-3xl font-extrabold font-space-grotesk leading-none mb-1 text-white">
        {shouldAnimate ? `${count}${suffix}` : '0'}
      </p>
      <p className="text-xs text-slate-400 font-inter leading-tight">{label}</p>
    </GlowCard>
  );
}

function TechTag({ label }) {
  return (
    <Magnetic strength={0.15}>
      <span className="exec-pill cursor-pointer hover:scale-105 transition-transform">
        {label}
      </span>
    </Magnetic>
  );
}

export default function About() {
  const highlights = [
    { number: '2+', label: 'Years Experience', icon: '🗓️' },
    { number: '15+', label: 'Projects Completed', icon: '🚀' },
    { number: '8+', label: 'Tech Stacks', icon: '⚡' },
    { number: '100%', label: 'Commitment', icon: '🔥' },
  ];

  const coreCapabilities = [
    'Cross-Platform Mobile Apps (Flutter, Dart, Clean Architecture)',
    'IoT & Embedded Hardware Integration (ESP32, Arduino C++, Sensor Logic)',
    'Enterprise Full-Stack & REST API Engineering (Node.js, Python, Firebase)',
    'User-Centric Interface Design & Scalable Design Systems (Figma)',
  ];

  const techTags = [
    { label: 'Flutter' }, { label: 'Dart' },
    { label: 'Python' }, { label: 'IoT' },
    { label: 'Arduino' }, { label: 'ESP32' },
    { label: 'Firebase' }, { label: 'Figma' },
    { label: 'UI/UX' }, { label: 'Node.js' },
    { label: 'Next.js' }, { label: 'Smart Home' },
  ];

  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(0.15);

  return (
    <section id="about" className="relative w-full py-24 bg-[var(--background)] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal direction="down" delay={0.1}>
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-white" />
            <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-white">
              About Me
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Narrative & Core Pillars */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal direction="left" delay={0.15}>
              <div>
                <h2 className="font-space-grotesk font-extrabold text-3xl sm:text-5xl text-white leading-tight mb-4">
                  Engineering Purposeful <br /> Mobile &amp; Hardware Solutions
                </h2>
                <p className="font-inter text-slate-400 text-base leading-relaxed mb-4">
                  I am a <strong className="text-white font-semibold">Software Engineer and Flutter Specialist</strong> based in Pakistan.
                  With a strong background in cross-platform mobile development, embedded IoT systems, and user-centric UI design,
                  I translate complex technical requirements into elegant, high-impact products.
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.25}>
              <blockquote className="pl-4 py-3 text-sm italic text-slate-300 border-l-2 border-white bg-white/[0.02] rounded-r-lg shadow-inner">
                &ldquo;Reliable software isn&rsquo;t accidental — it is engineered with clarity, precision, and architectural discipline.&rdquo;
              </blockquote>
            </Reveal>

            {/* Core Capability List Items */}
            <Reveal direction="left" delay={0.35}>
              <div className="space-y-3 pt-2">
                <p className="text-xs text-slate-400 font-space-grotesk font-semibold uppercase tracking-wider mb-2">
                  Core Disciplines
                </p>
                <div className="space-y-2">
                  {coreCapabilities.map((item, index) => (
                    <div key={index} className="list-item-pro hover:text-white transition-colors">
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.45}>
              <div>
                <p className="text-xs text-slate-400 font-space-grotesk font-semibold uppercase tracking-wider mb-3 mt-2">
                  Technologies &amp; Frameworks
                </p>
                <div className="flex flex-wrap gap-2">
                  {techTags.map((tag) => (
                    <TechTag key={tag.label} {...tag} />
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.55}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Magnetic strength={0.2}>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space-grotesk font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 shadow-lg"
                  >
                    Explore Projects
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
                    </svg>
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-space-grotesk font-semibold text-sm border border-white/15 bg-white/[0.02] text-white hover:bg-white/[0.08] transition-all duration-200"
                  >
                    Contact Me
                  </a>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: Stats & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* 2x2 Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <StatCard key={i} {...item} index={i} shouldAnimate={statsVisible} />
              ))}
            </div>

            {/* Featured Focus Box */}
            <Reveal direction="right" delay={0.3}>
              <GlowCard glowColor="rgba(255, 255, 255, 0.06)" className="exec-card p-6 space-y-4 rounded-xl border border-white/10 bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white text-slate-950 flex items-center justify-center font-bold shadow-md">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-space-grotesk font-bold text-base text-white">Full-Lifecycle Engineering</h3>
                    <p className="font-inter text-xs text-slate-400">From concept &amp; architecture to store publishing</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 text-center">
                  <div>
                    <p className="font-space-grotesk font-extrabold text-lg text-white">10+</p>
                    <p className="font-inter text-[11px] text-slate-400">Mobile Apps</p>
                  </div>
                  <div>
                    <p className="font-space-grotesk font-extrabold text-lg text-white">5+</p>
                    <p className="font-inter text-[11px] text-slate-400">IoT Systems</p>
                  </div>
                  <div>
                    <p className="font-space-grotesk font-extrabold text-lg text-white">100%</p>
                    <p className="font-inter text-[11px] text-slate-400">Client Satisfaction</p>
                  </div>
                </div>
              </GlowCard>
            </Reveal>

            {/* Currently Active Note */}
            <Reveal direction="right" delay={0.4}>
              <GlowCard glowColor="rgba(16, 185, 129, 0.1)" className="exec-card p-5 flex items-start gap-3.5 rounded-xl border border-white/10 bg-slate-900/60">
                <span className="text-xl">📱</span>
                <div>
                  <p className="font-space-grotesk font-bold text-xs text-white mb-0.5 uppercase tracking-wider">Latest Flagship App</p>
                  <p className="font-inter text-xs text-slate-400 leading-relaxed">
                    Published <strong className="text-white font-medium">As-Salah</strong> &amp; <strong className="text-white font-medium">Atomic Clock</strong> on Google Play Store — privacy-focused, performance-optimized Flutter apps.
                  </p>
                </div>
              </GlowCard>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  );
}
