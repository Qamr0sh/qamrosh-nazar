'use client';

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import { Magnetic } from '@/lib/animatorlib';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Update scroll progress CSS variable
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);

      // Active section detection
      const scrollPosition = scrollY + 200;
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(link.name.toLowerCase());
          }
        }
      });
    };

    let rafId;
    const throttledScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      cancelAnimationFrame(rafId);
    };
  }, [navLinks]);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName.toLowerCase());
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar Top Accent */}
      <div className="scroll-progress-bar" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Left - Signature Logo */}
            <div className="flex-shrink-0">
              <Magnetic strength={0.2}>
                <a href="#home" className="block group">
                  <Image
                    src="/signature_dark.svg"
                    alt="Qamrosh Nazar"
                    width={120}
                    height={40}
                    className="h-8 sm:h-10 w-auto transition-all duration-300 group-hover:opacity-90 group-hover:scale-105"
                    priority
                  />
                </a>
              </Magnetic>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Magnetic key={link.name} strength={0.15}>
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.name)}
                    className={`font-space-grotesk text-sm font-medium transition-all duration-300 relative group px-1 py-0.5 ${activeLink === link.name.toLowerCase()
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                      }`}
                  >
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${activeLink === link.name.toLowerCase()
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                        }`}
                      style={{ background: '#ffffff' }}
                    />
                    {/* Active dot */}
                    {activeLink === link.name.toLowerCase() && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                    )}
                  </a>
                </Magnetic>
              ))}
            </div>

            {/* Right - Get In Touch Button */}
            <div className="flex items-center space-x-4">
              <Magnetic strength={0.2}>
                <a
                  href="#contact"
                  onClick={() => handleLinkClick('contact')}
                  className="group relative font-space-grotesk text-sm font-semibold px-6 py-2.5 rounded-full border border-white/20 transition-all duration-300 overflow-hidden hover:border-white hover:bg-white shadow-md block"
                >
                  <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-slate-950">
                    Get In Touch
                  </span>
                </a>
              </Magnetic>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors relative w-8 h-8 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                    }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — animated slide-down */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400 ease-in-out"
          style={{
            maxHeight: mobileMenuOpen ? '320px' : '0px',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="border-t border-white/10 px-4 py-4 space-y-1 bg-slate-950/95 backdrop-blur-xl">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`flex items-center font-space-grotesk text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-300 ${activeLink === link.name.toLowerCase()
                  ? 'text-white bg-white/10 border border-white/15'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                style={{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
