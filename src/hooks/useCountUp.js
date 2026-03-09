'use client';

import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp — animates a number from 0 to `target` when `start` is true
 * @param {number} target — the end value
 * @param {number} duration — animation duration in ms (default 1800)
 * @param {boolean} start — triggers the animation
 * @returns {number} current displayed value
 */
export function useCountUp(target, duration = 1800, start = false) {
    const [count, setCount] = useState(0);
    const frameRef = useRef(null);

    useEffect(() => {
        if (!start) return;

        // Parse numeric value from target (handles "2+", "15+", "100%")
        const numericTarget = parseFloat(target);
        if (isNaN(numericTarget)) {
            setCount(target);
            return;
        }

        const startTime = performance.now();

        const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * numericTarget);

            setCount(current);

            if (progress < 1) {
                frameRef.current = requestAnimationFrame(step);
            } else {
                setCount(numericTarget);
            }
        };

        frameRef.current = requestAnimationFrame(step);

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
        };
    }, [target, duration, start]);

    return count;
}
