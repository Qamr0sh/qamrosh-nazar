'use client';

import { useRef, useState, useEffect } from 'react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: [
      { name: 'Flutter', level: 92 },
      { name: 'Dart', level: 88 },
      { name: 'React Native', level: 60 },
      { name: 'REST APIs & Push Notifications', level: 85 },
    ]
  },
  {
    title: 'Backend & Systems',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 78 },
      { name: 'Node.js', level: 68 },
      { name: 'JavaScript / TypeScript', level: 65 },
      { name: 'Firebase & Cloud Storage', level: 85 },
    ]
  },
  {
    title: 'IoT & Embedded Hardware',
    icon: '🔌',
    skills: [
      { name: 'ESP32 Programming', level: 88 },
      { name: 'IoT Architecture', level: 85 },
      { name: 'Arduino C++', level: 82 },
      { name: 'Smart Home Automation', level: 85 },
    ]
  },
  {
    title: 'Design & UI/UX',
    icon: '🎨',
    skills: [
      { name: 'Figma', level: 82 },
      { name: 'UI/UX Architecture', level: 80 },
      { name: 'Adobe Illustrator', level: 80 },
      { name: 'Design Systems', level: 85 },
    ]
  },
  {
    title: 'Systems & Infrastructure',
    icon: '🛠️',
    skills: [
      { name: 'Linux System Admin', level: 78 },
      { name: 'Git & CI/CD Pipelines', level: 88 },
      { name: 'Hardware Diagnostics', level: 92 },
      { name: 'Network Infrastructure (UniFi)', level: 82 },
    ]
  },
  {
    title: 'Cloud & Virtualization',
    icon: '🌐',
    skills: [
      { name: 'Baremetal Hypervisors (Proxmox)', level: 82 },
      { name: 'Cloud Deployment', level: 78 },
      { name: 'Network Monitoring', level: 85 },
      { name: 'Wireless P2P Links', level: 80 },
    ]
  }
];

function SkillCard({ category, index }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="exec-card p-6 flex flex-col justify-between"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${index * 70}ms, transform 0.5s ease ${index * 70}ms`,
      }}
    >
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-xl">
            {category.icon}
          </div>
          <h3 className="text-lg font-space-grotesk font-bold text-white">
            {category.title}
          </h3>
        </div>

        {/* Skills Bars */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="font-inter font-medium text-slate-300">
                  {skill.name}
                </span>
                <span className="font-space-grotesk font-bold text-slate-400">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 70 + skillIndex * 100}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer summary */}
      <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-500 font-inter">
        <span>{category.skills.length} Specialties</span>
        <span className="font-space-grotesk font-semibold text-slate-400">
          Avg {Math.round(category.skills.reduce((acc, s) => acc + s.level, 0) / category.skills.length)}%
        </span>
      </div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useRef(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setHeaderVisible(true); observer.disconnect(); }
    }, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative w-full py-24 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <div
            className="flex items-center gap-3 mb-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease',
            }}
          >
            <div className="h-px w-8 bg-white" />
            <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.2em] text-white">
              Technical Capabilities
            </span>
          </div>

          <h2
            className="text-3xl sm:text-5xl font-space-grotesk font-extrabold text-white leading-tight mb-4"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.5s ease 0.08s, transform 0.5s ease 0.08s',
            }}
          >
            Comprehensive Engineering Stack
          </h2>

          <p
            className="text-slate-400 font-inter text-base leading-relaxed"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.5s ease 0.15s, transform 0.5s ease 0.15s',
            }}
          >
            A disciplined approach to mobile software architecture, hardware system design, and network infrastructure.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard key={categoryIndex} category={category} index={categoryIndex} />
          ))}
        </div>

        {/* Competency Badges */}
        <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs font-space-grotesk font-semibold text-slate-400 uppercase tracking-wider">
            Additional Domains &amp; Competencies
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              'Agile & Scrum', 'RESTful API Design', 'State Management (Provider/Riverpod)',
              'Payment Gateway Integration', 'Enterprise Network Design', 'Technical Documentation'
            ].map((skill, index) => (
              <span
                key={index}
                className="exec-pill"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
