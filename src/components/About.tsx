import React from 'react';
import { Code, GraduationCap, Trophy } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate Software Engineer currently pursuing B.Tech in Software Engineering 
              at Delhi Technological University with a CGPA of 8.02. I have a strong foundation in 
              competitive programming and full-stack development.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey includes an internship at Deutsche Bank where I developed control validation 
              frameworks and anomaly detection models. I'm experienced in building scalable applications 
              using modern technologies like React, Node.js, Python, and cloud platforms.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">React.js</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
              <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm">Python</span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">Java</span>
              <span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">AWS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium">
                    B.Tech in Software Engineering (CSE)
                  </p>
                  <p className="text-blue-300 text-sm">Delhi Technological University</p>
                  <p className="text-gray-400 text-sm">CGPA: 8.02 (2021-2025)</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">
                    CBSE Class XII
                  </p>
                  <p className="text-blue-300 text-sm">Vivekanand Memorial Public School, Rajasthan</p>
                  <p className="text-gray-400 text-sm">Aggregate: 84.6% (2018-2021)</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Code className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Development</h3>
              </div>
              <p className="text-gray-300">
                Full-stack development with modern frameworks and best practices
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mr-4">
                  <Trophy className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white">Competitive Programming</h3>
              </div>
              <p className="text-gray-300">
                Expert on Codeforces, 5⭐ on CodeChef, Guardian on LeetCode
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;