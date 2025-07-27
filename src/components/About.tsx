
import React from 'react';
import { Code, GraduationCap, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const techStack = [
  { name: 'Python', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',doc:'https://docs.python.org/3/' },
   { name: 'C/C++', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',doc:'https://en.cppreference.com/w/' },
  { name: 'Java', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',doc:'https://docs.oracle.com/en/java/' },
  { name: 'Embedded C', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',doc:'https://www.embedded.com/category/embedded-c/' },
  { name: 'JavaScript', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',doc:'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'HTML/CSS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',doc:'https://developer.mozilla.org/en-US/docs/Web' },
  { name: 'SQL', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg',doc:'https://dev.mysql.com/doc/' },
  { name: 'Node.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',doc:'https://nodejs.org/en/docs/' },
  { name: 'React.js', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',doc:'https://react.dev/' },
  { name: 'Arduino', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',doc:'https://docs.arduino.cc/' },
  { name: 'Raspberry Pi', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg',doc:'https://www.raspberrypi.com/documentation/' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',doc:'https://git-scm.com/doc' },
  { name: 'Spring Boot', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg',doc:'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
  { name: 'Flask', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg',doc:'https://flask.palletsprojects.com/en/latest/' },
  { name: 'Selenium', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',doc:'https://www.selenium.dev/documentation/' },
  { name: 'Linux', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',doc:'https://linux.die.net/man/' },
  { name: 'Windows', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg',doc:'https://learn.microsoft.com/en-us/windows/' },
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
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 justify-items-center">
              {techStack.map((tech, index) => (
                <a
                  key={index} 
                  href={tech.doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center text-white text-sm cursor-pointer"
                >
                  <div
                    className="p-3 bg-coral-200 rounded-xl shadow-md transition-transform duration-300 
                              hover:scale-110 active:scale-110 shadow-lg hover:shadow-xl hover:ring-2 hover:ring-coral-400"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="mt-2 text-center text-white text-xs">{tech.name}</span>
                </a>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
