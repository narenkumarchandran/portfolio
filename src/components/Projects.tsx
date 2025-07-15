
import React from 'react';
import { Github, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "GPU Price Monitoring System",
      description: "A real-time GPU price tracker that scrapes from Newegg for pricing, specs, and availability. Features automated 10-minute updates, SQL database for historical analysis, and Flask-based web interface with alerts and visualizations.",
      technologies: ["Python", "Flask", "SQL", "Web Scraping"],
      githubUrl: "https://github.com/narenkumarchandran",
      date: "Nov 2024"
    },
    {
      title: "Voice Controlled RGB LED System",
      description: "Developed a voice-controlled LED system using Hugging Face Whisper and Arduino for hands-free interaction. Built with Streamlit interface for real-time voice and manual control through serial communication.",
      technologies: ["Whisper", "Hugging Face", "Arduino", "Streamlit"],
      githubUrl: "https://github.com/narenkumarchandran",
      date: "Oct 2024"
    },
    {
      title: "Parsing of Social Media Feed",
      description: "Engineered an automated investigation tool to extract data from social media accounts using Selenium. Scraped posts, messages, and followers while ensuring compliance with platform policies and data laws.",
      technologies: ["Selenium", "Python", "SQL", "Data Analysis"],
      githubUrl: "https://github.com/narenkumarchandran",
      date: "Sep 2024"
    },
    {
      title: "IoT Object Detecting System",
      description: "Built an Arduino-based obstacle detection system using HC-SR04 ultrasonic sensor and buzzer alerts. Designed as a low-cost proximity aid to assist visually impaired users in navigating safely.",
      technologies: ["Arduino UNO", "Ultrasonic Sensor", "Embedded C", "IoT"],
      githubUrl: "https://github.com/narenkumarchandran",
      date: "Aug 2024"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-coral-600">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl  text-white lg:text-5xl font-bold mb-6">
            My <span className="text-coral-500">Projects</span>
          </h2>
          <p className="text-xl text-coral-100 max-w-3xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills in IoT, AI integration, and full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8  ">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-gradient-to-br from-coral-400  to-coral-600 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-4 w-4 text" />
                  <span className="text-sm text-white">{project.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-white mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-4 w-4 text-coral-500" />
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-coral-100 text-coral-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center ">
                  <Button
                    asChild
                    variant="outline"
                    className="bg-gradient-to-br from-black to-coral-600 border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white px-6 py-2"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 " />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            className="bg-coral-600 border-2 border-coral-500 text-coral-500 hover:bg-coral-500 hover:text-white px-8 py-3 text-lg"
          >
            <a href="https://github.com/narenkumarchandran" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
