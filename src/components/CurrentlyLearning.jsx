import { currentlyLearning } from '../data/education';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';
import { Sparkles, Terminal } from 'lucide-react';

export default function CurrentlyLearning() {
  return (
    <section id="learning" className="section-padding relative bg-surface-muted" aria-labelledby="learning-heading">
      <div className="section-container">
        <SectionHeader
          label="Continuous Growth"
          title="Active Technical Studies"
          headingId="learning-heading"
          description="Specific technologies, computer science topics, and engineering paradigms I am currently deepening my knowledge in."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentlyLearning.map((item) => {
            const isIntermediate = item.status === 'Intermediate';
            return (
              <StaggerItem key={item.name}>
                <div className="solid-card rounded-2xl p-5 h-full flex flex-col justify-between group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <span
                      className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border ${
                        isIntermediate
                          ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                          : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold text-content group-hover:text-cyan-300 transition-colors">
                      {item.name}
                    </h3>
                    <div className="mt-3.5">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-muted">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isIntermediate ? 'w-3/4 bg-cyan-400' : 'w-2/5 bg-indigo-400'
                          }`}
                          role="presentation"
                        />
                      </div>
                    </div>
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

