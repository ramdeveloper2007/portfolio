import { motion } from 'framer-motion';
import { Cpu, Terminal, ShieldCheck, Zap, Sparkles, Code2, Database, Layers, Network } from 'lucide-react';

const tickerItems = [
  { text: 'FULL_STACK_ARCHITECTURE', icon: Layers, color: 'text-cyan-400' },
  { text: 'PYTHON_FLASK_API', icon: Terminal, color: 'text-indigo-400' },
  { text: 'SQLITE_RELATIONAL_DATA', icon: Database, color: 'text-emerald-400' },
  { text: 'MODERN_JAVASCRIPT_REACT', icon: Code2, color: 'text-cyan-300' },
  { text: 'ALGORITHM_SOLVER_ENGINE', icon: Cpu, color: 'text-purple-400' },
  { text: 'LATENCY < 12MS', icon: Zap, color: 'text-amber-400' },
  { text: 'ZERO_CONFLICT_SYSTEM', icon: ShieldCheck, color: 'text-emerald-400' },
  { text: 'RESPONSIVE_UI_60FPS', icon: Sparkles, color: 'text-cyan-400' },
  { text: 'RESTFUL_ENDPOINTS', icon: Network, color: 'text-sky-400' },
];

export default function CyberTicker() {
  const items = [...tickerItems, ...tickerItems]; // Duplicate for seamless infinite loop

  return (
    <div className="relative w-full overflow-hidden border-y border-border/80 bg-surface-muted/60 py-3.5 backdrop-blur-md">
      {/* Edge gradient masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

      <motion.div
        className="flex w-max items-center gap-6 select-none"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 35,
        }}
        whileHover={{ transition: { duration: 70 } }}
      >
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-surface-card/80 px-3.5 py-1.5 font-mono text-[11px] text-content-secondary shadow-sm transition-all hover:border-cyan-500/40 hover:bg-surface-elevated hover:text-content"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-surface-muted">
                <Icon className={`h-3 w-3 ${item.color}`} />
              </span>
              <span className="font-semibold tracking-wider">{item.text}</span>
              <span className="text-[9px] text-content-muted">●</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
