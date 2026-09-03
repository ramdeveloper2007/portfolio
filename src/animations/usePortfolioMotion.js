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

      gsap.set('[data-reveal]', { y: 32, opacity: 0 });
      gsap.set('[data-hero-photo]', { clipPath: 'inset(0 0 100% 0)', scale: 0.96, opacity: 0 });

      if (hero) {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro
          .to('[data-hero-nav]', { y: 0, opacity: 1, duration: 0.65 }, 0)
          .to('[data-hero-eyebrow]', { y: 0, opacity: 1, duration: 0.55 }, 0.15)
          .to('[data-hero-title]', { y: 0, opacity: 1, duration: 0.85, ease: 'power4.out' }, 0.28)
          .fromTo('[data-hero-title] span', { yPercent: 110, opacity: 0, clipPath: 'inset(0 0 100% 0)' }, { yPercent: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.8, ease: 'power4.out' }, 0.42)
          .to('[data-hero-copy]', { y: 0, opacity: 1, duration: 0.6 }, 0.5)
          .to('[data-hero-actions]', { y: 0, opacity: 1, duration: 0.6 }, 0.64)
          .to('[data-hero-social]', { y: 0, opacity: 1, duration: 0.55 }, 0.76)
          .to('[data-hero-photo]', { clipPath: 'inset(0 0 0% 0)', scale: 1, opacity: 1, duration: 1.1, ease: 'power4.inOut' }, 0.3);
      }

      gsap.utils.toArray('[data-motion-section], section[id]:not(#home)').forEach((section) => {
        const heading = section.querySelector('[data-motion-heading]');
        const items = section.querySelectorAll('[data-motion-item], .solid-card');
        const badges = section.querySelectorAll('.tech-badge');
        const timeline = gsap.timeline({
          scrollTrigger: { trigger: section, start: 'top 82%', once: true },
        });
        if (heading) timeline.fromTo(heading, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
        if (items.length) timeline.fromTo(items, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: 'power2.out' }, '-=0.3');
        if (badges.length) timeline.fromTo(badges, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.035, ease: 'power2.out' }, '-=0.25');
      });

      gsap.utils.toArray('[data-motion-image]').forEach((image) => {
        gsap.fromTo(image, { clipPath: 'inset(0 100% 0 0)', scale: 1.05 }, {
          clipPath: 'inset(0 0% 0 0)', scale: 1, duration: 1.1, ease: 'power4.inOut',
          scrollTrigger: { trigger: image, start: 'top 84%', once: true },
        });
      });

      gsap.utils.toArray('[data-parallax]').forEach((element) => {
        gsap.to(element, {
          yPercent: isMobile ? -5 : -10,
          ease: 'none',
          scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
        });
      });

      gsap.utils.toArray('[data-magnetic]').forEach((button) => {
        const strength = isMobile ? 0 : 0.22;
        const move = (event) => {
          const bounds = button.getBoundingClientRect();
          const x = (event.clientX - (bounds.left + bounds.width / 2)) * strength;
          const y = (event.clientY - (bounds.top + bounds.height / 2)) * strength;
          gsap.to(button, { x, y, duration: 0.35, ease: 'power3.out', overwrite: true });
        };
        const reset = () => gsap.to(button, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.45)' });
        button.addEventListener('mousemove', move);
        button.addEventListener('mouseleave', reset);
        cleanupListeners.push(() => {
          button.removeEventListener('mousemove', move);
          button.removeEventListener('mouseleave', reset);
        });
      });

      gsap.utils.toArray('.solid-card').forEach((card) => {
        const tilt = isMobile ? 0 : 4;
        const move = (event) => {
          const bounds = card.getBoundingClientRect();
          const x = event.clientX - bounds.left;
          const y = event.clientY - bounds.top;
          const rotateX = ((y / bounds.height) - 0.5) * -tilt;
          const rotateY = ((x / bounds.width) - 0.5) * tilt;
          card.style.setProperty('--card-x', `${x}px`);
          card.style.setProperty('--card-y', `${y}px`);
          gsap.to(card, { rotateX, rotateY, y: -5, duration: 0.35, ease: 'power2.out', overwrite: true });
        };
        const enter = () => gsap.to(card, { y: -5, duration: 0.3, ease: 'power2.out' });
        const leave = () => gsap.to(card, { rotateX: 0, rotateY: 0, y: 0, duration: 0.6, ease: 'power3.out' });
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerenter', enter);
        card.addEventListener('pointerleave', leave);
        cleanupListeners.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerenter', enter);
          card.removeEventListener('pointerleave', leave);
        });
      });

      gsap.utils.toArray('.tech-badge').forEach((badge) => {
        const enter = () => gsap.to(badge, { y: -2, scale: 1.04, duration: 0.25, ease: 'power2.out' });
        const leave = () => gsap.to(badge, { y: 0, scale: 1, duration: 0.35, ease: 'power2.out' });
        badge.addEventListener('pointerenter', enter);
        badge.addEventListener('pointerleave', leave);
        cleanupListeners.push(() => {
          badge.removeEventListener('pointerenter', enter);
          badge.removeEventListener('pointerleave', leave);
        });
      });

      gsap.utils.toArray('section[id]').forEach((section) => {
        gsap.fromTo(section, { '--section-shift': 0 }, {
          '--section-shift': 1,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 2 },
        });
      });

      if (!isTouch) {
        const cursor = document.createElement('div');
        const cursorLabel = document.createElement('span');
        cursor.className = 'gsap-cursor';
        cursorLabel.className = 'gsap-cursor-label';
        cursor.appendChild(cursorLabel);
        document.body.appendChild(cursor);
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });
        const moveCursor = (event) => gsap.to(cursor, { x: event.clientX, y: event.clientY, duration: 0.35, ease: 'power3.out' });
        window.addEventListener('pointermove', moveCursor, { passive: true });
        gsap.utils.toArray('a, button, [data-cursor-label]').forEach((target) => {
          const enter = () => {
            cursorLabel.textContent = target.dataset.cursorLabel || (target.closest('[data-project-card]') ? 'VIEW' : '');
            gsap.to(cursor, { scale: target.dataset.cursorLabel ? 1.7 : 1.35, duration: 0.25, ease: 'power2.out' });
          };
          const leave = () => {
            cursorLabel.textContent = '';
            gsap.to(cursor, { scale: 1, duration: 0.25, ease: 'power2.out' });
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
        });
      }

      const architectureLine = document.querySelector('[data-architecture-line]');
      if (architectureLine) {
        gsap.fromTo(architectureLine, { scaleY: 0, transformOrigin: 'top center' }, {
          scaleY: 1, duration: 1.4, ease: 'power2.inOut',
          scrollTrigger: { trigger: architectureLine, start: 'top 78%', once: true },
        });
      }

      if (!isMobile) {
        gsap.to('[data-hero-parallax]', {
          x: 12, y: -8, ease: 'none',
          scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1.5 },
        });
      }
    });

    return () => {
      cleanupListeners.forEach((cleanup) => cleanup());
      context.revert();
    };
  }, []);
}
