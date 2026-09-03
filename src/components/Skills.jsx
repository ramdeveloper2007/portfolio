import { useState, useMemo } from 'react';
import { skillCategories } from '../data/skills';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';
import { Search, Code2, Server, Terminal, Database, Wrench, Layers, Sparkles } from 'lucide-react';

const categoryIcons = {
  'Frontend Development': Code2,
  'Backend Development': Server,
  'Programming Languages': Terminal,
  'Database': Database,
  'Tools & Technologies': Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    return [{ id: 'all', title: 'All Categories' }, ...skillCategories.map((c) => ({ id: c.title, title: c.title }))];
  }, []);

  const filteredCategories = useMemo(() => {
    let result = skillCategories;
    if (selectedCategory !== 'all') {
      result = result.filter((c) => c.title === selectedCategory);
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
              c.title.toLowerCase().includes(q)
          ),
        }))
        .filter((c) => c.skills.length > 0);
    }
    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="section-padding relative bg-surface" aria-labelledby="skills-heading">
      <div className="section-container">
        <SectionHeader
          label="Technical Arsenal"
          title="Developer Skill Dashboard"
          headingId="skills-heading"
          description="A structured overview of the programming languages, full-stack frameworks, databases, and developer tools in my workflow."
        />

        {/* Dashboard Control Bar (Tabs + Search) */}
        <FadeIn className="mb-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between rounded-2xl border border-border bg-surface-card p-3 md:p-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Skill category filter">
              {categories.map((cat) => {
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

            {/* Quick Skill Search */}
            <div className="relative w-full min-w-0 sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-content-muted" />
              <input
                type="text"
                placeholder="Filter tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface-muted pl-9 pr-3 py-1.5 text-xs text-content placeholder:text-content-muted font-mono focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-content-muted hover:text-content font-mono"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </FadeIn>

        {/* Skill Groups Grid */}
        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.title] || Layers;
            return (
              <StaggerItem key={category.title}>
                <div className="solid-card rounded-2xl p-6 h-full flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:border-cyan-500/40 group-hover:scale-105 transition-all">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-base font-bold text-content">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-content-muted">
                        {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
                      </span>
                    </div>

                    {/* Skill List */}
                    <div className="space-y-2.5">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center justify-between rounded-xl border border-border/60 bg-surface-muted/40 px-3.5 py-2.5 transition-all hover:border-cyan-500/30 hover:bg-surface-muted"
                        >
                          <span className="text-xs font-mono font-medium text-content">
                            {skill.name}
                          </span>
                          <span
                            className={`rounded-md border px-2 py-0.5 text-[10px] font-mono font-medium ${
                              skill.level === 'Intermediate'
                                ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
                                : skill.level === 'Learning'
                                ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30'
                                : 'bg-surface-muted text-content-secondary border-border'
                            }`}
                          >
                            {skill.level}
                          </span>
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

