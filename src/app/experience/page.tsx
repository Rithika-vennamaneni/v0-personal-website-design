import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { personal, experience } from '@/lib/content';
import { getExperienceTypeColor } from '@/lib/utils';
import { Calendar, MapPin, Briefcase, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: `Experience - ${personal.name}`,
  description: `Professional experience and roles of ${personal.name}, focused on product engineering, systems, and UX.`,
  openGraph: {
    title: `Experience - ${personal.name}`,
    description: `Professional experience and roles of ${personal.name}, focused on product engineering, systems, and UX.`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Experience - ${personal.name}`,
    description: `Professional experience and roles of ${personal.name}, focused on product engineering, systems, and UX.`,
  },
};

export default function ExperiencePage() {
  const currentExperience = experience.filter(exp => exp.type === 'Current');
  const pastExperience = experience.filter(exp => exp.type !== 'Current');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-deep/5 to-phthalo-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Professional Journey"
            title="Experience & Roles"
            description="A timeline of my experience across product engineering, systems work, and user-centered delivery."
          />
        </div>
      </section>

      {/* Current Experience */}
      {currentExperience.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
              Current Roles
            </h2>
            <div className="space-y-8">
              {currentExperience.map((exp, index) => (
                <Card key={exp.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <CardTitle className="text-xl group-hover:text-phthalo-green transition-colors">
                            {exp.title}
                          </CardTitle>
                          <Badge className={getExperienceTypeColor(exp.type)}>
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span className="text-sm">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{exp.dates}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-base">
                      {exp.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-phthalo-green mt-1 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Past Experience */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            Past Experience
          </h2>
          <div className="space-y-8">
            {pastExperience.map((exp, index) => (
              <Card key={exp.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <CardTitle className="text-xl group-hover:text-phthalo-green transition-colors">
                          {exp.title}
                        </CardTitle>
                        <Badge className={getExperienceTypeColor(exp.type)}>
                          {exp.type}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span className="text-sm">{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.dates}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {exp.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-phthalo-green mt-1 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((tool) => (
                        <Badge key={tool} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-gradient-to-r from-phthalo-green/10 to-pewter-blue/10 border-phthalo-green/20">
            <CardContent className="p-8">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm always excited to discuss new opportunities in product engineering, inspectable AI systems, and calm UX.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {personal.availability}
                </Badge>
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Open to consulting projects
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
