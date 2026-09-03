import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Terminal } from 'lucide-react';

/**
 * ProfilePhotoContent Component
 * The visual inner body for the portrait (photo or abstract developer frame).
 */
export function ProfilePhotoContent({ photoUrl = null }) {
  if (photoUrl) {
    return (
      <div className="h-full w-full p-3 flex items-center justify-center">
        <img
          src={photoUrl}
          alt="Ramprasad — Full-Stack Developer"
          className="h-full w-full object-cover object-top rounded-2xl transition-transform duration-500 hover:scale-105 border border-cyan-500/30 shadow-lg"
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full rounded-2xl border border-dashed border-cyan-500/30 bg-surface-card p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-inner">
      {/* Internal subtle geometric grid */}
      <div className="absolute inset-0 studio-grid opacity-50 pointer-events-none" />

      {/* Corner Tech Reticles */}
      <div className="absolute top-2.5 left-2.5 h-3 w-3 border-t-2 border-l-2 border-cyan-500/60" />
      <div className="absolute top-2.5 right-2.5 h-3 w-3 border-t-2 border-r-2 border-cyan-500/60" />
      <div className="absolute bottom-2.5 left-2.5 h-3 w-3 border-b-2 border-l-2 border-cyan-500/60" />
      <div className="absolute bottom-2.5 right-2.5 h-3 w-3 border-b-2 border-r-2 border-cyan-500/60" />

      {/* Top Abstract Chip */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-lg bg-surface-muted border border-border px-2.5 py-1 shadow-sm">
          <Terminal className="h-3 w-3 text-accent" />
          <span className="font-mono text-[10px] text-content-secondary font-medium">ramprasad.dev</span>
        </div>
        <span className="font-mono text-[9px] text-content-muted uppercase tracking-widest font-semibold">
          PORTRAIT FRAME
        </span>
      </div>

      {/* Center Abstract Monogram / Developer Silhouette Ring */}
      <div className="relative z-10 mx-auto my-auto flex flex-col items-center">
        <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center">
          {/* Rotating subtle dashed orbital ring */}
          <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40 animate-spin-slow" />
          {/* Pulsing inner gradient orb */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-transparent blur-md animate-pulse-glow" />

          {/* Center Monogram Shield */}
          <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border border-cyan-500/40 bg-surface-elevated shadow-xl shadow-cyan-500/10">
            <span className="font-display text-2xl sm:text-3xl font-extrabold gradient-text">
              R
            </span>
          </div>
        </div>

        <div className="mt-2.5 text-center">
          <p className="font-display text-sm font-bold text-content tracking-tight">
            Ramprasad
          </p>
          <p className="font-mono text-[11px] text-accent font-semibold">
            Full-Stack Developer
          </p>
        </div>
      </div>

      {/* Bottom Tech Capability Stream */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-1.5 pt-2 border-t border-border/80">
        <span className="tech-badge text-[10px] py-0.5 px-2 bg-surface-muted border-cyan-500/30 text-accent font-medium">
          Python
        </span>
        <span className="tech-badge text-[10px] py-0.5 px-2 bg-surface-muted border-indigo-500/30 text-indigo-600 dark:text-indigo-300 font-medium">
          Flask
        </span>
        <span className="tech-badge text-[10px] py-0.5 px-2 bg-surface-muted border-cyan-500/30 text-accent font-medium">
          JavaScript
        </span>
        <span className="tech-badge text-[10px] py-0.5 px-2 bg-surface-muted border-emerald-500/30 text-emerald-600 dark:text-emerald-300 font-medium">
          SQLite
        </span>
      </div>
    </div>
  );
}

/**
 * ProfilePhoto Standalone Component
 */
export default function ProfilePhoto({ photoUrl = null, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] ${className}`}>
      {/* Outer Ambient Multi-Layer Radial Glow */}
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-transparent blur-2xl pointer-events-none" />

      {/* Main Constant-Sized Card */}
      <div className="solid-card relative h-[480px] sm:h-[510px] w-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border-strong bg-surface-card shadow-2xl">
        {/* Top Header Bar */}
        <div className="h-11 shrink-0 flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-[10px] tracking-wider text-content-muted">
              portrait // developer_id
            </span>
          </div>
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4] animate-pulse" />
            ONLINE
          </span>
        </div>

        {/* Main Body Canvas */}
        <div className="flex-1 min-h-0 w-full overflow-hidden bg-surface p-4 sm:p-5 flex items-center justify-center">
          <ProfilePhotoContent photoUrl={photoUrl} />
        </div>

        {/* Bottom Bar */}
        <div className="h-10 shrink-0 flex items-center justify-between border-t border-border bg-surface-elevated px-4 py-2 text-[11px] font-mono text-content-muted">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="text-content-secondary">BTech IT • Coimbatore, IN</span>
          </div>
          <span className="text-accent font-semibold">Software Dev</span>
        </div>
      </div>

      {/* Floating Selective Liquid Glass Badge */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="liquid-glass absolute -bottom-4 -left-3 sm:-left-5 hidden xs:flex items-center gap-3 rounded-2xl p-3 shadow-xl"
      >
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-accent border border-cyan-500/30">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs font-semibold text-content">Full-Stack Architecture</p>
          <p className="text-[10px] text-accent font-mono">Frontend • Backend • Database</p>
        </div>
      </motion.div>
    </div>
  );
}
