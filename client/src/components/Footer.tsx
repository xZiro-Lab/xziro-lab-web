/**
 * Footer Component - XZIRO Lab
 */

import { Github, Mail } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const activeProjects = projects.filter((p) => p.status === "active");

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                <span className="text-background font-bold text-xs font-mono">X</span>
              </div>
              <span className="font-bold text-foreground font-mono">XZIRO Lab</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Open source research lab.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-mono">Projects</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/projects"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  All projects
                </a>
              </li>
              {activeProjects.map((p) => (
                <li key={p.id}>
                  <a
                    href={`/projects/${p.id}`}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contributions"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  Contributions
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="mailto:ashishmehta.per@gmail.com"
                  className="text-muted-foreground hover:text-accent transition-colors text-sm inline-flex items-center gap-1.5"
                >
                  <Mail size={14} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} XZIRO Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:ashishmehta.per@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Contact"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/xZiro-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
