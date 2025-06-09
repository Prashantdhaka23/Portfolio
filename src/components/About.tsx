import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Summary */}
          <div className="space-y-6">
           <p className="text-lg text-gray-300 leading-relaxed">
Hey there! I'm Prashant Dhaka, a passionate Software Engineer from India 🇮🇳 who loves building smart, scalable, and meaningful tech products. My primary focus is full-stack development, working with technologies like Java , Python, React, Node.js, SpringBoot,MySQL and MongoDB. I have a deep interest in algorithms, data structures, and system design — to me, it’s like solving puzzles every day. You’ll often find me coding on platforms like LeetCode and Codeforces, or diving into side projects. I’ve interned at Deutsche Bank, where I contributed to automation, anomaly detection, and backend systems. I’m always eager to learn new technologies, experiment with fresh ideas, and share knowledge. Outside of work, I enjoy exploring open-source projects and staying active in developer communities. Let’s connect and build something amazing together!
</p>
          </div>

          {/* Right: Education Section */}
          <div className="space-y-6">
            <SectionCard
              icon={<GraduationCap className="text-blue-400" size={24} />}
              title="Education"
            />

            <EduCard
              degree="B.Tech in Software Engineering"
              school="Delhi Technological University"
              location="Delhi, India"
              duration="2021 – 2025"
              content={[
              ]}
              cgpa="CGPA: 8.02"
            />

            <EduCard
              degree="School Education (Class X & XII)"
              school="Vivekanand Memorial Public School"
              location="Rajasthan, India"
              duration="2018 – 2021"
              content={[
                'Class XII Board CBSE : 84.6%. ( Science Stream )',
                'Class X Board CBSE: 84.4%.',
              ]}
              cgpa=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Section Heading Card
const SectionCard = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => (
  <div className="flex items-center mb-2">
    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mr-4">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-white">{title}</h3>
  </div>
);

// Reusable Education Card
const EduCard = ({
  degree,
  school,
  location,
  duration,
  content,
  cgpa,
}: {
  degree: string;
  school: string;
  location: string;
  duration: string;
  content: string[];
  cgpa: string;
}) => (
  <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-[1.02]">
    <h4 className="text-lg font-semibold text-white mb-1">{degree}</h4>
    <p className="text-blue-300 text-sm mb-2">{school}</p>
    <div className="flex items-center text-sm text-gray-400 mb-1">
      <MapPin size={16} className="mr-2" />
      {location}
    </div>
    <div className="flex items-center text-sm text-gray-400 mb-2">
      <Calendar size={16} className="mr-2" />
      {duration}
    </div>
    <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-2">
      {content.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {cgpa && <p className="text-sm text-gray-300 font-medium">{cgpa}</p>}
  </div>
);

export default About;
