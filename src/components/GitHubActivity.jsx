import { Github, GitBranch, Star, Users } from 'lucide-react';
import { personal } from '../data/personal';
import { ExternalLink, isPlaceholderLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const staticGitHubInfo = {
  note: 'Connect your GitHub username in src/data/personal.js to enable live stats.',
  profileUrl: personal.social.github,
  stats: [
    { label: 'Public Repositories', value: '[Connect GitHub]', icon: GitBranch },
    { label: 'Followers', value: '[Connect GitHub]', icon: Users },
    { label: 'Stars', value: '[Connect GitHub]', icon: Star },
  ],
};

export default function GitHubActivity() {
  const isConnected = !isPlaceholderLink(personal.githubUsername) && !personal.githubUsername.startsWith('[');

  return (
    <section className="section-padding bg-surface-muted/30" aria-labelledby="github-heading">
      <div className="section-container">
        <SectionHeader
          label="GitHub"
          title="Coding Activity"
          description={
            isConnected
              ? 'My open-source work and coding activity on GitHub.'
              : 'Static preview — update your GitHub username to connect live data.'
          }
        />

        <FadeIn>
          <div className="glass-card overflow-hidden">
            <div className="flex flex-col gap-6 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-surface-muted text-content">
                  <Github className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-content">
                    @{isConnected ? personal.githubUsername : 'your-username'}
                  </h3>
                  <p className="text-sm text-content-secondary">
                    {isConnected ? 'GitHub Profile' : staticGitHubInfo.note}
                  </p>
                </div>
              </div>

              <ExternalLink href={staticGitHubInfo.profileUrl} className="btn-secondary shrink-0">
                <Github className="h-4 w-4" />
                View Profile
              </ExternalLink>
            </div>

            <div className="grid sm:grid-cols-3">
              {staticGitHubInfo.stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="border-b border-border p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                  >
                    <div className="mb-3 flex items-center gap-2 text-content-muted">
                      <Icon className="h-4 w-4" />
                      <span className="text-xs font-medium uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <p className="font-display text-2xl font-bold text-content">{stat.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-border bg-surface-muted/50 p-6">
              <p className="mb-4 text-sm font-medium text-content-secondary">Contribution Activity</p>
              <div className="flex flex-wrap gap-1.5" aria-label="Contribution graph placeholder">
                {Array.from({ length: 52 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className="h-2.5 w-2.5 rounded-sm bg-border"
                        title="Connect GitHub for live contribution data"
                      />
                    ))}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-content-muted">
                To enable live GitHub stats, set{' '}
                <code className="rounded bg-surface-muted px-1.5 py-0.5">githubUsername</code> in{' '}
                <code className="rounded bg-surface-muted px-1.5 py-0.5">src/data/personal.js</code>{' '}
                and optionally integrate the GitHub API with an environment variable.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
