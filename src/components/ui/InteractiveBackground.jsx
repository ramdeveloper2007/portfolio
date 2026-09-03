import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function InteractiveBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch primary
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    if (shouldReduceMotion) return;

    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const x = (e.clientX / window.innerWidth) * 100;
          const y = (e.clientY / window.innerHeight) * 100;
          setMousePos({ x, y });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [shouldReduceMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Static Grid */}
      <div className="absolute inset-0 studio-grid opacity-40" />

      {/* Cursor-Following Ambient Spotlight (Desktop only, subtle) */}
      {!isTouch && !shouldReduceMotion && (
        <div
          className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-500 ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            background:
              'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(99, 102, 241, 0.03) 40%, transparent 70%)',
          }}
        />
      )}

      {/* Floating Ambient Glow Orbs */}
      <div className="absolute top-[10%] left-[15%] h-96 w-96 rounded-full bg-cyan-500/5 blur-[120px] animate-float-slow" />
      <div
        className="absolute top-[60%] right-[10%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/5 blur-[140px] animate-float-slow"
        style={{ animationDelay: '3s' }}
      />
      <div className="absolute bottom-[5%] left-[30%] h-80 w-80 rounded-full bg-cyan-500/4 blur-[100px]" />
    </div>
  );
}
