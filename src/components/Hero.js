'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <h1 className="font-space-grotesk text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Mobile App Developer</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              & Tech Lover
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto">
            I build beautiful and user-friendly mobile applications that bring ideas to life.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground border-2 border-foreground/20 rounded-full hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Tech Stack Icons or Additional Info */}
          <div className="pt-12">
            <p className="text-sm text-foreground/50 uppercase tracking-wider mb-4">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-foreground/60">
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors">
                React Native
              </span>
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors">
                Flutter
              </span>
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors">
                Swift
              </span>
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors">
                Kotlin
              </span>
              <span className="px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium hover:bg-foreground/10 transition-colors">
                Firebase
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
}
