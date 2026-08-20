import { FadeIn } from './FadeIn';

export function SectionHeader({ label, title, description, align = 'center' }) {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : 'text-center items-center mx-auto max-w-2xl';

  return (
    <FadeIn className={`mb-12 md:mb-16 flex flex-col gap-3.5 ${alignment}`}>
      {label && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-extrabold tracking-tight text-content sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-sm leading-relaxed text-content-secondary sm:text-base font-sans">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

