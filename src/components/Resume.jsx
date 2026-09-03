import { Download, FileText, ExternalLink, CheckCircle2 } from 'lucide-react';
import { personal } from '../data/personal';
import { FadeIn } from './ui/FadeIn';

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative bg-surface" aria-labelledby="resume-heading">
      <div className="section-container">
        <FadeIn>
          <div className="solid-card rounded-3xl overflow-hidden p-8 md:p-12 relative border border-border">
            <div className="relative z-10 mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-md shadow-cyan-500/10">
                <FileText className="h-7 w-7" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Curriculum Vitae
              </span>
              <h2 id="resume-heading" className="mt-2 font-display text-3xl font-extrabold text-content md:text-4xl">
                My Resume
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-content-secondary">
                Explore my education, technical skills, projects and development journey.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href={personal.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <FileText className="h-4 w-4" />
                  <span>View Resume</span>
                </a>
                <a href={personal.resumePath} download className="btn-secondary">
                  <Download className="h-4 w-4 text-content-secondary" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
