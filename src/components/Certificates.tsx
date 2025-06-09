import React from 'react';
import { Award, ExternalLink, Calendar, Building } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: 'Meta Hacker Cup 2023',
      issuer: 'Meta (Facebook)',
      description: 'Official Facebook certificate for achieving Global Rank 1302 in the prestigious international programming competition',
      date: '2023',
      type: 'Competition',
      color: 'from-blue-500 to-cyan-500',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'TCS CodeVita Season 12',
      issuer: 'Tata Consultancy Services',
      description: 'Certificate for achieving Global Rank 398 in TCS CodeVita, one of the world\'s largest coding competitions',
      date: '2023',
      type: 'Competition',
      color: 'from-purple-500 to-pink-500',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Getting Started with Competitive Programming',
      issuer: 'NPTEL',
      description: 'Comprehensive course covering algorithms, data structures, and competitive programming techniques',
      date: '2023',
      type: 'Course',
      color: 'from-green-500 to-emerald-500',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'The Joy of Computing using Python',
      issuer: 'NPTEL',
      description: 'Python programming certification covering fundamentals to advanced concepts and practical applications',
      date: '2023',
      type: 'Course',
      color: 'from-yellow-500 to-orange-500',
      icon: <Building className="w-6 h-6" />
    },
    {
      title: 'Programming in Java',
      issuer: 'NPTEL',
      description: 'Java programming certification covering object-oriented programming, data structures, and software development',
      date: '2023',
      type: 'Course',
      color: 'from-red-500 to-pink-500',
      icon: <Building className="w-6 h-6" />
    }
  ];

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Certificates & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise and competitive programming skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {cert.icon}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${cert.color} text-white`}>
                    {cert.type}
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                  {cert.title}
                </h3>
                
                <div className="flex items-center text-gray-400 text-sm">
                  <Building size={14} className="mr-2" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-2" />
                  <span>{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Certificate Footer */}
              <div className="mt-6 pt-4 border-t border-slate-700">
                <button className={`w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium`}>
                  <ExternalLink size={14} className="mr-2" />
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              I believe in continuous learning and skill development. These certifications represent my commitment 
              to staying updated with the latest technologies and maintaining excellence in competitive programming. 
              I regularly participate in coding competitions and pursue relevant courses to enhance my technical expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;