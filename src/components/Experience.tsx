import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Deutsche Bank',
      position: 'Software Development Engineer Intern',
      duration: 'May 2024 – July 2024',
      location: 'Pune, India',
      projects: [
        {
          title: 'DMP-Control-Framework',
          description: [
            'Developed an efficient control validation framework ensuring data integrity and accuracy',
            'Automated execution on file arrival with real-time dashboard access',
            'Implemented cryptographic methods (MD5, SHA-256) for SLA checks and database logging',
            'Wrote Python scripts for control validation and data retrieval from HDFS and Hive',
            'Managed builds and testing across DEV and UAT environments'
          ]
        },
        {
          title: 'Dimension Tracking',
          description: [
            'Developed Python scripts and an anomaly detection model to monitor data integrity',
            'Implemented detection for categorical column changes, volumetric shifts, and anomalies',
            'Applied statistical and ML techniques for robust anomaly detection'
          ]
        }
      ]
    }
  ];

  const otherExperiences = [
    {
      role: 'NSS Volunteer',
      description: 'Actively participated in community service and social welfare activities'
    },
    {
      role: 'Content Development Intern (Tech) at Unstop',
      description: 'Created technical content and educational materials for the platform'
    },
    {
      role: 'Computer Science Expert at Chegg',
      description: 'Provided expert-level solutions and explanations for computer science problems'
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Main Experience */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-8 hover:bg-slate-800/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <Building className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-blue-300 text-lg font-semibold">{exp.position}</p>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {exp.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-4">{project.title}</h4>
                    <ul className="space-y-2">
                      {project.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Experiences */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Other Activities</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherExperiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
              >
                <h4 className="text-lg font-semibold text-white mb-3">{exp.role}</h4>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;