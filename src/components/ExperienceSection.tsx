
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const ExperienceSection = () => {
  const experiences = [
    {
      role: "Senior Full-Stack Engineer",
      company: "Tech Innovation Corp",
      location: "Remote",
      period: "2023 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      achievements: [
        "Built microservices architecture serving 100K+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Led team of 5 developers on multiple projects"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Solutions Ltd",
      location: "Bangalore, India",
      period: "2022 - 2023",
      description: "Developed and maintained multiple client projects using modern web technologies.",
      achievements: [
        "Delivered 15+ client projects on time and within budget",
        "Reduced application load time by 40% through optimization",
        "Integrated third-party APIs and payment gateways"
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "GCP", "Kubernetes"]
    },
    {
      role: "Frontend Developer Intern",
      company: "StartupX",
      location: "Mumbai, India",
      period: "2021 - 2022",
      description: "Contributed to the development of user interfaces and gained hands-on experience.",
      achievements: [
        "Developed responsive web components",
        "Collaborated with design team on UI/UX improvements",
        "Participated in agile development processes"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
            <p className="text-xl text-muted-foreground">
              Professional journey through various roles and challenging projects.
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
