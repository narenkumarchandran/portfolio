
import React from 'react';
import { Code, GraduationCap, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const skills = [
    'Python', 'Java', 'C/C++', 'Embedded C', 'JavaScript', 'HTML/CSS',
    'SQL', 'Node.js', 'React.js', 'Arduino', 'Raspberry Pi', 'Git', 'Spring Boot',
    'Flask', 'Selenium', 'Linux', 'Windows'
  ];

  return (
    <section id="about" className="py-20 px-6 bg-coral-600">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl  text-coral-100 font-bold mb-6">
            About <span className="text-coral-500">Me</span>
          </h2>
          <p className="text-xl  text-coral-100 max-w-3xl mx-auto">
            Aspiring engineer pursuing B.Tech in Computer Science (IoT) with hands-on experience in embedded systems, AI tools, and full-stack projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-coral-100 rounded-lg">
                <GraduationCap className="h-6 w-6 text-coral-500" />
              </div>
              <div>
                <h3 className="text-xl  text-coral-500 font-semibold mb-2">Education</h3>
                <p className=" text-coral-100">
                  B.Tech Computer Science and Engineering (IoT)<br />
                  Shiv Nadar University, Chennai<br />
                  CGPA: 8.86 | Aug 2023 - Aug 2027
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Code className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl  text-coral-500 font-semibold mb-2">Leadership & Involvement</h3>
                <p className=" text-coral-100">
                  Core Committee Member<br />
                  SNUC Potential (Robotics Club)<br />
                  Aug 2024 - Present
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Target className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl   text-coral-500 font-semibold mb-2">Focus Areas</h3>
                <p className=" text-coral-100">
                  IoT & Embedded Systems, AI Integration, Full-Stack Development, and creating accessible tech solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-coral-400 to-coral-600 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-white" />
              <h3 className="text-2xl font-semibold">Skills & Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
