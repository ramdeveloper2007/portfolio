import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Layers } from 'lucide-react';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';

function DetailBlock({ title, content, icon: Icon = Terminal }) {
  if (!content) return null;
  return (
    <div className="rounded-xl border border-border bg-surface-muted/30 p-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-3.5 w-3.5 text-cyan-400" />
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
          {title}
        </h4>
      </div>
      <p className="text-xs sm:text-sm leading-relaxed text-content-secondary">{content}</p>
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
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-4"
        onClick={onClose}
        role="presentation"
      >
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border border-border-strong bg-studio-900 shadow-2xl sm:rounded-2xl"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-studio-950/95 px-6 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers className="h-4 w-4" />
              </div>
              <div>
                <h3 id="project-modal-title" className="font-display text-lg font-bold text-content">
                  {project.title}
                </h3>
                <span className="font-mono text-[10px] text-content-muted">Technical Overview &amp; Architecture</span>
              </div>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-content-secondary transition-colors hover:border-cyan-500/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close project details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="space-y-5 p-6">
            <DetailBlock title="Overview" content={details.overview} />
            <DetailBlock title="The Problem" content={details.problem} />
            <DetailBlock title="The Engineering Solution" content={details.solution} />

            {/* Features List */}
            <div className="rounded-xl border border-border bg-surface-muted/30 p-4">
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Key Features &amp; Implementation
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-content-secondary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technology Stack */}
            <div className="rounded-xl border border-border bg-surface-muted/30 p-4">
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <DetailBlock title="My Direct Contribution" content={details.contribution} />
            <DetailBlock title="Technical Challenges &amp; Learnings" content={details.challenges} />
            <DetailBlock title="Project Results &amp; Impact" content={details.results} />

            {/* Actions */}
            {(project.github || project.liveDemo) && (
              <div className="flex flex-wrap gap-3 border-t border-border pt-5">
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

