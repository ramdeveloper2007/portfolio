import { Code2, GraduationCap, Target, Cpu, Sparkles, Terminal, BookOpen, CheckCircle2 } from 'lucide-react';
import { aboutContent, personal } from '../data/personal';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const infoCards = [
  {
    id: 'btech-it',
    title: 'BTech IT Student',
    subtitle: 'KPR Institute of Engineering and Technology',
    detail: 'Lateral entry after Computer Engineering Diploma. Deepening computer science & software fundamentals.',
    icon: GraduationCap,
    tag: 'Academic',
  },
  {
    id: 'fullstack-dev',
    title: 'Full-Stack Developer',
    subtitle: 'Python, Flask, JavaScript & React',
    detail: 'Building responsive web apps, structured REST APIs, and database-driven solutions with clean UX.',
    icon: Code2,
    tag: 'Primary Role',
  },
  {
    id: 'software-dev',
    title: 'Software Developer',
    subtitle: 'C, C++, Data Structures & DSA',
    detail: 'Focusing on algorithmic thinking, memory management, and practical software design patterns.',
    icon: Cpu,
    tag: 'Core Focus',
  },
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    subtitle: 'Practical Real-World Systems',
    detail: 'Passionate about engineering automated tools like the Academic Timetable Generator.',
    icon: Target,
    tag: 'Mindset',
  },
];

export default function About() {
  const { paragraphs } = aboutContent;

  return (
    <section id="about" className="section-padding relative bg-studio-950/60" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeader
          label="Profile & Philosophy"
          title="Engineering Mindset & Background"
          description="A dedicated Full-Stack & Software Developer with a strong technical foundation from diploma through BTech degree."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          {/* Left Column: Editorial Narrative (Clean Solid Presentation) */}
          <FadeIn className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-border bg-surface-card p-6 md:p-8 space-y-5">
              <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
                <Terminal className="h-4 w-4" />
                <span>ABOUT_RAMPRASAD.md</span>
              </div>

              {paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-base leading-relaxed text-content-secondary font-sans"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-border/80 flex flex-wrap gap-4 text-xs font-mono text-content-muted">
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Clean Architecture</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Full-Stack Lifecycle</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" />
                  <span>Continuous Learning</span>
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
                    <div className="solid-card rounded-2xl p-5 h-full flex flex-col justify-between group">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/15 transition-all">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-content-muted px-2 py-0.5 rounded-full border border-border bg-surface-muted">
                            {card.tag}
                          </span>
                        </div>

                        <h3 className="font-display text-base font-bold text-content group-hover:text-cyan-300 transition-colors">
                          {card.title}
                        </h3>
                        <p className="text-xs font-medium text-cyan-400/90 mt-1">
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

