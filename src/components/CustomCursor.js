'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const posRef = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });
    const rafRef = useRef(null);

    useEffect(() => {
        // Don't show on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        const onMove = (e) => {
            posRef.current = { x: e.clientX, y: e.clientY };
            if (!visible) setVisible(true);

            // Dot follows immediately
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
        };

        // Ring trails with lerp via rAF
        const lerp = (a, b, t) => a + (b - a) * t;
        const animateRing = () => {
            ringPos.current.x = lerp(ringPos.current.x, posRef.current.x, 0.12);
            ringPos.current.y = lerp(ringPos.current.y, posRef.current.y, 0.12);
            ring.style.left = `${ringPos.current.x}px`;
            ring.style.top = `${ringPos.current.y}px`;
            rafRef.current = requestAnimationFrame(animateRing);
        };
        rafRef.current = requestAnimationFrame(animateRing);

        // Hover effect on interactive elements
        const onEnter = () => {
            dot.classList.add('cursor-hover');
            ring.classList.add('cursor-hover');
        };
        const onLeave = () => {
            dot.classList.remove('cursor-hover');
            ring.classList.remove('cursor-hover');
        };

        const addHoverListeners = () => {
            document.querySelectorAll('a, button, [role="button"], input, textarea, select, .cursor-pointer').forEach((el) => {
                el.addEventListener('mouseenter', onEnter);
                el.addEventListener('mouseleave', onLeave);
            });
        };

        // Re-attach on DOM changes
        const observer = new MutationObserver(addHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });
        addHoverListeners();

        window.addEventListener('mousemove', onMove);

        return () => {
            window.removeEventListener('mousemove', onMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            observer.disconnect();
        };
    }, [visible]);

    return (
        <>
            <div
                ref={dotRef}
                className="cursor-dot"
                style={{ opacity: visible ? 1 : 0 }}
            />
            <div
                ref={ringRef}
                className="cursor-ring"
                style={{ opacity: visible ? 1 : 0 }}
            />
        </>
    );
}
