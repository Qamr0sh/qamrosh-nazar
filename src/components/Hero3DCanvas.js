'use client';

import { useEffect, useRef } from 'react';

/**
 * Hero3DCanvas - High-Performance 3D WebGL / Canvas Polyhedron & Particle Scene
 * Zero external dependency, 60fps 3D vector matrix rendering engine.
 */
export default function Hero3DCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Canvas sizing
    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse tracking for 3D parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      mouse.targetX = (clientX - rect.width / 2) / (rect.width / 2);
      mouse.targetY = (clientY - rect.height / 2) / (rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // ─── 3D ICOSAHEDRON GEOMETRY VERTICES ───────────────────────────────────
    const t = (1 + Math.sqrt(5)) / 2;
    const baseVertices = [
      [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
      [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
      [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1]
    ].map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [x / len, y / len, z / len];
    });

    const edges = [
      [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
      [1, 5], [5, 11], [11, 10], [10, 7], [7, 1],
      [3, 9], [3, 4], [3, 2], [3, 6], [3, 8],
      [4, 9], [9, 8], [8, 6], [6, 2], [2, 4],
      [1, 8], [1, 9], [5, 9], [11, 4], [10, 2], [7, 6]
    ];

    // ─── 3D ORBITING GALAXY PARTICLES ────────────────────────────────────────
    const PARTICLE_COUNT = 90;
    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 1.3 + Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.4;
      particles.push({
        x: radius * Math.cos(theta) * Math.cos(phi),
        y: radius * Math.sin(phi),
        z: radius * Math.sin(theta) * Math.cos(phi),
        size: Math.random() * 2 + 1,
        speed: (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1),
        theta,
        radius,
        phi,
        color: i % 3 === 0 ? '#10b981' : i % 2 === 0 ? '#38bdf8' : '#e2e8f0',
      });
    }

    // ─── 3D MATRIX ROTATION MATH ──────────────────────────────────────────────
    let angleX = 0.2;
    let angleY = 0.2;

    const rotateXMatrix = (a) => [
      [1, 0, 0],
      [0, Math.cos(a), -Math.sin(a)],
      [0, Math.sin(a), Math.cos(a)]
    ];

    const rotateYMatrix = (a) => [
      [Math.cos(a), 0, Math.sin(a)],
      [0, 1, 0],
      [-Math.sin(a), 0, Math.cos(a)]
    ];

    const rotateZMatrix = (a) => [
      [Math.cos(a), -Math.sin(a), 0],
      [Math.sin(a), Math.cos(a), 0],
      [0, 0, 1]
    ];

    const multiplyMatrixVector = (mat, vec) => [
      mat[0][0] * vec[0] + mat[0][1] * vec[1] + mat[0][2] * vec[2],
      mat[1][0] * vec[0] + mat[1][1] * vec[1] + mat[1][2] * vec[2],
      mat[2][0] * vec[0] + mat[2][1] * vec[1] + mat[2][2] * vec[2]
    ];

    // ─── RENDER LOOP ──────────────────────────────────────────────────────────
    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      angleX += 0.005 + mouse.y * 0.002;
      angleY += 0.007 + mouse.x * 0.002;

      const fov = 350;
      const centerX = width / 2;
      const centerY = height / 2;
      const baseScale = Math.min(width, height) * 0.32;

      const rx = rotateXMatrix(angleX + mouse.y * 0.3);
      const ry = rotateYMatrix(angleY + mouse.x * 0.3);
      const rz = rotateZMatrix(angleY * 0.5);

      // Transform 3D Vertices
      const projectedVertices = baseVertices.map((v) => {
        let p = multiplyMatrixVector(rx, v);
        p = multiplyMatrixVector(ry, p);
        p = multiplyMatrixVector(rz, p);

        const zIndex = p[2] + 3; // Camera distance offset
        const scale = fov / zIndex;
        const x2d = centerX + (p[0] * baseScale * scale) / fov;
        const y2d = centerY + (p[1] * baseScale * scale) / fov;

        return { x: x2d, y: y2d, z: p[2] };
      });

      // 1. Draw Orbiting Galaxy Particles
      particles.forEach((pt) => {
        pt.theta += pt.speed;
        let p = [
          pt.radius * Math.cos(pt.theta) * Math.cos(pt.phi),
          pt.radius * Math.sin(pt.phi),
          pt.radius * Math.sin(pt.theta) * Math.cos(pt.phi)
        ];

        p = multiplyMatrixVector(rx, p);
        p = multiplyMatrixVector(ry, p);

        const scale = fov / (p[2] + 3);
        const px = centerX + (p[0] * baseScale * scale) / fov;
        const py = centerY + (p[1] * baseScale * scale) / fov;
        const alpha = Math.max(0.1, (p[2] + 1) / 2.2);

        ctx.beginPath();
        ctx.arc(px, py, pt.size * (scale / fov) * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // 2. Draw 3D Edges / Wireframe Mesh
      edges.forEach(([i, j]) => {
        const v1 = projectedVertices[i];
        const v2 = projectedVertices[j];
        const avgZ = (v1.z + v2.z) / 2;
        const alpha = Math.max(0.08, (avgZ + 1.2) / 2.4);

        ctx.beginPath();
        ctx.moveTo(v1.x, v1.y);
        ctx.lineTo(v2.x, v2.y);
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.45})`;
        ctx.stroke();

        // Neon emerald glow line for front edges
        if (avgZ > 0.2) {
          ctx.beginPath();
          ctx.moveTo(v1.x, v1.y);
          ctx.lineTo(v2.x, v2.y);
          ctx.lineWidth = 1.8;
          ctx.strokeStyle = `rgba(16, 185, 129, ${alpha * 0.65})`;
          ctx.stroke();
        }
      });

      // 3. Draw 3D Polyhedron Vertex Nodes
      projectedVertices.forEach((v) => {
        const alpha = Math.max(0.15, (v.z + 1.2) / 2.4);
        const radius = Math.max(1.5, (v.z + 1.5) * 2.2);

        ctx.beginPath();
        ctx.arc(v.x, v.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = v.z > 0 ? '#10b981' : '#ffffff';
        ctx.globalAlpha = alpha;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = v.z > 0 ? 12 : 0;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      // 4. Central Core Energy Orb Glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseScale * 0.35, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, baseScale * 0.35
      );
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.25)');
      gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.08)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-auto"
      />
    </div>
  );
}
