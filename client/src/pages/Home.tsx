/**
 * Home Page - XZIRO Lab Open Source AI Portfolio
 * 
 * Design: Tactical + Community-Friendly
 * - Dark navy background with beige text
 * - Red accent elements for highlights
 * - Developer-focused, open source aesthetic
 * - Showcase of experimental AI projects
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Star, GitFork, Users, Code2, Mail } from "lucide-react";
import { projects, stats, categories, type Project } from "@/lib/projects";

const heroNetworkImg = "https://private-us-east-1.manuscdn.com/sessionFile/MrtZ9jckFJSPGPK9m8rbTa/sandbox/36S7JTcAByYolBcTQ4aM84-img-2_1771668114000_na1fn_aGVyby1uZXR3b3Jr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTXJ0WjlqY2tGSlNQR1BLOW04cmJUYS9zYW5kYm94LzM2UzdKVGNBQnlZb2xCY1RRNGFNODQtaW1nLTJfMTc3MTY2ODExNDAwMF9uYTFmbl9hR1Z5YnkxdVpYUjNiM0pyLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DY8MZXd2SLjTo56ctrJTZe7KgAZZgW5OYdIIkX1E9T8K7om8zy~N9TXc5Uwe78~v23uqQfJKWYR3rEHZaPP9K6LO5-oDpSl6DYPhNzALP4O8rFiKwrrnhwefvavbFDXEQS1CSsx3Qqj7xD~AGWwy4oPA-gLk0tLRZp4PiIC-~lNQhJV5OaeabSpBfplAxNBaDAbyTU92ZHgiVwv1kDbdjfU4jvXrKStX0AStBpX8VZnR-PBVPiI4ehle9NrP5Z3RkmZfMphQG~hJHdXE4828yjTiPUQUF4zAFaqjZAI9UxuutFgsagIOVcL~JORbWQq62Xa9QInodE-T3KqGctCFcA__";

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${heroNetworkImg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/85"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-accent/10 border border-accent/30 rounded">
              <Code2 size={16} className="text-accent" />
              <span className="text-sm font-mono text-accent">Open Source</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-mono leading-tight">
              Open Source Research & Tools
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              A place for open source and research projects—agentic AI tooling, static analysis, and experiments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-mono"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Projects
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-mono"
                onClick={() => window.open("https://github.com/xZiro-Lab", "_blank")}
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-mono mb-2">
                {stats.totalProjects}
              </div>
              <p className="text-muted-foreground text-sm">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-mono mb-2">
                {stats.totalStars}
              </div>
              <p className="text-muted-foreground text-sm">GitHub Stars</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-mono mb-2">
                {stats.totalContributors}
              </div>
              <p className="text-muted-foreground text-sm">Contributors</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent font-mono mb-2">
                {stats.totalCommits}
              </div>
              <p className="text-muted-foreground text-sm">Commits</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-24 bg-card border-y border-border">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">About Xziro Lab</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Xziro Lab is a place for open source and research projects. Interests include agentic AI
            tooling, static analysis, and multi-agent workflows. No commercial offering—just side
            projects and research. Broader interests may show up here over time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Everything here is open source. Contributions and feedback are welcome on GitHub.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 md:py-32">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-mono">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground">
              Active and experimental projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-background border-border hover:border-accent/50 transition-all duration-300 overflow-hidden group flex flex-col"
              >
                <div className="h-48 bg-muted overflow-hidden relative flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                      <Code2 className="text-accent/40" size={48} />
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
                      {project.status === "active" ? "● Active" : "◯ Upcoming"}
                    </span>
                  </div>
                </div>
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

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

                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      className="flex-1 bg-accent text-background hover:bg-accent/90 font-mono"
                      onClick={() => (window.location.href = `/projects/${project.id}`)}
                    >
                      View Details
                      <ArrowRight className="ml-2" size={16} />
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Projects Link */}
          <div className="text-center">
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-mono"
              onClick={() => window.location.href = '/projects'}
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Interest Areas */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-mono">Interest Areas</h2>
            <p className="text-lg text-muted-foreground">
              Tools, research, and agentic systems
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category: { id: string; label: string; icon: string }) => (
              <Card
                key={category.id}
                className="bg-background border-border hover:border-accent/50 transition-all duration-300"
              >
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-mono">
                    {category.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {projects.filter((p: Project) => p.category === category.id).length} project
                    {projects.filter((p: Project) => p.category === category.id).length !== 1
                      ? "s"
                      : ""}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA & Contact */}
      <section id="contact" className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">Get in touch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Open source only. Find us on GitHub—issues and PRs welcome. Or email directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-mono"
                onClick={() => window.open("mailto:ashishmehta.per@gmail.com", "_blank")}
              >
                <Mail className="mr-2" size={20} />
                Email
              </Button>
              <Button
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-mono"
                onClick={() => window.open("https://github.com/xZiro-Lab", "_blank")}
              >
                <Github className="mr-2" size={20} />
                Visit GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
