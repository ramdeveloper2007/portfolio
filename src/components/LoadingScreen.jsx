import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const screenRef = useRef(null);
  const markRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setVisible(false);
      return undefined;
    }

    const timeline = gsap.timeline({
      onComplete: () => setVisible(false),
    });
    timeline
      .fromTo(markRef.current, { scale: 0.7, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out' })
      .fromTo(labelRef.current, { y: 8, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3 }, '-=0.12')
      .to(screenRef.current, { yPercent: -100, duration: 0.65, delay: 0.25, ease: 'power4.inOut' });
    return () => timeline.kill();
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={screenRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface transition-opacity duration-400"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div ref={markRef} className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
          <span className="font-display text-xl font-bold gradient-text">R</span>
          <div className="absolute -inset-1 rounded-2xl border border-cyan-500/40 animate-ping opacity-30" />
        </div>
        <span ref={labelRef} className="font-mono text-xs text-content-muted tracking-widest uppercase">
          Initializing Portfolio...
        </span>
      </div>
    </div>
  );
}
