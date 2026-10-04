import { quickStats } from '../data/personal';
import { StaggerContainer, StaggerItem } from './ui/FadeIn';
import { Terminal, Sparkles, BookOpen, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const statIcons = [BookOpen, Sparkles, Terminal];
const metricCodes = ['METRIC.01 // ACADEMIC', 'METRIC.02 // ARCHITECTURE', 'METRIC.03 // CODEBASE'];
const gaugeAccents = ['from-cyan-500 to-sky-400', 'from-indigo-500 to-cyan-400', 'from-emerald-500 to-teal-400'];

export default function QuickStats() {
  return (
    <section className="border-y border-border/80 bg-surface-muted/60 py-8 relative backdrop-blur-sm" aria-label="Quick statistics">
      <div className="section-container">
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            const accent = gaugeAccents[idx % gaugeAccents.length];
            return (
              <StaggerItem key={stat.label}>
                <div
                  data-card-effect
                  data-cursor-label="METRIC"
                  className="solid-card rounded-2xl p-5 flex items-center justify-between group border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 relative overflow-hidden"
                >
                  {/* Subtle Top Energy Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accent} opacity-40 group-hover:opacity-100 transition-opacity`} />

                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 group-hover:scale-110 group-hover:border-cyan-500/60 group-hover:shadow-[0_0_16px_rgba(6,182,212,0.35)] transition-all">
                      <Icon className="h-6 w-6" />
                      <div className="absolute inset-0 rounded-xl border border-cyan-400/40 animate-ping opacity-20" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="font-display text-2xl md:text-3xl font-extrabold tracking-tight gradient-text"
                        >
                          {stat.value}
                        </motion.span>
                      </div>
                      <span className="block text-xs font-mono font-medium text-content-secondary mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>

                  <span className="hidden xl:flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-content-muted group-hover:text-cyan-400 transition-colors">
                    <Activity className="h-3 w-3 text-cyan-400/80" />
                    {metricCodes[idx]}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
