/**
 * GitHub API Utilities
 * Fetches user repos and data from GitHub API
 */

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  url: string;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
  is_fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

/**
 * Fetch GitHub user information
 */
export async function fetchGitHubUser(username: string, token?: string): Promise<GitHubUser> {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  const response = await fetch(`https://api.github.com/users/${username}`, { headers });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub user: ${response.statusText}`);
  }

  const data = await response.json();
  
  return {
    login: data.login,
    name: data.name,
    avatar_url: data.avatar_url,
    bio: data.bio,
    public_repos: data.public_repos,
    followers: data.followers,
    following: data.following,
    html_url: data.html_url,
  };
}

/**
 * Fetch GitHub repositories for a user
 * Filters out forks and archived repos by default
 */
export async function fetchGitHubRepos(
  username: string,
  options?: {
    token?: string;
    maxRepos?: number;
    excludeRepos?: string[];
    includeForks?: boolean;
  }
): Promise<GitHubRepo[]> {
  const {
    token,
    maxRepos = 10,
    excludeRepos = [],
    includeForks = false,
  } = options || {};

  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  const params = new URLSearchParams({
    sort: 'updated',
    direction: 'desc',
    per_page: String(Math.min(maxRepos * 2, 100)), // Fetch extra to account for filtering
  });

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?${params}`,
    { headers }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch GitHub repos: ${response.statusText}`);
  }

  let repos = await response.json();

  // Filter repos
  repos = repos
    .filter((repo: any) => {
      // Exclude archived repos
      if (repo.archived) return false;
      
      // Exclude forked repos unless specified
      if (repo.fork && !includeForks) return false;
      
      // Exclude specified repos by name
      if (excludeRepos.includes(repo.name)) return false;
      
      return true;
    })
    .slice(0, maxRepos)
    .map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      url: repo.url,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
      is_fork: repo.fork,
    }));

  return repos;
}

/**
 * Get a GitHub repository's README content
 */
export async function fetchGitHubRepoReadme(
  owner: string,
  repo: string,
  token?: string
): Promise<string | null> {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3.raw',
  };

  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers }
    );

    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}

/**
 * Format repository data for portfolio display
 */
export function formatRepoForPortfolio(repo: GitHubRepo) {
  const languages = repo.language ? [repo.language] : [];
  
  return {
    id: repo.name,
    version: 'v1.0.0', // You can add version from GitHub releases if needed
    title: repo.name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    description: repo.description || 'A GitHub repository',
    stack: [...languages, ...repo.topics.slice(0, 3)],
    repository: repo.html_url,
    demo: null,
    exception: repo.description || 'Check out this project on GitHub',
    algorithm: `${repo.stargazers_count} stars · ${repo.forks_count} forks · Updated ${new Date(repo.updated_at).toLocaleDateString()}`,
    output: {
      language: repo.language || 'Multiple',
      stars: repo.stargazers_count.toString(),
      updated: new Date(repo.updated_at).toLocaleDateString(),
    },
    postmortem: `Built with ${repo.language || 'multiple languages'}. Check the repository for more details.`,
  };
}
