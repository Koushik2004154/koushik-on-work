
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';

export const CertificationsSection = () => {
  const certifications = [
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456789",
      verifyUrl: "#"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-987654321",
      verifyUrl: "#"
    },
    {
      name: "Meta React Developer Certificate",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-456789123",
      verifyUrl: "#"
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      credentialId: "MONGO-789123456",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications validating expertise in various technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
