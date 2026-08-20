import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, Sparkles, ArrowUpRight, Calendar, Users, ShieldCheck, CheckCircle2, Terminal } from 'lucide-react';
import { projects, projectFilters } from '../data/projects';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';
import ProjectModal from './ProjectModal';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

function TimetableVisualMockup() {
  return (
    <div className="relative h-full min-h-[280px] w-full overflow-hidden rounded-2xl bg-studio-950 p-5 border border-border flex flex-col justify-between">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 studio-grid opacity-60 pointer-events-none" />

      {/* Top Engine Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border/80 pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cyan-400" />
          <span className="font-mono text-xs font-semibold text-content">TIMETABLE_GEN_CORE // v1.2</span>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-mono text-[10px] text-emerald-400">
          Zero Conflicts
        </span>
      </div>

      {/* Mockup Schedule Matrix Preview */}
      <div className="relative z-10 my-4 grid grid-cols-4 gap-2 text-[10px] font-mono">
        <div className="rounded-lg bg-surface-muted/60 border border-border p-2">
          <span className="text-content-muted block">09:00 - CS301</span>
          <span className="text-cyan-300 font-medium">Data Structures</span>
        </div>
        <div className="rounded-lg bg-surface-muted/60 border border-border p-2">
          <span className="text-content-muted block">10:30 - IT204</span>
          <span className="text-indigo-300 font-medium">Web Systems</span>
        </div>
        <div className="rounded-lg bg-surface-muted/60 border border-border p-2">
          <span className="text-content-muted block">12:00 - EC102</span>
          <span className="text-slate-300 font-medium">Digital Logic</span>
        </div>
        <div className="rounded-lg bg-surface-muted/60 border border-border p-2">
          <span className="text-content-muted block">02:00 - CS302</span>
          <span className="text-emerald-300 font-medium">Database Lab</span>
        </div>
      </div>

      {/* Engine Status Indicators */}
      <div className="relative z-10 flex items-center justify-between pt-3 border-t border-border/80 text-[11px] font-mono text-content-muted">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400">⚡ Constraint Solver</span>
          <span>• 3 Roles: Admin / Staff / Student</span>
        </div>
        <span className="text-slate-400">Flask + SQLite</span>
      </div>
    </div>
  );
}

function ProjectCodePlaceholder({ title, category = 'web' }) {
  return (
    <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl bg-studio-950 p-4 border border-border flex flex-col justify-between group">
      <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
        <div className="flex items-center gap-1.5 font-mono text-xs text-content-muted">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span>{title.toLowerCase().replace(/\s+/g, '-')}.app</span>
        </div>
        <span className="text-[10px] font-mono uppercase text-content-muted">Active Project</span>
      </div>

      <div className="py-2 font-mono text-[11px] text-content-muted space-y-1">
        <div className="text-cyan-400/90">&gt; Initializing application state...</div>
        <div className="text-slate-400">&gt; Connecting SQLite data models...</div>
        <div className="text-emerald-400/80">&gt; Ready on localhost:5000</div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border/60 text-[10px] font-mono text-content-muted">
        <span>Flask • Python Architecture</span>
        <span className="text-cyan-400 group-hover:underline">Inspect Details →</span>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project, onOpen }) {
  return (
    <div className="solid-card rounded-3xl overflow-hidden p-6 md:p-8 mb-10 border border-cyan-500/20 shadow-2xl relative">
      {/* Featured Header Pill */}
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-cyan-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>FEATURED FLAGSHIP PROJECT</span>
        </div>
        <span className="font-mono text-xs text-content-muted hidden sm:inline-block">
          Academic Engineering System
        </span>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-center">
        {/* Left: Interactive Visual Engine Mockup */}
        <div className="lg:col-span-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
            aria-label={`View architecture for ${project.title}`}
          >
            <TimetableVisualMockup />
          </button>
        </div>

        {/* Right: Selective Liquid-Glass Information Panel */}
        <div className="lg:col-span-6">
          <div className="liquid-glass rounded-2xl p-6 md:p-7 space-y-5">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-content tracking-tight">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-content-secondary">
                {project.description}
              </p>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <p className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-semibold">Key Capabilities</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-content-secondary">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>Conflict Prevention</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>Teacher Availability</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>Admin &amp; Staff Views</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>Manual Grid Editor</span>
                </div>
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="btn-primary"
              >
                <span>View Architecture &amp; Details</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>

              {!isPlaceholderLink(project.github) && (
                <ExtLink href={project.github} className="btn-secondary" showIcon={false}>
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </ExtLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegularProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="solid-card rounded-2xl overflow-hidden p-6 flex flex-col justify-between group"
    >
      <div>
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="w-full block text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
          aria-label={`View details for ${project.title}`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              className="h-48 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <ProjectCodePlaceholder title={project.title} />
          )}
        </button>

        <div className="mt-5">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-lg font-bold text-content group-hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="mt-2.5 text-xs leading-relaxed text-content-secondary line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-badge text-[11px] py-0.5">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] font-mono text-content-muted self-center">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-xs font-mono font-medium text-cyan-300 hover:text-cyan-200 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>Project Details</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {!isPlaceholderLink(project.github) && (
            <ExtLink href={project.github} className="text-content-secondary hover:text-cyan-300" showIcon={false}>
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </ExtLink>
          )}
          {!isPlaceholderLink(project.liveDemo) && (
            <ExtLink href={project.liveDemo} className="text-content-secondary hover:text-cyan-300" showIcon={false}>
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Live Demo</span>
            </ExtLink>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = useMemo(() => {
    return projects.find((p) => p.featured) || projects[0];
  }, []);

  const otherProjects = useMemo(() => {
    let list = projects.filter((p) => !p.featured);
    if (activeFilter !== 'all') {
      list = projects.filter((p) => p.categories.includes(activeFilter));
    }
    return list;
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding relative bg-studio-950/80" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeader
          label="Project Showcase"
          title="Featured Software & Web Applications"
          description="A curated catalog of real software applications, focusing on scalable backends, user-focused workflows, and clean code."
        />

        {/* Highlighted Flagship Project (Shown when 'all' is active) */}
        {activeFilter === 'all' && featuredProject && (
          <FadeIn>
            <FeaturedProjectCard project={featuredProject} onOpen={setSelectedProject} />
          </FadeIn>
        )}

        {/* Filter Controls */}
        <FadeIn className="mb-8">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project categories">
            {projectFilters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'border border-cyan-500/40 bg-cyan-500/15 text-cyan-300 shadow-md shadow-cyan-500/10'
                      : 'border border-border bg-surface-card text-content-secondary hover:border-cyan-500/30 hover:text-content'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Project Grid for Other Projects */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project) => (
              <RegularProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {otherProjects.length === 0 && (
          <p className="py-12 text-center text-xs font-mono text-content-muted">
            No projects found for the selected category.
          </p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

