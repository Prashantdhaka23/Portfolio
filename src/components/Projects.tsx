import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Inventory Management Dashboard',
      description: 'Developed a scalable and interactive dashboard with Next.js, Tailwind CSS, Node.js, Prisma ORM, and AWS for efficient inventory tracking and management.',
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'Prisma ORM', 'AWS'],
      githubUrl: 'https://github.com/Prashantdhaka23/inventory-dashboard',
      liveUrl: 'https://github.com/Prashantdhaka23/inventory-dashboard',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Collaborative Code Editor',
      description: 'Developed a platform for real-time collaborative coding, enabling multiple users to simultaneously edit code with instant synchronization, persistent storage in MongoDB, and pair programming support.',
      technologies: ['Spring Boot', 'WebSocket', 'React.js', 'CodeMirror', 'MongoDB'],
      githubUrl: 'https://github.com/Prashantdhaka23/collaborative-code-editor',
      liveUrl: 'https://github.com/Prashantdhaka23/collaborative-code-editor',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Multi-Threaded Proxy Server',
      description: 'Implemented a multi-threaded proxy server with concurrency control, LRU caching, URL filtering, and encrypted request handling.',
      technologies: ['C++', 'Multi-threading', 'LRU Cache', 'Network Programming'],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sorting Visualizer',
      description: 'Created a JavaScript application to visualize and compare different sorting algorithms with interactive controls and real-time performance metrics.',
      technologies: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Data Structures'],
      githubUrl: 'https://github.com/Prashantdhaka23/sorting-visulaizer',
      liveUrl: 'https://sorting-visulaizer.vercel.app/',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Newlify - Image Colorization',
      description: 'Built an image colorization platform using TensorFlow and OpenCV for automatic colorization of black and white images.',
      technologies: ['TensorFlow', 'OpenCV', 'Python', 'Machine Learning'],
      githubUrl: '#',
      liveUrl: '#',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} text-white bg-opacity-20 border border-opacity-30`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex space-x-4">
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 bg-slate-700/50 text-white rounded-lg hover:bg-slate-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    className={`flex items-center px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Prashantdhaka23"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;