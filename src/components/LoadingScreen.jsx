import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-surface transition-opacity duration-400"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-elevated border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
          <span className="font-display text-xl font-bold gradient-text">R</span>
          <div className="absolute -inset-1 rounded-2xl border border-cyan-500/40 animate-ping opacity-30" />
        </div>
        <span className="font-mono text-xs text-content-muted tracking-widest uppercase">
          Initializing Portfolio...
        </span>
      </div>
    </div>
  );
}
