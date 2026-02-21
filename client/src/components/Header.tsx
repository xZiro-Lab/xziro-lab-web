/**
 * Header Component - XZIRO Lab
 * 
 * Design: Tactical Command Center aesthetic
 * - Dark navy background with beige text
 * - Red accent for logo and key navigation items
 * - Monospace typography for technical credibility
 * - Minimal, clean navigation structure
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <span className="text-background font-bold text-sm font-mono">X</span>
          </div>
          <span className="text-xl font-bold text-foreground font-mono">XZIRO Lab</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground hover:text-accent transition-colors">
            Features
          </a>
          <a href="#workflow" className="text-foreground hover:text-accent transition-colors">
            Workflow
          </a>
          <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
            Pricing
          </a>
          <a href="#docs" className="text-foreground hover:text-accent transition-colors">
            Docs
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-background"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav className="container py-4 flex flex-col gap-4">
            <a href="#features" className="text-foreground hover:text-accent transition-colors">
              Features
            </a>
            <a href="#workflow" className="text-foreground hover:text-accent transition-colors">
              Workflow
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-foreground hover:text-accent transition-colors">
              Docs
            </a>
            <Button 
              variant="default"
              className="w-full bg-accent text-background hover:bg-accent/90"
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
