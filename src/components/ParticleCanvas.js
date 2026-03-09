'use client';

import { useEffect, useRef } from 'react';

const COLORS = ['#5b6ef5', '#9b5cff', '#f059a8', '#22d3ee'];

export default function ParticleCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let rafId;
        let particles = [];
        let mouse = { x: -9999, y: -9999 };

        /* ── Resize handling ── */
        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        /* ── Particle factory ── */
        const COUNT = Math.min(80, Math.floor((canvas.width * canvas.height) / 14000));

        const makeParticle = () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.45,
            vy: (Math.random() - 0.5) * 0.45,
            r: Math.random() * 1.8 + 0.8,
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            alpha: Math.random() * 0.5 + 0.25,
        });

        for (let i = 0; i < COUNT; i++) particles.push(makeParticle());

        /* ── Mouse tracking ── */
        const onMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };
        const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
        canvas.addEventListener('mousemove', onMove);
        canvas.addEventListener('mouseleave', onLeave);

        /* ── Draw loop ── */
        const CONNECT_DIST = 130;    // max distance to draw a line
        const MOUSE_DIST = 110;    // mouse interaction radius
        const MOUSE_FORCE = 0.022;  // repulsion strength

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            /* Update + draw particles */
            particles.forEach((p) => {
                /* Mouse repulsion */
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MOUSE_DIST) {
                    const force = (MOUSE_DIST - dist) / MOUSE_DIST;
                    p.vx += (dx / dist) * force * MOUSE_FORCE;
                    p.vy += (dy / dist) * force * MOUSE_FORCE;
                }

                /* Speed damping */
                p.vx *= 0.995;
                p.vy *= 0.995;

                /* Clamp velocity */
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed > 1.2) { p.vx = (p.vx / speed) * 1.2; p.vy = (p.vy / speed) * 1.2; }

                p.x += p.vx;
                p.y += p.vy;

                /* Wrap around edges */
                if (p.x < -10) p.x = canvas.width + 10;
                if (p.x > canvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = canvas.height + 10;
                if (p.y > canvas.height + 10) p.y = -10;

                /* Draw dot */
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.alpha;
                ctx.fill();
                ctx.globalAlpha = 1;
            });

            /* Draw connection lines */
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const a = particles[i];
                    const b = particles[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < CONNECT_DIST) {
                        const opacity = (1 - d / CONNECT_DIST) * 0.18;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.strokeStyle = a.color;
                        ctx.globalAlpha = opacity;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            /* Mouse-to-nearest-particle highlight lines */
            if (mouse.x > 0) {
                particles.forEach((p) => {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < MOUSE_DIST * 1.4) {
                        const opacity = (1 - d / (MOUSE_DIST * 1.4)) * 0.45;
                        ctx.beginPath();
                        ctx.moveTo(mouse.x, mouse.y);
                        ctx.lineTo(p.x, p.y);
                        ctx.strokeStyle = '#9b5cff';
                        ctx.globalAlpha = opacity;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                });
            }

            rafId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(rafId);
            ro.disconnect();
            canvas.removeEventListener('mousemove', onMove);
            canvas.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-auto"
            style={{ zIndex: 0 }}
        />
    );
}
