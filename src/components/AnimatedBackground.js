import React, { useEffect, useRef } from 'react';

const COLORS = [
  '#FF5252', '#FFEB3B', '#69F0AE', '#40C4FF', '#FF4081', '#FFD740', '#B388FF', '#00E676', '#FF6E40', '#536DFE', '#F50057', '#00B8D4'
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const FIREWORK_INTERVAL = 3000;
const PARTICLES_PER_FIREWORK = 32;
const PARTICLE_LIFETIME = 1200; // ms

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef();
  const fireworks = useRef([]);
  const lastFirework = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let running = true;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function spawnFirework() {
      const x = randomBetween(0.15, 0.85) * canvas.width;
      const y = randomBetween(0.15, 0.5) * canvas.height;
      const color = randomColor();
      const now = Date.now();
      const particles = [];
      for (let i = 0; i < PARTICLES_PER_FIREWORK; i++) {
        const angle = (2 * Math.PI * i) / PARTICLES_PER_FIREWORK;
        const speed = randomBetween(2.5, 5.5);
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: randomColor(),
          start: now,
          life: PARTICLE_LIFETIME,
        });
      }
      fireworks.current.push(...particles);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();
      fireworks.current = fireworks.current.filter(p => now - p.start < p.life);
      for (const p of fireworks.current) {
        const t = (now - p.start) / p.life;
        const px = p.x + p.vx * t * 60;
        const py = p.y + p.vy * t * 60 + 0.5 * 100 * t * t; // gravity
        const alpha = 1 - t;
        ctx.beginPath();
        ctx.arc(px, py, 3 + 2 * (1 - t), 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }
    }

    function loop() {
      if (!running) return;
      draw();
      if (Date.now() - lastFirework.current > FIREWORK_INTERVAL) {
        spawnFirework();
        lastFirework.current = Date.now();
      }
      animationRef.current = requestAnimationFrame(loop);
    }
    spawnFirework();
    animationRef.current = requestAnimationFrame(loop);
    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent',
      }}
    />
  );
};

export default AnimatedBackground; 