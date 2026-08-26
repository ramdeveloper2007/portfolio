import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Terminal, Sparkles, Code2, Database, Cpu, Layers, ExternalLink as ExtIcon } from 'lucide-react';
import { personal } from '../data/personal';
import { scrollToSection } from '../hooks/useScrollSpy';
import { ExternalLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';

const codeTabs = [
  {
    id: 'developer.ts',
    label: 'developer.ts',
    icon: Code2,
    code: `const developer: FullStackProfile = {
  name: "Ramprasad",
  role: "Full-Stack & Software Developer",
  education: "BTech Information Technology",
  institution: "KPR Institute of Eng & Tech",
  primaryFocus: [
    "Modern Web Applications",
    "Scalable Backend Systems",
    "Problem Solving & DSA"
  ],
  status: "Available for Opportunities",
  buildPhilosophy: "Clean architecture, user-first design."
};`,
  },
  {
    id: 'stack.config',
    label: 'stack.config',
    icon: Layers,
    code: `export const coreStack = {
  frontend: ["HTML5", "CSS3", "JavaScript", "React"],
  backend: ["Python", "Flask", "REST APIs"],
  languages: ["Python", "C", "C++", "Java (Learning)"],
  database: ["SQLite", "SQL", "Schema Design"],
  tooling: ["Git", "GitHub", "VS Code", "Vite"]
};`,
  },
  {
    id: 'metrics.json',
    label: 'metrics.json',
    icon: Cpu,
    code: `{
  "journey": "Diploma -> BTech IT (Lateral Entry)",
  "featuredProject": "Automatic Timetable Generator",
  "commits": "Active on GitHub",
  "focus": "Full-Stack Development & Practical Computing"
}`,
  },
];

function DeveloperLabInspector() {
  const [activeTab, setActiveTab] = useState(codeTabs[0].id);
  const shouldReduceMotion = useReducedMotion();
  const activeCode = codeTabs.find((t) => t.id === activeTab) || codeTabs[0];

  return (
    <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
      {/* Ambient background glow orb */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-transparent blur-2xl pointer-events-none" />

      {/* Main Studio Code Window (Solid dark card with micro-borders) */}
      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-studio-900 shadow-2xl">
        {/* Window Topbar */}
        <div className="flex min-w-0 flex-col gap-2 border-b border-border/80 bg-studio-950 px-3 py-3 sm:items-stretch sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-500/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            <span className="ml-1 truncate font-mono text-[11px] text-content-muted tracking-wider sm:ml-2">
              studio-lab // env:dev
            </span>
          </div>

          {/* Interactive File Tabs */}
          <div className="flex min-w-0 max-w-full flex-wrap items-center gap-1">
            {codeTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                    className={`flex min-w-0 max-w-full flex-1 items-center justify-center gap-1 rounded-lg border border-transparent px-2 py-1 font-mono text-[10px] transition-all sm:flex-none sm:gap-1.5 sm:px-2.5 sm:text-[11px] ${
                    isActive
                      ? 'bg-studio-850 text-cyan-300 border-cyan-500/30'
                      : 'text-content-muted hover:text-content-secondary hover:bg-studio-850/50'
                  }`}
                >
                  <TabIcon className="h-3 w-3" />
                  <span className="min-w-0 break-words">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Code Content Body */}
        <div className="h-[340px] min-w-0 overflow-x-auto p-4 font-mono text-xs leading-relaxed text-slate-300 sm:h-[360px] sm:p-5">
          <pre className="w-max max-w-none text-slate-200 selection:bg-cyan-500/30">
            <code>{activeCode.code}</code>
          </pre>
          <div className="mt-3 flex items-center gap-1 text-cyan-400">
            <span className="text-[11px] text-content-muted">$</span>
            <span className="inline-block h-3.5 w-1.5 bg-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Bottom Inspector Bar */}
        <div className="flex flex-wrap items-center justify-between border-t border-border/80 bg-studio-950/80 px-4 py-2.5 text-[11px] font-mono text-content-muted">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
            <span className="text-content-secondary">System Online</span>
          </div>
          <span className="text-cyan-400/90">UTF-8 • TypeScript / JSON</span>
        </div>
      </div>

      {/* Floating Selective Liquid Glass Badge */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="liquid-glass absolute -bottom-5 -left-4 sm:-left-6 hidden sm:flex items-center gap-3 rounded-2xl p-3.5 shadow-xl"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-content">Full-Stack &amp; Software Dev</p>
          <p className="text-[11px] text-cyan-300/80 font-mono">Clean Code • Real Solutions</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-surface pt-28 pb-16 md:pt-32 md:pb-24"
      aria-label="Introduction"
    >
      {/* Studio Grid Background */}
      <div className="absolute inset-0 studio-grid pointer-events-none opacity-50" />
      <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 h-80 w-80 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

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

            {/* Main Headlines */}
            <FadeIn delay={0.1}>
              <h1 className="max-w-full break-words font-display text-[clamp(2.1rem,9vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-content sm:text-5xl md:text-6xl lg:text-[3.5rem]">
                Full-Stack Developer
                <span className="mt-1 block max-w-full break-words font-display text-[clamp(1.75rem,7.5vw,2.25rem)] font-bold leading-[1.12] gradient-text sm:text-4xl md:text-5xl">
                  &amp; Software Developer
                </span>
              </h1>
            </FadeIn>

            {/* Short Bio Description */}
            <FadeIn delay={0.15}>
              <p className="mt-5 w-full max-w-xl break-words text-base leading-relaxed text-content-secondary sm:text-lg">
                BTech Information Technology student building modern web applications and practical software solutions with clean code, data structures, and continuous learning.
              </p>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.2} className="mt-8 flex w-full min-w-0 flex-wrap items-center gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                <span>View Projects</span>
                <ExtIcon className="h-4 w-4" />
              </button>

              <button
                type="button"
                className="btn-glass"
                onClick={() => scrollToSection('contact')}
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={personal.resumePath}
                download
                className="btn-secondary"
              >
                <Download className="h-4 w-4 text-content-secondary" />
                <span>Resume</span>
              </a>
            </FadeIn>

            {/* Social Links & Quick Details */}
            <FadeIn delay={0.25} className="mt-9 pt-6 border-t border-border/60 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2.5">
                <ExternalLink
                  href={personal.social.github}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-cyan-500/40 hover:text-cyan-300 transition-all hover:scale-105"
                  showIcon={false}
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </ExternalLink>
                <ExternalLink
                  href={personal.social.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-cyan-500/40 hover:text-cyan-300 transition-all hover:scale-105"
                  showIcon={false}
                >
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </ExternalLink>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary hover:border-cyan-500/40 hover:text-cyan-300 transition-all hover:scale-105"
                  aria-label="Send email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <div className="hidden sm:flex items-center gap-4 text-xs font-mono text-content-muted border-l border-border/80 pl-6">
                <div>
                  <span className="text-content-muted block">LOCATION</span>
                  <span className="text-content font-medium">Coimbatore, India</span>
                </div>
                <div>
                  <span className="text-content-muted block">DEGREE</span>
                  <span className="text-cyan-300 font-medium">BTech IT (Current)</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Developer Lab Code Inspector */}
          <div className="min-w-0 max-w-full lg:col-span-5">
            <FadeIn delay={0.2} direction="left">
              <DeveloperLabInspector />
            </FadeIn>
          </div>
        </div>

        {/* Scroll Indicator */}
        <FadeIn delay={0.4} className="mt-14 flex justify-center">
          <button
            type="button"
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-1.5 text-content-muted transition-colors hover:text-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Scroll to about section"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-content-muted group-hover:text-cyan-300">
              Explore Portfolio
            </span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-cyan-400" />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}

