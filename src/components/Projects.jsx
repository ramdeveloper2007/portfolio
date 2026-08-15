import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { projects, projectFilters } from '../data/projects';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';
import ProjectModal from './ProjectModal';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

function ProjectPlaceholder({ title }) {
  return (
    <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-3 bg-gradient-to-br from-accent/10 via-surface-muted to-surface-muted p-8">
      <Layers className="h-10 w-10 text-accent/60" />
      <span className="text-center text-sm font-medium text-content-secondary">{title}</span>
      <span className="text-xs text-content-muted">[Add project screenshot]</span>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3 }}
      className={`group glass-card flex flex-col overflow-hidden transition-all duration-300 hover:border-accent/25 hover:shadow-xl hover:shadow-accent/5 ${
        project.featured ? 'md:col-span-2 md:grid md:grid-cols-2' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
        aria-label={`View details for ${project.title}`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-full md:min-h-[240px]"
          />
        ) : (
          <ProjectPlaceholder title={project.title} />
        )}
        {project.featured && (
          <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
            Featured
          </span>
        )}
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold text-content">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-content-secondary">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-surface-muted px-2 py-0.5 text-xs text-content-muted"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs text-content-muted">+{project.technologies.length - 5}</span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button type="button" onClick={() => onOpen(project)} className="btn-secondary text-xs">
            View Details
          </button>
          {!isPlaceholderLink(project.github) && (
            <ExtLink href={project.github} className="btn-ghost text-xs" showIcon={false}>
              <Github className="h-4 w-4" />
              GitHub
            </ExtLink>
          )}
          {!isPlaceholderLink(project.liveDemo) && (
            <ExtLink href={project.liveDemo} className="btn-ghost text-xs" showIcon={false}>
              <ExternalLink className="h-4 w-4" />
              Live Demo
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

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="section-padding" aria-labelledby="projects-heading">
      <div className="section-container">
        <SectionHeader
          label="Projects"
          title="Featured Projects"
          description="Real applications I've built — focused on solving practical problems with clean, maintainable code."
        />

        <FadeIn>
          <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project filters">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  activeFilter === filter.id
                    ? 'border-accent bg-accent text-white'
                    : 'border-border bg-surface-elevated text-content-secondary hover:border-accent/30 hover:text-content'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-content-secondary">No projects in this category yet.</p>
        )}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
