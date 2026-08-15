import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personal, footerLinks } from '../data/personal';
import { scrollToSection } from '../hooks/useScrollSpy';
import { ExternalLink } from '../utils/helpers';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-surface via-surface to-surface-muted" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="section-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Branding */}
          <div className="md:col-span-1">
            <div>
              <p className="font-display text-2xl font-bold tracking-tight text-content">
                {personal.name}
                <span className="text-accent">.</span>
              </p>
              <p className="mt-2 text-sm text-content-secondary">{personal.role}</p>
              <p className="mt-3 max-w-xs text-xs text-content-muted leading-relaxed">
                Building practical software solutions with code, creativity, and consistency.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-content-muted">Navigation</p>
            <ul className="space-y-2.5">
              {footerLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-content-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-content-muted">Resources</p>
            <ul className="space-y-2.5">
              {footerLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-content-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href={personal.resumePath}
                  download
                  className="text-sm text-content-secondary transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-content-muted">Connect</p>
            <div className="flex gap-3">
              <ExternalLink
                href={personal.social.github}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-content-secondary transition-all duration-200 hover:border-accent/50 hover:bg-accent-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                showIcon={false}
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </ExternalLink>
              <ExternalLink
                href={personal.social.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-content-secondary transition-all duration-200 hover:border-accent/50 hover:bg-accent-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                showIcon={false}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </ExternalLink>
              <a
                href={`mailto:${personal.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-elevated text-content-secondary transition-all duration-200 hover:border-accent/50 hover:bg-accent-muted hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Send email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <button
              type="button"
              onClick={handleScrollToTop}
              className="mt-5 flex items-center gap-2 text-xs font-medium text-content-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/30 bg-surface-muted/30 backdrop-blur-sm">
        <div className="section-container py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-xs text-content-muted md:text-left">
              © {year} {personal.name}. All rights reserved.
            </p>
            <p className="text-center text-xs text-content-muted">
              Built with{' '}
              <span className="text-accent">React</span>
              {' '}+{' '}
              <span className="text-accent">Tailwind CSS</span>
              {' '}• Deployed on{' '}
              <span className="text-accent">Netlify</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
