
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-coral-600">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl text-white font-bold mb-6">
            Let's <span className="text-coral-500">collaborate</span>
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto">
            I'm always eager to explore exciting opportunities, collaborate on hackathons or Full-stack & IoT innovations, or simply connect over a conversation about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 ">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-coral-400">Connect with me</h3>
              <p className="text-white mb-8 leading-relaxed">
                Whether you want to collaborate on a project, discuss Full-stack/IoT innovations, or just want to say hello, 
                I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-coral-100 rounded-lg">
                  <Mail className="h-6 w-6 text-coral-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Email</h4>
                  <p className="text-white">narenkumarchandran@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Phone className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Phone</h4>
                  <p className="text-white">+91 8838664792</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <MapPin className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Location</h4>
                  <p className="text-white">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/narenkumarchandran"
                  className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6 text-gray-700" />
                </a>
                <a
                  href="https://linkedin.com/in/narenkumarchandran"
                  className="p-3 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-6 w-6 text-blue-600" />
                </a>
              </div>
            </div>
          </div>
          
        </div> 
        

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-white">
            © 2024 Narenkumar C. Built with React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
