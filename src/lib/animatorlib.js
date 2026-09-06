'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * animatorlib - Custom High-Performance Animation Engine for Next.js & React
 * Lightweight, SSR-safe, 60fps animations utilizing CSS transforms and Web APIs.
 */

// ─── 1. SCROLL REVEAL HOOK & COMPONENT ───────────────────────────────────────
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

export function Reveal({
  children,
  direction = 'up', // 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' | 'flip'
  delay = 0,
  duration = 0.6,
  threshold = 0.15,
  className = '',
  style = {},
  once = true,
}) {
  const { ref, isVisible } = useScrollReveal({ threshold, once });

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return 'translate3d(0, 30px, 0)';
      case 'down':
        return 'translate3d(0, -30px, 0)';
      case 'left':
        return 'translate3d(40px, 0, 0)';
      case 'right':
        return 'translate3d(-40px, 0, 0)';
      case 'scale':
        return 'scale(0.92) translate3d(0, 20px, 0)';
      case 'flip':
        return 'perspective(1000px) rotateX(25deg) translate3d(0, 30px, 0)';
      case 'fade':
      default:
        return 'translate3d(0, 0, 0)';
    }
  };

  const animStyle = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: 'opacity, transform',
  };

  return (
    <div ref={ref} className={className} style={animStyle}>
      {children}
    </div>
  );
}

// ─── 2. 3D TILT EFFECT HOOK & COMPONENT ──────────────────────────────────────
export function use3DTilt({ max = 12, perspective = 1000, scale = 1.02, speed = 400 } = {}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = useCallback(
    (e) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (((y - centerY) / centerY) * -max).toFixed(2);
      const rotateY = (((x - centerX) / centerX) * max).toFixed(2);

      setStyle({
        transform: `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`,
        transition: `transform ${speed / 4}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
        '--mouse-x': `${x}px`,
        '--mouse-y': `${y}px`,
      });
    },
    [max, perspective, scale, speed]
  );

  const handleMouseLeave = useCallback(() => {
    setStyle({
      transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      transition: `transform ${speed}ms ease-out`,
    });
  }, [perspective, speed]);

  return { cardRef, style, handleMouseMove, handleMouseLeave };
}

// ─── 3. GLOW TRACKING CARD COMPONENT ─────────────────────────────────────────
export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(255, 255, 255, 0.08)',
  tilt = true,
  maxTilt = 8,
  onClick,
  ...props
}) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);
  const { cardRef, style: tiltStyle, handleMouseMove: tiltMove, handleMouseLeave: tiltLeave } = use3DTilt({
    max: maxTilt,
    scale: 1.01,
  });

  const handleMouseMove = (e) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    if (tilt) tiltMove(e);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: -500, y: -500 });
    if (tilt) tiltLeave();
  };

  const combinedRef = (node) => {
    containerRef.current = node;
    if (tilt) cardRef.current = node;
  };

  return (
    <div
      ref={combinedRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
      style={{
        ...(tilt ? tiltStyle : {}),
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      {...props}
    >
      {/* Radiant Cursor Glow Layer */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 60%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── 4. MAGNETIC ELEMENT HOOK & COMPONENT ────────────────────────────────────
export function useMagnetic({ strength = 0.25 } = {}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return {
    ref,
    style: {
      transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      transition: position.x === 0 && position.y === 0 ? 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)' : 'transform 0.08s ease-out',
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}

export function Magnetic({ children, strength = 0.25, className = '' }) {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic({ strength });

  return (
    <div ref={ref} style={style} onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}

// ─── 5. TYPEWRITER COMPONENT ──────────────────────────────────────────────────
export function Typewriter({
  phrases = [],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2200,
  className = '',
  cursorClassName = 'bg-emerald-400',
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    if (subIndex === phrases[index].length + 1 && !isDeleting) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, phrases, typingSpeed, deletingSpeed, pauseDuration]);

  const currentPhrase = phrases[index] || '';

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{currentPhrase.substring(0, subIndex)}</span>
      <span
        className={`ml-1 inline-block w-[3px] h-[1.0em] ${cursorClassName} rounded-full transition-opacity duration-150 ${
          blink ? 'opacity-100' : 'opacity-20'
        }`}
      />
    </span>
  );
}

// ─── 6. STAGGER CONTAINER WRAPPER ─────────────────────────────────────────────
export function StaggerContainer({ children, staggerDelay = 0.08, className = '' }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => {
            if (!child) return null;
            return (
              <div
                key={i}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translate3d(0,0,0)' : 'translate3d(0, 24px, 0)',
                  transition: `opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerDelay}s`,
                }}
              >
                {child}
              </div>
            );
          })
        : children}
    </div>
  );
}
