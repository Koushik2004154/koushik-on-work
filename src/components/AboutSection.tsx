
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Lightbulb, Target } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "AI/ML Expertise",
      description: "Specialized in NLP, system design, and backend automation"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led 50+ member team at CosMitra and launched 30+ AI products"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Founder of CosMitra with expertise in AI-first tools and platforms"
    },
    {
      icon: Target,
      title: "Certified Builder",
      description: "Certified AI Builder with hands-on experience in automation"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-stack engineer and no-code expert with 3+ years of experience in AI/ML, 
              automation, and low-code platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-stack engineer and no-code expert with 3+ years of experience in AI/ML, 
                automation, and low-code platforms. Founder of CosMitra, having launched 30+ AI tools 
                using platforms like Bolt.new, Cursor, Lovable.ai, and Replicate.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Certified AI Builder from Airtribe with hands-on expertise in NLP, system design, 
                and backend automation pipelines. Based in Bengaluru, India, I specialize in 
                creating scalable AI-first solutions that bridge the gap between complex technical 
                implementations and business needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in exploring cutting-edge technologies and building innovative 
                solutions that make a real impact. Through CosMitra, I've successfully led teams 
                and delivered products that leverage the latest in AI and automation.
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
