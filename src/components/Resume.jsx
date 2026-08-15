import { Download, FileText } from 'lucide-react';
import { personal } from '../data/personal';
import { FadeIn } from './ui/FadeIn';

export default function Resume() {
  return (
    <section id="resume" className="section-padding" aria-labelledby="resume-heading">
      <div className="section-container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-accent/10 via-surface-elevated to-surface-elevated p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <FileText className="h-8 w-8" />
              </div>

              <h2 id="resume-heading" className="font-display text-3xl font-bold text-content md:text-4xl">
                Resume
              </h2>
              <p className="mt-4 text-lg text-content-secondary">
                Want to know more about my education, skills and projects?
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FileText className="h-4 w-4" />
                  View Resume
                </a>
                <a href={personal.resumePath} download className="btn-secondary">
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </div>

              <p className="mt-6 text-sm text-content-muted">
                Place your PDF at{' '}
                <code className="rounded bg-surface-muted px-2 py-0.5">public/resume/Ramprasad_Resume.pdf</code>
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
