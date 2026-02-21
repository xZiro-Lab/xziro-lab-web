/**
 * Footer Component - XZIRO Lab
 * 
 * Design: Tactical Command Center aesthetic
 * - Dark navy background with beige text
 * - Red accent for key links and separators
 * - Organized information architecture
 */

import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                <span className="text-background font-bold text-xs font-mono">X</span>
              </div>
              <span className="font-bold text-foreground font-mono">XZIRO Lab</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Tactical AI solutions for modern enterprises.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-mono">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="/projects" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contributions" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Contributions
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-mono">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#docs" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 font-mono">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#compliance" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} XZIRO Lab. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#github"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#twitter"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#linkedin"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
