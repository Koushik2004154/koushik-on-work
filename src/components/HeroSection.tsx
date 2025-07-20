import React from 'react';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero3DAnimation } from './Hero3DAnimation';
import { Profile3DAnimation } from './Profile3DAnimation';

export const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 h-full">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto h-full">
          {/* Centered content */}
          <div className="text-center">
            <div className="animate-fade-in">
              {/* Profile Picture with 3D animations */}
              <div className="flex justify-center mb-6 relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:border-primary/40 animate-pulse relative z-20">
                  <img
                    src="https://i.postimg.cc/mhxqkm9D/Whats-App-Image-2025-07-19-at-14-29-51-0ed21b47.jpg"
                    alt="Koushik R"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                {/* 3D Animation overlay for profile */}
                <div className="absolute inset-0 w-96 h-96 -translate-x-24 -translate-y-24 z-10">
                  <Profile3DAnimation />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Koushik R
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
                Full-Stack Engineer & No-Code Expert
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                Crafting innovative digital solutions through code and creativity. 
                Passionate about building scalable applications and empowering businesses with technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
              <Button size="lg" className="text-lg px-8" onClick={scrollToContact}>
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 animate-fade-in">
              <a 
                href="#" 
                className="p-3 rounded-full border border-border hover:border-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:cosmitra09@gmail.com" 
                className="p-3 rounded-full border border-border hover:border-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </button>
      </div>
    </section>
  );
};
