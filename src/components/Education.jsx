import { BookOpen, Code, Globe, GraduationCap, Rocket, Calendar, Server, Database, Layers } from 'lucide-react';
import { educationTimeline, journeySteps } from '../data/education';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  code: Code,
  globe: Globe,
  server: Server,
  database: Database,
  layers: Layers,
  rocket: Rocket,
};

export function Journey() {
  return (
    <section id="journey" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="journey-heading">
      <div className="section-container">
        <SectionHeader
          label="Progressive Roadmap"
          title="My Journey Into Full-Stack Development"
          headingId="journey-heading"
          description="The progression path from engineering fundamentals to full-stack application development and professional software creation."
        />

        <StaggerContainer className="mx-auto max-w-5xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step) => {
            const Icon = iconMap[step.icon] || Code;
            const isCurrent = step.status === 'current';
            const isOngoing = step.status === 'ongoing';

            return (
              <StaggerItem key={step.id}>
                <div
                  className={`solid-card rounded-2xl p-5 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 ${
                    isCurrent ? 'border-cyan-500/40 shadow-lg shadow-cyan-500/10' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isCurrent
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-500/20'
                            : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-105'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs text-content-muted">
                        0{step.id}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-content group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-mono text-cyan-400/90 font-medium">
                      {step.subtitle}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-content-secondary">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between text-[10px] font-mono">
                    <span
                      className={`px-2 py-0.5 rounded-full border ${
                        isCurrent
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30 font-semibold'
                          : isOngoing
                          ? 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
                          : 'bg-surface-muted text-content-muted border-border'
                      }`}
                    >
                      {isCurrent ? 'Current Focus' : isOngoing ? 'Continuous Growth' : 'Completed Milestone'}
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

export function Education() {
  return (
    <section id="education" className="section-padding relative bg-surface border-t border-border/80" aria-labelledby="education-heading">
      <div className="section-container">
        <SectionHeader
          label="Academic Foundation"
          title="Education"
          headingId="education-heading"
          description="My formal academic credentials and computer engineering education across degree and diploma programs."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Timeline Track Line */}
          <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500 via-indigo-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-10">
            {educationTimeline.map((item, index) => {
              const isCurrent = item.status === 'Current Degree';
              return (
                <FadeIn key={item.id} delay={index * 0.15}>
                  <div className="relative pl-14 md:pl-0">
                    {/* Timeline Node Point */}
                    <div className="absolute left-3.5 top-2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-surface shadow-md shadow-cyan-500/30 md:left-1/2">
                      <div className={`h-2.5 w-2.5 rounded-full ${isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-cyan-400'}`} />
                    </div>

                    {/* Timeline Content Card */}
                    <div
                      className={`solid-card rounded-2xl p-6 sm:p-7 md:w-[calc(50%-2rem)] ${
                        index % 2 === 0
                          ? 'md:mr-auto md:text-left'
                          : 'md:ml-auto md:text-left'
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`rounded-full px-3 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-wider ${
                            isCurrent
                              ? 'border border-cyan-500/40 bg-cyan-500/15 text-cyan-300'
                              : 'border border-border bg-surface-muted text-content-muted'
                          }`}
                        >
                          {item.status}
                        </span>
                        <span className="flex items-center gap-1 text-xs font-mono text-content-muted">
                          <Calendar className="h-3 w-3 text-cyan-400" />
                          {item.duration}
                        </span>
                      </div>

                      <h3 className="font-display text-lg sm:text-xl font-bold text-content">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-xs font-mono font-medium text-cyan-400">
                        {item.institution}
                      </p>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-content-secondary">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
