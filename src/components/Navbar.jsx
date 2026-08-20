import { useEffect, useState } from 'react';
import { Menu, X, Monitor, Moon, Sun, Terminal, ArrowUpRight } from 'lucide-react';
import { navLinks, personal } from '../data/personal';
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
  const ThemeIcon = themeIcons[theme] || Moon;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 25);
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
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="section-container">
          <nav
            className={`flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? 'liquid-glass rounded-2xl px-4 py-2.5 shadow-2xl shadow-black/40'
                : 'rounded-2xl border border-transparent bg-transparent px-2 py-1'
            }`}
            aria-label="Main navigation"
          >
            {/* Logo / Monogram */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 font-display font-bold text-white shadow-md shadow-cyan-500/20 transition-transform duration-200 group-hover:scale-105">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-tight text-content group-hover:text-cyan-400 transition-colors">
                  {personal.name}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-content-muted">
                  DEV LAB
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <ul className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => {
                const isActive = activeId === link.id;
                return (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.id)}
                      className={`relative rounded-xl px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-300 shadow-[inset_0_1px_0_0_rgba(6,182,212,0.3)] border border-cyan-500/20'
                          : 'text-content-secondary hover:text-content hover:bg-surface-muted/60'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Actions: Resume CTA, Theme Toggle, Mobile Trigger */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:shadow-md hover:shadow-cyan-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Connect</span>
                <ArrowUpRight className="h-3 w-3" />
              </button>

              <button
                type="button"
                onClick={cycleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated/80 text-content-secondary transition-all hover:border-cyan-500/30 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label={`Theme: ${theme}. Click to change.`}
                title={`Theme: ${theme}`}
              >
                <ThemeIcon className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-content md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-28 pb-10">
          <div className="space-y-1">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan-400">Navigation Menu</p>
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleNavClick(link.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                    isActive
                      ? 'border border-cyan-500/30 bg-cyan-500/10 text-cyan-300'
                      : 'text-content-secondary hover:bg-surface-muted hover:text-content'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#06b6d4]" />}
                </button>
              );
            })}
          </div>

          <div className="border-t border-border pt-6 space-y-3">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="btn-primary w-full justify-center"
            >
              Let's Build Together
            </button>
            <p className="text-center text-xs text-content-muted">
              Ramprasad • Full-Stack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

