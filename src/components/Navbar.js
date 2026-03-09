'use client';

import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-background/90 backdrop-blur-xl border-b border-foreground/10 shadow-lg shadow-black/5'
        : 'bg-background/60 backdrop-blur-md border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left - Signature Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block group">
              <Image
                src="/signature.svg"
                alt="Qamrosh Nazar"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto dark:hidden transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
                priority
              />
              <Image
                src="/signature_dark.svg"
                alt="Qamrosh Nazar"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto hidden dark:block transition-all duration-300 group-hover:opacity-80 group-hover:scale-105"
                priority
              />
            </a>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleLinkClick(link.name)}
                className={`font-space-grotesk text-sm font-medium transition-all duration-300 relative group ${activeLink === link.name.toLowerCase()
                  ? 'text-foreground'
                  : 'text-foreground/60 hover:text-foreground'
                  }`}
              >
                {link.name}
                {/* Animated underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 rounded-full ${activeLink === link.name.toLowerCase()
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                    }`}
                  style={{ background: 'linear-gradient(90deg, #5b6ef5, #9b5cff)' }}
                />
                {/* Active dot */}
                {activeLink === link.name.toLowerCase() && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* Right - Get In Touch Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              onClick={() => handleLinkClick('contact')}
              className="group relative font-space-grotesk text-sm font-semibold px-6 py-2.5 rounded-full border border-foreground/20 transition-all duration-300 overflow-hidden hover:border-transparent hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10 text-foreground transition-colors duration-300 group-hover:text-white">
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''
                  }`}
              />
              <span
                className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
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
        <div className="border-t border-foreground/10 px-4 py-4 space-y-1 bg-background/95 backdrop-blur-xl">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleLinkClick(link.name)}
              className={`flex items-center font-space-grotesk text-sm font-medium py-2.5 px-4 rounded-xl transition-all duration-300 ${activeLink === link.name.toLowerCase()
                ? 'text-foreground bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-foreground/10'
                : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
                }`}
              style={{ transitionDelay: mobileMenuOpen ? `${i * 40}ms` : '0ms' }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
