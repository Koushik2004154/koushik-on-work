
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Experience leading development teams and mentoring juniors"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about exploring new technologies and solutions"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering high-quality, scalable solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate full-stack engineer with expertise in both traditional development 
              and modern no-code solutions, helping businesses scale through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                With a strong foundation in computer science and years of hands-on experience, 
                I've evolved from a curious developer into a versatile engineer who bridges 
                the gap between complex technical solutions and business needs.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My expertise spans across full-stack development, cloud technologies, 
                and no-code platforms, allowing me to choose the right tool for every challenge. 
                I believe in clean code, scalable architecture, and user-centric design.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h4 className="font-semibold mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
