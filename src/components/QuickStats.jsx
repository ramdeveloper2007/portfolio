import { quickStats } from '../data/personal';
import { StaggerContainer, StaggerItem } from './ui/FadeIn';
import { Terminal, Sparkles, BookOpen } from 'lucide-react';

const statIcons = [BookOpen, Sparkles, Terminal];

export default function QuickStats() {
  return (
    <section className="border-y border-border bg-surface-muted py-8 relative" aria-label="Quick statistics">
      <div className="section-container">
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickStats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <StaggerItem key={stat.label}>
                <div data-card-effect className="solid-card rounded-2xl p-5 flex items-center gap-4 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight gradient-text">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-mono font-medium text-content-secondary mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

