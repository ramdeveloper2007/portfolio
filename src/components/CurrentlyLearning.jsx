import { currentlyLearning } from '../data/education';
import { StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';
import { Terminal } from 'lucide-react';

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="learning-heading">
      <div className="section-container">
        <SectionHeader
          label="Continuous Growth"
          title="Currently Expanding My Stack"
          headingId="learning-heading"
          description="Specific technologies, computer science topics, and core engineering fundamentals I am actively deepening my mastery in."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentlyLearning.map((item) => (
            <StaggerItem key={item.name}>
              <div data-card-effect className="solid-card rounded-2xl p-5 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-bold text-content group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-content-secondary">
                    {item.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[10px] font-mono text-content-muted">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    Active Study
                  </span>
                  <span>Core Growth</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
