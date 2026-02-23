/**
 * XZIRO Lab - Open Source AI Projects
 *
 * Project data structure for portfolio showcase
 * Each project includes metadata, GitHub links, and contribution metrics
 */

export type ProjectCategory = 'tools' | 'research' | 'agentic';

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  status: 'active' | 'experimental' | 'upcoming' | 'archived';
  tags: string[];
  github: string;
  documentation?: string;
  demo?: string;
  image?: string;
  metrics: {
    stars: number;
    forks: number;
    contributors: number;
    commits: number;
  };
  technologies: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  /** Optional phase/milestone timeline for detail page */
  phases?: { title: string; description: string; done?: boolean }[];
  /** Optional CLI/code snippets for detail page */
  cliSnippets?: { label: string; code: string }[];
  /** Optional "Problem" section (Tally-style) */
  problem?: string;
  /** Optional "Solution" section (Tally-style) */
  solution?: string;
  /** Optional install/quick-start one-liner (e.g. curl) */
  installCommand?: string;
  /** Optional hero sub line (e.g. "CLI. No API keys.") */
  heroSubline?: string;
}

export const projects: Project[] = [
  {
    id: 'noctyl',
    name: 'Noctyl',
    description:
      'Static token usage estimator for multi-agent AI workflows. Estimates cost and usage before execution—no API calls, no tokens burned.',
    longDescription:
      'Noctyl analyzes code repositories (e.g. LangGraph-based agentic systems), builds a workflow graph, and produces token/cost envelopes. It detects unbounded loops, prompt explosion, and structural risks. Phase 1: ingestion pipeline. Phase 2: graph analysis, cycles, metrics. Phase 3: token estimation, model profiles, cost envelopes. 493+ tests, CLI (noctyl estimate), schema 3.0 output. Not a runtime monitor—pre-execution intelligence only.',
    category: 'tools',
    status: 'active',
    tags: ['LangGraph', 'Static Analysis', 'Token Estimation', 'Multi-Agent', 'CLI'],
    github: 'https://github.com/xZiro-Lab/Noctyl',
    documentation: 'https://github.com/xZiro-Lab/Noctyl#readme',
    demo: undefined,
    image: undefined,
    metrics: {
      stars: 1,
      forks: 0,
      contributors: 1,
      commits: 50,
    },
    technologies: ['Python', 'AST', 'LangGraph', 'pytest', 'YAML'],
    featured: true,
    createdAt: '2024-01-01',
    updatedAt: '2026-02-23',
    phases: [
      { title: 'Phase 1 — LangGraph ingestion', description: 'Workflow graph extraction from agentic codebases.', done: true },
      { title: 'Phase 2 — Graph analysis', description: 'Control-flow, cycles, metrics, structural risks.', done: true },
      { title: 'Phase 3 — Token estimation', description: 'Token envelopes, model profiles, cost estimation.', done: true },
    ],
    cliSnippets: [
      { label: 'Basic usage', code: 'noctyl estimate ./my_project' },
      { label: 'With profile and output', code: 'noctyl estimate ./my_project --profile profiles/gpt-4o.yaml --output estimates.json' },
    ],
    problem:
      'Agentic systems often fail silently: unbounded loops, prompt and memory explosion, hidden retry costs, poor agent decomposition. You only find out after burning tokens and budget.',
    solution:
      'Noctyl analyzes your repo, builds the workflow graph, and estimates token usage and cost before you run anything. No API keys, no execution—just static analysis and envelope reports for humans and AI assistants (Claude, Codex, Copilot, Cursor).',
    installCommand: 'curl -fsSL https://raw.githubusercontent.com/xZiro-Lab/Noctyl/main/install.sh | bash',
    heroSubline: 'CLI. No API keys. Pre-execution only.',
  },
  {
    id: 'upcoming-1',
    name: 'In Development',
    description: 'Next project in the pipeline. Check back for updates.',
    longDescription:
      'This project is currently in development. Details and release will be announced when ready.',
    category: 'research',
    status: 'upcoming',
    tags: ['Research', 'In Development'],
    github: 'https://github.com/xZiro-Lab',
    documentation: undefined,
    demo: undefined,
    image: undefined,
    metrics: { stars: 0, forks: 0, contributors: 0, commits: 0 },
    technologies: [],
    featured: false,
    createdAt: '2026-02-23',
    updatedAt: '2026-02-23',
  },
  {
    id: 'upcoming-2',
    name: 'In Development',
    description: 'Another tool or research project. Coming soon.',
    longDescription:
      'This project is currently in development. Details and release will be announced when ready.',
    category: 'tools',
    status: 'upcoming',
    tags: ['Tools', 'In Development'],
    github: 'https://github.com/xZiro-Lab',
    documentation: undefined,
    demo: undefined,
    image: undefined,
    metrics: { stars: 0, forks: 0, contributors: 0, commits: 0 },
    technologies: [],
    featured: false,
    createdAt: '2026-02-23',
    updatedAt: '2026-02-23',
  },
  {
    id: 'upcoming-3',
    name: 'In Development',
    description: 'Agentic or research work in progress.',
    longDescription:
      'This project is currently in development. Details and release will be announced when ready.',
    category: 'agentic',
    status: 'upcoming',
    tags: ['Agentic', 'In Development'],
    github: 'https://github.com/xZiro-Lab',
    documentation: undefined,
    demo: undefined,
    image: undefined,
    metrics: { stars: 0, forks: 0, contributors: 0, commits: 0 },
    technologies: [],
    featured: false,
    createdAt: '2026-02-23',
    updatedAt: '2026-02-23',
  },
];

export const categories = [
  { id: 'tools' as const, label: 'Tools & Frameworks', icon: '🛠️' },
  { id: 'research' as const, label: 'Research', icon: '🔬' },
  { id: 'agentic' as const, label: 'Agentic / Multi-Agent', icon: '🤖' },
];

export const stats = {
  totalProjects: projects.length,
  activeProjects: projects.filter((p) => p.status === 'active').length,
  totalStars: projects.reduce((sum, p) => sum + p.metrics.stars, 0),
  totalContributors: projects.reduce((sum, p) => sum + p.metrics.contributors, 0),
  totalCommits: projects.reduce((sum, p) => sum + p.metrics.commits, 0),
};
