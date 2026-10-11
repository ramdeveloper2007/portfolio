import { Calendar, Cpu, CheckCircle2, Terminal, Users, Clock, Heart, BookOpen, Sparkles, AlertCircle } from 'lucide-react';

export function TimetableVisualMockup({ isModal = false }) {
  return (
    <div
      data-card-preview
      className={`solid-card relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-surface-card flex flex-col justify-between group shadow-xl shadow-cyan-950/20 ${
        isModal ? 'h-36 sm:h-40 p-3 sm:p-4' : 'h-full min-h-[260px] p-4 sm:p-5'
      }`}
    >
      {/* Decorative Matrix Grid */}
      <div className="absolute inset-0 studio-grid opacity-50 pointer-events-none" />

      {/* Top Engine Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-cyan-400" />
          <span className="font-mono text-xs font-semibold text-content">TIMETABLE_GEN_CORE // v2.0</span>
        </div>
        <span className="rounded-full bg-emerald-500/15 border border-emerald-500/40 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400 flex items-center gap-1 font-semibold shadow-[0_0_8px_rgba(16,185,129,0.2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Zero Conflicts
        </span>
      </div>

      {/* Interactive Schedule Matrix Preview */}
      <div className="relative z-10 my-2 grid grid-cols-2 gap-2 text-[10px] font-mono sm:grid-cols-4">
        <div className="rounded-lg bg-surface-muted/70 border border-cyan-500/30 p-2 transition-all duration-200 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]">
          <span className="text-content-muted block text-[9px]">09:00 - CS301</span>
          <span className="text-cyan-300 font-bold">Data Structures</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Room 204 • Dr. R</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-indigo-500/30 p-2 transition-all duration-200 group-hover:border-indigo-400 group-hover:shadow-[0_0_10px_rgba(99,102,241,0.15)]">
          <span className="text-content-muted block text-[9px]">10:30 - IT204</span>
          <span className="text-indigo-400 font-bold">Web Systems</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Lab 3 • Prof. S</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-cyan-500/30 p-2 transition-all duration-200 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]">
          <span className="text-content-muted block text-[9px]">12:00 - CS202</span>
          <span className="text-content font-bold">Database Schema</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Room 102 • Dr. K</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-emerald-500/30 p-2 transition-all duration-200 group-hover:border-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.15)]">
          <span className="text-content-muted block text-[9px]">02:00 - IT302</span>
          <span className="text-emerald-400 font-bold">Python Backend</span>
          <span className="text-[9px] text-content-muted block mt-0.5">Lab 1 • Prof. M</span>
        </div>
      </div>

      {/* Engine Status Indicators */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-border text-[11px] font-mono text-content-muted">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <span className="text-cyan-400 font-medium flex items-center gap-1">
            <Cpu className="h-3 w-3 text-cyan-400 animate-spin-slow" />
            Constraint Solver Active
          </span>
          <span>• 3 Roles: Admin / Staff / Student</span>
        </div>
        <span className="text-content-secondary font-medium">Flask + SQLite</span>
      </div>
    </div>
  );
}

export function AttendanceVisualMockup({ isModal = false }) {
  return (
    <div
      data-card-preview
      className={`solid-card relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-surface-card flex flex-col justify-between group shadow-xl shadow-cyan-950/20 ${
        isModal ? 'h-36 sm:h-40 p-3 sm:p-4' : 'h-48 sm:h-52 p-4 sm:p-5'
      }`}
    >
      <div className="absolute inset-0 studio-grid opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-1.5 font-mono text-xs text-content-secondary font-medium">
          <Users className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-content font-bold">ATTENDANCE_LOG_SYS // v1.4</span>
        </div>
        <span className="rounded-full bg-cyan-500/15 border border-cyan-500/40 px-2 py-0.5 font-mono text-[10px] text-cyan-300 font-semibold flex items-center gap-1">
          <CheckCircle2 className="h-3 w-3 text-cyan-400" />
          94.2% Class Avg
        </span>
      </div>

      {/* Metrics Row */}
      <div className="relative z-10 my-2 grid grid-cols-2 gap-2 text-[10px] font-mono sm:grid-cols-4">
        <div className="rounded-lg bg-surface-muted/70 border border-emerald-500/30 p-2">
          <span className="text-content-muted block text-[9px]">CS301 Lect.</span>
          <span className="text-emerald-400 font-bold">96% Present</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-cyan-500/30 p-2">
          <span className="text-content-muted block text-[9px]">IT204 Lab</span>
          <span className="text-cyan-300 font-bold">92% Present</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-indigo-500/30 p-2">
          <span className="text-content-muted block text-[9px]">CS202 Sem.</span>
          <span className="text-indigo-300 font-bold">88% Present</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-amber-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Threshold</span>
          <span className="text-amber-400 font-bold">75% Safe Zone</span>
        </div>
      </div>

      {/* Footer Status */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] font-mono text-content-muted">
        <span className="flex items-center gap-1 text-content-secondary">
          <AlertCircle className="h-3 w-3 text-cyan-400" /> Automated Eligibility Audits
        </span>
        <span className="text-cyan-400 font-semibold group-hover:underline">Flask + SQLite</span>
      </div>
    </div>
  );
}

