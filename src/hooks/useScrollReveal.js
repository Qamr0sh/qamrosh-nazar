'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — triggers visibility when element enters viewport
 * @param {number} threshold — 0 to 1, default 0.15
 * @returns {{ ref, isVisible }}
 */
export function useScrollReveal(threshold = 0.15) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // only trigger once
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isVisible };
}

/**
 * useScrollRevealMany — returns a callback ref factory for multiple elements
 * Adds/removes 'revealed' class on each observed element
 * @param {number} threshold
 */
export function useScrollRevealMany(threshold = 0.12) {
    useEffect(() => {
        const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [threshold]);
}
