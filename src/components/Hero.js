'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ParticleCanvas from './ParticleCanvas';
import Hero3DCanvas from './Hero3DCanvas';
import { Reveal, GlowCard, Magnetic, Typewriter } from '@/lib/animatorlib';

// High-fidelity vector SVG platform icons
const PlatformIcons = {
  apple: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.9.04-2.02.61-2.66 1.36-.57.65-1.06 1.71-.93 2.74 1.01.08 2.06-.5 2.67-1.23z" />
    </svg>
  ),
  googleplay: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3.609 1.814L13.793 12 3.61 22.186a2.36 2.36 0 0 1-.22-.988V2.802c0-.363.08-.7.22-.988zm11.306 11.307l2.25 2.25-11.75 6.784 9.5-9.034zm0-2.242L5.415 1.845l11.75 6.784-2.25 2.25zM17.38 12l2.47-1.427a1.693 1.693 0 0 1 0 2.854L17.38 12z"/>
    </svg>
  ),
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
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://www.snapchat.com/add/qamr0sh',
    accentColor: '#FFFC00',
    gradient: 'linear-gradient(90deg, #FFFC00 0%, #FFFFFF 30%, #FFE600 60%, #FFFFFF 100%)',
    bgGlow: 'rgba(255, 252, 0, 0.15)',
    tag: 'Snaps & Streaks',
    desc: 'Real-time updates, creative stories & direct snaps.',
    actionLabel: 'Add on Snapchat',
    icon: PlatformIcons.snapchat,
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    handle: '+92 316 8661 932',
    displayHandle: 'qamr0sh / Direct Chat',
    url: 'https://wa.me/923168661932?text=Hi%20Qamrosh%2C%20I%20saw%20your%20portfolio!',
    accentColor: '#25D366',
    gradient: 'linear-gradient(90deg, #25D366 0%, #FFFFFF 30%, #10B981 60%, #FFFFFF 100%)',
    bgGlow: 'rgba(37, 211, 102, 0.15)',
    tag: 'Instant Connect',
    desc: 'Instant direct chat, quick project queries & calls.',
    actionLabel: 'Chat on WhatsApp',
    icon: PlatformIcons.whatsapp,
  },
  {
    id: 'github',
    name: 'GitHub',
    handle: 'Qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://github.com/Qamr0sh',
    accentColor: '#F0F6FC',
    gradient: 'linear-gradient(90deg, #F0F6FC 0%, #94A3B8 30%, #FFFFFF 60%, #CBD5E1 100%)',
    bgGlow: 'rgba(240, 246, 252, 0.15)',
    tag: 'Code Hub',
    desc: 'Flutter packages, IoT architectures, algorithms & web repos.',
    actionLabel: 'View GitHub Repos',
    icon: PlatformIcons.github,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://www.linkedin.com/in/qamr0sh/',
    accentColor: '#0A66C2',
    gradient: 'linear-gradient(90deg, #38BDF8 0%, #FFFFFF 30%, #0A66C2 60%, #60A5FA 100%)',
    bgGlow: 'rgba(10, 102, 194, 0.18)',
    tag: 'Professional',
    desc: 'Career milestones, engineering insights, and tech leadership.',
    actionLabel: 'Connect on LinkedIn',
    icon: PlatformIcons.linkedin,
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://www.instagram.com/qamr0sh/',
    accentColor: '#E1306C',
    gradient: 'linear-gradient(90deg, #F59E0B 0%, #E1306C 35%, #833AB4 70%, #F59E0B 100%)',
    bgGlow: 'rgba(225, 48, 108, 0.18)',
    tag: 'Visual Life',
    desc: 'Behind the scenes of development setups, lifestyle & moments.',
    actionLabel: 'Follow on Instagram',
    icon: PlatformIcons.instagram,
  },
  {
    id: 'discord',
    name: 'Discord',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://discord.com/users/1098012603005009951',
    accentColor: '#5865F2',
    gradient: 'linear-gradient(90deg, #818CF8 0%, #FFFFFF 30%, #5865F2 60%, #C7D2FE 100%)',
    bgGlow: 'rgba(88, 101, 242, 0.18)',
    tag: 'Dev & Voice',
    desc: 'Pair programming, tech channels & real-time discussions.',
    actionLabel: 'Add on Discord',
    icon: PlatformIcons.discord,
  },
  {
    id: 'telegram',
    name: 'Telegram',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'http://t.me/qamr0sh',
    accentColor: '#229ED9',
    gradient: 'linear-gradient(90deg, #38BDF8 0%, #FFFFFF 30%, #229ED9 60%, #7DD3FC 100%)',
    bgGlow: 'rgba(34, 158, 217, 0.18)',
    tag: 'Secure DM',
    desc: 'Encrypted quick messaging, tech channels & bots.',
    actionLabel: 'Open Telegram',
    icon: PlatformIcons.telegram,
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://x.com/qamr0sh',
    accentColor: '#FFFFFF',
    gradient: 'linear-gradient(90deg, #FFFFFF 0%, #94A3B8 30%, #FFFFFF 60%, #64748B 100%)',
    bgGlow: 'rgba(255, 255, 255, 0.15)',
    tag: 'Tech Thoughts',
    desc: 'Building in public, software paradigms & industry news.',
    actionLabel: 'Follow on X',
    icon: PlatformIcons.x,
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://www.tiktok.com/@qamr0sh',
    accentColor: '#00F2FE',
    gradient: 'linear-gradient(90deg, #00F2FE 0%, #FFFFFF 30%, #FE2C55 60%, #00F2FE 100%)',
    bgGlow: 'rgba(0, 242, 254, 0.15)',
    tag: 'Shorts & Tech',
    desc: 'Quick dev tips, mobile micro-interactions & snippets.',
    actionLabel: 'Watch on TikTok',
    icon: PlatformIcons.tiktok,
  },
  {
    id: 'pinterest',
    name: 'Pinterest',
    handle: 'QamroshNazar',
    displayHandle: '@qamr0sh',
    url: 'https://www.pinterest.com/QamroshNazar/',
    accentColor: '#BD081C',
    gradient: 'linear-gradient(90deg, #EF4444 0%, #FFFFFF 30%, #BD081C 60%, #FCA5A5 100%)',
    bgGlow: 'rgba(189, 8, 28, 0.18)',
    tag: 'UI Moodboards',
    desc: 'Design inspirations, UI aesthetics & hardware pins.',
    actionLabel: 'View Pinterest',
    icon: PlatformIcons.pinterest,
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'qamr0sh',
    displayHandle: '@qamr0sh',
    url: 'https://www.facebook.com/profile.php?id=100012883470553',
    accentColor: '#1877F2',
    gradient: 'linear-gradient(90deg, #60A5FA 0%, #FFFFFF 30%, #1877F2 60%, #93C5FD 100%)',
    bgGlow: 'rgba(24, 119, 242, 0.18)',
    tag: 'Social Circle',
    desc: 'Personal timeline, updates & community connection.',
    actionLabel: 'Open Facebook',
    icon: PlatformIcons.facebook,
  },
];

