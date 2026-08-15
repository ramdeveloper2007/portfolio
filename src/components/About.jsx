import { Code2, GraduationCap, Target } from 'lucide-react';
import { aboutContent } from '../data/personal';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

export default function About() {
  const { paragraphs, developerCard } = aboutContent;

  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Who I Am"
          description="A developer in progress with a foundation in computer engineering and a focus on building real software."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <FadeIn className="lg:col-span-3">
            <div className="space-y-5">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-content-secondary md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-2">
            <div className="glass-card overflow-hidden">
              <div className="border-b border-border bg-accent-muted px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20 text-accent">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-content">Developer Profile</p>
                    <p className="text-xs text-content-muted">Ramprasad</p>
                  </div>
                </div>
              </div>

              <dl className="space-y-5 p-6">
                <div>
                  <dt className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-content-muted">
                    <GraduationCap className="h-3.5 w-3.5" />
                    Education
                  </dt>
                  <dd className="text-sm font-medium text-content">{developerCard.education}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-content-muted">
                    Current Education
                  </dt>
                  <dd className="text-sm font-medium text-content">{developerCard.currentEducation}</dd>
                </div>
                <div>
                  <dt className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-content-muted">
                    <Target className="h-3.5 w-3.5" />
                    Focus
                  </dt>
                  <dd className="text-sm font-medium text-content">{developerCard.focus}</dd>
                </div>
                <div>
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-wider text-content-muted">
                    Currently Learning
                  </dt>
                  <dd className="text-sm leading-relaxed text-content-secondary">
                    {developerCard.currentlyLearning}
                  </dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
