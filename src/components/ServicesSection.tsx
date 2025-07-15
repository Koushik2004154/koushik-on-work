
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Cog, Zap, BarChart } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI/ML Web Product Development",
      description: "End-to-end development of AI-powered web applications with machine learning capabilities, NLP integration, and intelligent automation.",
      features: ["Custom AI Models", "NLP Integration", "ML Pipeline Development", "AI-First Architecture"]
    },
    {
      icon: Cog,
      title: "Backend Automation Pipelines",
      description: "Scalable backend systems with automated workflows, data processing pipelines, and intelligent automation solutions.",
      features: ["Workflow Automation", "Data Pipeline Design", "API Development", "System Integration"]
    },
    {
      icon: Zap,
      title: "Low-Code/No-Code AI Tools",
      description: "Rapid development using no-code platforms like Bolt.new, Cursor, and Lovable.ai for quick turnaround and cost-effective solutions.",
      features: ["Rapid Prototyping", "Platform Integration", "AI Tool Development", "Quick Deployment"]
    },
    {
      icon: BarChart,
      title: "Custom Dashboards & Analytics",
      description: "Interactive dashboards and data visualization solutions using Power BI, Tableau, and custom-built analytics platforms.",
      features: ["Data Visualization", "Business Intelligence", "Real-time Analytics", "Custom Reporting"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive AI/ML development and automation services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
