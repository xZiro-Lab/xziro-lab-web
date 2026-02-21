/**
 * XZIRO Lab - Open Source AI Projects
 * 
 * Project data structure for portfolio showcase
 * Each project includes metadata, GitHub links, and contribution metrics
 */

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  category: 'nlp' | 'vision' | 'ml' | 'data' | 'research' | 'tools';
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
}

export const projects: Project[] = [
  {
    id: 'project-1',
    name: 'Project Name 1',
    description: 'Brief description of your first open source AI project',
    longDescription: 'Detailed description of your first project. Explain the problem it solves, the approach taken, and why it matters for the AI community.',
    category: 'nlp',
    status: 'active',
    tags: ['NLP', 'Transformers', 'Language Models'],
    github: 'https://github.com/yourusername/project-1',
    documentation: 'https://github.com/yourusername/project-1#readme',
    demo: 'https://demo.example.com/project-1',
    image: 'https://via.placeholder.com/400x300?text=Project+1',
    metrics: {
      stars: 245,
      forks: 42,
      contributors: 8,
      commits: 156,
    },
    technologies: ['Python', 'PyTorch', 'Hugging Face'],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2026-02-21',
  },
  {
    id: 'project-2',
    name: 'Project Name 2',
    description: 'Brief description of your second open source AI project',
    longDescription: 'Detailed description of your second project. Explain the problem it solves, the approach taken, and why it matters for the AI community.',
    category: 'vision',
    status: 'active',
    tags: ['Computer Vision', 'Image Processing', 'Deep Learning'],
    github: 'https://github.com/yourusername/project-2',
    documentation: 'https://github.com/yourusername/project-2#readme',
    demo: 'https://demo.example.com/project-2',
    image: 'https://via.placeholder.com/400x300?text=Project+2',
    metrics: {
      stars: 189,
      forks: 31,
      contributors: 5,
      commits: 98,
    },
    technologies: ['Python', 'TensorFlow', 'OpenCV'],
    featured: true,
    createdAt: '2024-03-20',
    updatedAt: '2026-02-15',
  },
  {
    id: 'project-3',
    name: 'Upcoming Project 1',
    description: 'Coming soon - Next generation AI research project',
    longDescription: 'This project is currently in development. Check back soon for updates and the initial release.',
    category: 'research',
    status: 'upcoming',
    tags: ['Research', 'Experimental', 'Coming Soon'],
    github: 'https://github.com/yourusername/project-3',
    documentation: undefined,
    demo: undefined,
    image: 'https://via.placeholder.com/400x300?text=Coming+Soon+1',
    metrics: {
      stars: 0,
      forks: 0,
      contributors: 0,
      commits: 0,
    },
    technologies: ['Python', 'JAX', 'NumPy'],
    featured: false,
    createdAt: '2026-03-01',
    updatedAt: '2026-02-21',
  },
  {
    id: 'project-4',
    name: 'Upcoming Project 2',
    description: 'Coming soon - Experimental AI framework',
    longDescription: 'This project is currently in development. Check back soon for updates and the initial release.',
    category: 'tools',
    status: 'upcoming',
    tags: ['Framework', 'Tools', 'Coming Soon'],
    github: 'https://github.com/yourusername/project-4',
    documentation: undefined,
    demo: undefined,
    image: 'https://via.placeholder.com/400x300?text=Coming+Soon+2',
    metrics: {
      stars: 0,
      forks: 0,
      contributors: 0,
      commits: 0,
    },
    technologies: ['Python', 'FastAPI', 'Docker'],
    featured: false,
    createdAt: '2026-04-01',
    updatedAt: '2026-02-21',
  },
];

export const categories = [
  { id: 'nlp', label: 'Natural Language Processing', icon: '📝' },
  { id: 'vision', label: 'Computer Vision', icon: '👁️' },
  { id: 'ml', label: 'Machine Learning', icon: '🤖' },
  { id: 'data', label: 'Data Processing', icon: '📊' },
  { id: 'research', label: 'Research', icon: '🔬' },
  { id: 'tools', label: 'Tools & Frameworks', icon: '🛠️' },
];

export const stats = {
  totalProjects: projects.length,
  activeProjects: projects.filter(p => p.status === 'active').length,
  totalStars: projects.reduce((sum, p) => sum + p.metrics.stars, 0),
  totalContributors: projects.reduce((sum, p) => sum + p.metrics.contributors, 0),
  totalCommits: projects.reduce((sum, p) => sum + p.metrics.commits, 0),
};
