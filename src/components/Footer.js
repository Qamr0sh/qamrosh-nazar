'use client';

import { Reveal, Magnetic } from '@/lib/animatorlib';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative bg-[var(--background)] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-space-grotesk font-extrabold text-white">
                Qamrosh Ali Nazar
              </h3>
              <p className="text-slate-400 font-inter text-sm leading-relaxed max-w-sm">
                Software Engineer specializing in Flutter cross-platform architecture, IoT systems engineering, and modern web platforms.
              </p>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-space-grotesk font-semibold text-slate-300">
                  Pakistan
                </span>
                <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-xs font-space-grotesk font-semibold text-slate-300">
                  Mobile &amp; IoT Specialist
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-space-grotesk font-bold text-white uppercase tracking-wider">
                Navigation
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link) => (
                  <Magnetic key={link.name} strength={0.15}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-white font-inter text-sm transition-colors py-1 block"
                    >
                      {link.name}
                    </a>
                  </Magnetic>
                ))}
              </div>
            </div>

            {/* Direct Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-space-grotesk font-bold text-white uppercase tracking-wider">
                Direct Channels
              </h4>
              <div className="space-y-2 text-sm font-inter text-slate-400">
                <p>Email: <a href="mailto:qamrosh55@gmail.com" className="text-white hover:underline">qamrosh55@gmail.com</a></p>
                <p>Phone: <a href="tel:+923168661932" className="text-white hover:underline">+92 316 8661 932</a></p>
                <p>Location: Kotli AJK, Pakistan</p>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-inter text-slate-500">
          <p>© {currentYear} Qamrosh Ali Nazar. All rights reserved.</p>
          <p className="italic text-slate-400">“Turning complex ideas into elegant digital reality.”</p>
        </div>
      </div>
    </footer>
  );
}
