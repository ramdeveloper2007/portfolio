import { useState, useEffect } from 'react';
import { Github, GitBranch, Star, Users, ExternalLink as ExtIcon, Terminal, Activity } from 'lucide-react';
import { personal } from '../data/personal';
import { ExternalLink, isPlaceholderLink } from '../utils/helpers';
import { FadeIn } from './ui/FadeIn';
import { SectionHeader } from './ui/SectionHeader';

const staticGitHubInfo = {
  note: 'Connecting directly to GitHub public repository index.',
  profileUrl: personal.social.github,
  stats: [
    { label: 'Public Repositories', value: '4+', icon: GitBranch },
    { label: 'Primary Language', value: 'Python / JS', icon: Terminal },
    { label: 'GitHub Ecosystem', value: 'Active', icon: Activity },
  ],
};

export default function GitHubActivity() {
  const isConnected = !isPlaceholderLink(personal.githubUsername) && !personal.githubUsername.startsWith('[');
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConnected) return;

    const fetchGitHubData = async () => {
      setLoading(true);
      try {
        const userResponse = await fetch(`https://api.github.com/users/${personal.githubUsername}`);
        if (userResponse.ok) {
          const userData = await userResponse.json();
          setGithubData({
            publicRepos: userData.public_repos,
            followers: userData.followers,
            avatar: userData.avatar_url,
            name: userData.name || personal.githubUsername,
          });
        }

        const reposResponse = await fetch(
          `https://api.github.com/users/${personal.githubUsername}/repos?per_page=100`
        );
        if (reposResponse.ok) {
          const repos = await reposResponse.json();
          const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
          setGithubData((prev) => ({ ...prev, stars: totalStars }));
        }
      } catch (error) {
        console.error('Failed to fetch GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [isConnected]);

  const displayStats = githubData
    ? [
        { label: 'Public Repositories', value: githubData.publicRepos, icon: GitBranch },
        { label: 'Followers', value: githubData.followers, icon: Users },
        { label: 'Total Stars', value: githubData.stars || 0, icon: Star },
      ]
    : staticGitHubInfo.stats;

  return (
    <section className="section-padding relative bg-studio-950/80" aria-labelledby="github-heading">
      <div className="section-container">
        <SectionHeader
          label="Open Source &amp; Code"
          title="GitHub Developer Activity"
          description="A direct look into my open-source repositories, development velocity, and active codebase contributions."
        />

        <FadeIn>
          <div className="solid-card rounded-2xl overflow-hidden border border-border">
            {/* Top Bar */}
            <div className="flex flex-col gap-5 border-b border-border bg-studio-950/90 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Github className="h-6 w-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-bold text-content">
                      @{personal.githubUsername}
                    </h3>
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                  </div>
                  <p className="font-mono text-xs text-content-muted">
                    Full-Stack Developer • Practical Software Systems
                  </p>
                </div>
              </div>

              <ExternalLink
                href={staticGitHubInfo.profileUrl}
                className="btn-secondary"
                showIcon={false}
              >
                <Github className="h-4 w-4" />
                <span>Visit GitHub Profile</span>
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
                      {stat.value}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Activity Stream Heatmap Preview */}
            <div className="border-t border-border bg-studio-950/60 p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs uppercase tracking-wider text-content-secondary">
                  Continuous Commit Stream
                </p>
                <span className="text-[11px] font-mono text-cyan-400">Regular Coding Cadence</span>
              </div>

              <div className="flex flex-wrap gap-1.5 overflow-hidden py-1" aria-label="Contribution activity preview">
                {Array.from({ length: 42 }).map((_, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1.5">
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const isLit = (weekIndex * 7 + dayIndex) % 3 === 0 || (weekIndex * 7 + dayIndex) % 5 === 0;
                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`h-2.5 w-2.5 rounded-sm transition-colors ${
                            isLit
                              ? 'bg-cyan-500/40 hover:bg-cyan-400'
                              : 'bg-surface-muted/80 hover:bg-surface-muted'
                          }`}
                          title={`Active coding commit day`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

