import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, ExternalLink as ExtIcon, Terminal, User } from 'lucide-react';
import { personal } from '../data/personal';
import { scrollToSection } from '../hooks/useScrollSpy';
import { ExternalLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';
import { ProfilePhotoContent } from './ProfilePhoto';

const codeSnippet = `const developer: DeveloperProfile = {
  name: "Ramprasad",
  roles: [
    "Full-Stack Developer",
    "Aspiring Software Developer"
  ],
  degree: "BTech Information Technology (Current)",
  diploma: "Diploma in Computer Engineering",
  coreStack: {
    frontend: ["HTML5", "CSS3", "JavaScript", "React"],
    backend: ["Python", "Flask", "REST APIs"],
    database: ["SQL", "SQLite"],
    languages: ["C", "C++", "Python", "Java (Learning)"]
  },
  flagshipProject: "Automatic Timetable Generator",
  motto: "Building Modern Web Experiences & Turning Ideas Into Real Applications."
};`;

export default function Hero({ photoUrl = null }) {
  const [viewMode, setViewMode] = useState('portrait'); // 'portrait' or 'terminal'
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-surface pt-28 pb-16 md:pt-36 md:pb-24"
      aria-label="Introduction"
    >
      {/* Subtle Studio Grid Overlay */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-40" />

      <div className="section-container relative z-10">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Hero Content */}
          <div className="min-w-0 max-w-full lg:col-span-7">
            {/* Top Eyebrow Tag */}
            <FadeIn delay={0.05}>
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="status-badge font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4] animate-ping" />
                  HELLO, I'M RAMPRASAD
                </span>
              </div>
            </FadeIn>

            {/* Main Heading */}
            <FadeIn delay={0.12}>
              <h1 className="max-w-full break-words font-display text-[clamp(2.2rem,8.5vw,3.4rem)] font-extrabold leading-[1.08] tracking-tight text-content sm:text-5xl md:text-6xl lg:text-[3.6rem]">
                Ramprasad
                <span className="mt-1 block max-w-full break-words font-display text-[clamp(1.6rem,6.5vw,2.4rem)] font-bold leading-[1.12] gradient-text sm:text-4xl md:text-5xl">
                  Full-Stack Developer &amp; Aspiring Software Developer
                </span>
              </h1>
            </FadeIn>

            {/* Tagline */}
            <FadeIn delay={0.18}>
              <p className="mt-4 max-w-xl text-sm font-semibold leading-relaxed text-cyan-600 dark:text-cyan-300 sm:text-base font-sans">
                {personal.tagline}
              </p>
            </FadeIn>

            {/* Bio Description */}
            <FadeIn delay={0.22}>
              <p className="mt-3.5 w-full max-w-xl break-words text-sm leading-relaxed text-content-secondary sm:text-base">
                {personal.intro}
              </p>
            </FadeIn>

            {/* Action CTAs */}
            <FadeIn delay={0.28} className="mt-8 flex w-full min-w-0 flex-wrap items-center gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View My Work</span>
                <ExtIcon className="h-4 w-4" />
              </button>

              <a
                href={personal.resumePath}
                download
                className="btn-secondary"
              >
                <Download className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                className="btn-glass"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Let's Connect</span>
              </button>
            </FadeIn>

            {/* Social Links & Quick Facts */}
            <FadeIn delay={0.34} className="mt-9 pt-6 border-t border-border/60 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2.5">
                <ExternalLink
                  href={personal.social.github}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:scale-105"
                  showIcon={false}
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </ExternalLink>
                <ExternalLink
                  href={personal.social.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:scale-105"
                  showIcon={false}
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </ExternalLink>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all hover:scale-105"
                  aria-label="Send email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-5 text-xs font-mono text-content-muted border-l border-border/80 pl-6">
                <div>
                  <span className="text-content-muted block text-[10px] uppercase">LOCATION</span>
                  <span className="text-content font-medium">Coimbatore, India</span>
                </div>
                <div>
                  <span className="text-content-muted block text-[10px] uppercase">CURRENT STATUS</span>
                  <span className="text-cyan-600 dark:text-cyan-300 font-medium">BTech IT (Lateral Entry)</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Locked Constant-Sized Visual Container */}
          <div className="min-w-0 max-w-full lg:col-span-5">
            <FadeIn delay={0.25} direction="left">
              <div className="space-y-3">
                {/* Visual View Mode Toggle */}
                <div className="flex justify-center lg:justify-end">
                  <div className="inline-flex rounded-xl border border-border bg-surface-card p-1 shadow-md">
                    <button
                      type="button"
                      onClick={() => setViewMode('portrait')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-xs transition-all ${
                        viewMode === 'portrait'
                          ? 'bg-cyan-500/15 text-accent-content border border-cyan-500/30 font-semibold'
                          : 'text-content-muted hover:text-content'
                      }`}
                    >
                      <User className="h-3.5 w-3.5" />
                      <span>Portrait Frame</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode('terminal')}
                      className={`flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-xs transition-all ${
                        viewMode === 'terminal'
                          ? 'bg-cyan-500/15 text-accent-content border border-cyan-500/30 font-semibold'
                          : 'text-content-muted hover:text-content'
                      }`}
                    >
                      <Terminal className="h-3.5 w-3.5" />
                      <span>Code Spec</span>
                    </button>
                  </div>
                </div>

                {/* Constant-Sized Card Container (Strictly locked dimensions in both modes) */}
                <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px]">
                  {/* Outer Ambient Multi-Layer Radial Glow */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/15 to-transparent blur-2xl pointer-events-none" />

                  {/* Main Constant-Sized Frame */}
                  <div className="solid-card relative h-[480px] sm:h-[510px] w-full flex flex-col justify-between overflow-hidden rounded-3xl border border-border-strong bg-surface-card shadow-2xl">
                    {/* Locked Top Header Bar */}
                    <div className="h-11 shrink-0 flex items-center justify-between border-b border-border bg-surface-elevated px-4 py-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 font-mono text-[10px] tracking-wider text-content-muted">
                          {viewMode === 'portrait' ? 'portrait // developer_id' : 'developer.ts // spec'}
                        </span>
                      </div>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] text-accent font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4] animate-pulse" />
                        {viewMode === 'portrait' ? 'ONLINE' : 'TypeScript'}
                      </span>
                    </div>

                    {/* Locked Middle Body Canvas (Transitions smoothly with zero container jump) */}
                    <div className="flex-1 min-h-0 w-full relative overflow-hidden bg-surface">
                      <AnimatePresence mode="wait">
                        {viewMode === 'portrait' ? (
                          <motion.div
                            key="portrait"
                            initial={shouldReduceMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="h-full w-full p-4 sm:p-5 flex items-center justify-center"
                          >
                            <ProfilePhotoContent photoUrl={photoUrl} />
                          </motion.div>
                        ) : (
                          <motion.div
                            key="terminal"
                            initial={shouldReduceMotion ? false : { opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="h-full w-full overflow-x-auto overflow-y-auto p-4 sm:p-5 font-mono text-xs leading-relaxed text-content-secondary bg-surface-muted/50"
                          >
                            <pre className="w-max max-w-none text-content selection:bg-cyan-500/30">
                              <code>{codeSnippet}</code>
                            </pre>
                            <div className="mt-3 flex items-center gap-1 text-accent">
                              <span className="text-[11px] text-content-muted">$</span>
                              <span className="inline-block h-3.5 w-1.5 bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Locked Bottom Bar */}
                    <div className="h-10 shrink-0 flex items-center justify-between border-t border-border bg-surface-elevated px-4 py-2 text-[11px] font-mono text-content-muted">
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="text-content-secondary">
                          {viewMode === 'portrait' ? 'BTech IT • Coimbatore, IN' : '● Compiled Clean'}
                        </span>
                      </div>
                      <span className="text-accent font-semibold">
                        {viewMode === 'portrait' ? 'Software Dev' : 'Full-Stack Active'}
                      </span>
                    </div>
                  </div>

                  {/* Floating Selective Liquid Glass Badge (Persistent across both views) */}
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="liquid-glass absolute -bottom-4 -left-3 sm:-left-5 hidden xs:flex items-center gap-3 rounded-2xl p-3 shadow-xl pointer-events-none"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-accent border border-cyan-500/30">
                      <Sparkles className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-content">Full-Stack Architecture</p>
                      <p className="text-[10px] text-accent font-mono">Frontend • Backend • Database</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <FadeIn delay={0.45} className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-1.5 text-content-muted transition-colors hover:text-cyan-500 dark:hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Scroll to about section"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted group-hover:text-accent">
              Explore Portfolio
            </span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-cyan-500 dark:text-cyan-400" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
