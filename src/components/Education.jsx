import { BookOpen, Briefcase, Code, Folder, Globe, GraduationCap, Rocket, Binary } from 'lucide-react';
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
    <section id="education" className="section-padding bg-surface-muted/30" aria-labelledby="education-heading">
      <div className="section-container">
        <SectionHeader
          label="Education"
          title="Academic Background"
          description="My educational path from diploma to degree, building depth in computer science and software development."
        />

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {educationTimeline.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.1}>
              <div className="relative mb-10 pl-16 md:pl-0 md:even:text-right">
                <div className="absolute left-4 top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 border-accent bg-surface md:left-1/2 md:-translate-x-1/2">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                </div>

                <div className="glass-card p-6 md:mx-auto md:max-w-md md:even:ml-auto md:even:mr-0 md:odd:mr-auto">
                  <div className="mb-2 flex flex-wrap items-center gap-2 md:even:justify-end">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        item.status === 'Current'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-surface-muted text-content-muted'
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-xs text-content-muted">{item.duration}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-content">{item.degree}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{item.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-content-secondary">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="section-padding" aria-labelledby="journey-heading">
      <div className="section-container">
        <SectionHeader
          label="Journey"
          title="My Development Journey"
          description="The path I'm taking from foundational education to becoming a professional software developer."
        />

        <div className="mx-auto max-w-3xl">
          {journeySteps.map((step, index) => {
            const Icon = iconMap[step.icon] || Code;
            const isLast = index === journeySteps.length - 1;

            return (
              <FadeIn key={step.id} delay={index * 0.05}>
                <div className="flex flex-col items-center">
                  <div
                    className={`glass-card flex w-full max-w-md items-center gap-4 p-5 transition-all duration-300 hover:border-accent/25 ${
                      step.placeholder ? 'border-dashed opacity-70' : ''
                    }`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-content">{step.title}</p>
                      {step.placeholder && (
                        <p className="mt-0.5 text-xs text-content-muted">Upcoming milestone</p>
                      )}
                    </div>
                  </div>

                  {!isLast && (
                    <div className="my-2 flex flex-col items-center py-1 text-content-muted" aria-hidden="true">
                      <div className="h-6 w-px bg-border" />
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  )}
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
