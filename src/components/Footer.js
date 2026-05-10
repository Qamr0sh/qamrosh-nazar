'use client';

import { useRef, useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setIsVisible(true); observer.disconnect(); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-t from-background via-background/95 to-background/90">
      {/* Animated gradient top border */}
      <div className="gradient-border-top relative h-px w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand Section */}
          <div
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <h3 className="text-xl font-space-grotesk font-bold text-foreground">
              Qamrosh Ali Nazar
            </h3>
            <p className="text-foreground/60 font-inter text-sm leading-relaxed">
              Passionate software engineer and creative problem solver dedicated to building
              innovative solutions across mobile, IoT, and web technologies.
            </p>
            <div className="flex gap-3">
              {['Q', 'A', 'N'].map((letter, i) => (
                <div
                  key={letter}
                  className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${i === 0 ? 'bg-gradient-to-br from-blue-500 to-purple-500' :
                    i === 1 ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                      'bg-gradient-to-br from-pink-500 to-blue-500'
                    }`}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    boxShadow: isVisible ? `0 4px 15px ${i === 0 ? 'rgba(59,130,246,0.4)' : i === 1 ? 'rgba(139,92,246,0.4)' : 'rgba(236,72,153,0.4)'}` : 'none',
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                  }}
                >
                  <span className="text-white font-bold text-sm">{letter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s',
            }}
          >
            <h4 className="text-lg font-space-grotesk font-semibold text-foreground">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-1">
              {quickLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-foreground/60 hover:text-foreground font-inter text-sm py-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="w-0 group-hover:w-3 h-px bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 rounded-full" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            <h4 className="text-lg font-space-grotesk font-semibold text-foreground">
              Get In Touch
            </h4>
            <div className="space-y-3">
              {[
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
                  text: 'qamrosh55@gmail.com',
                  gradient: 'from-blue-500 to-purple-500'
                },
                {
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
                  text: '+92 316 8661 932',
                  gradient: 'from-green-500 to-teal-500'
                },
                {
                  icon: <><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></>,
                  text: 'Kotli AJK, Pakistan',
                  gradient: 'from-purple-500 to-pink-500'
                }
              ].map(({ icon, text, gradient }, i) => (
                <div key={i} className="flex items-center space-x-3 group">
                  <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}>
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {icon}
                    </svg>
                  </div>
                  <span className="text-foreground/60 font-inter text-sm group-hover:text-foreground transition-colors duration-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="mt-12 pt-8 border-t border-foreground/10"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.45s',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 font-inter text-sm">
              © {currentYear} Qamrosh Ali Nazar. All rights reserved.
            </p>
            <p className="text-foreground/60 font-inter text-sm">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-floatY" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-floatYSlow delay-500" />
      </div>
    </footer>
  );
}
