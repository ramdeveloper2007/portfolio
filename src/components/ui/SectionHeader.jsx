import { FadeIn } from './FadeIn';

export function SectionHeader({ label, title, description, align = 'center', headingId }) {
  const alignment =
    align === 'left'
      ? 'text-left items-start'
      : 'text-center items-center mx-auto max-w-2xl';

  return (
    <FadeIn className={`mb-10 md:mb-14 flex flex-col gap-4 ${alignment}`}>
      {label && (
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />
          </span>
          {label}
        </span>
      )}
      <h2
        id={headingId}
        className="max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight text-content sm:text-4xl md:text-5xl"
      >
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

export default SectionHeader;
