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
          title="What I Build"
          headingId="what-i-do-heading"
          description="Focused on practical software engineering, responsive product experiences, and full-stack problem solving."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {[
            {
              id: '01',
              title: 'Full-Stack Applications',
              description: 'Building complete products that connect user-facing interfaces to business logic and database-backed features.',
            },
            {
              id: '02',
              title: 'Modern Web Experiences',
              description: 'Creating responsive, clean, and intuitive interfaces with strong frontend structure and user flow design.',
            },
            {
              id: '03',
              title: 'Real-World Software Projects',
              description: 'Developing practical systems that solve concrete problems with maintainable architecture and clear functionality.',
            },
            {
              id: '04',
              title: 'Continuous Learning',
              description: 'Expanding my technical depth through new frameworks, system fundamentals, and software engineering concepts.',
            },
          ].map((item) => (
            <StaggerItem key={item.id}>
              <div className="solid-card h-full rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-content-muted">{item.id}</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </div>
                <h3 className="font-display text-xl font-bold text-content">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-content-secondary">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
