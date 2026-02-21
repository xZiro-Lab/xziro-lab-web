/**
 * Home Page - XZIRO Lab
 * 
 * Design: Tactical Command Center aesthetic
 * - Dark navy background with beige text
 * - Red accent elements for CTAs and highlights
 * - Asymmetric layout inspired by tallyai.money
 * - Problem-solution narrative structure
 * - Workflow visualization with numbered steps
 * - Professional, high-contrast design
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Cpu } from "lucide-react";

const heroNetworkImg = "https://private-us-east-1.manuscdn.com/sessionFile/MrtZ9jckFJSPGPK9m8rbTa/sandbox/36S7JTcAByYolBcTQ4aM84-img-2_1771668114000_na1fn_aGVyby1uZXR3b3Jr.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTXJ0WjlqY2tGSlNQR1BLOW04cmJUYS9zYW5kYm94LzM2UzdKVGNBQnlZb2xCY1RRNGFNODQtaW1nLTJfMTc3MTY2ODExNDAwMF9uYTFmbl9hR1Z5YnkxdVpYUjNiM0pyLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=DY8MZXd2SLjTo56ctrJTZe7KgAZZgW5OYdIIkX1E9T8K7om8zy~N9TXc5Uwe78~v23uqQfJKWYR3rEHZaPP9K6LO5-oDpSl6DYPhNzALP4O8rFiKwrrnhwefvavbFDXEQS1CSsx3Qqj7xD~AGWwy4oPA-gLk0tLRZp4PiIC-~lNQhJV5OaeabSpBfplAxNBaDAbyTU92ZHgiVwv1kDbdjfU4jvXrKStX0AStBpX8VZnR-PBVPiI4ehle9NrP5Z3RkmZfMphQG~hJHdXE4828yjTiPUQUF4zAFaqjZAI9UxuutFgsagIOVcL~JORbWQq62Xa9QInodE-T3KqGctCFcA__";

const heroDataFlowImg = "https://private-us-east-1.manuscdn.com/sessionFile/MrtZ9jckFJSPGPK9m8rbTa/sandbox/36S7JTcAByYolBcTQ4aM84-img-3_1771668111000_na1fn_aGVyby1kYXRhLWZsb3c.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTXJ0WjlqY2tGSlNQR1BLOW04cmJUYS9zYW5kYm94LzM2UzdKVGNBQnlZb2xCY1RRNGFNODQtaW1nLTNfMTc3MTY2ODExMTAwMF9uYTFmbl9hR1Z5Ynkxa1lYUmhMV1pzYjNjLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=GIVSYd9VuQF5gzlxUY-MURVadvdm3arM4B9yPRN7-keWDivF4NP9AaNgN7UpW6NflH4iFWPodMaor25d~fjMpiK6LO5-oDpSl6DYPhNzALP4O8rFiKwrrnhwefvavbFDXEQS1CSsx3Qqj7xD~AGWwy4oPA-gLk0tLRZp4PiIC-~lNQhJV5OaeabSpBfplAxNBaDAbyTU92ZHgiVwv1kDbdjfU4jvXrKStX0AStBpX8VZnR-PBVPiI4ehle9NrP5Z3RkmZfMphQG~hJHdXE4828yjTiPUQUF4zAFaqjZAI9UxuutFgsagIOVcL~JORbWQq62Xa9QInodE-T3KqGctCFcA__";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background image with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${heroNetworkImg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl">
            {/* Hero Label */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-accent/10 border border-accent/30 rounded">
              <Zap size={16} className="text-accent" />
              <span className="text-sm font-mono text-accent">Next Generation AI</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 font-mono leading-tight">
              Tactical AI Solutions for Enterprise
            </h1>

            {/* Hero Subheading */}
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Deploy intelligent systems with military-grade precision. XZIRO Lab provides the tactical framework for modern AI integration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-mono"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-mono"
              >
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-32 bg-card border-t border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Problem Content */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">The Challenge</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Modern enterprises struggle with AI integration. Fragmented systems, unclear governance, and inconsistent deployment models create friction.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-1 bg-accent flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fragmented Infrastructure</h3>
                    <p className="text-muted-foreground">Multiple AI platforms without unified control</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Governance Gaps</h3>
                    <p className="text-muted-foreground">Unclear policies and inconsistent enforcement</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-accent flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Deployment Friction</h3>
                    <p className="text-muted-foreground">Slow time-to-value and operational complexity</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Problem Visual */}
            <div className="hidden md:block">
              <div 
                className="rounded-lg overflow-hidden h-96 bg-muted"
                style={{
                  backgroundImage: `url('${heroDataFlowImg}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Solution Visual */}
            <div className="hidden md:block order-2">
              <div 
                className="rounded-lg overflow-hidden h-96 bg-muted"
                style={{
                  backgroundImage: `url('${heroNetworkImg}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
            </div>

            {/* Solution Content */}
            <div className="order-1 md:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">The Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                XZIRO Lab provides a unified tactical framework for enterprise AI deployment with precision, governance, and speed.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Unified Control Center</h3>
                    <p className="text-muted-foreground">Centralized management of all AI systems and deployments</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Governance Framework</h3>
                    <p className="text-muted-foreground">Built-in compliance and policy enforcement</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Rapid Deployment</h3>
                    <p className="text-muted-foreground">Minutes to production with tactical precision</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-card border-t border-b border-border">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-mono">Core Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade capabilities designed for tactical deployment and operational excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-background border-border hover:border-accent transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center mb-4">
                  <Shield size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">Security First</h3>
                <p className="text-muted-foreground">
                  Military-grade encryption and compliance with enterprise security standards
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-background border-border hover:border-accent transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center mb-4">
                  <BarChart3 size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">Real-Time Analytics</h3>
                <p className="text-muted-foreground">
                  Comprehensive monitoring and insights into AI system performance
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-background border-border hover:border-accent transition-colors">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/20 rounded flex items-center justify-center mb-4">
                  <Cpu size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-mono">Scalable Infrastructure</h3>
                <p className="text-muted-foreground">
                  Elastic deployment across multiple environments and regions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-mono">Deployment Workflow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From planning to production in four tactical phases
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <div className="w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center font-bold font-mono mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-mono">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Evaluate your current AI infrastructure and requirements
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <div className="w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center font-bold font-mono mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-mono">Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Design your tactical deployment strategy
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30"></div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <div className="w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center font-bold font-mono mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-mono">Integration</h3>
                <p className="text-muted-foreground text-sm">
                  Seamlessly integrate with your existing systems
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-accent/30"></div>
            </div>

            {/* Step 4 */}
            <div>
              <div className="bg-card border border-border rounded-lg p-6 mb-4">
                <div className="w-12 h-12 bg-accent text-background rounded-full flex items-center justify-center font-bold font-mono mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 font-mono">Deployment</h3>
                <p className="text-muted-foreground text-sm">
                  Launch and monitor your AI systems in production
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-card border-t border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-mono">Ready to Deploy?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join enterprise teams using XZIRO Lab for tactical AI deployment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 font-mono"
              >
                Start Free Trial
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 font-mono"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
