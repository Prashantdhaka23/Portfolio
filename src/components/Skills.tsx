import React from 'react';
import { Database, Globe, Server, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Globe className="w-6 h-6" />,
      skills: ['C/C++', 'Java', 'Python', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Frontend',
      icon: <Globe className="w-6 h-6" />,
      skills: ['React.js', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'FastAPI', 'Spring Boot', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL', 'Redis', 'DynamoDB', 'Oracle'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'GitHub Actions'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? `bg-gradient-to-r ${category.color}` : 'bg-slate-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Coursework</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Data Structures & Algorithms',
                'Database Management Systems',
                'Operating Systems',
                'Computer Networks',
                'Object Oriented Software Engineering',
                'Software Engineering and Testing',
                'Machine Learning',
                'Computer Vision',
                'Competitive Programming'
              ].map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:border-blue-400 transition-colors duration-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;