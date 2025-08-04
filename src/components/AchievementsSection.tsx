import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, ExternalLink } from 'lucide-react';

export const AchievementsSection = () => {
  const achievements = [
    {
      id: 1,
      title: "Best Innovation Award 2023",
      description: "Recognized for developing an AI-powered solution that increased efficiency by 40%",
      type: "award",
      image: "/placeholder.svg",
      date: "2023",
      category: "Innovation",
      details: "Led a team of 5 developers to create a machine learning model that automated data processing"
    },
    {
      id: 2,
      title: "Full-Stack E-commerce Platform",
      description: "Complete e-commerce solution with real-time inventory and payment processing",
      type: "project",
      video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      date: "2023",
      category: "Web Development",
      details: "Built with React, Node.js, and PostgreSQL. Handles 1000+ concurrent users"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Contributed to 15+ open source projects with 500+ GitHub stars",
      type: "milestone",
      image: "/placeholder.svg",
      date: "2022-2023",
      category: "Open Source",
      details: "Active contributor to popular React and TypeScript libraries"
    },
    {
      id: 4,
      title: "Mobile App Demo - Task Manager",
      description: "Cross-platform mobile application with offline sync capabilities",
      type: "project",
      video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      date: "2023",
      category: "Mobile Development",
      details: "React Native app with Redux, offline storage, and push notifications"
    },
    {
      id: 5,
      title: "Tech Speaker - DevCon 2023",
      description: "Keynote speaker at regional developer conference",
      type: "recognition",
      image: "/placeholder.svg",
      date: "2023",
      category: "Speaking",
      details: "Presented 'Modern React Patterns' to an audience of 300+ developers"
    },
    {
      id: 6,
      title: "AI Dashboard Demo",
      description: "Real-time analytics dashboard with machine learning insights",
      type: "project",
      video: "https://www.w3schools.com/html/mov_bbb.mp4", // Placeholder video
      date: "2023",
      category: "AI/ML",
      details: "Built with Python, TensorFlow, and React. Processes 10GB+ of data daily"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return <Trophy className="h-5 w-5" />;
      case 'recognition':
        return <Award className="h-5 w-5" />;
      case 'milestone':
        return <Star className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Innovation': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      'Web Development': 'bg-green-500/10 text-green-500 border-green-500/20',
      'Open Source': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      'Mobile Development': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      'Speaking': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      'AI/ML': 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-500 border-gray-500/20';
  };

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Achievements & Demos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my accomplishments, awards, and project demonstrations that highlight my journey in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                {achievement.type === 'project' && achievement.video ? (
                  <div className="aspect-video bg-muted">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                      poster="/placeholder.svg"
                    >
                      <source src={achievement.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1">
                    {getIcon(achievement.type)}
                    <span className="text-sm font-medium">{achievement.date}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                </div>
                <Badge 
                  variant="outline" 
                  className={`w-fit ${getCategoryColor(achievement.category)}`}
                >
                  {achievement.category}
                </Badge>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="text-sm leading-relaxed mb-3">
                  {achievement.description}
                </CardDescription>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {achievement.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};