
import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-coral-500 to-coral-600 bg-clip-text text-transparent">
                  Narenkumar C
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                B.Tech Computer Science & Engineering (IoT) Student
              </p>
              <p className="text-lg text-gray-500 mb-10 max-w-2xl">
                Aspiring engineer with hands-on experience in embedded systems, AI tools, and full-stack projects. 
                Passionate about creating impactful, accessible tech solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
                <Button 
                  onClick={scrollToProjects}
                  className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
               <a href="/Resume1.pdf" download>
                  <Button 
                  variant="outline"
                  className="border-2 border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white px-8 py-3 rounded-full text-lg transition-all duration-300">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </a>

              </div>

              <div className="flex gap-6 justify-center lg:justify-start">
                <a 
                  href="https://github.com/narenkumarchandran" 
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                <a 
                  href="https://linkedin.com/in/narenkumarchandran" 
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
                <a 
                  href="mailto:narenkumarchandran@gmail.com" 
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-6 w-6 text-coral-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-scale-in">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-coral-400 to-coral-600 shadow-2xl"></div>
              <div className="absolute inset-4 rounded-full bg-white shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <div className="absolute inset-4 rounded-full bg-white shadow-inner flex items-center justify-center overflow-hidden">
                    <img 
                      src="./naren.jpeg" 
                      alt="Narenkumar" 
                       className="w-full h-full object-cover rounded-full"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
