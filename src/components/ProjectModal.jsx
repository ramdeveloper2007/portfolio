import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';

function DetailBlock({ title, content }) {
  if (!content) return null;
  return (
    <div>
      <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">{title}</h4>
      <p className="text-sm leading-relaxed text-content-secondary">{content}</p>
    </div>
  );
}

export default function ProjectModal({ project, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const closeRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const { details } = project;

  return (
    <AnimatePresence>
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', damping: 28, stiffness: 300 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border bg-surface-elevated shadow-2xl sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-surface-elevated/95 px-6 py-4 backdrop-blur-sm">
            <h3 id="project-modal-title" className="font-display text-xl font-bold text-content">
              {project.title}
            </h3>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-content-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-6 p-6">
            <DetailBlock title="Overview" content={details.overview} />
            <DetailBlock title="Problem" content={details.problem} />
            <DetailBlock title="Solution" content={details.solution} />

            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Features</h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-content-secondary">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-border bg-surface-muted px-3 py-1 text-xs font-medium text-content-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <DetailBlock title="My Contribution" content={details.contribution} />
            <DetailBlock title="Challenges" content={details.challenges} />
            <DetailBlock title="Results" content={details.results} />

            {(project.github || project.liveDemo) && (
              <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                {!isPlaceholderLink(project.github) && (
                  <ExtLink href={project.github} className="btn-secondary">
                    <Github className="h-4 w-4" />
                    View on GitHub
                  </ExtLink>
                )}
                {!isPlaceholderLink(project.liveDemo) && (
                  <ExtLink href={project.liveDemo} className="btn-primary">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </ExtLink>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
