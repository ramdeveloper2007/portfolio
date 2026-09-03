import { GraduationCap, Cpu, Terminal, CheckCircle2, Layers, BookOpen } from 'lucide-react';
import { aboutContent } from '../data/personal';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const infoCards = [
  {
    id: 'btech-it',
    title: 'BTech Information Technology',
    subtitle: 'KPR Institute of Engineering and Technology',
    detail: 'Pursuing BTech IT through lateral entry after completing Diploma in Computer Engineering. Deepening computer science & software architecture fundamentals.',
    icon: GraduationCap,
    tag: 'Current Degree',
  },
  {
    id: 'diploma',
    title: 'Diploma in Computer Engineering',
    subtitle: 'Sri Krishna Polytechnic College',
    detail: 'Completed Diploma, establishing strong foundational mastery in C, C++, computer hardware, and system programming fundamentals.',
    icon: BookOpen,
    tag: 'Completed',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Development',
    subtitle: 'Python, Flask, JavaScript, React & SQLite',
    detail: 'Designing responsive frontend interfaces, structuring clean RESTful API services, and implementing persistent relational database models.',
    icon: Layers,
    tag: 'Primary Role',
  },
  {
    id: 'software-dev',
    title: 'Software Development',
    subtitle: 'Algorithms, Data Structures & Problem Solving',
    detail: 'Focusing on algorithmic logic, data structures, clean code principles, and engineering reliable software solutions.',
    icon: Cpu,
    tag: 'Core Focus',
  },
];

export default function About() {
  const { paragraphs } = aboutContent;

  return (
    <section id="about" className="section-padding relative bg-surface" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeader
          label="Profile & Mindset"
          title="About Me"
          headingId="about-heading"
          description="A dedicated Full-Stack Developer and aspiring Software Developer with a Computer Engineering foundation, building end-to-end web applications."
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          {/* Left Column: Editorial Narrative in Solid Card */}
          <FadeIn className="lg:col-span-6 space-y-6">
            <div className="solid-card rounded-3xl p-6 sm:p-8 space-y-5 border border-border">
              <div className="flex items-center justify-between pb-3 border-b border-border/80">
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                  <Terminal className="h-4 w-4" />
                  <span>ABOUT_RAMPRASAD.md</span>
                </div>
                <span className="text-[10px] font-mono text-content-muted uppercase tracking-wider">
                  Full-Stack Profile
                </span>
              </div>

              {paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base leading-relaxed text-content-secondary font-sans"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-border/80 flex flex-wrap gap-3.5 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Full-Stack Integration</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span>Continuous Growth</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: 4 Modern Information Cards */}
          <div className="lg:col-span-6">
            <StaggerContainer className="grid gap-4 sm:grid-cols-2">
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <StaggerItem key={card.id}>
                    <div className="solid-card rounded-2xl p-5 h-full flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1">
                      <div>
                        <div className="flex items-center justify-between mb-3.5">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-content-muted px-2 py-0.5 rounded-full border border-border bg-surface-muted">
                            {card.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-base font-bold text-content group-hover:text-cyan-300 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs font-mono font-medium text-cyan-400/90 mt-1">
                          {card.subtitle}
                        </p>
                        <p className="text-xs leading-relaxed text-content-secondary mt-2.5">
                          {card.detail}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
