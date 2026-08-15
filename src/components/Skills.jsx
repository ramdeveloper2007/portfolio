import { skillCategories, levelStyles } from '../data/skills';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-muted/30" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeader
          label="Skills"
          title="Technical Skills"
          description="Technologies and tools I work with, organized by category. Levels reflect my current honest proficiency."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <FadeIn>
                <div className="glass-card h-full p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5">
                  <h3 className="mb-5 font-display text-lg font-semibold text-content">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface-muted/50 px-4 py-3 transition-colors hover:border-accent/20"
                      >
                        <span className="text-sm font-medium text-content">{skill.name}</span>
                        <span
                          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                            levelStyles[skill.level] || levelStyles.Familiar
                          }`}
                        >
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
