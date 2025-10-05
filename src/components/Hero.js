'use client';

import Image from 'next/image';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const roles = [
    'A Software Engineer!',
    'A Graphic Designer!',
    'A Tech Lover!',
    'A Creative Problem Solver!',
    'A Flutter Developer!',
    'An IoT Enthusiast!',
    'An Electronics Hobbyist!',
    'A Gamer!',
    'A Full-Stack Explorer!',
  ];

  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="ml-[5%] sm:ml-[10%] lg:ml-[15%] max-w-4xl">
        <div className="space-y-2">
          {/* Greeting with Typewriter */}
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-foreground/80">
            – Hello
          </p>

          {/* Name */}
          <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            <span className="text-foreground">I'm </span>
            <span className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Qamrosh
            </span>
            <span className="text-foreground"> Ali Nazar</span>
          </h1>

          {/* Typewriter Animation */}
          <div className="font-inter text-xl sm:text-2xl md:text-3xl text-foreground/70 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[3.5rem]">
            <TypewriterText texts={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2000} />
          </div>

          {/* Subtitle */}
          <p className="font-inter text-sm sm:text-base md:text-lg text-foreground/60 max-w-2xl">
            Inspired to create and innovate every day.
          </p>
        </div>
      </div>

      {/* Social Media Icons - Bottom Left */}
      <div className="absolute bottom-[5%] left-[5%] z-10">
        <div className="flex gap-2 items-center">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/linkedIn_icon.svg"
                  alt="LinkedIn"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/instagram_icon.svg"
                  alt="Instagram"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/facebook_icon.svg"
                  alt="Facebook"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/Pinterest_icon.svg"
                  alt="Pinterest"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/discord_icon.svg"
                  alt="Discord"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/telegram_icon.svg"
                  alt="Telegram"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
            <a
              href="https://wa.me"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-1.5 rounded-full transition-all duration-300 hover:bg-foreground/10 hover:-translate-y-1"
            >
              <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                <Image
                  src="/social_media_icon/whatsapp_icon.svg"
                  alt="WhatsApp"
                  fill
                  className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </a>
        </div>
      </div>

      {/* Profile Image - Bottom Right */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px]">
          <Image
            src="/images/profile_image.png"
            alt="Qamrosh Ali Nazar"
            fill
            className="object-contain object-bottom"
            priority
          />
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
