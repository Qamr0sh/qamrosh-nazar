'use client';

import { useState } from 'react';
import { Reveal, Magnetic } from '@/lib/animatorlib';

// Vector SVG platform icons
const PlatformIcons = {
  snapchat: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.004 2c-3.79 0-6.22 2.766-6.22 5.56 0 1.25.42 2.45.87 3.29.13.25.17.48.06.74-.2.48-.99 1.11-2.09 1.34-.34.07-.48.28-.46.46.06.49.65.74 1.32.79.22.02.43.08.57.25.26.31.25.86.23 1.35-.04.88-.13 1.94-.96 2.37-.36.19-.53.49-.44.82.11.41.65.65 1.28.65.68 0 1.38-.28 2.05-.62.33-.17.65-.28.98-.12.82.39 1.76.69 2.88.69 1.11 0 2.06-.3 2.88-.69.33-.16.65-.05.98.12.67.34 1.37.62 2.05.62.63 0 1.17-.24 1.28-.65.09-.33-.08-.63-.44-.82-.83-.43-.92-1.49-.96-2.37-.02-.49-.03-1.04.23-1.35.14-.17.35-.23.57-.25.67-.05 1.26-.3 1.32-.79.02-.18-.12-.39-.46-.46-1.1-.23-1.89-.86-2.09-1.34-.11-.26-.07-.49.06-.74.45-.84.87-2.04.87-3.29C18.224 4.766 15.794 2 12.004 2z" />
    </svg>
  ),
  whatsapp: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.275-.1-.476-.15-.677.15-.2.301-.777.98-.953 1.181-.176.201-.352.226-.653.075s-1.272-.469-2.424-1.496c-.896-.799-1.502-1.786-1.678-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.151-.176.201-.301.301-.502.101-.201.05-.377-.025-.527s-.677-1.632-.928-2.235c-.244-.587-.493-.507-.677-.517-.176-.009-.377-.01-.578-.01s-.527.075-.803.377c-.276.301-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.123 3.242 5.144 4.547.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.306.176-1.431-.076-.125-.276-.201-.577-.351zM12.04 2C6.51 2 2.02 6.49 2.02 12.02c0 1.94.55 3.75 1.51 5.28L2 22l4.83-1.48c1.47.88 3.19 1.38 5.21 1.38 5.53 0 10.02-4.49 10.02-10.02C22.06 6.49 17.57 2 12.04 2z" />
    </svg>
  ),
  github: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  linkedin: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74v-8.37H5.06v8.37z" />
    </svg>
  ),
  instagram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  discord: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  telegram: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  ),
  x: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  tiktok: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  ),
  pinterest: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.07-.98-.13-2.48.03-3.55.14-.98.92-6.52.92-6.52s-.23-.47-.23-1.17c0-1.1.64-1.92 1.43-1.92.68 0 1 .5 1 1.12 0 .68-.43 1.7-.66 2.64-.19.79.4 1.44 1.18 1.44 1.42 0 2.51-1.5 2.51-3.66 0-1.91-1.38-3.25-3.34-3.25-2.44 0-3.87 1.83-3.87 3.72 0 .74.28 1.53.64 1.96.07.09.08.16.06.25-.07.28-.22.88-.25 1-.04.16-.13.2-.3.12-1.12-.52-1.82-2.16-1.82-3.48 0-2.83 2.06-5.43 5.93-5.43 3.11 0 5.53 2.22 5.53 5.18 0 3.09-1.95 5.58-4.66 5.58-.91 0-1.76-.47-2.06-1.03l-.56 2.13c-.2 1.01-.76 2.27-1.13 3.09A12 12 0 1 0 12 0z" />
    </svg>
  ),
  facebook: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
};

