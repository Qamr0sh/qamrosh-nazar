'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
                className="h-8 sm:h-10 w-auto"
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
                onClick={() => setActiveLink(link.name.toLowerCase())}
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

          {/* Right - Language Selector */}
          <div className="flex items-center space-x-4">
            <button className="font-space-grotesk text-sm font-semibold px-4 py-2 rounded-full border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300">
              Get In Touch
            </button>

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
                setActiveLink(link.name.toLowerCase());
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
