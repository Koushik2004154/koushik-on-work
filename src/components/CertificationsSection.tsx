
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "Certified AI Builder",
      issuer: "Airtribe",
      date: "2025",
      credentialId: "AIB-2025-001",
      verifyUrl: "#"
    },
    {
      name: "Google Analytics Certificate",
      issuer: "Google",
      date: "Jul 2025",
      credentialId: "GA-789456123",
      verifyUrl: "#"
    },
    {
      name: "Deloitte Technology Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      credentialId: "DTS-456789123",
      verifyUrl: "#"
    },
    {
      name: "Deloitte Data Analytics Simulation",
      issuer: "Deloitte",
      date: "Jul 2025",
      credentialId: "DDAS-789123456",
      verifyUrl: "#"
    },
    {
      name: "Accenture Software Engineering Simulation",
      issuer: "Accenture",
      date: "Jul 2025",
      credentialId: "ASES-123456789",
      verifyUrl: "#"
    },
    {
      name: "Accenture Tech Consulting Simulation",
      issuer: "Accenture",
      date: "Jul 2025",
      credentialId: "ATCS-987654321",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications validating expertise in AI, consulting, and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                      <p className="text-primary mb-2">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm mb-3">{cert.date}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          ID: {cert.credentialId}
                        </span>
                        <a
                          href={cert.verifyUrl}
                          className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm"
                        >
                          Verify <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
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
