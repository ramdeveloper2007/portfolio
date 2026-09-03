import { Github, Linkedin, Mail, ArrowUp, Terminal, Heart } from 'lucide-react';
import { personal, footerLinks } from '../data/personal';
import { scrollToSection } from '../hooks/useScrollSpy';
import { ExternalLink } from '../utils/helpers';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface text-content" aria-label="Site footer">
      {/* Main Footer Content */}
      <div className="section-container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Branding */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 font-display font-bold text-white shadow-md shadow-cyan-500/20">
                R
              </div>
              <div>
                <p className="font-display text-lg font-bold tracking-tight text-content">
                  {personal.name}
                </p>
                <p className="text-xs font-mono text-cyan-400">Full-Stack Developer | Aspiring Software Developer</p>
              </div>
            </div>
            <p className="max-w-sm text-xs leading-relaxed text-content-secondary font-sans">
              Building modern web experiences and continuously growing through technology.
            </p>
            <div className="flex items-center gap-2 font-mono text-[11px] text-content-muted">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for Full-Stack Roles &amp; Internships</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(link.id)}
                    className="text-content-secondary transition-colors duration-200 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles & Back to Top */}
          <div className="md:col-span-4 space-y-4">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              Connect Directly
            </p>
            <div className="flex gap-2.5">
              <ExternalLink
                href={personal.social.github}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary transition-all duration-200 hover:border-cyan-500/40 hover:text-cyan-300 hover:scale-105"
                showIcon={false}
                aria-label="GitHub profile"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </ExternalLink>
              <ExternalLink
                href={personal.social.linkedin}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary transition-all duration-200 hover:border-cyan-500/40 hover:text-cyan-300 hover:scale-105"
                showIcon={false}
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </ExternalLink>
              <a
                href={`mailto:${personal.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary transition-all duration-200 hover:border-cyan-500/40 hover:text-cyan-300 hover:scale-105"
                aria-label="Send direct email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-content-muted hover:text-cyan-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Back to Top of Portfolio</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Tech Bar */}
      <div className="border-t border-border/60 bg-surface-muted py-5">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row text-xs font-mono text-content-muted">
            <p>© {year} {personal.name}. All rights reserved.</p>
            <p className="flex items-center gap-1">
              <span>Full-Stack Portfolio // Built with React &amp; Tailwind</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