export function EmocareVisualMockup({ isModal = false }) {
  return (
    <div
      data-card-preview
      className={`solid-card relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-surface-card flex flex-col justify-between group shadow-xl shadow-cyan-950/20 ${
        isModal ? 'h-36 sm:h-40 p-3 sm:p-4' : 'h-48 sm:h-52 p-4 sm:p-5'
      }`}
    >
      <div className="absolute inset-0 studio-grid opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-1.5 font-mono text-xs text-content-secondary font-medium">
          <Heart className="h-3.5 w-3.5 text-pink-400 animate-pulse" />
          <span className="text-content font-bold">EMOCARE_WELLNESS // v1.0</span>
        </div>
        <span className="rounded-full bg-pink-500/15 border border-pink-500/40 px-2 py-0.5 font-mono text-[10px] text-pink-300 font-semibold flex items-center gap-1">
          <Sparkles className="h-3 w-3 text-pink-400" />
          Mindful Journaling
        </span>
      </div>

      {/* Wellbeing Matrix */}
      <div className="relative z-10 my-2 grid grid-cols-2 gap-2 text-[10px] font-mono sm:grid-cols-4">
        <div className="rounded-lg bg-surface-muted/70 border border-pink-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Mood Pattern</span>
          <span className="text-pink-300 font-bold">Calm &amp; Focused</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-cyan-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Reflection</span>
          <span className="text-cyan-300 font-bold">Daily Entry #42</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-indigo-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Exercise</span>
          <span className="text-indigo-300 font-bold">Breathing Ready</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-emerald-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Consistency</span>
          <span className="text-emerald-400 font-bold">7-Day Streak</span>
        </div>
      </div>

      {/* Footer Status */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] font-mono text-content-muted">
        <span className="text-content-secondary">Private Local Storage • Emotional Insights</span>
        <span className="text-pink-400 font-semibold group-hover:underline">Empathetic UI</span>
      </div>
    </div>
  );
}

export function StudyBuddyVisualMockup({ isModal = false }) {
  return (
    <div
      data-card-preview
      className={`solid-card relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-surface-card flex flex-col justify-between group shadow-xl shadow-cyan-950/20 ${
        isModal ? 'h-36 sm:h-40 p-3 sm:p-4' : 'h-48 sm:h-52 p-4 sm:p-5'
      }`}
    >
      <div className="absolute inset-0 studio-grid opacity-40 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-1.5 font-mono text-xs text-content-secondary font-medium">
          <BookOpen className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-content font-bold">STUDY_SYNC_CORE // v2.1</span>
        </div>
        <span className="rounded-full bg-cyan-500/15 border border-cyan-500/40 px-2 py-0.5 font-mono text-[10px] text-cyan-300 font-semibold flex items-center gap-1">
          <Clock className="h-3 w-3 text-cyan-400" />
          25:00 Focus Active
        </span>
      </div>

      {/* Matrix Cards */}
      <div className="relative z-10 my-2 grid grid-cols-2 gap-2 text-[10px] font-mono sm:grid-cols-4">
        <div className="rounded-lg bg-surface-muted/70 border border-cyan-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Pomodoro</span>
          <span className="text-cyan-300 font-bold">Round 3 of 4</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-indigo-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Flashcards</span>
          <span className="text-indigo-300 font-bold">24/25 Mastered</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-emerald-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Topic</span>
          <span className="text-emerald-400 font-bold">Data Structures</span>
        </div>
        <div className="rounded-lg bg-surface-muted/70 border border-purple-500/30 p-2">
          <span className="text-content-muted block text-[9px]">Persistence</span>
          <span className="text-purple-300 font-bold">100% Offline</span>
        </div>
      </div>

      {/* Footer Status */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-border text-[10px] font-mono text-content-muted">
        <span className="text-content-secondary">Active Recall Matrix • Zero Latency</span>
        <span className="text-cyan-400 font-semibold group-hover:underline">Vanilla JS Engine</span>
      </div>
    </div>
  );
}

export function ProjectPreviewVisual({ project, isModal = false }) {
  if (project.image) {
    return (
      <div
        data-card-preview
        className={`relative w-full overflow-hidden rounded-xl ${
          isModal ? 'h-36 sm:h-40' : 'h-48 sm:h-56'
        }`}
      >
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    );
  }

  if (project.id === 'timetable-generator') {
    return <TimetableVisualMockup isModal={isModal} />;
  }
  if (project.id === 'attendance-tracker') {
    return <AttendanceVisualMockup isModal={isModal} />;
  }
  if (project.id === 'emocare') {
    return <EmocareVisualMockup isModal={isModal} />;
  }
  if (project.id === 'study-buddy') {
    return <StudyBuddyVisualMockup isModal={isModal} />;
  }

  return (
    <div
      data-card-preview
      className={`relative w-full overflow-hidden rounded-2xl bg-surface-muted border border-border p-4 flex flex-col justify-between group ${
        isModal ? 'h-36 sm:h-40' : 'h-48 sm:h-52'
      }`}
    >
      <div className="flex items-center justify-between border-b border-border pb-2.5">
        <div className="flex items-center gap-1.5 font-mono text-xs text-content-secondary font-medium">
          <Terminal className="h-3.5 w-3.5 text-cyan-400" />
          <span>{project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.app</span>
        </div>
        <span className="text-[10px] font-mono uppercase text-content-muted font-semibold">Full-Stack App</span>
      </div>

      <div className="py-2 font-mono text-[11px] text-content-secondary space-y-1">
        <div className="text-cyan-400 font-medium">&gt; Initializing application state...</div>
        <div className="text-content-secondary">&gt; Connecting SQLite data models...</div>
        <div className="text-emerald-400 font-medium">&gt; Server ready on localhost:5000</div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-border text-[10px] font-mono text-content-muted">
        <span>Flask • Python Architecture</span>
        <span className="text-cyan-400 font-semibold group-hover:underline">Inspect Details →</span>
      </div>
    </div>
  );
}
