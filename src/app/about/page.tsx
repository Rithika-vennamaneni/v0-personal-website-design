import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { personal } from '@/lib/content';
import { GraduationCap, MapPin, Award, Briefcase } from 'lucide-react';

export const metadata: Metadata = {
  title: `About - ${personal.name}`,
  description: `Learn more about ${personal.name}, a ${personal.title} focused on inspectable AI systems, multi-agent workflows, and calm UX.`,
  openGraph: {
    title: `About - ${personal.name}`,
    description: `Learn more about ${personal.name}, a ${personal.title} focused on inspectable AI systems, multi-agent workflows, and calm UX.`,
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: `About - ${personal.name}`,
    description: `Learn more about ${personal.name}, a ${personal.title} focused on inspectable AI systems, multi-agent workflows, and calm UX.`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-deep/5 to-phthalo-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {personal.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Education & Current Roles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="w-6 h-6 text-phthalo-green" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">{personal.education.current.degree}</h3>
                    <Badge variant="secondary">{personal.education.current.gpa}</Badge>
                  </div>
                  <p className="text-muted-foreground">{personal.education.current.institution}</p>
                  <p className="text-sm text-muted-foreground">{personal.education.current.dates}</p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{personal.education.undergraduate.degree}</h3>
                    <p className="text-muted-foreground">{personal.education.undergraduate.institution}</p>
                    <p className="text-sm text-muted-foreground">{personal.education.undergraduate.dates}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Roles */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-6 h-6 text-phthalo-green" />
                  <span>Current Roles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {personal.currentRoles.map((role, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{role.title}</h3>
                      <Badge variant="outline">{role.dates}</Badge>
                    </div>
                    <p className="text-muted-foreground">{role.organization}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Recognition"
            title="Achievements & Awards"
            description="Notable accomplishments and recognitions in my academic and professional journey."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {personal.achievements.map((achievement, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-phthalo-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-phthalo-green" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg group-hover:text-phthalo-green transition-colors">
                        {achievement}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Location"
            title="Based in Champaign, Illinois"
            description="Currently pursuing my Master's degree at UIUC while building human-in-the-loop AI tools."
          />
          
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-phthalo-green" />
                  <span className="text-lg font-semibold">{personal.contact.location}</span>
                </div>
                <p className="text-muted-foreground mb-6">
                  {personal.availability}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Badge variant="secondary" className="text-sm px-4 py-2">
                    Open to Founding Product Engineer roles
                  </Badge>
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    Available for consulting
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
