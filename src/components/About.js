'use client';

import Image from 'next/image';

export default function About() {
    const highlights = [
        { number: '2+', label: 'Years Experience' },
        { number: '15+', label: 'Projects Completed' },
        { number: '8+', label: 'Technologies Mastered' },
        { number: '100%', label: 'Client Satisfaction' },
        { number: '100%', label: 'Passion' },
      ];
      

  return (
    <section id="about" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background">
      <div className="max-w-7xl mx-auto w-full py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left Side - Content */}
          <div className="space-y-8 order-1 lg:order-1 flex flex-col justify-center">
            {/* Section Title */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-space-grotesk text-blue-500 font-semibold uppercase tracking-wider">
                About Me
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-space-grotesk font-bold text-foreground leading-tight">
                Crafting Digital Excellence
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4 text-foreground/80 font-inter text-xs sm:text-sm leading-relaxed">
            <p>
                I'm a <span className="font-semibold text-foreground">passionate Flutter developer</span> and{' '}
                <span className="font-semibold text-foreground">software engineer</span> with hands-on experience in building{' '}
                <span className="text-blue-500">cross-platform mobile apps</span>,{' '}
                <span className="text-purple-500">IoT-based systems</span>, and{' '}
                <span className="text-pink-500">modern web solutions</span>. My projects blend creativity and technology to solve real-world problems.
            </p>
            <p>
                I follow <span className="font-semibold text-foreground">SOLID principles</span> and{' '}
                <span className="font-semibold text-foreground">clean architecture</span> to craft{' '}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                scalable, maintainable, and efficient systems
                </span>{' '}
                that connect hardware, cloud, and mobile platforms — from health monitoring apps to smart automation projects.
            </p>
            <div className="pt-2">
                <p className="text-foreground/60 text-xs italic">
                "I believe great software isn’t just built — it’s engineered with purpose, precision, and passion."
                </p>
            </div>
            </div>


            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-xl bg-gradient-to-br from-foreground/5 to-foreground/10 border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-105 group cursor-pointer"
                >
                  <p className="text-xl sm:text-2xl font-bold font-space-grotesk bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    {item.number}
                  </p>
                  <p className="text-xs text-foreground/60 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Element */}
          <div className="relative order-2 lg:order-2 h-full flex flex-col justify-center items-center">
            <div className="relative w-full h-full">
              
              {/* Main Card */}
              <div className="relative bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-3xl p-4 sm:p-6 h-full flex items-center justify-center hover:bg-foreground/10 transition-all duration-300">
                <div className="space-y-6 text-center w-full max-w-xs">
                  {/* Code Icon */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <p className="text-base sm:text-lg font-space-grotesk font-bold text-foreground">
                      Building the Future
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/60 font-inter">
                      One line of code at a time
                    </p>
                  </div>

                  {/* Floating Elements */}
                  <div className="flex justify-center gap-1.5 flex-wrap">
                    <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-500 font-medium hover:bg-blue-500/20 transition-colors">
                      Flutter
                    </div>
                    <div className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-500 font-medium hover:bg-purple-500/20 transition-colors">
                      Python
                    </div>
                    <div className="px-2 py-1 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs text-pink-500 font-medium hover:bg-pink-500/20 transition-colors">
                      IoT
                    </div>
                    <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-500 font-medium hover:bg-green-500/20 transition-colors">
                      Design
                    </div>
                    <div className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-xs text-orange-500 font-medium hover:bg-orange-500/20 transition-colors">
                      Smart Home
                    </div>
                    <div className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-500 font-medium hover:bg-cyan-500/20 transition-colors">
                      UI/UX
                    </div>
                    <div className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs text-indigo-500 font-medium hover:bg-indigo-500/20 transition-colors">
                      DevOps
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Dots */}
              <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
