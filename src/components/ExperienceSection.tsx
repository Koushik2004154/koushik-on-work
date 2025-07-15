
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Founder",
      company: "CosMitra",
      location: "Bengaluru, India",
      period: "Dec 2024 - Present",
      description: "Leading the development of AI-first tools and platforms, building scalable solutions for automation and machine learning.",
      achievements: [
        "Led 50+ member team across multiple projects",
        "Launched 30+ AI products and tools",
        "Focused on scalable AI-first tool development",
        "Built comprehensive AI product ecosystem"
      ],
      technologies: ["AI/ML", "Python", "React", "Node.js", "Automation"]
    },
    {
      role: "Freelancer",
      company: "Outlier.ai",
      location: "Remote",
      period: "Mar 2025 - Present",
      description: "Developing ML dashboards and internal distributed systems for advanced data insights and analytics.",
      achievements: [
        "Built ML dashboards for data visualization",
        "Developed internal distributed systems",
        "Implemented data insights pipelines",
        "Optimized system performance and scalability"
      ],
      technologies: ["Machine Learning", "Python", "Data Analytics", "System Design"]
    },
    {
      role: "AI Intern",
      company: "Technosonic Solutions",
      location: "Bengaluru, India",
      period: "Apr 2025 - Jul 2025",
      description: "Developed ML APIs and integrated backend automation workflows for enterprise solutions.",
      achievements: [
        "Developed robust ML APIs for production use",
        "Integrated backend automation workflows",
        "Optimized API performance and reliability",
        "Collaborated on enterprise-level solutions"
      ],
      technologies: ["ML APIs", "Python", "Backend Development", "Automation"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Professional journey in AI/ML, automation, and product development.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                        <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                        <h4 className="text-lg text-primary">{exp.company}</h4>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold mb-2">Key Achievements:</h5>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-2">Technologies:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
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
