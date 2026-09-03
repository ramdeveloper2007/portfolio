import { Code2, Server, Database, Layers } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const capabilities = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive and modern user interfaces.',
    description:
      'Designing clean, intuitive, and high-performance user interfaces with responsive layout principles, semantic HTML5, modern CSS3 animations, and interactive JavaScript.',
    icon: Code2,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Tailwind CSS'],
    accent: 'from-cyan-500/20 to-sky-500/20',
    iconColor: 'text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/40',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    subtitle: 'Backend applications, APIs and application logic.',
    description:
      'Developing structured server-side architectures, RESTful API endpoints, request routing, authentication workflows, and robust business logic with Python and Flask.',
    icon: Server,
    tech: ['Python', 'Flask', 'REST APIs', 'Routing Logic', 'Authentication'],
    accent: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-indigo-400',
    borderColor: 'group-hover:border-indigo-500/40',
  },
  {
    id: 'database',
    title: 'Database Development',
    subtitle: 'Data management and application databases.',
    description:
      'Designing normalized relational schemas, handling transactional queries, creating relational mappings, and ensuring database integrity and persistence with SQL and SQLite.',
    icon: Database,
    tech: ['SQL', 'SQLite', 'Schema Design', 'Data Integrity', 'Query Optimization'],
    accent: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/40',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    subtitle: 'Complete applications connecting frontend, backend and database.',
    description:
      'Engineering complete end-to-end web applications by integrating sleek frontend interfaces with scalable backend microservices and reliable database layers into unified systems.',
    icon: Layers,
    tech: ['Full-Stack Integration', 'Flask + SQLite', 'End-to-End Apps', 'MVC Architecture'],
    accent: 'from-cyan-500/20 to-indigo-500/20',
    iconColor: 'text-cyan-300',
    borderColor: 'group-hover:border-cyan-400/50',
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="what-i-do-heading">
      <div className="section-container">
        <SectionHeader
          label="Core Specializations"
          title="What I Do"
          headingId="what-i-do-heading"
          description="Delivering complete, scalable software solutions across every tier of modern web engineering."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.id}>
                <div
                  data-card-effect
                  className={`solid-card rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${item.borderColor}`}
                >
                  <div>
                    {/* Card Top Row: Icon & Tag */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.accent} ${item.iconColor} border border-border shadow-md transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted rounded-full border border-border bg-surface-muted px-2.5 py-1">
                        TIER // {item.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Titles */}
                    <h3 className="font-display text-xl font-bold text-content group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono font-medium text-cyan-400/90">
                      {item.subtitle}
                    </p>

                    {/* Detailed Description */}
                    <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-content-secondary">
                      {item.description}
                    </p>
                  </div>

                  {/* Technologies Badges */}
                  <div className="mt-6 pt-4 border-t border-border/70">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span key={t} className="tech-badge text-[11px] py-0.5">
                          {t}
                        </span>
                      ))}
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
