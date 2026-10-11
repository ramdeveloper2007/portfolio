import { useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { X, ExternalLink, Github, Terminal, CheckCircle2, Cpu, Sparkles, Lightbulb, AlertTriangle } from 'lucide-react';
import { ExternalLink as ExtLink, isPlaceholderLink } from '../utils/helpers';
import { ProjectPreviewVisual } from './ProjectPreviews';

gsap.registerPlugin(Flip);

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function DetailBlock({ title, content, icon: Icon = Terminal }) {
  if (!content) return null;
  return (
    <div className="rounded-xl border border-border bg-surface-muted p-3.5 sm:p-4">
      <div className="flex items-center gap-2 mb-1.5">
        <Icon className="h-3.5 w-3.5 text-accent" />
        <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-accent-content">
          {title}
        </h4>
      </div>
      <p className="text-xs sm:text-sm leading-relaxed text-content-secondary">{content}</p>
    </div>
  );
}

export default function ProjectModal({ project, originElement, onClose }) {
  const backdropRef = useRef(null);
  const dialogRef = useRef(null);
  const previewRef = useRef(null);
  const contentRef = useRef(null);
  const closeRef = useRef(null);
  const isClosingRef = useRef(false);
  const tlRef = useRef(null);
  const lastFocusedRef = useRef(null);

  // Close sequence with smooth reverse Flip animation
  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    // Terminate any active opening timeline immediately
    if (tlRef.current) {
      tlRef.current.kill();
    }

    const reducedMotion = prefersReducedMotion();

    if (reducedMotion || !originElement || !originElement.isConnected) {
      if (originElement) {
        originElement.removeAttribute('data-flip-active');
        gsap.set(originElement, { opacity: 1, clearProps: 'opacity' });
      }
      if (backdropRef.current && dialogRef.current) {
        gsap.to([backdropRef.current, dialogRef.current], {
          opacity: 0,
          duration: 0.22,
          ease: 'power2.in',
          onComplete: onClose,
        });
      } else {
        onClose();
      }
      return;
    }

    const allCards = Array.from(document.querySelectorAll('[data-project-card]'));
    const siblingCards = allCards.filter((card) => card !== originElement);

    // Ensure origin card is ready to receive dock transition
    gsap.killTweensOf(originElement);
    gsap.set(originElement, { rotateX: 0, rotateY: 0, y: 0, scale: 1, clearProps: 'transform' });

    const closeTl = gsap.timeline({
      onComplete: () => {
        if (originElement) {
          originElement.removeAttribute('data-flip-active');
          gsap.set(originElement, { opacity: 1, clearProps: 'opacity' });
        }
        onClose();
        if (lastFocusedRef.current && lastFocusedRef.current.isConnected) {
          lastFocusedRef.current.focus();
        }
      },
    });

    // 1. Fade out content drawer swiftly
    closeTl.to(
      contentRef.current,
      {
        opacity: 0,
        y: 12,
        duration: 0.18,
        ease: 'power2.in',
      },
      0
    );

    // 2. Fade out backdrop
    closeTl.to(
      backdropRef.current,
      {
        opacity: 0,
        duration: 0.58,
        ease: 'power2.inOut',
      },
      0.05
    );

    // 3. Stagger fade sibling background cards back to full opacity
    closeTl.to(
      siblingCards,
      {
        opacity: 1,
        duration: 0.52,
        ease: 'power2.out',
        stagger: {
          amount: 0.2,
          from: 'center',
        },
      },
      0.05
    );

    // 4. Capture current centered dialog state
    if (dialogRef.current) {
      gsap.set(dialogRef.current, { overflow: 'hidden' });
      const state = Flip.getState(dialogRef.current, {
        props: 'borderRadius,boxShadow,backgroundColor',
      });

      // 5. Fit dialog onto the original card position
      Flip.fit(dialogRef.current, originElement, { scale: true });

      // 6. Play smooth reverse Flip transition back into the grid card
      const flipClose = Flip.from(state, {
        duration: 0.72,
        ease: 'power3.inOut',
        scale: true,
      });

      closeTl.add(flipClose, 0.08);
    } else {
      onClose();
    }
  }, [originElement, onClose]);

  // Screen and document scroll lock + keyboard trap
  useEffect(() => {
    // Lock both html root and body to completely eliminate background scroll bleed
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
        return;
      }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, [handleClose]);

  // Opening animation via GSAP Flip
  useLayoutEffect(() => {
    if (!project) return;
    lastFocusedRef.current = document.activeElement;

    const reducedMotion = prefersReducedMotion();

    if (reducedMotion || !originElement || !originElement.isConnected) {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'power2.out' });
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 16, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out' }
      );
      closeRef.current?.focus();
      return;
    }

    // Mark card as actively flipping to prevent pointer tilt interference
    originElement.setAttribute('data-flip-active', 'true');
    gsap.killTweensOf(originElement);
    gsap.set(originElement, { rotateX: 0, rotateY: 0, y: 0, scale: 1, clearProps: 'transform' });

    const allCards = Array.from(document.querySelectorAll('[data-project-card]'));
    const siblingCards = allCards.filter((card) => card !== originElement);

    // Initial positioning setup
    gsap.set(backdropRef.current, { opacity: 0 });
    gsap.set(contentRef.current, { opacity: 0, y: 16 });
    gsap.set(dialogRef.current, { overflow: 'hidden' });

    // Step 1: Fit dialog onto the grid card
    Flip.fit(dialogRef.current, originElement, { scale: true });

    // Step 2: Record initial state matching originElement
    const state = Flip.getState(dialogRef.current, {
      props: 'borderRadius,boxShadow,backgroundColor',
    });

    // Step 3: Clear inline styles to restore natural centered layout
    gsap.set(dialogRef.current, { clearProps: 'transform,top,left,width,height' });
    gsap.set(dialogRef.current, { visibility: 'visible', overflow: 'hidden' });

    // Step 4: Build master opening timeline
    const tl = gsap.timeline({
      onComplete: () => {
        if (dialogRef.current) {
          gsap.set(dialogRef.current, { clearProps: 'transform' });
        }
        closeRef.current?.focus();
      },
    });
    tlRef.current = tl;

    // Hide origin element to prevent double rendering
    tl.set(originElement, { opacity: 0 }, 0);

    // Fade sibling cards subtly without making interface excessively dark
    tl.to(
      siblingCards,
      {
        opacity: 0.28,
        duration: 0.5,
        ease: 'power2.out',
        stagger: {
          amount: 0.2,
          from: 'center',
        },
      },
      0
    );

    // Fade in dark backdrop with smooth blur
    tl.to(
      backdropRef.current,
      {
        opacity: 1,
        duration: 0.55,
        ease: 'power2.out',
      },
      0
    );

    // Play smooth FLIP animation from grid card to centered modal
    const flipOpen = Flip.from(state, {
      duration: 0.74,
      ease: 'power3.inOut',
      scale: true,
    });
    tl.add(flipOpen, 0);

    // Slide & fade in the detail content drawer as the card reaches full dimensions
    tl.to(
      contentRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.38,
        ease: 'power2.out',
      },
      '-=0.34'
    );

    return () => {
      tl.kill();
    };
  }, [project, originElement]);

  if (!project) return null;

  const { details } = project;

  return createPortal(
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-md overflow-hidden overscroll-none"
      onClick={handleClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      role="presentation"
    >
      <div
        ref={dialogRef}
        data-no-tilt
        className="solid-card relative w-full max-w-3xl h-[84vh] max-h-[780px] rounded-2xl border border-border-strong bg-surface-card shadow-2xl flex flex-col overflow-hidden overscroll-contain"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Flip Target: Project Preview & Header Banner */}
        <div
          ref={previewRef}
          data-flip-preview
          className="relative w-full border-b border-border bg-surface-elevated/95 p-3 sm:p-4 shrink-0"
        >
          <div className="flex items-center justify-between mb-2 sm:mb-2.5">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-cyan-500/15 border border-cyan-500/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300 font-semibold flex items-center gap-1 shadow-[0_0_8px_rgba(6,182,212,0.2)]">
                <Sparkles className="h-3 w-3 text-cyan-400 animate-pulse" />
                PROJECT SPECIFICATION
              </span>
              <span className="font-mono text-xs text-content-muted hidden sm:inline-block">
                Architectural Breakdown
              </span>
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={handleClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-content-secondary transition-colors hover:border-cyan-500/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close project details"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Compact Top Visual Preview */}
          <ProjectPreviewVisual project={project} isModal={true} />
        </div>

        {/* Scrollable Content Drawer */}
        <div
          ref={contentRef}
          className="space-y-4 sm:space-y-5 p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1 min-h-0"
        >
          <div>
            <h3 id="project-modal-title" className="font-display text-xl sm:text-2xl font-bold text-content">
              {project.title}
            </h3>
            <p className="mt-1 font-mono text-xs text-cyan-400">{project.tagline}</p>
          </div>

          <DetailBlock title="Overview" content={details.overview} icon={Sparkles} />
          <DetailBlock title="The Problem" content={details.problem} icon={AlertTriangle} />
          <DetailBlock title="The Engineering Solution" content={details.solution} icon={Lightbulb} />

          {/* Architecture Details */}
          {details.architecture && (
            <DetailBlock title="System Architecture" content={details.architecture} icon={Cpu} />
          )}

          {/* Features List */}
          {project.features && project.features.length > 0 && (
            <div className="rounded-xl border border-border bg-surface-muted p-3.5 sm:p-4">
              <h4 className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-content">
                Key Features &amp; Implementation Details
              </h4>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-content-secondary">
                    <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Stack */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="rounded-xl border border-border bg-surface-muted p-3.5 sm:p-4">
              <h4 className="mb-2.5 font-mono text-xs font-semibold uppercase tracking-wider text-accent-content">
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
          )}

          <DetailBlock title="My Direct Contribution" content={details.contribution} icon={Terminal} />
          <DetailBlock title="Technical Challenges &amp; Learnings" content={details.challenges} icon={Cpu} />

          {details.futureImprovements && (
            <DetailBlock title="Future Improvements &amp; Roadmap" content={details.futureImprovements} icon={Sparkles} />
          )}

          <DetailBlock title="Project Results &amp; Impact" content={details.results} icon={CheckCircle2} />

          {/* Actions */}
          {(project.github || project.liveDemo) && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              {!isPlaceholderLink(project.github) && (
                <ExtLink href={project.github} className="btn-secondary" showIcon={false}>
                  <Github className="h-4 w-4" />
                  <span>View on GitHub</span>
                </ExtLink>
              )}
              {!isPlaceholderLink(project.liveDemo) && (
                <ExtLink href={project.liveDemo} className="btn-primary" showIcon={false}>
                  <ExternalLink className="h-4 w-4" />
                  <span>Live Demo</span>
                </ExtLink>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
