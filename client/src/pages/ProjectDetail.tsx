/**
 * Project Detail Page - XZIRO Lab
 * Tally-inspired layout: top nav, hero wordmark, Problem/Solution, Install (copy), Workflow, Open Source footer
 */

import { useParams, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, BookOpen, Copy, Check, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { projects, type Project } from "@/lib/projects";
import NotFound from "@/pages/NotFound";

function getStatusLabel(status: Project["status"]) {
  switch (status) {
    case "active":
      return "● Active";
    case "experimental":
      return "◉ Experimental";
    case "upcoming":
      return "◯ Upcoming";
    case "archived":
      return "— Archived";
    default:
      return status;
  }
}

function CopyableCode({
  code,
  label,
  className = "",
}: {
  code: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      toast.success("Copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className={className}>
      {label && (
        <p className="text-sm text-muted-foreground mb-2 font-mono">{label}</p>
      )}
      <div className="relative group">
        <pre className="p-4 pr-12 bg-muted/50 border border-border rounded-lg text-sm text-foreground font-mono overflow-x-auto">
          <code>{code}</code>
        </pre>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-accent"
          onClick={copy}
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </Button>
      </div>
    </div>
  );
}

export default function ProjectDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const id = params?.id ?? "";
  const project = projects.find((p) => p.id === id);

  if (!project) return <NotFound />;

  const hasProblemSolution = project.problem || project.solution;
  const hasInstall = project.installCommand || (project.cliSnippets && project.cliSnippets.length > 0);
  const installCode = project.installCommand ?? project.cliSnippets?.[0]?.code;
  const cliRest = project.cliSnippets?.slice(project.installCommand ? 0 : 1) ?? [];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar — Tally-style: back + utility links */}
      <header className="sticky top-0 z-40 bg-background/95 border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container flex items-center justify-between h-14">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-accent font-mono -ml-2"
            onClick={() => setLocation("/projects")}
          >
            <ArrowLeft className="mr-2" size={16} />
            Projects
          </Button>
          <nav className="flex items-center gap-6 text-sm font-mono">
            {project.documentation && (
              <a
                href={project.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
              >
                <BookOpen size={14} />
                Docs
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1"
            >
              <Github size={14} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero — wordmark + tagline + sub */}
      <section className="py-12 md:py-20 border-b border-border">
        <div className="container max-w-3xl">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-mono font-semibold mb-6 ${
              project.status === "active"
                ? "bg-accent/20 text-accent border border-accent/30"
                : "bg-muted text-muted-foreground border border-border"
            }`}
          >
            {getStatusLabel(project.status)}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-mono tracking-tight">
            {project.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-3 max-w-2xl">
            {project.description}
          </p>
          {project.heroSubline && (
            <p className="text-sm text-muted-foreground/90 font-mono">
              {project.heroSubline}
            </p>
          )}
        </div>
      </section>

      {/* Problem — Tally-style */}
      {project.problem && (
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-mono">
              The Problem
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.problem}
            </p>
          </div>
        </section>
      )}

      {/* Solution */}
      {project.solution && (
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-mono">
              The Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>
      )}

      {/* Install / Quick start — copyable */}
      {hasInstall && installCode && (
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-mono">
              Install
            </h2>
            <CopyableCode
              code={installCode}
              label={project.installCommand ? "One-line installer" : project.cliSnippets?.[0]?.label}
            />
          </div>
        </section>
      )}

      {/* Workflow — phased steps (Tally-style numbered flow) */}
      {project.phases && project.phases.length > 0 && (
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-8 font-mono">
              How it works
            </h2>
            <div className="space-y-0">
              {project.phases.map((phase, i) => (
                <div key={i}>
                  <div className="flex gap-4">
                    <span className="shrink-0 w-10 h-10 rounded-full bg-accent/20 text-accent border border-accent/30 flex items-center justify-center text-sm font-mono font-bold">
                      {phase.done !== false ? "✓" : i + 1}
                    </span>
                    <div className="pb-8">
                      <h3 className="font-semibold text-foreground font-mono">
                        {phase.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                  {i < project.phases!.length - 1 && (
                    <div className="flex gap-4">
                      <span className="shrink-0 w-10 flex justify-center">
                        <span className="text-muted-foreground/60">↓</span>
                      </span>
                      <div className="w-px h-6 bg-border ml-[9px]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CLI usage — rest of snippets */}
      {cliRest.length > 0 && (
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6 font-mono">
              CLI usage
            </h2>
            <div className="space-y-6">
              {cliRest.map((snippet, i) => (
                <CopyableCode
                  key={i}
                  code={snippet.code}
                  label={snippet.label}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies — compact */}
      {project.technologies.length > 0 && (
        <section className="py-12 md:py-16 border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-mono">
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-md text-sm text-accent font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Long description if no problem/solution */}
      {!hasProblemSolution && project.longDescription && (
        <section className="py-12 md:py-16 bg-card border-b border-border">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4 font-mono">
              About
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        </section>
      )}

      {/* Open Source footer — Tally-style */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container max-w-3xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-semibold text-foreground font-mono mb-1">
                Open Source
              </p>
              <p className="text-sm text-muted-foreground">
                MIT licensed. Contributions welcome.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                className="bg-accent text-background hover:bg-accent/90 font-mono"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="mr-2" size={18} />
                GitHub
              </Button>
              {project.documentation && (
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-mono"
                  onClick={() => window.open(project.documentation, "_blank")}
                >
                  <BookOpen className="mr-2" size={18} />
                  Docs
                </Button>
              )}
              {project.demo && (
                <Button
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent/10 font-mono"
                  onClick={() => window.open(project.demo, "_blank")}
                >
                  <ExternalLink className="mr-2" size={18} />
                  Demo
                </Button>
              )}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-accent font-mono"
              onClick={() => setLocation("/projects")}
            >
              <ArrowLeft className="mr-2" size={16} />
              All projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
