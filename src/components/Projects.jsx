import { forwardRef, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, Calendar, CheckCircle2, Terminal } from 'lucide-react';
import { projects, projectFilters } from '../data/projects';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';
import ProjectModal from './ProjectModal';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

function TimetableVisualMockup() {
  return (
    <div className="solid-card relative h-full min-h-[300px] w-full overflow-hidden rounded-2xl p-5 border border-border bg-surface-card flex flex-col justify-between group">
      {/* Decorative Matrix Grid */}
      <div className="absolute inset-0 studio-grid opacity-50 pointer-events-none" />

      {/* Top Engine Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-accent" />
          <span className="font-mono text-xs font-semibold text-content">TIMETABLE_GEN_CORE // v2.0</span>
        </div>
        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Zero Conflicts
        </span>
      </div>

      {/* Interactive Schedule Matrix Preview */}
      <div className="relative z-10 my-4 grid grid-cols-2 gap-2 text-[10px] font-mono sm:grid-cols-4">
        <div className="rounded-lg bg-surface-muted border border-border p-2.5 transition-all duration-200 group-hover:border-cyan-500/40">
          <span className="text-content-muted block text-[9px]">09:00 - CS301</span>
          <span className="text-accent-content font-bold">Data Structures</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Room 204 • Dr. R</span>
        </div>
        <div className="rounded-lg bg-surface-muted border border-border p-2.5 transition-all duration-200 group-hover:border-indigo-500/40">
          <span className="text-content-muted block text-[9px]">10:30 - IT204</span>
          <span className="text-indigo-600 dark:text-indigo-300 font-bold">Web Systems</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Lab 3 • Prof. S</span>
        </div>
        <div className="rounded-lg bg-surface-muted border border-border p-2.5 transition-all duration-200 group-hover:border-cyan-500/40">
          <span className="text-content-muted block text-[9px]">12:00 - CS202</span>
          <span className="text-content font-bold">Database Schema</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Room 102 • Dr. K</span>
        </div>
        <div className="rounded-lg bg-surface-muted border border-border p-2.5 transition-all duration-200 group-hover:border-emerald-500/40">
          <span className="text-content-muted block text-[9px]">02:00 - IT302</span>
          <span className="text-emerald-600 dark:text-emerald-300 font-bold">Python Backend</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Lab 1 • Prof. M</span>
        </div>
      </div>

      {/* Engine Status Indicators */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-border text-[11px] font-mono text-content-muted">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <span className="text-accent font-medium">⚡ Constraint Solver Active</span>
          <span>• 3 Roles: Admin / Staff / Student</span>
        </div>
        <span className="text-content-secondary font-medium">Flask + SQLite</span>
      </div>
    </div>
  );
}

function ProjectCodePlaceholder({ title }) {
  return (
    <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-2xl bg-surface-muted border border-border p-4 flex flex-col justify-between group">
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-1.5 font-mono text-xs text-content-secondary font-medium">
          <Terminal className="h-3.5 w-3.5 text-accent" />
          <span>{title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.app</span>
        </div>
        <span className="text-[10px] font-mono uppercase text-content-muted font-semibold">Full-Stack App</span>
      </div>

      <div className="py-2 font-mono text-[11px] text-content-secondary space-y-1">
        <div className="text-accent font-medium">&gt; Initializing application state...</div>
        <div className="text-content-secondary">&gt; Connecting SQLite data models...</div>
        <div className="text-emerald-600 dark:text-emerald-400 font-medium">&gt; Server ready on localhost:5000</div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border text-[10px] font-mono text-content-muted">
        <span>Flask • Python Architecture</span>
        <span className="text-accent font-semibold group-hover:underline">Inspect Details →</span>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project, onOpen }) {
  return (
    <div data-motion-item data-project-card data-card-effect className="solid-card rounded-3xl overflow-hidden p-6 md:p-8 mb-10 border border-cyan-500/25 shadow-2xl relative bg-surface-card">
      {/* Featured Header Pill */}
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-accent-content">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
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

        {/* Right: Detailed Specification & Feature Matrix */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-content tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-content-secondary">
              {project.description}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-2.5 pt-3 border-t border-border">
            <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
              Core Capabilities &amp; Architecture
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-content-secondary">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Authentication &amp; Roles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Teacher Availability</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Conflict Prevention</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Manual Grid Editor</span>
              </div>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className="btn-primary"
            >
              <span>View Details &amp; Architecture</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {!isPlaceholderLink(project.github) && (
              <ExtLink href={project.github} className="btn-secondary" showIcon={false}>
                <Github className="h-4 w-4" />
                <span>GitHub Repository</span>
              </ExtLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const RegularProjectCard = forwardRef(function RegularProjectCard({ project, onOpen }, ref) {
  return (
    <motion.article
      ref={ref}
      data-motion-item
      data-project-card
      data-card-effect
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="solid-card rounded-2xl overflow-hidden p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1 bg-surface-card"
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
          <h3 className="font-display text-lg font-bold text-content group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="mt-2 text-xs leading-relaxed text-content-secondary line-clamp-3">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-badge text-[11px] py-0.5">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpen(project)}
          className="text-xs font-mono font-medium text-accent-content hover:underline transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>View Details</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {!isPlaceholderLink(project.github) && (
            <ExtLink href={project.github} className="text-content-secondary hover:text-accent" showIcon={false}>
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </ExtLink>
          )}
          {!isPlaceholderLink(project.liveDemo) && (
            <ExtLink href={project.liveDemo} className="text-content-secondary hover:text-accent" showIcon={false}>
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Live Demo</span>
            </ExtLink>
          )}
        </div>
      </div>
    </motion.article>
  );
});

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProject = useMemo(() => {
    return projects.find((p) => p.featured) || projects[0];
  }, []);

  const otherProjects = useMemo(() => {
    let list = projects.filter((p) => !p.featured);
    if (activeFilter === 'flagship') {
      return [];
    }
    if (activeFilter !== 'all') {
      list = list.filter((p) => p.categories.includes(activeFilter));
    }
    return list;
  }, [activeFilter]);

  return (
    <section id="projects" data-motion-section className="section-padding relative bg-surface border-t border-border/80" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeader
          label="Software Showcase"
          title="Featured Projects"
          headingId="projects-heading"
          description="A showcase of real software applications, focusing on scalable backend services, conflict-free scheduling algorithms, and responsive user workflows."
        />

        {/* Featured Flagship Project */}
        {(activeFilter === 'all' || activeFilter === 'flagship') && featuredProject && (
          <FadeIn>
            <FeaturedProjectCard project={featuredProject} onOpen={setSelectedProject} />
          </FadeIn>
        )}

        {/* Filter Tab Controls */}
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
                      ? 'border border-cyan-500/40 bg-cyan-500/15 text-accent-content shadow-md shadow-cyan-500/10 font-semibold'
                      : 'border border-border bg-surface-card text-content-secondary hover:border-cyan-500/30 hover:text-content'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Supporting Projects Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {otherProjects.map((project) => (
              <RegularProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {otherProjects.length === 0 && activeFilter !== 'flagship' && (
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
