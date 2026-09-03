import { BookOpen, Briefcase, Code, Folder, Globe, GraduationCap, Rocket, Binary, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { educationTimeline, journeySteps } from '../data/education';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const iconMap = {
  graduation: GraduationCap,
  book: BookOpen,
  code: Code,
  binary: Binary,
  globe: Globe,
  folder: Folder,
  briefcase: Briefcase,
  rocket: Rocket,
};

export function Education() {
  return (
    <section id="education" className="section-padding relative bg-surface" aria-labelledby="education-heading">
      <div className="section-container">
        <SectionHeader
          label="Academic Foundation"
          title="Education &amp; Credentials"
          headingId="education-heading"
          description="My educational path from diploma in computer engineering to BTech IT degree, mastering computer science fundamentals and software architecture."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical Timeline Track */}
          <div className="absolute left-6 top-3 bottom-3 w-px bg-gradient-to-b from-cyan-500 via-indigo-500/50 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12">
            {educationTimeline.map((item, index) => {
              const isCurrent = item.status === 'Current';
              return (
                <FadeIn key={item.id} delay={index * 0.15}>
                  <div className="relative pl-14 md:pl-0">
                    {/* Timeline Node Point */}
                    <div className="absolute left-3.5 top-1 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-cyan-400 bg-surface shadow-md shadow-cyan-500/30 md:left-1/2">
                      <div className={`h-2.5 w-2.5 rounded-full ${isCurrent ? 'bg-cyan-400 animate-ping' : 'bg-cyan-400'}`} />
                    </div>

                    {/* Timeline Content Card */}
                    <div
                      className={`solid-card rounded-2xl p-6 md:w-[calc(50%-2rem)] ${
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

                      <h3 className="font-display text-lg font-bold text-content">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-cyan-400">
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

export function Journey() {
  return (
    <section id="journey" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="journey-heading">
      <div className="section-container">
        <SectionHeader
          label="Progressive Roadmap"
          title="Developer Evolution Journey"
          headingId="journey-heading"
          description="The progression path from engineering fundamentals to full-stack application development and professional software creation."
        />

        <div className="mx-auto max-w-4xl grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Code;

            return (
              <FadeIn key={step.id} delay={index * 0.05}>
                <div
                  className={`solid-card rounded-2xl p-5 h-full flex flex-col justify-between group ${
                    step.placeholder ? 'border-dashed opacity-75' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-content-muted">
                      0{step.id}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-sm font-bold text-content group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[11px] font-mono text-content-muted">
                      {step.status === 'goal' ? 'Future Direction' : step.status === 'learning' ? 'Currently Learning' : step.status === 'current' ? 'Current Focus' : 'Built Through Study & Projects'}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;

