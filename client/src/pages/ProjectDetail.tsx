/**
 * Project Detail Page - XZIRO Lab
 * Tally-inspired layout: top nav, hero wordmark, Problem/Solution, Install (copy), Workflow, Open Source footer
 */

import { useParams, useLocation } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Github,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  Terminal,
  Activity,
  Code2,
  Layers,
} from "lucide-react";
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

function DeepScoutDetail({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const installCode = project.installCommand ?? project.cliSnippets?.[0]?.code ?? "";
  const repoName = project.github.replace("https://github.com/", "");
  const architecture = [
    {
      title: project.phases?.[0]?.title ?? "Workflow ingestion",
      description:
        project.phases?.[0]?.description ??
        "Extracts orchestration structure from multi-agent codebases.",
      icon: <Layers size={22} />,
    },
    {
      title: project.phases?.[1]?.title ?? "Graph analysis",
      description:
        project.phases?.[1]?.description ??
        "Maps loops, branching, and high-risk flow patterns.",
      icon: <Activity size={22} />,
    },
    {
      title: project.phases?.[2]?.title ?? "Token estimation",
      description:
        project.phases?.[2]?.description ??
        "Produces pre-execution token and cost envelopes.",
      icon: <Terminal size={22} />,
    },
    {
      title: "Offline CLI workflow",
      description: "Pre-runtime checks without API keys or token burn.",
      icon: <Code2 size={22} />,
    },
  ];

  const copyInstall = () => {
    if (!installCode) return;
    navigator.clipboard.writeText(installCode).then(() => {
      setCopied(true);
      toast.success("Install command copied");
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="deep-scout-page min-h-screen">
      <header className="deep-scout-topbar sticky top-16 z-30">
        <div className="container h-14 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            className="deep-scout-link -ml-2"
            onClick={onBack}
          >
            <ArrowLeft className="mr-2" size={16} />
            Projects
          </Button>
          <nav className="flex items-center gap-4 text-xs sm:text-sm">
            {project.documentation && (
              <a
                href={project.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="deep-scout-link inline-flex items-center gap-1.5"
              >
                <BookOpen size={14} />
                Docs
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="deep-scout-link inline-flex items-center gap-1.5"
            >
              <Github size={14} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="container py-10 md:py-14 space-y-10 md:space-y-12">
        <section className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="deep-scout-chip">CODENAME: NOCTYL</span>
            <span className="deep-scout-chip deep-scout-chip-muted">
              VERSION: 1.0.4-BETA
            </span>
            <span className="deep-scout-chip">
              {getStatusLabel(project.status).toUpperCase()}
            </span>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-end gap-10">
            <div className="flex-1">
              <h1 className="deep-scout-title">
                Deep <span className="deep-scout-title-accent">Scout</span>
              </h1>
              <p className="deep-scout-subtitle max-w-3xl mt-5">
                {project.description}
              </p>
              {project.heroSubline && (
                <p className="deep-scout-kicker mt-3">{project.heroSubline}</p>
              )}
            </div>
            <div className="deep-scout-metric-card hidden xl:flex">
              <span className="deep-scout-kicker">TOKEN_PRECISION</span>
              <strong className="deep-scout-metric-value">99.8%</strong>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-8 deep-scout-visual-card">
            <div className="deep-scout-neural-overlay" />
            <div className="deep-scout-visual-label">
              <span className="h-2 w-2 rounded-full bg-[#ff5352] animate-pulse" />
              STATIC_ANALYSIS_ACTIVE
            </div>
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className="h-[420px] w-full object-cover opacity-85"
              />
            ) : (
              <div className="h-[420px] w-full flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="deep-scout-kicker">AGENT WORKFLOW MAPPING</p>
                  <p className="deep-scout-subtitle mt-3 max-w-lg">
                    Visualizing token pathways across complex multi-agent
                    orchestrations before runtime execution.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="md:col-span-4 deep-scout-cta-card">
            <div>
              <h2 className="deep-scout-section-title">Source Control</h2>
              <p className="deep-scout-subtitle text-sm mt-3">
                Access the open-source repository and contribute to cost-aware
                multi-agent development.
              </p>
              <div className="mt-6 space-y-3 text-xs">
                <div className="deep-scout-meta-row">
                  <span>REPO</span>
                  <span className="text-[#e0e2ee]">{repoName}</span>
                </div>
                <div className="deep-scout-meta-row">
                  <span>LANGUAGE</span>
                  <span className="text-[#e0e2ee]">Python</span>
                </div>
                <div className="deep-scout-meta-row">
                  <span>CONTRIBUTORS</span>
                  <span className="text-[#e0e2ee]">
                    {project.metrics.contributors}
                  </span>
                </div>
              </div>
            </div>
            <Button
              className="deep-scout-primary-btn mt-8 w-full"
              onClick={() => window.open(project.github, "_blank")}
            >
              GITHUB_REPOSITORY
              <ArrowUpRight size={16} />
            </Button>
          </div>

          <div className="md:col-span-12 lg:col-span-7 deep-scout-architecture-card">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="deep-scout-section-title">System Architecture</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#5b403e]/40 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {architecture.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="deep-scout-icon-box">{item.icon}</div>
                  <div>
                    <h3 className="text-[#e0e2ee] font-semibold text-base">
                      {item.title}
                    </h3>
                    <p className="deep-scout-subtitle text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-5 deep-scout-terminal-card">
            <div className="deep-scout-terminal-head">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffb3ae]/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#c5c6c8]/50" />
              </div>
              <span>root@xziro-lab:~/deep-scout</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-4">
              {installCode && (
                <div className="space-y-2">
                  <p className="deep-scout-terminal-line">
                    <span className="text-[#ff5352]">$</span>
                    <span>{installCode}</span>
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="deep-scout-link h-7 px-2"
                    onClick={copyInstall}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy command"}
                  </Button>
                </div>
              )}
              {(project.cliSnippets ?? []).slice(0, 2).map((snippet) => (
                <p key={snippet.code} className="deep-scout-terminal-line">
                  <span className="text-[#ff5352]">$</span>
                  <span>{snippet.code}</span>
                </p>
              ))}
              <p className="deep-scout-kicker pt-1">
                ESTIMATION_COMPLETE // BURN_RATE: LOW
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function GenericProjectDetail({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {

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
            onClick={onBack}
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
              onClick={onBack}
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

export default function ProjectDetail() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const id = params?.id ?? "";
  const project = projects.find((p) => p.id === id);

  if (!project) return <NotFound />;

  if (project.id === "deep-scout") {
    return <DeepScoutDetail project={project} onBack={() => setLocation("/projects")} />;
  }

  return <GenericProjectDetail project={project} onBack={() => setLocation("/projects")} />;
}
