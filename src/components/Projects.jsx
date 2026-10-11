import { forwardRef, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects, projectFilters } from '../data/projects';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';
import ProjectModal from './ProjectModal';
import { ProjectPreviewVisual } from './ProjectPreviews';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

function FeaturedProjectCard({ project, onOpen }) {
  return (
    <div
      data-motion-item
      data-project-card
      data-card-effect
      className="solid-card rounded-3xl overflow-hidden p-6 md:p-8 mb-10 border border-cyan-500/30 shadow-2xl relative bg-surface-card shadow-cyan-950/20"
    >
      {/* Featured Header Pill */}
      <div className="flex items-center justify-between mb-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono font-semibold text-accent-content shadow-[0_0_12px_rgba(6,182,212,0.2)]">
          <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
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
            data-cursor-label="VIEW"
            onClick={(e) => onOpen(project, e.currentTarget.closest('[data-project-card]'))}
            className="w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
            aria-label={`View architecture for ${project.title}`}
          >
            <ProjectPreviewVisual project={project} />
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
              data-magnetic
              data-cursor-label="DETAILS"
              onClick={(e) => onOpen(project, e.currentTarget.closest('[data-project-card]'))}
              className="btn-primary"
            >
              <span>View Details &amp; Architecture</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>

            {!isPlaceholderLink(project.github) && (
              <ExtLink
                href={project.github}
                data-magnetic
                data-cursor-label="REPO"
                className="btn-secondary"
                showIcon={false}
              >
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
      data-cursor-label="VIEW"
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => {
        if (e.target.closest('a')) return;
        const card = e.currentTarget.closest('[data-project-card]');
        onOpen(project, card);
      }}
      className="solid-card rounded-2xl overflow-hidden p-6 flex flex-col justify-between group cursor-pointer transition-[border-color,box-shadow,background-color] duration-300 bg-surface-card border border-border hover:border-cyan-500/40 shadow-lg hover:shadow-cyan-950/20"
    >
      <div>
        <div
          className="w-full block text-left rounded-xl"
          aria-label={`View details for ${project.title}`}
        >
          <ProjectPreviewVisual project={project} />
        </div>

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
          onClick={(e) => {
            e.stopPropagation();
            const card = e.currentTarget.closest('[data-project-card]');
            onOpen(project, card);
          }}
          className="text-xs font-mono font-medium text-accent-content hover:underline transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <span>View Details</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </button>

        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
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
  const [originElement, setOriginElement] = useState(null);

  const handleOpenProject = (project, element) => {
    setOriginElement(element);
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setOriginElement(null);
  };

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
            <FeaturedProjectCard project={featuredProject} onOpen={handleOpenProject} />
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
                  data-magnetic
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'border border-cyan-500/50 bg-cyan-500/20 text-accent-content shadow-[0_0_12px_rgba(6,182,212,0.2)] font-semibold'
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
              <RegularProjectCard key={project.id} project={project} onOpen={handleOpenProject} />
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
        <ProjectModal
          project={selectedProject}
          originElement={originElement}
          onClose={handleCloseProject}
        />
      )}
    </section>
  );
}
