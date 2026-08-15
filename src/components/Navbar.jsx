import { useEffect, useState } from 'react';
import { Menu, X, Monitor, Moon, Sun } from 'lucide-react';
import { navLinks } from '../data/personal';
import { useScrollSpy, scrollToSection } from '../hooks/useScrollSpy';
import { useTheme } from '../hooks/useTheme';

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(navLinks.map((l) => l.id));
  const { theme, cycleTheme } = useTheme();
  const ThemeIcon = themeIcons[theme] || Monitor;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-border bg-surface/90 py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="section-container flex items-center justify-between" aria-label="Main navigation">
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-display text-lg font-bold tracking-tight text-content transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Ramprasad<span className="text-accent">.</span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                    activeId === link.id
                      ? 'text-accent'
                      : 'text-content-secondary hover:text-content'
                  }`}
                  aria-current={activeId === link.id ? 'page' : undefined}
                >
                  {link.label}
                  {activeId === link.id && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={cycleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content-secondary transition-colors hover:border-accent/30 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Theme: ${theme}. Click to change.`}
              title={`Theme: ${theme}`}
            >
              <ThemeIcon className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-surface/95 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2 pt-20">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => handleNavClick(link.id)}
              className={`w-full max-w-xs rounded-xl px-6 py-3 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                activeId === link.id
                  ? 'bg-accent-muted text-accent'
                  : 'text-content-secondary hover:bg-surface-muted hover:text-content'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
