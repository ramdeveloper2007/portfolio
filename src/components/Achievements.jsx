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
    <section className="section-padding" aria-labelledby="achievements-heading">
      <div className="section-container">
        <SectionHeader
          label="Achievements"
          title="Milestones & Achievements"
          description="A growing collection of academic work, projects, and accomplishments. Placeholders are marked for easy updates."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item) => {
            const Icon = categoryIcons[item.category] || Star;
            const isPlaceholder = item.title.startsWith('[');

            return (
              <StaggerItem key={item.id}>
                <FadeIn>
                  <article
                    className={`glass-card h-full p-6 transition-all duration-300 hover:border-accent/20 ${
                      isPlaceholder ? 'border-dashed' : ''
                    }`}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-content-muted">
                        {item.category}
                      </span>
                    </div>
                    <h3
                      className={`font-display font-semibold ${
                        isPlaceholder ? 'text-content-muted italic' : 'text-content'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-content-secondary">
                      {item.description}
                    </p>
                    {item.date && (
                      <p className="mt-3 text-xs text-content-muted">{item.date}</p>
                    )}
                  </article>
                </FadeIn>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
