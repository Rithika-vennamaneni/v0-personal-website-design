'use client';

import { useState } from 'react';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { skills } from '@/lib/content';
import { getSkillLevelColor } from '@/lib/utils';
import { Code, Database, BarChart3, Settings, Filter } from 'lucide-react';

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredCategories = selectedCategory 
    ? skills.categories.filter(cat => cat.name === selectedCategory)
    : skills.categories;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-deep/5 to-phthalo-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            overline="Technical Expertise"
            title="Skills & Technologies"
            description="A practical snapshot of the tools I use to build reliable systems and thoughtful user experiences."
          />
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="flex items-center space-x-2"
            >
              <Filter className="w-4 h-4" />
              <span>All Categories</span>
            </Button>
            {skills.categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.name)}
                className="flex items-center space-x-2"
              >
                {category.name === 'Analytics & BI' && <BarChart3 className="w-4 h-4" />}
                {category.name === 'Programming & Databases' && <Code className="w-4 h-4" />}
                {category.name === 'Process & Project Management' && <Settings className="w-4 h-4" />}
                {category.name === 'Platforms & Tools' && <Database className="w-4 h-4" />}
                <span>{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <Card key={category.name} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-phthalo-green transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-lg border border-border hover:border-phthalo-green/50 transition-colors group/skill"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-lg group-hover/skill:text-phthalo-green transition-colors">
                              {skill.name}
                            </h3>
                            <Badge className={getSkillLevelColor(skill.level)}>
                              {skill.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {skill.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-phthalo-green/10 to-pewter-blue/10 border-phthalo-green/20">
            <CardContent className="p-8 text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                Continuous Learning & Growth
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm passionate about staying current with tools that improve system reliability, UX clarity, and accessibility. 
                My approach combines hands-on shipping with continuous learning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-phthalo-green">
                    {skills.categories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Technologies Mastered
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-phthalo-green">
                    {skills.categories.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Skill Categories
                  </div>
                </div>
                <div className="text-center space-y-2">
                  <div className="text-3xl font-bold text-phthalo-green">
                    2+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
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
