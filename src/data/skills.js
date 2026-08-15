export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'Python', level: 'Intermediate' },
      { name: 'Java', level: 'Learning' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend',
    skills: [{ name: 'Python Flask', level: 'Intermediate' }],
  },
  {
    title: 'Database',
    skills: [
      { name: 'SQLite', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 'Intermediate' },
      { name: 'GitHub', level: 'Intermediate' },
      { name: 'VS Code', level: 'Familiar' },
    ],
  },
];

export const levelStyles = {
  Beginner: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
  Intermediate: 'bg-accent/10 text-accent border-accent/20',
  Learning: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20',
  Familiar: 'bg-content-muted/10 text-content-secondary border-border',
};
