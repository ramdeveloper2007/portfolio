import { FadeIn } from './FadeIn';

export function SectionHeader({ label, title, description, align = 'center', headingId }) {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : 'text-center items-center mx-auto max-w-2xl';

  return (
    <FadeIn className={`mb-10 md:mb-14 flex flex-col gap-4 ${alignment}`}>
      {label && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {label}
        </span>
      )}
      <h2 id={headingId} className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-content sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm leading-7 text-content-secondary sm:text-base font-sans">
          {description}
        </p>
      )}
    </FadeIn>
  );
}

