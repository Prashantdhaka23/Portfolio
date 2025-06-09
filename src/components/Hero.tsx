import React from 'react';
import { ChevronDown,Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 p-1 mb-8">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-6xl font-bold text-slate-900">
                  PD
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Prashant Dhaka
            </span>
          </h1>

          <div className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <p className="animate-fade-in-up delay-300">
                Software Engineer & Competitive Programmer
              </p>
            </div>
            {/* <div className="overflow-hidden">
              <p className="text-lg sm:text-xl mt-4 animate-fade-in-up delay-500">
                Expert on Codeforces | 5⭐ on CodeChef | Guardian on LeetCode
              </p>
            </div> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-gray-300 text-gray-300 px-8 py-3 rounded-full font-medium hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Prashantdhaka23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/prashant-dhaka-1709a722a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:prashantdhaka666@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+919119231580"
              className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="text-gray-400 animate-bounce" size={32} />
      </div>
    </section>
  );
};

export default Hero;