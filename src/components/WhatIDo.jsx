import { StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';
import { Code2, Globe, Cpu, Sparkles } from 'lucide-react';

const capabilities = [
  {
    id: '01',
    code: 'SYS.01 // FULL_STACK',
    title: 'Full-Stack Applications',
    description: 'Building complete products that connect user-facing interfaces to business logic and database-backed features.',
    icon: Code2,
    gradient: 'from-cyan-500/20 to-sky-500/20',
  },
  {
    id: '02',
    code: 'SYS.02 // MODERN_WEB',
    title: 'Modern Web Experiences',
    description: 'Creating responsive, clean, and intuitive interfaces with strong frontend structure and user flow design.',
    icon: Globe,
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    id: '03',
    code: 'SYS.03 // PRACTICAL_DEV',
    title: 'Real-World Software Projects',
    description: 'Developing practical systems that solve concrete problems with maintainable architecture and clear functionality.',
    icon: Cpu,
    gradient: 'from-cyan-500/20 to-emerald-500/20',
  },
  {
    id: '04',
    code: 'SYS.04 // CONTINUOUS_GROWTH',
    title: 'Continuous Learning',
    description: 'Expanding my technical depth through new frameworks, system fundamentals, and software engineering concepts.',
    icon: Sparkles,
    gradient: 'from-emerald-500/20 to-teal-500/20',
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="what-i-do-heading">
      <div className="section-container">
        <SectionHeader
          label="Core Specializations"
          title="What I Build"
          headingId="what-i-do-heading"
          description="Focused on practical software engineering, responsive product experiences, and full-stack problem solving."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div
                  data-cursor-label="MODULE"
                  className="solid-card h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 border border-border hover:border-cyan-500/50 group shadow-lg hover:shadow-cyan-950/20 relative overflow-hidden"
                >
                  {/* Glowing Top Corner Accent */}
                  <div className={`absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl ${item.gradient} rounded-bl-full opacity-40 group-hover:opacity-100 transition-opacity blur-lg pointer-events-none`} />

                  <div className="mb-5 flex items-center justify-between relative z-10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-content-muted group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-cyan-400" />
                      {item.code}
                    </span>
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      <span className="absolute h-full w-full rounded-full bg-cyan-400/40 animate-ping" />
                      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.9)]" />
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-content group-hover:text-cyan-300 transition-colors relative z-10">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-content-secondary relative z-10">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
