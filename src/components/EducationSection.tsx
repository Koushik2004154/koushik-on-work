
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Calendar } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science (AI & ML)",
      institution: "Nagarjuna College of Engineering and Technology",
      location: "Bengaluru, India",
      period: "2022 - 2026",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on NLP, system design, and automation pipelines. Actively involved in AI research and practical applications.",
      achievements: ["AI & ML Specialization", "Active in Tech Communities", "Research Projects in NLP"]
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
            <p className="text-xl text-muted-foreground">
              Building a strong foundation in AI/ML and computer science.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      <h4 className="text-lg text-primary mb-2">{edu.institution}</h4>
                      <p className="text-muted-foreground mb-1">{edu.location}</p>
                      <p className="text-muted-foreground mb-4">{edu.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
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
