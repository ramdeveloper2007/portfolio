import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { personal } from '../data/personal';
import { scrollToSection } from '../hooks/useScrollSpy';
import { ExternalLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';

const terminalLines = [
  '$ whoami',
  '> Ramprasad',
  '$ role --current',
  '> Full-Stack Developer | Software Developer',
  '$ stack --learning',
  '> Python · JavaScript · Flask',
];

const techBadges = ['Python', 'Flask', 'JavaScript', 'SQLite', 'Git'];

function HeroVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-accent/5 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-xs text-content-muted">dev-terminal</span>
        </div>

        <div className="space-y-1 p-5 font-mono text-sm">
          {terminalLines.map((line, i) => (
            <motion.div
              key={line}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
              className={line.startsWith('$') ? 'text-accent' : 'text-content-secondary'}
            >
              {line}
            </motion.div>
          ))}
          <motion.span
            animate={shouldReduceMotion ? {} : { opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="inline-block h-4 w-2 bg-accent"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {techBadges.map((badge, i) => (
          <motion.span
            key={badge}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.08 }}
            className="rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-content-secondary"
          >
            {badge}
          </motion.span>
        ))}
      </div>

      <div className="pointer-events-none absolute -right-6 -top-6 hidden h-24 w-24 rounded-2xl border border-accent/20 bg-accent/5 lg:block" />
      <div className="pointer-events-none absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-xl border border-border bg-surface-muted/50 lg:block" />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 md:pt-28"
      aria-label="Introduction"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn delay={0.1}>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
                {personal.role}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="font-display text-4xl font-bold tracking-tight text-content sm:text-5xl md:text-6xl">
                {personal.role}
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-content-secondary">
                {personal.intro}
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="mt-3 text-sm italic text-content-muted">{personal.headline}</p>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-8 flex flex-wrap gap-3">
              <button type="button" className="btn-primary" onClick={() => scrollToSection('projects')}>
                View My Projects
              </button>
              <a href={personal.resumePath} download className="btn-secondary">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <button type="button" className="btn-ghost" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </FadeIn>

            <FadeIn delay={0.35} className="mt-8 flex items-center gap-3">
              <ExternalLink href={personal.social.github} className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-accent/30 hover:text-accent" showIcon={false}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </ExternalLink>
              <ExternalLink href={personal.social.linkedin} className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-accent/30 hover:text-accent" showIcon={false}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </ExternalLink>
              <a
                href={`mailto:${personal.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary transition-colors hover:border-accent/30 hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left" className="lg:justify-self-end">
            <HeroVisual />
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-content-muted transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
