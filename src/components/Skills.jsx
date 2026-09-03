import { useState, useMemo } from 'react';
import { skillCategories } from '../data/skills';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';
import { Search, Code2, Server, Terminal, Database, Wrench, Layers, Compass } from 'lucide-react';

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  programming: Terminal,
  tools: Wrench,
  exploring: Compass,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = useMemo(() => {
    return [
      { id: 'all', title: 'All Technologies' },
      ...skillCategories.map((c) => ({ id: c.category, title: c.title })),
    ];
  }, []);

  const filteredCategories = useMemo(() => {
    let result = skillCategories;
    if (selectedCategory !== 'all') {
      result = result.filter((c) => c.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result
        .map((c) => ({
          ...c,
          skills: c.skills.filter(
            (s) =>
              s.name.toLowerCase().includes(q) ||
              s.level.toLowerCase().includes(q) ||
              s.detail.toLowerCase().includes(q) ||
              c.title.toLowerCase().includes(q)
          ),
        }))
        .filter((c) => c.skills.length > 0);
    }
    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeader
          label="Technical Arsenal"
          title="Skills &amp; Technology Stack"
          headingId="skills-heading"
          description="A structured overview of the programming languages, full-stack frameworks, database management systems, and developer tools in my active stack."
        />

        {/* Dashboard Control Bar (Category Filter Tabs + Search Input) */}
        <FadeIn className="mb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-2xl border border-border bg-surface-card p-3 md:p-4 shadow-lg">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Skill category filter">
              {filterTabs.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`rounded-xl px-3.5 py-1.5 text-xs font-mono font-medium transition-all ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                        : 'text-content-secondary hover:text-content hover:bg-surface-muted border border-transparent'
                    }`}
                  >
                    {cat.title}
                  </button>
                );
              })}
            </div>

            {/* Quick Tech Search */}
            <div className="relative w-full min-w-0 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-content-muted" />
              <input
                type="text"
                placeholder="Search tech, concepts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-muted pl-9 pr-3 py-1.5 text-xs text-content placeholder:text-content-muted font-mono focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-content-muted hover:text-content font-mono"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Skill Clusters Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.category] || Layers;
            return (
              <StaggerItem key={category.title}>
                <div className="solid-card rounded-2xl p-6 h-full flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-bold text-content">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-content-muted">
                        {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                      </span>
                    </div>

                    <p className="text-xs text-content-muted font-mono mb-4">
                      {category.description}
                    </p>

                    {/* Skill Items with Interactive Detail */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="rounded-xl border border-border/60 bg-surface-muted/40 p-3 transition-all duration-200 hover:border-cyan-500/30 hover:bg-surface-muted"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-semibold text-content">
                              {skill.name}
                            </span>
                            <span
                              className={`rounded-md border px-2 py-0.5 text-[10px] font-mono font-medium ${
                                skill.level === 'Intermediate'
                                  ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                                  : 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                              }`}
                            >
                              {skill.level}
                            </span>
                          </div>
                          <p className="mt-1.5 text-[11px] leading-relaxed text-content-secondary">
                            {skill.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-content-muted font-mono text-xs">
            No matching technologies found for "{searchQuery}".
          </div>
        )}
      </div>
    </section>
  );
}
