import { currentlyLearning } from '../data/education';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const statusStyles = {
  Learning: 'from-violet-500/20 to-violet-500/5 border-violet-500/20',
  Intermediate: 'from-accent/20 to-accent/5 border-accent/20',
};

export default function CurrentlyLearning() {
  return (
    <section className="section-padding bg-surface-muted/30" aria-labelledby="learning-heading">
      <div className="section-container">
        <SectionHeader
          label="Growth"
          title="Currently Learning"
          description="Topics and technologies I'm actively studying to grow as a software developer."
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentlyLearning.map((item) => (
            <StaggerItem key={item.name}>
              <FadeIn>
                <div
                  className={`glass-card relative overflow-hidden border bg-gradient-to-br p-5 transition-all duration-300 hover:shadow-lg ${
                    statusStyles[item.status] || statusStyles.Learning
                  }`}
                >
                  <h3 className="font-display text-sm font-semibold text-content">{item.name}</h3>
                  <div className="mt-4">
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="text-content-muted">Status</span>
                      <span className="font-medium text-accent">{item.status}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-muted">
                      <div
                        className={`h-full rounded-full ${
                          item.status === 'Intermediate' ? 'w-3/5 bg-accent' : 'w-2/5 bg-violet-500'
                        }`}
                        role="presentation"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
