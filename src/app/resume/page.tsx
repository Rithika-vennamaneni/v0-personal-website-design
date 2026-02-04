import { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { personal } from '@/lib/content';
import { Download, FileText, Mail, Linkedin, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: `Resume - ${personal.name}`,
  description: `Download ${personal.name}'s resume and view professional summary.`,
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-deep/5 to-phthalo-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Professional Profile"
            title="Resume & CV"
            description="Download my complete resume or view the summary below. I'm always open to discussing new opportunities."
          />
        </div>
      </section>

      {/* Resume Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center space-x-2">
                <FileText className="w-6 h-6 text-phthalo-green" />
                <span>Professional Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {personal.bio}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">{personal.education.current.degree}</h4>
                      <p className="text-sm text-muted-foreground">{personal.education.current.institution}</p>
                      <p className="text-sm text-muted-foreground">{personal.education.current.dates} • GPA: {personal.education.current.gpa}</p>
                    </div>
                    <div>
                      <h4 className="font-medium">{personal.education.undergraduate.degree}</h4>
                      <p className="text-sm text-muted-foreground">{personal.education.undergraduate.institution}</p>
                      <p className="text-sm text-muted-foreground">{personal.education.undergraduate.dates}</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Current Roles</h3>
                  <div className="space-y-3">
                    {personal.currentRoles.map((role, index) => (
                      <div key={index}>
                        <h4 className="font-medium">{role.title}</h4>
                        <p className="text-sm text-muted-foreground">{role.organization}</p>
                        <p className="text-sm text-muted-foreground">{role.dates}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Section */}
          <Card className="bg-gradient-to-r from-phthalo-green/10 to-pewter-blue/10 border-phthalo-green/20">
            <CardContent className="p-8 text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-phthalo-green/20 rounded-full flex items-center justify-center mx-auto">
                  <Download className="w-8 h-8 text-phthalo-green" />
                </div>
                
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2">
                    Download Resume
                  </h2>
                  <p className="text-muted-foreground">
                    Get the complete PDF version of my resume with detailed experience, skills, and achievements.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <a href="/resume.pdf" download className="flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <FileText className="w-5 h-5" />
                      <span>View in Browser</span>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Get In Touch</CardTitle>
              <CardDescription className="text-center">
                I'm always interested in discussing new opportunities and exciting projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-phthalo-green/10 rounded-lg flex items-center justify-center mx-auto">
                    <Mail className="w-6 h-6 text-phthalo-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a 
                      href={`mailto:${personal.contact.email}`}
                      className="text-muted-foreground hover:text-phthalo-green transition-colors"
                    >
                      {personal.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-phthalo-green/10 rounded-lg flex items-center justify-center mx-auto">
                    <Linkedin className="w-6 h-6 text-phthalo-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a 
                      href={personal.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-phthalo-green transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-phthalo-green/10 rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="w-6 h-6 text-phthalo-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">{personal.contact.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
