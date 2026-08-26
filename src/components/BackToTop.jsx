import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToSection } from '../hooks/useScrollSpy';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => scrollToSection('home')}
      className={`liquid-glass fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-xl text-cyan-300 shadow-xl transition-all duration-300 hover:border-cyan-400/50 hover:text-accent hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}