const SOCIAL_PLATFORMS = [
  {
    id: 'snapchat',
    name: 'Snapchat',
    url: 'https://www.snapchat.com/add/qamr0sh',
    accentColor: '#FFFC00',
    bgGlow: 'rgba(255, 252, 0, 0.12)',
    icon: PlatformIcons.snapchat,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/923168661932?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!',
    accentColor: '#25D366',
    bgGlow: 'rgba(37, 211, 102, 0.12)',
    icon: PlatformIcons.whatsapp,
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/Qamr0sh',
    accentColor: '#F0F6FC',
    bgGlow: 'rgba(240, 246, 252, 0.12)',
    icon: PlatformIcons.github,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/qamr0sh/',
    accentColor: '#0A66C2',
    bgGlow: 'rgba(10, 102, 194, 0.15)',
    icon: PlatformIcons.linkedin,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/qamr0sh/',
    accentColor: '#E1306C',
    bgGlow: 'rgba(225, 48, 108, 0.15)',
    icon: PlatformIcons.instagram,
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.com/users/1098012603005009951',
    accentColor: '#5865F2',
    bgGlow: 'rgba(88, 101, 242, 0.15)',
    icon: PlatformIcons.discord,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'http://t.me/qamr0sh',
    accentColor: '#229ED9',
    bgGlow: 'rgba(34, 158, 217, 0.15)',
    icon: PlatformIcons.telegram,
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    url: 'https://x.com/qamr0sh',
    accentColor: '#FFFFFF',
    bgGlow: 'rgba(255, 255, 255, 0.12)',
    icon: PlatformIcons.x,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://www.tiktok.com/@qamr0sh',
    accentColor: '#00F2FE',
    bgGlow: 'rgba(0, 242, 254, 0.12)',
    icon: PlatformIcons.tiktok,
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    url: 'https://www.pinterest.com/QamroshNazar/',
    accentColor: '#BD081C',
    bgGlow: 'rgba(189, 8, 28, 0.15)',
    icon: PlatformIcons.pinterest,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100012883470553',
    accentColor: '#1877F2',
    bgGlow: 'rgba(24, 119, 242, 0.15)',
    icon: PlatformIcons.facebook,
  },
];

export default function SocialHub() {
  const [universalCopied, setUniversalCopied] = useState(false);

  const handleCopyUniversal = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('qamr0sh');
      setUniversalCopied(true);
      setTimeout(() => setUniversalCopied(false), 2200);
    }
  };

  // Seamless infinite loop rows
  const marqueeRow1 = [...SOCIAL_PLATFORMS, ...SOCIAL_PLATFORMS];
  const marqueeRow2 = [...[...SOCIAL_PLATFORMS].reverse(), ...[...SOCIAL_PLATFORMS].reverse()];

  return (
    <section
      id="socials"
      className="relative w-full py-16 bg-[var(--background)] overflow-hidden border-t border-white/5"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <Reveal direction="down" delay={0.05}>
              <div className="flex items-center gap-2.5 mb-2">
                <div className="h-px w-6 bg-white/40" />
                <span className="text-xs font-bold font-space-grotesk uppercase tracking-[0.25em] text-white/80">
                  Social Ecosystem
                </span>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <h2 className="text-2xl sm:text-4xl font-space-grotesk font-extrabold text-white tracking-tight">
                One Universal Tag: <span className="text-shimmer">@qamr0sh</span>
              </h2>
            </Reveal>
          </div>

          <Reveal direction="left" delay={0.15}>
            <Magnetic strength={0.2}>
              <button
                onClick={handleCopyUniversal}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl font-space-grotesk text-xs font-bold transition-all duration-300 cursor-pointer shadow-md ${
                  universalCopied
                    ? 'bg-emerald-500 text-slate-950 scale-105'
                    : 'bg-white text-slate-950 hover:bg-slate-200'
                }`}
                title="Copy @qamr0sh"
              >
                {universalCopied ? (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied @qamr0sh! 🎉</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Copy Universal Handle</span>
                  </>
                )}
              </button>
            </Magnetic>
          </Reveal>
        </div>

        {/* ─── DUAL VELOCITY INFINITE SCROLLING TICKERS ─── */}
        <div className="space-y-3.5 overflow-hidden py-1 select-none relative">
          {/* Subtle edge fade overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" />

          {/* Row 1: Leftward Streamer */}
          <div className="animate-marquee-left gap-3.5 flex items-center">
            {marqueeRow1.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={`social-marquee1-${item.id}-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-slate-900/80 hover:bg-slate-800 hover:border-white/30 transition-all duration-200 group shadow-md flex-shrink-0"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: item.bgGlow, color: item.accentColor }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-space-grotesk font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[11px] font-inter font-medium text-slate-400">
                      @qamr0sh
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Row 2: Rightward Streamer */}
          <div className="animate-marquee-right gap-3.5 flex items-center">
            {marqueeRow2.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={`social-marquee2-${item.id}-${index}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-slate-900/80 hover:bg-slate-800 hover:border-white/30 transition-all duration-200 group shadow-md flex-shrink-0"
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ background: item.bgGlow, color: item.accentColor }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-space-grotesk font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.name}
                    </p>
                    <p className="text-[11px] font-inter font-medium text-slate-400">
                      @qamr0sh
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
