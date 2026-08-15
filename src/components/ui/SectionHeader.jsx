import { FadeIn } from './FadeIn';

export function SectionHeader({ label, title, description, align = 'center' }) {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : 'text-center items-center mx-auto max-w-2xl';

  return (
    <FadeIn className={`mb-12 md:mb-16 flex flex-col gap-3 ${alignment}`}>
      {label && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-content md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-content-secondary md:text-lg">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
