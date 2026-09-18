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
          title="Currently Learning"
          headingId="learning-heading"
          description="These are my current learning areas, not claimed professional expertise."
        />

        <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-surface-card p-5 sm:p-7">
          <ol className="space-y-3">
            {currentlyLearning.map((item, index) => (
              <li key={item.name} className="flex items-start gap-4 rounded-2xl border border-border bg-surface-muted/40 p-3 sm:p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 font-mono text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <p className="font-display text-base font-bold text-content sm:text-lg">{item.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-content-secondary">{item.focus}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
