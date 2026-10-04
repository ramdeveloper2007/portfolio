import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [percent, setPercent] = useState(0);
  const screenRef = useRef(null);
  const markRef = useRef(null);
  const labelRef = useRef(null);
  const barRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(false);
      return undefined;
    }

    // Counter animation
    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 18) + 8;
      if (count >= 100) {
        count = 100;
        clearInterval(interval);
      }
      setPercent(count);
    }, 45);

    const timeline = gsap.timeline({
      delay: 0.1,
      onComplete: () => setVisible(false),
    });

    timeline
      .fromTo(
        markRef.current,
        { scale: 0.7, opacity: 0, rotationY: -90 },
        { scale: 1, opacity: 1, rotationY: 0, duration: 0.5, ease: 'back.out(1.7)' }
      )
      .fromTo(labelRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35 }, '-=0.2')
      .fromTo(barRef.current, { scaleX: 0, transformOrigin: 'left center' }, { scaleX: 1, duration: 0.6, ease: 'power2.inOut' }, '-=0.3')
      .to(screenRef.current, { yPercent: -100, duration: 0.8, delay: 0.25, ease: 'power4.inOut' });

    return () => {
      clearInterval(interval);
      timeline.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface transition-opacity duration-400 select-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Background Matrix Grid */}
      <div className="absolute inset-0 studio-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-10 flex flex-col items-center gap-5">
        <div
          ref={markRef}
          className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-elevated border border-cyan-500/40 shadow-2xl shadow-cyan-500/30"
        >
          <span className="font-display text-2xl font-bold gradient-text">R</span>
          <div className="absolute -inset-1 rounded-2xl border border-cyan-400/50 animate-ping opacity-40" />
        </div>

        <div className="flex flex-col items-center gap-2">
          <span ref={labelRef} className="font-mono text-xs text-cyan-300 tracking-[0.25em] uppercase font-semibold">
            SYSTEM INITIALIZING... {percent}%
          </span>

          <div className="h-1 w-48 rounded-full bg-surface-muted overflow-hidden border border-border">
            <div
              ref={barRef}
              className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 shadow-[0_0_8px_#06b6d4]"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
