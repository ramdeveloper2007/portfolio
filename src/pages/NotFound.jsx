import { Link } from 'react-router-dom';
import { ArrowLeft, Terminal } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-studio-950 text-content relative overflow-hidden">
      <div className="absolute inset-0 studio-grid opacity-60 pointer-events-none" />
      <div className="relative z-10 max-w-md">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <Terminal className="h-7 w-7" />
        </div>
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
          ERROR 404 // ROUTE_NOT_FOUND
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-content sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-content-secondary font-sans">
          The requested resource does not exist in the studio workspace or has been moved to another location.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Return to Studio Home</span>
        </Link>
      </div>
    </div>
  );
}

