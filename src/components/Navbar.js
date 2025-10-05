'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    // Dynamic scroll-based detection using actual section positions
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Account for navbar height

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            console.log('Dynamic scroll detected:', link.href, 'Position:', scrollPosition);
            setActiveLink(link.name.toLowerCase());
          }
        }
      });
    };

    // Throttled scroll handler for better performance
    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 50);
    };

    // Initial check and scroll listener
    setTimeout(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName.toLowerCase());
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Left - Signature Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="block">
              <Image
                src="/signature.svg"
                alt="Qamrosh Nazar"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto dark:hidden"
                priority
              />
              <Image
                src="/signature_dark.svg"
                alt="Qamrosh Nazar"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto hidden dark:block"
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
                className={`font-space-grotesk text-sm font-medium transition-colors duration-300 relative group ${
                  activeLink === link.name.toLowerCase()
                    ? 'text-foreground'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ${
                    activeLink === link.name.toLowerCase()
                      ? 'w-full'
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            ))}
          </div>

          {/* Right - Get In Touch Button */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="group relative font-space-grotesk text-sm font-semibold px-6 py-2.5 rounded-full border border-foreground/20 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-foreground transition-colors duration-300">
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                Get In Touch
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-foreground/5 transition-colors"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden border-t border-foreground/10">
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                handleLinkClick(link.name);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              className={`block font-space-grotesk text-sm font-medium py-2 px-4 rounded-lg transition-colors duration-300 ${
                activeLink === link.name.toLowerCase()
                  ? 'text-foreground bg-foreground/5'
                  : 'text-foreground/60 hover:text-foreground hover:bg-foreground/5'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
