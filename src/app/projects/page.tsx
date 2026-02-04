import { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { personal, projects } from '@/lib/content';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: `Projects - ${personal.name}`,
  description: `Explore ${personal.name}'s case studies in inspectable AI systems, multi-agent workflows, and calm UX.`,
  openGraph: {
    title: `Projects - ${personal.name}`,
    description: `Explore ${personal.name}'s case studies in inspectable AI systems, multi-agent workflows, and calm UX.`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Projects - ${personal.name}`,
    description: `Explore ${personal.name}'s case studies in inspectable AI systems, multi-agent workflows, and calm UX.`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-deep/5 to-phthalo-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Portfolio"
            title="Projects & Case Studies"
            description="A collection of work focused on inspectable AI systems, multi-agent workflows, and calm, trustworthy UX."
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.when}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-phthalo-green transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {project.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button asChild variant="ghost" className="w-full group">
                      <Link href={`/projects/${project.slug}`} className="flex items-center justify-center">
                        <span>See case study</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-phthalo-green/10 to-pewter-blue/10 border-phthalo-green/20">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Interested in a Walkthrough?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm happy to walk through the system design, UX decisions, and tradeoffs behind any project.
              </p>
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Request a Walkthrough</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