export default function Hero() {
  const [selectedPlatformIndex, setSelectedPlatformIndex] = useState(0);
  const [universalCopied, setUniversalCopied] = useState(false);
  const [activeRightTab, setActiveRightTab] = useState('apps'); // 'apps' | 'socials' | 'spec'
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  // Auto-cycle platform showcase when user is not manually hovering
  useEffect(() => {
    if (!isAutoCycling || activeRightTab !== 'socials') return;
    const interval = setInterval(() => {
      setSelectedPlatformIndex((prev) => (prev + 1) % SOCIAL_PLATFORMS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isAutoCycling, activeRightTab]);

  const handleCopyUniversal = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('qamr0sh');
      setUniversalCopied(true);
      setTimeout(() => setUniversalCopied(false), 2400);
    }
  };

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Shipped Systems' },
    { value: '2 Live', label: 'Store Flagships' },
  ];

  const dynamicRoles = [
    'Flutter Mobile Architect',
    'Software Engineer',
    'IoT Hardware Developer',
    'Full-Stack Systems Engineer',
  ];

  const activePlatform = SOCIAL_PLATFORMS[selectedPlatformIndex];
  const ActivePlatformIcon = activePlatform.icon;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden bg-[var(--background)]"
    >
      {/* Dynamic Particle Canvas Backdrop */}
      <div className="absolute inset-0 opacity-40 pointer-events-auto">
        <ParticleCanvas />
      </div>

      {/* Architectural Grid Overlay */}
      <div className="absolute inset-0 hero-grid opacity-25 pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-3xl pointer-events-none animate-ambientPulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-[#93A5D5]/[0.04] blur-3xl pointer-events-none animate-ambientPulse delay-300" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full bg-[#BC13FE]/[0.03] blur-3xl pointer-events-none" />

      {/* Main Content Grid Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto pt-6 pb-12">

        {/* LEFT COLUMN: Main Text, Bio, Live Pills & CTAs */}
        <div className="lg:col-span-7 space-y-7">

          {/* Availability & Universal Tag Pill */}
          <Reveal direction="down" delay={0.05} duration={0.5}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md hover:border-white/25 hover:bg-white/[0.06] transition-all duration-300 group shadow-lg"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-space-grotesk font-semibold tracking-wider text-slate-300 uppercase group-hover:text-white transition-colors">
                  Available for collaboration
                </span>
                <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Universal Handle Fast-Copy Badge */}
              <button
                onClick={handleCopyUniversal}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border transition-all duration-300 cursor-pointer shadow-sm hover:scale-105 group"
                style={{
                  borderColor: `${activePlatform.accentColor}55`,
                  background: activePlatform.bgGlow,
                }}
                title="Click to copy universal handle @qamr0sh"
              >
                <span className="text-xs font-space-grotesk font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {universalCopied ? (
                    <span className="text-emerald-300 font-bold">✓ Copied @qamr0sh!</span>
                  ) : (
                    <>
                      Universal Handle:{' '}
                      <span
                        className="font-bold font-space-grotesk inline-block"
                        style={{
                          backgroundImage: activePlatform.gradient,
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          animation: 'textShimmer 3s linear infinite',
                        }}
                      >
                        @qamr0sh
                      </span>
                    </>
                  )}
                </span>
                <svg
                  className="w-3 h-3 transition-colors opacity-80"
                  style={{ color: activePlatform.accentColor }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </Reveal>

          {/* Headline */}
          <div className="space-y-3">
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
              <p className="font-inter text-base sm:text-lg text-slate-400 max-w-2xl font-normal leading-relaxed">
                Specialized in engineering robust <strong className="text-white font-semibold">Flutter mobile systems</strong>,
                production <strong className="text-white font-semibold">IoT &amp; embedded hardware solutions</strong>, and modern full-stack web applications.
              </p>
            </Reveal>
          </div>

          {/* Shipped Productions Quick Bar */}
          <Reveal direction="up" delay={0.4} duration={0.6}>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-space-grotesk uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Featured Live Flagships
                </span>
                <span className="text-[10px] font-space-grotesk text-slate-500 font-semibold">Tap to view</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* As-Salah Pill Link */}
                <Link
                  href="/as-salah"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#93A5D5]/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-[#152542] ring-1 ring-white/15 p-0.5 flex-shrink-0">
                      <Image src="/as-salah/logo.png" alt="As-Salah" fill className="object-contain" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-space-grotesk font-bold text-white group-hover:text-[#93A5D5] transition-colors leading-tight">
                        As-Salah
                      </div>
                      <div className="text-[10px] text-slate-400 font-inter">Quran &amp; Prayer Times</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold font-space-grotesk px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <span>iOS &amp; Android</span>
                  </div>
                </Link>

                {/* Atomic Clock Pill Link */}
                <Link
                  href="/atomic-clock"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 hover:border-[#D4AF37]/40 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-slate-900 ring-1 ring-white/15 p-0.5 flex-shrink-0">
                      <Image src="/atomic_clock/logos/logos with varient/dark_mode_logo.png" alt="Atomic Clock" fill className="object-contain" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-space-grotesk font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                        Atomic Clock
                      </div>
                      <div className="text-[10px] text-slate-400 font-inter">Offline Habit Tracker</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-bold font-space-grotesk px-2 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
                    <span>Play Store Live</span>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Primary Action Buttons */}
          <Reveal direction="up" delay={0.45} duration={0.6}>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Magnetic strength={0.2}>
                <a
                  href="#projects"
                  className="px-7 py-3.5 rounded-xl font-space-grotesk font-bold text-sm bg-white text-slate-950 hover:bg-slate-200 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center gap-2 group"
                >
                  Explore All Projects
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

          {/* Stats Section */}
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

              <div className="flex items-center gap-2">
                <span className="text-xs font-space-grotesk font-medium text-slate-400">
                  {SOCIAL_PLATFORMS.length} Active Channels
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* RIGHT COLUMN: Interactive Executive Showcase Card (Apps / Socials / Stack) */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          {/* Ambient 3D WebGL Canvas Layer (Centered Backdrop) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
            <div className="w-full h-full max-w-[420px] max-h-[420px] opacity-40 blur-[1px]">
              <Hero3DCanvas />
            </div>
          </div>

          {/* Executive Cyber Obsidian Showcase Card */}
          <Reveal direction="scale" delay={0.3} duration={0.7} className="w-full max-w-[490px] relative z-10">
            <GlowCard
              glowColor={
                activeRightTab === 'apps'
                  ? 'rgba(147, 165, 213, 0.15)'
                  : activeRightTab === 'socials'
                  ? activePlatform.bgGlow
                  : 'rgba(16, 185, 129, 0.15)'
              }
              tilt={false}
              className="p-5 sm:p-6 space-y-5 shadow-2xl rounded-2xl border border-white/10 bg-[#090b10] backdrop-blur-xl transition-all duration-300"
            >
              {/* Card Top Navigation Bar: 3 Specialized Modes */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-1 p-1 rounded-xl bg-white/[0.04] border border-white/5">
                  <button
                    onClick={() => setActiveRightTab('apps')}
                    className={`px-3 py-1 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeRightTab === 'apps'
                        ? 'bg-white text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>Featured Apps</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </button>

                  <button
                    onClick={() => setActiveRightTab('socials')}
                    className={`px-3 py-1 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeRightTab === 'socials'
                        ? 'bg-white text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>@qamr0sh</span>
                  </button>

                  <button
                    onClick={() => setActiveRightTab('spec')}
                    className={`px-3 py-1 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeRightTab === 'spec'
                        ? 'bg-white text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span>Stack</span>
                  </button>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
              </div>

              {/* ─── TAB 1: FEATURED LIVE APPS (As-Salah & Atomic Clock) ─── */}
              {activeRightTab === 'apps' && (
                <div className="space-y-3.5 animate-fadeIn">
                  
                  {/* As-Salah Spotlight Card */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#93A5D5]/40 transition-all space-y-3 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#152542] ring-2 ring-[#93A5D5]/30 p-1 flex-shrink-0">
                          <Image src="/as-salah/logo.png" alt="As-Salah Logo" fill className="object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-space-grotesk font-extrabold text-base text-white group-hover:text-[#93A5D5] transition-colors">
                              As-Salah
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
                              Live
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-inter">
                            Holy Quran • On-Demand Audio • Prayer Times
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-amber-300 font-bold font-space-grotesk">5.0 ★</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-inter leading-relaxed line-clamp-2">
                      Complete Quran reader with audio streaming, offline downloads, location-aware prayer times, and Qibla compass.
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-slate-300 font-medium">
                          Flutter
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-slate-300 font-medium">
                          Audio Stream
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="https://apps.apple.com/pk/app/as-salah-prayer-times-quran/id6818953512"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-white text-white hover:text-black transition-all"
                          title="Download on Apple App Store"
                        >
                          <PlatformIcons.apple className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="https://play.google.com/store/apps/details?id=online.qamrosh.assalah"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-[#93A5D5] text-white hover:text-black transition-all"
                          title="Get on Google Play Store"
                        >
                          <PlatformIcons.googleplay className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href="/as-salah"
                          className="px-2.5 py-1 rounded-lg bg-[#93A5D5] hover:bg-white text-slate-950 text-[11px] font-space-grotesk font-bold transition-colors cursor-pointer"
                        >
                          Overview →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Atomic Clock Spotlight Card */}
                  <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:border-[#D4AF37]/40 transition-all space-y-3 group">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-slate-900 ring-2 ring-[#D4AF37]/30 p-1 flex-shrink-0">
                          <Image src="/atomic_clock/logos/logos with varient/dark_mode_logo.png" alt="Atomic Clock Logo" fill className="object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-space-grotesk font-extrabold text-base text-white group-hover:text-[#D4AF37] transition-colors">
                              Atomic Clock
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider">
                              Live
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 font-inter">
                            Identity Habits • On-Device SQLite
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-amber-300 font-bold font-space-grotesk">5.0 ★</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 font-inter leading-relaxed line-clamp-2">
                      James Clear habit stacking philosophy backed by encrypted offline storage and exact hardware alarm triggers.
                    </p>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[10px] text-slate-300 font-medium">
                          Offline First
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-300 font-medium">
                          iOS in review
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href="https://play.google.com/store/apps/details?id=online.qamrosh.atomicclock"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-white/10 hover:bg-[#D4AF37] text-white hover:text-black transition-all"
                          title="Get on Google Play Store"
                        >
                          <PlatformIcons.googleplay className="w-3.5 h-3.5" />
                        </a>
                        <Link
                          href="/atomic-clock"
                          className="px-2.5 py-1 rounded-lg bg-[#D4AF37] hover:bg-white text-slate-950 text-[11px] font-space-grotesk font-bold transition-colors cursor-pointer"
                        >
                          Overview →
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              )}

              {/* ─── TAB 2: SOCIAL ECOSYSTEM (@qamr0sh) ─── */}
              {activeRightTab === 'socials' && (
                <div
                  className="space-y-4 animate-fadeIn"
                  onMouseEnter={() => setIsAutoCycling(false)}
                  onMouseLeave={() => setIsAutoCycling(true)}
                >
                  {/* Universal Tag Highlight Card */}
                  <div
                    className="p-4 rounded-xl border transition-all duration-300 flex items-center justify-between shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${activePlatform.bgGlow}, rgba(255, 255, 255, 0.02))`,
                      borderColor: `${activePlatform.accentColor}40`,
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full animate-pulse"
                          style={{ background: activePlatform.accentColor }}
                        />
                        <p className="text-[10px] font-space-grotesk uppercase tracking-wider text-slate-400 font-bold">
                          One Universal Tag
                        </p>
                      </div>
                      <p
                        className="text-2xl sm:text-3xl font-black font-space-grotesk tracking-tight mt-0.5"
                        style={{
                          backgroundImage: activePlatform.gradient,
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          animation: 'textShimmer 3s linear infinite',
                          filter: `drop-shadow(0 2px 8px ${activePlatform.bgGlow})`,
                        }}
                      >
                        @qamr0sh
                      </p>
                    </div>

                    <Magnetic strength={0.25}>
                      <button
                        onClick={handleCopyUniversal}
                        className={`px-3 py-1.5 rounded-lg text-xs font-space-grotesk font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-md ${
                          universalCopied
                            ? 'bg-emerald-500 text-slate-950 scale-105'
                            : 'bg-white text-slate-950 hover:bg-slate-200'
                        }`}
                      >
                        {universalCopied ? (
                          <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>

                  {/* Active Selected Platform Showcase */}
                  <div
                    className="p-4 rounded-xl border border-white/15 bg-slate-950/80 transition-all duration-300 shadow-lg space-y-3"
                    style={{ borderColor: `${activePlatform.accentColor}44`, boxShadow: `0 8px 25px ${activePlatform.bgGlow}` }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 shadow-sm"
                          style={{ background: activePlatform.bgGlow, color: activePlatform.accentColor }}
                        >
                          <ActivePlatformIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-space-grotesk font-extrabold text-base text-white leading-none">
                            {activePlatform.name}
                          </p>
                          <p className="text-[11px] font-inter text-slate-400 mt-0.5">
                            {activePlatform.displayHandle}
                          </p>
                        </div>
                      </div>

                      <span
                        className="text-[10px] font-space-grotesk font-bold uppercase px-2 py-0.5 rounded-md border border-white/10"
                        style={{ color: activePlatform.accentColor, borderColor: `${activePlatform.accentColor}40` }}
                      >
                        {activePlatform.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 font-inter leading-relaxed line-clamp-2">
                      {activePlatform.desc}
                    </p>

                    <a
                      href={activePlatform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-3 rounded-lg font-space-grotesk text-xs font-bold text-slate-950 flex items-center justify-center gap-2 transition-all hover:brightness-110 shadow-md"
                      style={{ background: activePlatform.accentColor === '#000000' ? '#FFFFFF' : activePlatform.accentColor }}
                    >
                      <span>{activePlatform.actionLabel}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>

                  {/* 11 Platform Fast Matrix Icons Grid */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] font-space-grotesk uppercase tracking-wider text-slate-500 font-bold">
                      Select Platform ({SOCIAL_PLATFORMS.length} total)
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-0.5 justify-between">
                      {SOCIAL_PLATFORMS.map((platform, idx) => {
                        const Icon = platform.icon;
                        const isSelected = selectedPlatformIndex === idx;
                        return (
                          <button
                            key={platform.id}
                            onClick={() => setSelectedPlatformIndex(idx)}
                            className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer relative group ${
                              isSelected
                                ? 'border-white/60 bg-white/15 scale-105 shadow-md'
                                : 'border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/10'
                            }`}
                            style={{
                              color: isSelected ? platform.accentColor : '#94A3B8',
                            }}
                            title={`${platform.name} (@qamr0sh)`}
                          >
                            <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                            {isSelected && (
                              <span
                                className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full"
                                style={{ background: platform.accentColor }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ─── TAB 3: ENGINEERING STACK & ARCHITECTURE ─── */}
              {activeRightTab === 'spec' && (
                <div className="space-y-4 animate-fadeIn">

                  {/* Bio Summary */}
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-space-grotesk font-extrabold text-base text-white">
                        Qamrosh Nazar
                      </h4>
                      <span className="text-[11px] font-space-grotesk font-semibold text-emerald-400">
                        @qamr0sh
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 font-inter leading-relaxed">
                      Software engineer passionate about high-performance mobile apps, embedded IoT hardware, and modern full-stack web platforms.
                    </p>
                  </div>

                  {/* Expertise Pillars Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-colors">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1.5">
                        <span className="text-emerald-400">📱</span> Mobile Engineering
                      </p>
                      <p className="text-slate-400 text-[11px] mt-1 font-inter">Flutter • Dart • Riverpod</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-colors">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1.5">
                        <span className="text-amber-400">⚡</span> IoT Hardware
                      </p>
                      <p className="text-slate-400 text-[11px] mt-1 font-inter">ESP32 • C++ • Sensors</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-colors">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1.5">
                        <span className="text-blue-400">☁️</span> Full-Stack Web
                      </p>
                      <p className="text-slate-400 text-[11px] mt-1 font-inter">Next.js • Node.js • APIs</p>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/70 border border-white/10 hover:border-white/20 transition-colors">
                      <p className="font-space-grotesk font-bold text-white text-xs flex items-center gap-1.5">
                        <span className="text-purple-400">🎨</span> UI Architecture
                      </p>
                      <p className="text-slate-400 text-[11px] mt-1 font-inter">Clean Obsidian Systems</p>
                    </div>
                  </div>

                  {/* Availability Status */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-400 font-inter font-medium">Availability:</span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-space-grotesk font-bold flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Open for Contracts &amp; Projects
                    </span>
                  </div>

                </div>
              )}

            </GlowCard>
          </Reveal>
        </div>

      </div>

    </section>
  );
}
