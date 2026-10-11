import { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const isTouchDevice = () => window.matchMedia('(hover: none), (pointer: coarse)').matches;

export function usePortfolioMotion() {
  useLayoutEffect(() => {
    if (prefersReducedMotion()) {
      document.documentElement.classList.add('motion-reduced');
      return undefined;
    }

    const cleanupListeners = [];
    const context = gsap.context(() => {
      const isTouch = isTouchDevice();
      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const hero = document.querySelector('[data-hero]');
      const heroNavTargets = gsap.utils.toArray('[data-hero-nav]');
      const heroEyebrowTargets = gsap.utils.toArray('[data-hero-eyebrow]');
      const heroTitleTargets = gsap.utils.toArray('[data-hero-title]');
      const heroCopyTargets = gsap.utils.toArray('[data-hero-copy]');
      const heroActionTargets = gsap.utils.toArray('[data-hero-actions]');
      const heroSocialTargets = gsap.utils.toArray('[data-hero-social]');
      const heroPhotoTargets = gsap.utils.toArray('[data-hero-photo]');

      if (hero) {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro
          .to(heroNavTargets, { y: 0, opacity: 1, duration: 0.65 }, 0)
          .to(heroEyebrowTargets, { y: 0, opacity: 1, duration: 0.55 }, 0.12)
          .to(heroTitleTargets, { y: 0, opacity: 1, duration: 0.85, ease: 'power4.out' }, 0.22)
          .to(heroCopyTargets, { y: 0, opacity: 1, duration: 0.6 }, 0.4)
          .to(heroActionTargets, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08 }, 0.52)
          .to(heroSocialTargets, { y: 0, opacity: 1, duration: 0.55 }, 0.65)
          .to(heroPhotoTargets, { clipPath: 'inset(0 0 0% 0)', scale: 1, opacity: 1, duration: 1.1, ease: 'power4.inOut' }, 0.2);
      }

      // Smooth Parallax scrub
      gsap.utils.toArray('[data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: isMobile ? -5 : -12,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        });
      });

      // Magnetic Buttons & Interactive Elements (Smooth GSAP QuickTo)
      gsap.utils.toArray('[data-magnetic]').forEach((button) => {
        const strength = isMobile ? 0 : 0.3;
        const xTo = gsap.quickTo(button, 'x', { duration: 0.35, ease: 'power3.out' });
        const yTo = gsap.quickTo(button, 'y', { duration: 0.35, ease: 'power3.out' });

        const move = (event) => {
          const bounds = button.getBoundingClientRect();
          const x = (event.clientX - (bounds.left + bounds.width / 2)) * strength;
          const y = (event.clientY - (bounds.top + bounds.height / 2)) * strength;
          xTo(x);
          yTo(y);
        };
        const reset = () => {
          xTo(0);
          yTo(0);
        };

        button.addEventListener('mousemove', move);
        button.addEventListener('mouseleave', reset);
        cleanupListeners.push(() => {
          button.removeEventListener('mousemove', move);
          button.removeEventListener('mouseleave', reset);
        });
      });

      // 3D Card Interactive Tilt with Holographic Coordinates
      gsap.utils.toArray('.solid-card:not([data-no-tilt]):not([role="dialog"])').forEach((card) => {
        const tilt = isMobile ? 0 : 5;
        const move = (event) => {
          if (card.getAttribute('data-flip-active') === 'true') return;
          const bounds = card.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          const rotateX = ((y / bounds.height) - 0.5) * -tilt;
          const rotateY = ((x / bounds.width) - 0.5) * tilt;
          card.style.setProperty('--card-x', `${x}px`);
          card.style.setProperty('--card-y', `${y}px`);
          gsap.to(card, {
            rotateX,
            rotateY,
            transformPerspective: 1000,
            y: -5,
            duration: 0.25,
            ease: 'power2.out',
            overwrite: 'auto',
          });
        };
        const leave = () => {
          if (card.getAttribute('data-flip-active') === 'true') return;
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            y: 0,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        };

        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        cleanupListeners.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
        });
      });

      // Tech Badges Micro-Interactions
      gsap.utils.toArray('.tech-badge').forEach((badge) => {
        const enter = () => gsap.to(badge, { y: -2.5, scale: 1.05, duration: 0.2, ease: 'power2.out' });
        const leave = () => gsap.to(badge, { y: 0, scale: 1, duration: 0.3, ease: 'power2.out' });
        badge.addEventListener('pointerenter', enter);
        badge.addEventListener('pointerleave', leave);
        cleanupListeners.push(() => {
          badge.removeEventListener('pointerenter', enter);
          badge.removeEventListener('pointerleave', leave);
        });
      });

      // Agency-Grade Custom Cyber HUD Cursor (Emotion Agency Style)
      if (!isTouch) {
        const cursor = document.createElement('div');
        const cursorDot = document.createElement('div');
        const cursorLabel = document.createElement('span');

        cursor.className = 'cyber-cursor';
        cursorDot.className = 'cyber-cursor-dot';
        cursorLabel.className = 'cyber-cursor-label';

        cursor.appendChild(cursorLabel);
        document.body.appendChild(cursor);
        document.body.appendChild(cursorDot);

        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        gsap.set(cursorDot, { xPercent: -50, yPercent: -50 });

        const xToCursor = gsap.quickTo(cursor, 'x', { duration: 0.22, ease: 'power3.out' });
        const yToCursor = gsap.quickTo(cursor, 'y', { duration: 0.22, ease: 'power3.out' });
        const xToDot = gsap.quickTo(cursorDot, 'x', { duration: 0.08, ease: 'power2.out' });
        const yToDot = gsap.quickTo(cursorDot, 'y', { duration: 0.08, ease: 'power2.out' });

        const moveCursor = (event) => {
          xToCursor(event.clientX);
          yToCursor(event.clientY);
          xToDot(event.clientX);
          yToDot(event.clientY);
        };

        window.addEventListener('pointermove', moveCursor, { passive: true });

        // Hover Targets
        gsap.utils.toArray('a, button, [data-cursor-label], [data-project-card], .solid-card').forEach((target) => {
          const enter = () => {
            const explicitLabel = target.dataset.cursorLabel;
            const isCard = target.closest('[data-project-card]');
            const isBtn = target.closest('button, a');

            let labelText = '';
            if (explicitLabel) {
              labelText = explicitLabel;
            } else if (isCard) {
              labelText = 'INSPECT';
            } else if (isBtn) {
              labelText = 'CLICK';
            }

            cursorLabel.textContent = labelText;
            if (labelText) {
              cursor.classList.add('has-label');
              gsap.to(cursor, { scale: 1.8, duration: 0.25, ease: 'power2.out' });
            } else {
              gsap.to(cursor, { scale: 1.35, duration: 0.25, ease: 'power2.out' });
            }
            gsap.to(cursorDot, { scale: 0.5, opacity: 0.5, duration: 0.2 });
          };

          const leave = () => {
            cursorLabel.textContent = '';
            cursor.classList.remove('has-label');
            gsap.to(cursor, { scale: 1, duration: 0.25, ease: 'power2.out' });
            gsap.to(cursorDot, { scale: 1, opacity: 1, duration: 0.2 });
          };

          target.addEventListener('mouseenter', enter);
          target.addEventListener('mouseleave', leave);
          cleanupListeners.push(() => {
            target.removeEventListener('mouseenter', enter);
            target.removeEventListener('mouseleave', leave);
          });
        });

        cleanupListeners.push(() => {
          window.removeEventListener('pointermove', moveCursor);
          cursor.remove();
          cursorDot.remove();
        });
      }

      // Architecture Pipeline Glowing Stream
      const architectureLine = document.querySelector('[data-architecture-line]');
      if (architectureLine) {
        gsap.fromTo(
          architectureLine,
          { scaleY: 0, transformOrigin: 'top center' },
          {
            scaleY: 1,
            duration: 1.2,
            ease: 'power2.inOut',
            scrollTrigger: { trigger: architectureLine, start: 'top 80%', once: true },
          }
        );
      }
    });

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);
}
