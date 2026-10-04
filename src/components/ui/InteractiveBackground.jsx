import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
      isActive: false,
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isActive = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isActive = false;
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    // Particle nodes configuration
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 1.8 + 0.8;
        this.baseAlpha = Math.random() * 0.4 + 0.2;
        this.alpha = this.baseAlpha;
        this.isSpecial = Math.random() > 0.85; // Cyan vs Indigo
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce from edges
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse interaction: slight attraction / push
        if (mouse.isActive) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force * 1.8;
            this.y -= Math.sin(angle) * force * 1.8;
            this.alpha = Math.min(1, this.baseAlpha + force * 0.6);
          } else {
            this.alpha = this.baseAlpha;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.isSpecial
          ? `rgba(6, 182, 212, ${this.alpha * 0.9})` // Cyan
          : `rgba(99, 102, 241, ${this.alpha * 0.8})`; // Indigo
        ctx.fill();

        if (this.isSpecial && this.alpha > 0.4) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(6, 182, 212, ${this.alpha * 0.15})`;
          ctx.fill();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Laser scanline position
    let scanlineY = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Render scanline laser sweep
      scanlineY = (scanlineY + 0.8) % (height + 200);
      const gradient = ctx.createLinearGradient(0, scanlineY - 100, 0, scanlineY);
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.025)');
      gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanlineY - 100, width, 100);

      // Connect nearby particles with glowing cyber wires
      const maxDistance = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Connect particles to mouse
      if (mouse.isActive) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const opacity = (1 - distance / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Static Grid */}
      <div className="absolute inset-0 studio-grid opacity-35" />

      {/* Futuristic Ambient Glowing Nebulas */}
      <div className="absolute top-[8%] left-[10%] h-[32rem] w-[32rem] rounded-full bg-cyan-500/8 blur-[140px] animate-float-slow" />
      <div
        className="absolute top-[50%] right-[8%] h-[36rem] w-[36rem] rounded-full bg-indigo-500/8 blur-[160px] animate-float-slow"
        style={{ animationDelay: '3s' }}
      />
      <div className="absolute bottom-[10%] left-[25%] h-[28rem] w-[28rem] rounded-full bg-sky-500/6 blur-[120px]" />

      {/* High Performance Interactive Particle Constellation Canvas */}
      {!shouldReduceMotion && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-85"
        />
      )}
    </div>
  );
}
