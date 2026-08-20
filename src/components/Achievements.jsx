import { Award, Trophy, Code, GraduationCap, Briefcase, Star } from 'lucide-react';
import { achievements } from '../data/education';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const categoryIcons = {
  Academic: GraduationCap,
  Certification: Award,
  Project: Code,
  Hackathon: Trophy,
  Internship: Briefcase,
  Award: Star,
};

export default function Achievements() {
  return (
    <section className="section-padding relative bg-studio-950/70 border-t border-border/60" aria-labelledby="achievements-heading">
      <div className="section-container">
        <SectionHeader
          label="Milestones"
          title="Key Accomplishments &amp; Benchmarks"
          description="A curated catalog of verified achievements, academic milestones, and engineering project highlights."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = categoryIcons[item.category] || Star;
            const isPlaceholder = item.title.startsWith('[');

            return (
              <StaggerItem key={item.id}>
                <article
                  className={`solid-card rounded-2xl h-full p-6 flex flex-col justify-between group ${
                    isPlaceholder ? 'border-dashed opacity-65' : ''
                  }`}
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-border bg-surface-muted px-2.5 py-0.5 font-mono text-[10px] text-content-muted">
                        {item.category}
                      </span>
                    </div>
                    <h3
                      className={`font-display text-sm sm:text-base font-bold ${
                        isPlaceholder ? 'text-content-muted italic' : 'text-content group-hover:text-cyan-300 transition-colors'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-content-secondary">
                      {item.description}
                    </p>
                  </div>

                  {item.date && (
                    <p className="mt-4 pt-3 border-t border-border/80 font-mono text-[11px] text-content-muted">{item.date}</p>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

