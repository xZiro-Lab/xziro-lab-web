/**
 * Projects Page - XZIRO Lab
 * 
 * Showcase all open source AI projects with filtering by category and status
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Star, GitFork, Users, Filter, Code2, ArrowRight } from "lucide-react";
import { projects, categories, type Project } from "@/lib/projects";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

  const filteredProjects = projects.filter((project: Project) => {
    const categoryMatch = !selectedCategory || project.category === selectedCategory;
    const statusMatch = !selectedStatus || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const statuses = [
    { id: 'active', label: 'Active', icon: '●' },
    { id: 'experimental', label: 'Experimental', icon: '◉' },
    { id: 'upcoming', label: 'Upcoming', icon: '◯' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 md:py-24 bg-card border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-mono">
            All Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse all open source AI research projects. Filter by category and status to find what interests you.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-background border-b border-border sticky top-16 z-40">
        <div className="container">
          <div className="flex flex-col gap-6">
            {/* Category Filter */}
            <div>
              <h3 className="text-sm font-mono font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter size={16} className="text-accent" />
                Research Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={selectedCategory === null ? "default" : "outline"}
                  className={selectedCategory === null ? "bg-accent text-background" : "border-accent text-accent"}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </Button>
                {categories.map((category: any) => (
                  <Button
                    key={category.id}
                    size="sm"
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={selectedCategory === category.id ? "bg-accent text-background" : "border-accent text-accent"}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.icon} {category.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <h3 className="text-sm font-mono font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter size={16} className="text-accent" />
                Status
              </h3>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant={selectedStatus === null ? "default" : "outline"}
                  className={selectedStatus === null ? "bg-accent text-background" : "border-accent text-accent"}
                  onClick={() => setSelectedStatus(null)}
                >
                  All
                </Button>
                {statuses.map((status: any) => (
                  <Button
                    key={status.id}
                    size="sm"
                    variant={selectedStatus === status.id ? "default" : "outline"}
                    className={selectedStatus === status.id ? "bg-accent text-background" : "border-accent text-accent"}
                    onClick={() => setSelectedStatus(status.id)}
                  >
                    {status.icon} {status.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 flex-1">
        <div className="container">
          {filteredProjects.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8 font-mono">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project: Project) => (
                  <Card
                    key={project.id}
                    className="bg-background border-border hover:border-accent/50 transition-all duration-300 overflow-hidden group flex flex-col"
                  >
                    <div className="h-40 bg-muted overflow-hidden relative flex items-center justify-center">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                          <Code2 className="text-accent/40" size={40} />
                        </div>
                      )}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded text-xs font-mono font-semibold ${
                            project.status === "active"
                              ? "bg-accent/20 text-accent border border-accent/30"
                              : "bg-muted-foreground/20 text-muted-foreground border border-muted-foreground/30"
                          }`}
                        >
                          {project.status === "active" && "● Active"}
                          {project.status === "experimental" && "◉ Experimental"}
                          {project.status === "upcoming" && "◯ Upcoming"}
                        </span>
                      </div>
                    </div>
                    <CardContent className="pt-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-2 font-mono">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-1 bg-accent/10 border border-accent/20 rounded text-xs text-accent font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.metrics.stars > 0 && (
                        <div className="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star size={16} className="text-accent" />
                            <span className="font-mono">{project.metrics.stars}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork size={16} className="text-accent" />
                            <span className="font-mono">{project.metrics.forks}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} className="text-accent" />
                            <span className="font-mono">{project.metrics.contributors}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2 flex-wrap">
                        <Button
                          size="sm"
                          className="flex-1 min-w-0 bg-accent text-background hover:bg-accent/90 font-mono"
                          onClick={() => (window.location.href = `/projects/${project.id}`)}
                        >
                          View Details
                          <ArrowRight size={14} className="ml-1" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-accent text-accent hover:bg-accent/10 font-mono"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github size={16} className="mr-2" />
                          GitHub
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent/10 font-mono"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-6">No projects found with the selected filters.</p>
              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-mono"
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedStatus(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
