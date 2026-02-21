/**
 * Contributions Page - XZIRO Lab
 * 
 * Display contributions, impact metrics, and activity across all projects
 */

import { Card, CardContent } from "@/components/ui/card";
import { Star, GitFork, Users, Code2, TrendingUp, Calendar } from "lucide-react";
import { projects, stats } from "@/lib/projects";

export default function Contributions() {
  // Calculate contribution trends
  const activeProjects = projects.filter(p => p.status === 'active');
  const totalMetrics = {
    stars: projects.reduce((sum, p) => sum + p.metrics.stars, 0),
    forks: projects.reduce((sum, p) => sum + p.metrics.forks, 0),
    contributors: projects.reduce((sum, p) => sum + p.metrics.contributors, 0),
    commits: projects.reduce((sum, p) => sum + p.metrics.commits, 0),
  };

  const topProjects = [...projects]
    .filter(p => p.metrics.stars > 0)
    .sort((a, b) => b.metrics.stars - a.metrics.stars)
    .slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 md:py-24 bg-card border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-mono">
            Contributions & Impact
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Tracking the growth and impact of open source AI research projects across the XZIRO Lab ecosystem.
          </p>
        </div>
      </section>

      {/* Main Metrics */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Total Stars */}
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <Star className="text-accent" size={24} />
                  <TrendingUp className="text-accent/50" size={20} />
                </div>
                <div className="text-4xl font-bold text-accent font-mono mb-2">
                  {totalMetrics.stars}
                </div>
                <p className="text-muted-foreground text-sm">Total GitHub Stars</p>
              </CardContent>
            </Card>

            {/* Total Forks */}
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <GitFork className="text-accent" size={24} />
                  <TrendingUp className="text-accent/50" size={20} />
                </div>
                <div className="text-4xl font-bold text-accent font-mono mb-2">
                  {totalMetrics.forks}
                </div>
                <p className="text-muted-foreground text-sm">Total Forks</p>
              </CardContent>
            </Card>

            {/* Total Contributors */}
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-accent" size={24} />
                  <TrendingUp className="text-accent/50" size={20} />
                </div>
                <div className="text-4xl font-bold text-accent font-mono mb-2">
                  {totalMetrics.contributors}
                </div>
                <p className="text-muted-foreground text-sm">Community Contributors</p>
              </CardContent>
            </Card>

            {/* Total Commits */}
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <div className="flex items-center justify-between mb-4">
                  <Code2 className="text-accent" size={24} />
                  <TrendingUp className="text-accent/50" size={20} />
                </div>
                <div className="text-4xl font-bold text-accent font-mono mb-2">
                  {totalMetrics.commits}
                </div>
                <p className="text-muted-foreground text-sm">Total Commits</p>
              </CardContent>
            </Card>
          </div>

          {/* Project Stats */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Active Projects */}
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-mono">Active Projects</h3>
                <div className="space-y-4">
                  {activeProjects.map((project) => (
                    <div key={project.id} className="flex items-center justify-between pb-4 border-b border-border last:border-0">
                      <div>
                        <p className="font-mono font-semibold text-foreground">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-accent" />
                          <span className="font-mono">{project.metrics.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={16} className="text-accent" />
                          <span className="font-mono">{project.metrics.contributors}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Projects by Stars */}
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-mono">Top Projects</h3>
                <div className="space-y-4">
                  {topProjects.map((project, index) => (
                    <div key={project.id} className="flex items-center gap-4 pb-4 border-b border-border last:border-0">
                      <div className="w-8 h-8 rounded bg-accent/20 text-accent flex items-center justify-center font-mono font-bold text-sm">
                        #{index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-mono font-semibold text-foreground">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-accent" />
                        <span className="font-mono font-bold text-accent">{project.metrics.stars}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activity Timeline */}
      <section className="py-16 md:py-24 bg-card border-t border-b border-border">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-12 font-mono">Project Timeline</h2>
          <div className="space-y-6">
            {projects
              .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
              .map((project) => (
                <div key={project.id} className="flex gap-6 pb-6 border-b border-border last:border-0">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-0.5 h-16 bg-border mt-2"></div>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-mono font-bold text-foreground">{project.name}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-mono font-semibold ${
                        project.status === 'active' 
                          ? 'bg-accent/20 text-accent'
                          : 'bg-muted-foreground/20 text-muted-foreground'
                      }`}>
                        {project.status === 'active' ? '● Active' : '◯ ' + project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        <span className="font-mono text-muted-foreground">
                          Updated: {new Date(project.updatedAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Code2 size={16} className="text-accent" />
                        <span className="font-mono text-muted-foreground">
                          {project.metrics.commits} commits
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Contribution Guidelines */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground mb-8 font-mono">How to Contribute</h2>
          <div className="space-y-6">
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <h3 className="text-lg font-bold text-foreground mb-3 font-mono">1. Explore Projects</h3>
                <p className="text-muted-foreground">
                  Browse our open source AI projects and find one that interests you. Each project has detailed documentation and contribution guidelines.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <h3 className="text-lg font-bold text-foreground mb-3 font-mono">2. Fork & Clone</h3>
                <p className="text-muted-foreground">
                  Fork the repository on GitHub and clone it to your local machine. Follow the setup instructions in the README.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <h3 className="text-lg font-bold text-foreground mb-3 font-mono">3. Make Changes</h3>
                <p className="text-muted-foreground">
                  Create a new branch, make your improvements, and commit your changes with clear, descriptive messages.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardContent className="pt-8">
                <h3 className="text-lg font-bold text-foreground mb-3 font-mono">4. Submit Pull Request</h3>
                <p className="text-muted-foreground">
                  Push your changes and submit a pull request. Our team will review and provide feedback on your contribution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
