
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Local Livin",
      description: "AI-powered PG rental platform with dynamic pricing and smart search. Finalist at FKCCI 2025, featuring advanced ML algorithms for property matching.",
      image: "/placeholder.svg",
      technologies: ["AI/ML", "React", "Node.js", "Python"],
      liveUrl: "https://preview--local-livin-listings-manager.lovable.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Career Development Hub",
      description: "Comprehensive platform with resume scoring, ATS builder, and job matcher using NLP and automation for career advancement.",
      image: "/placeholder.svg",
      technologies: ["NLP", "Python", "React", "Automation"],
      liveUrl: "https://cosmitrabot.netlify.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Business WhatsApp Chat Analyzer",
      description: "NLP-based insight engine that processes chat logs to extract key metrics like sales trends, engagement patterns, and customer insights.",
      image: "/placeholder.svg",
      technologies: ["NLP", "Python", "Data Analytics", "ML"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "KisanMitra",
      description: "ML assistant for farmers based on weather data and crop analysis, providing intelligent recommendations for agricultural decisions.",
      image: "/placeholder.svg",
      technologies: ["Machine Learning", "Python", "Data Science"],
      liveUrl: "https://studio.firebase.google.com/studio-1167326285",
      githubUrl: "#",
      featured: false
    },
    {
      title: "CosMitra Website",
      description: "A comprehensive collection of over 30 AI tools and products developed by the founder, showcasing the complete AI ecosystem.",
      image: "/placeholder.svg",
      technologies: ["AI Tools", "React", "Node.js", "Automation"],
      liveUrl: "https://CosMitra.b12sites.com",
      githubUrl: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              Innovative AI/ML solutions and automation tools that make a real impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video bg-secondary/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {project.featured && (
                      <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} className="flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} className="flex items-center">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
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
