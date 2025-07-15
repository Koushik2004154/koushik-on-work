
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "Next.js", level: 85 },
        { name: "Express", level: 85 },
        { name: "TensorFlow", level: 80 }
      ]
    },
    {
      title: "AI/ML & Data",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "Hugging Face", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "NLP", level: 88 }
      ]
    },
    {
      title: "Automation & Tools",
      skills: [
        { name: "Zapier", level: 92 },
        { name: "n8n", level: 85 },
        { name: "Make.com", level: 80 },
        { name: "Firebase", level: 88 },
        { name: "AWS", level: 75 }
      ]
    },
    {
      title: "No-Code Platforms",
      skills: [
        { name: "Bolt.new", level: 95 },
        { name: "Cursor", level: 90 },
        { name: "Lovable.ai", level: 95 },
        { name: "Replicate", level: 85 },
        { name: "Power BI", level: 80 }
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "System Design", level: 85 },
        { name: "Agile", level: 88 },
        { name: "Tableau", level: 80 },
        { name: "Python Scripting", level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive toolkit for AI/ML development and automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-muted-foreground text-xs">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
