
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Smartphone, Cloud, Zap } from 'lucide-react';

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Complete web application development from frontend to backend, including database design and API development.",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Modern, mobile-first responsive designs that work seamlessly across all devices and screen sizes.",
      features: ["Mobile-First Design", "Cross-Browser Compatibility", "UI/UX Optimization", "Accessibility Compliance"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure setup and deployment using AWS, Google Cloud, and other platforms.",
      features: ["Cloud Migration", "Infrastructure Setup", "Auto-scaling Solutions", "Security Implementation"]
    },
    {
      icon: Zap,
      title: "No-Code Solutions",
      description: "Rapid prototyping and development using no-code platforms for quick turnaround and cost-effective solutions.",
      features: ["Rapid Prototyping", "Workflow Automation", "CMS Development", "Integration Solutions"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive development services to bring your ideas to life.
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
