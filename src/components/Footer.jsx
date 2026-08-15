import { Github, Linkedin, Mail } from 'lucide-react';
import { personal, footerLinks } from '../data/personal';
import { scrollToSection } from '../hooks/useScrollSpy';
import { ExternalLink } from '../utils/helpers';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-elevated" aria-label="Site footer">
      <div className="section-container py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-bold text-content">
              {personal.name}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-2 text-sm text-content-secondary">{personal.role}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-content-muted">Links</p>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-content-secondary transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-content-muted">Connect</p>
            <div className="flex gap-3">
              <ExternalLink
                href={personal.social.github}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-content-secondary transition-colors hover:border-accent/30 hover:text-accent"
                showIcon={false}
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </ExternalLink>
              <ExternalLink
                href={personal.social.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-content-secondary transition-colors hover:border-accent/30 hover:text-accent"
                showIcon={false}
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </ExternalLink>
              <a
                href={`mailto:${personal.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-content-secondary transition-colors hover:border-accent/30 hover:text-accent"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-content-muted">
          © {year} {personal.name}. Built with passion and code.
        </div>
      </div>
    </footer>
  );
}
