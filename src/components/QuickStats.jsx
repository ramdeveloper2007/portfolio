import { quickStats } from '../data/personal';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';

export default function QuickStats() {
  return (
    <section className="border-y border-border bg-surface-muted/50 py-10" aria-label="Quick statistics">
      <div className="section-container">
        <StaggerContainer className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {quickStats.map((stat) => (
            <StaggerItem key={stat.label}>
              <FadeIn>
                <div className="glass-card flex flex-col items-center px-6 py-8 text-center">
                  <span className="font-display text-3xl font-bold text-accent md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm text-content-secondary">{stat.label}</span>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
