import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Code2, ArrowDown, Server, Database, Network, Sparkles, Terminal } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const layers = [
  {
    id: 'frontend',
    name: 'Presentation Tier (Client Layer)',
    badge: 'CLIENT-SIDE',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    icon: Code2,
    role: 'UI/UX & User Interactions',
    details:
      'Renders dynamic interfaces, captures user input, manages client-side events, and dispatches asynchronous fetch requests with validation.',
    dataFlow: 'Dispatches JSON payloads over HTTP/HTTPS to API Gateway',
    colorDark: 'from-cyan-500/15 to-sky-500/10',
    colorLight: 'from-cyan-500/10 to-sky-500/5',
    accentColor: 'text-cyan-600 dark:text-cyan-400',
    borderColor: 'border-cyan-500/40',
  },
  {
    id: 'api',
    name: 'Application & Routing Tier (API Layer)',
    badge: 'COMMUNICATION',
    technologies: ['RESTful Endpoints', 'JSON Protocol', 'HTTP Requests/Responses'],
    icon: Network,
    role: 'API Gateway & Serialization',
    details:
      'Translates client requests into structured backend operations, enforces authentication, parses JSON request bodies, and sends structured responses.',
    dataFlow: 'Validates route params and delivers requests to Flask controllers',
    colorDark: 'from-indigo-500/15 to-purple-500/10',
    colorLight: 'from-indigo-500/10 to-purple-500/5',
    accentColor: 'text-indigo-600 dark:text-indigo-400',
    borderColor: 'border-indigo-500/40',
  },
  {
    id: 'backend',
    name: 'Business Logic Tier (Server Layer)',
    badge: 'SERVER-SIDE',
    technologies: ['Python', 'Flask Framework', 'Algorithm Solver', 'Sessions'],
    icon: Server,
    role: 'Core Engine & Processing',
    details:
      'Executes application business logic, constraint solvers (e.g., Timetable Generator), authentication checks, and coordinates data persistence.',
    dataFlow: 'Executes relational queries and formats data models for response',
    colorDark: 'from-sky-500/15 to-blue-500/10',
    colorLight: 'from-sky-500/10 to-blue-500/5',
    accentColor: 'text-sky-600 dark:text-sky-400',
    borderColor: 'border-sky-500/40',
  },
  {
    id: 'database',
    name: 'Persistence Tier (Database Layer)',
    badge: 'DATA STORAGE',
    technologies: ['SQL', 'SQLite Relational DB', 'ACID Transactions'],
    icon: Database,
    role: 'Schema & Storage Management',
    details:
      'Maintains structured entity tables (Users, Teachers, Subjects, Schedules, Attendance), ensuring relational integrity and fast retrieval.',
    dataFlow: 'Commits transactional state and returns query result sets',
    colorDark: 'from-emerald-500/15 to-teal-500/10',
    colorLight: 'from-emerald-500/10 to-teal-500/5',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-500/40',
  },
];

export default function FullStackArchitecture() {
  const [activeLayer, setActiveLayer] = useState(layers[0].id);
  const shouldReduceMotion = useReducedMotion();
  const currentLayer = layers.find((l) => l.id === activeLayer) || layers[0];

  return (
    <section id="architecture" className="section-padding relative bg-surface border-t border-border/80" aria-labelledby="arch-heading">
      <div className="section-container">
        <SectionHeader
          label="Workflow Architecture"
          title="Full-Stack System Pipeline"
          headingId="arch-heading"
          description="An interactive visual representation of how frontend interfaces, backend logic, and database schemas integrate into complete applications."
        />

        <div className="grid gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Interactive Visual Stack Pipeline */}
          <div className="lg:col-span-6 space-y-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;

              return (
                <div key={layer.id} className="relative">
                  {/* Layer Card */}
                  <button
                    type="button"
                    onClick={() => setActiveLayer(layer.id)}
                    onMouseEnter={() => setActiveLayer(layer.id)}
                    className={`w-full text-left rounded-2xl border p-4 sm:p-5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? `bg-gradient-to-r ${layer.colorLight} dark:${layer.colorDark} ${layer.borderColor} shadow-xl shadow-cyan-500/10 scale-[1.02]`
                        : 'bg-surface-card border-border hover:border-border-strong hover:bg-surface-card-hover'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-muted border border-border ${layer.accentColor}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-display text-sm sm:text-base font-bold text-content">
                              {layer.name}
                            </span>
                          </div>
                          <p className="font-mono text-xs text-content-muted mt-0.5">
                            {layer.role}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                          isActive
                            ? 'border-cyan-500/40 bg-cyan-500/15 text-accent-content'
                            : 'border-border bg-surface-muted text-content-muted'
                        }`}
                      >
                        {layer.badge}
                      </span>
                    </div>

                    {/* Active Tech Pills */}
                    <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                            isActive
                              ? 'bg-surface-elevated text-accent-content border-cyan-500/30'
                              : 'bg-surface-muted text-content-secondary border-border/70'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </button>

                  {/* Animated Connecting Data Connector Line */}
                  {index < layers.length - 1 && (
                    <div className="my-1.5 flex justify-center items-center h-6">
                      <div className="relative h-full w-0.5 bg-border/80">
                        {!shouldReduceMotion && (
                          <div className="absolute top-0 left-[-2px] h-2 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_#06b6d4] animate-data-stream" />
                        )}
                      </div>
                      <ArrowDown className="h-3 w-3 text-cyan-500 dark:text-cyan-400/70 -ml-1.5 mt-2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Live Tier Inspector Detail Card */}
          <div className="lg:col-span-6">
            <FadeIn>
              <div className="solid-card rounded-3xl p-6 sm:p-8 border border-cyan-500/25 shadow-2xl relative overflow-hidden bg-surface-card">
                {/* Ambient glow */}
                <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-border/80">
                  <div className="flex items-center gap-2.5">
                    <Terminal className="h-4 w-4 text-accent" />
                    <span className="font-mono text-xs font-semibold text-content uppercase tracking-wider">
                      Tier Inspector // {currentLayer.id}.spec
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                    Active Pipeline
                  </span>
                </div>

                {/* Tier Title */}
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                    {currentLayer.badge}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-content">
                    {currentLayer.name}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-content-secondary pt-1 font-sans">
                    {currentLayer.details}
                  </p>
                </div>

                {/* Data Flow Specification Box */}
                <div className="mt-6 rounded-2xl border border-border bg-surface-muted p-4 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs text-accent-content font-semibold">
                    <Sparkles className="h-3.5 w-3.5 text-accent" />
                    <span>Data Flow &amp; Protocol Execution:</span>
                  </div>
                  <p className="font-mono text-xs text-content leading-relaxed pl-5">
                    &gt; {currentLayer.dataFlow}
                  </p>
                </div>

                {/* Direct Technologies Tag Cloud */}
                <div className="mt-6 space-y-2.5">
                  <p className="font-mono text-xs uppercase tracking-wider text-content-muted">
                    Core Technologies in this Layer:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {currentLayer.technologies.map((t) => (
                      <span key={t} className="tech-badge text-xs py-1 px-3 bg-surface-muted border-cyan-500/30 text-accent font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Micro Footer Spec */}
                <div className="mt-7 pt-4 border-t border-border/80 flex items-center justify-between text-[11px] font-mono text-content-muted">
                  <span>Architecture: Full-Stack MVC</span>
                  <span className="text-accent font-semibold">Deterministic Flow ✓</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
