import { useState, useEffect } from 'react';
import { Github, GitBranch, Star, Users, ExternalLink as ExtIcon } from 'lucide-react';
import { personal } from '../data/personal';
import { ExternalLink, isPlaceholderLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const staticGitHubInfo = {
  profileUrl: personal.social.github,
  stats: [
    { label: 'Public Repositories', value: '—', icon: GitBranch },
    { label: 'Followers', value: '—', icon: Users },
    { label: 'Total Stars', value: '—', icon: Star },
  ],
};

export default function GitHubActivity() {
  const isConnected = !isPlaceholderLink(personal.githubUsername) && !personal.githubUsername.startsWith('[');
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isConnected) return;

    const controller = new AbortController();
    const fetchGitHubData = async () => {
      setLoading(true);
      setError(false);
      try {
        const [userResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${personal.githubUsername}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${personal.githubUsername}/repos?per_page=100`, { signal: controller.signal }),
        ]);
        if (!userResponse.ok || !reposResponse.ok) throw new Error('GitHub request failed');
        const [userData, repos] = await Promise.all([userResponse.json(), reposResponse.json()]);
        setGithubData({
          publicRepos: userData.public_repos,
          followers: userData.followers,
          avatar: userData.avatar_url,
          name: userData.name || personal.githubUsername,
          stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
        });
      } catch (fetchError) {
        if (fetchError.name !== 'AbortError') setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchGitHubData();
    return () => controller.abort();
  }, [isConnected]);

  const displayStats = githubData
    ? [
        { label: 'Public Repositories', value: githubData.publicRepos, icon: GitBranch },
        { label: 'Followers', value: githubData.followers, icon: Users },
        { label: 'Total Stars', value: githubData.stars || 0, icon: Star },
      ]
    : staticGitHubInfo.stats;

  return (
    <section id="github" className="section-padding relative bg-surface-muted border-t border-border/80" aria-labelledby="github-heading">
      <div className="section-container">
        <SectionHeader
          label="Open Source &amp; Code"
          title="Building in Public"
          headingId="github-heading"
          description="Explore my repositories, experiments, and projects on GitHub."
        />

        <FadeIn>
          <div className="solid-card rounded-3xl overflow-hidden border border-border shadow-2xl">
            {/* Top Bar */}
            <div className="flex flex-col gap-5 border-b border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-md shadow-cyan-500/10">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-bold text-content">
                      @{personal.githubUsername}
                    </h3>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  </div>
                  <p className="font-mono text-xs text-content-muted">
                    Full-Stack Developer • Open Source &amp; Academic Repositories
                  </p>
                </div>
              </div>

              <ExternalLink
                href={staticGitHubInfo.profileUrl}
                className="btn-primary"
                showIcon={false}
              >
                <Github className="h-4 w-4" />
                <span>Explore GitHub Profile</span>
                <ExtIcon className="h-3.5 w-3.5 ml-1" />
              </ExternalLink>
            </div>

            {/* Metrics Row */}
            <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border bg-surface-card">
              {displayStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-content-muted">
                      <Icon className="h-4 w-4 text-cyan-400" />
                      <span className="font-mono text-xs uppercase tracking-wider text-content-muted">
                        {stat.label}
                      </span>
                    </div>
                    <p className="font-display text-2xl font-extrabold text-content">
                      {loading ? '...' : stat.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Info Footer */}
            <div className="border-t border-border bg-surface p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="max-w-2xl text-xs sm:text-sm leading-relaxed text-content-secondary">
                {error
                  ? 'Live profile metrics are temporarily unavailable. Explore public repositories directly on GitHub.'
                  : 'Explore my public repositories and code commits directly on GitHub.'}
              </p>
              <span className="text-[11px] font-mono text-cyan-400 shrink-0">
                Verified GitHub Profile ✓
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
