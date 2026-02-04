import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { personal, getProjectBySlug } from '@/lib/content';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - ${personal.name}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - ${personal.name}`,
      description: project.summary,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} - ${personal.name}`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = project.caseStudy;
  const techStack = caseStudy?.techStack ?? project.tools;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-deep/5 to-phthalo-green/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/projects" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Projects</span>
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{project.when}</span>
                  </div>
                </div>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">TIMELINE</h4>
                    <p className="text-sm">{project.when}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground mb-2">TECH STACK</h4>
                    <div className="flex flex-wrap gap-1">
                      {techStack.map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <span>Request Walkthrough</span>
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              {caseStudy ? (
                <>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Problem
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.problem}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      What I Built
                    </h2>
                    <ul className="space-y-2">
                      {caseStudy.whatIBuilt.map((item) => (
                        <li key={item} className="flex items-start space-x-2 text-muted-foreground">
                          <span
                            className="mt-1 h-2 w-2 rounded-full bg-phthalo-green/70"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Key UX Decisions
                    </h2>
                    <ul className="space-y-2">
                      {caseStudy.uxDecisions.map((item) => (
                        <li key={item} className="flex items-start space-x-2 text-muted-foreground">
                          <span
                            className="mt-1 h-2 w-2 rounded-full bg-phthalo-green/70"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      System Design
                    </h2>
                    <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                        {caseStudy.systemDesign.nodes.map((node, index) => (
                          <div key={node} className="flex items-center gap-3">
                            <div className="rounded-lg border border-border/60 bg-background px-4 py-3 text-sm font-medium text-foreground shadow-sm text-center">
                              {node}
                            </div>
                            {index < caseStudy.systemDesign.nodes.length - 1 && (
                              <span
                                className="text-pewter-blue text-xl rotate-90 md:rotate-0"
                                aria-hidden="true"
                              >
                                →
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      {caseStudy.systemDesign.note && (
                        <p className="text-xs text-muted-foreground mt-4">
                          {caseStudy.systemDesign.note}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Tech Stack
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.techStack.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Outcomes
                    </h2>
                    <ul className="space-y-2">
                      {caseStudy.outcomes.map((item) => (
                        <li key={item} className="flex items-start space-x-2 text-muted-foreground">
                          <span
                            className="mt-1 h-2 w-2 rounded-full bg-phthalo-green/70"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Problem
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Solution
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.approach}
                    </p>
                  </div>

                  <div>
                    <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                      Outcomes
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {techStack.map((tool) => (
                      <div key={tool} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-phthalo-green rounded-full"></div>
                        <span className="text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Project Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: 'GitHub Repository', href: project.links.repo },
                    { label: 'Live Demo', href: project.links.demo },
                    { label: 'Project Report', href: project.links.report },
                  ].map((item) => {
                    const isPlaceholder = item.href === '#TODO add link' || !item.href;
                    return isPlaceholder ? (
                      <div key={item.label} className="text-sm text-muted-foreground">
                        {item.label}: [add link]
                      </div>
                    ) : (
                      <Button
                        key={item.label}
                        asChild
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {item.label}
                        </Link>
                      </Button>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-phthalo-green/10 to-pewter-blue/10 border-phthalo-green/20">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Interested in This Project?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'd be happy to provide a detailed walkthrough, discuss the technical implementation, 
                or explore how similar solutions could benefit your organization.
              </p>
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center space-x-2">
                  <span>Request a Walkthrough</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
