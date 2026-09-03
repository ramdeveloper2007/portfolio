export const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 'Intermediate' },
      { name: 'CSS', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'Responsive Web Design', level: 'Intermediate' },
    ],
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python', level: 'Intermediate' },
      { name: 'Flask', level: 'Intermediate' },
      { name: 'REST APIs', level: 'Learning' },
    ],
  },
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
    title: 'Database',
    skills: [
      { name: 'SQLite', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
    ],
  },
  {
    title: 'Tools & Technologies',
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
