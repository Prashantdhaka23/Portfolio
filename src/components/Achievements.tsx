import React from 'react';

import { Star, Award, Trophy, Target, Medal, ShieldCheck, Flame ,GraduationCap } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Expert on Codeforces',
      description: 'Max Rating: 1736',
      icon: <Star className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      rank: 'Expert',
    },
    {
      title: '5-star at CodeChef',
      description: 'Max Rating: 2047',
      icon: <Award className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      rank: '5⭐',
    },
    {
      title: 'Guardian at LeetCode',
      description: 'Top 0.45% globally, Max Rating: 2405',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      rank: 'Guardian',
    },
    {
      title: 'Meta Hacker Cup 2023',
      description: 'Ranked 1302 globally and won exclusive merchandise',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      rank: '1302',
    },
    {
      title: 'TCS CodeVita Season 12',
      description: 'Secured Global Rank 398 in prestigious international coding competition',
      icon: <Medal className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      rank: '398',
    },
    {
      title: 'CodeKaze at Invictus 2024',
      description: 'Awarded 1st place in DTU tech fest coding competition',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'from-pink-500 to-red-500',
      rank: '1st',
    },
    {
      title: 'CodeChef Starter 152 by CRED',
      description: 'Achieved 24th rank in competitive programming contest',
      icon: <Flame className="w-8 h-8" />,
      color: 'from-red-500 to-orange-400',
      rank: '24th',
    },
    {
  title: 'JEE Main 2021',
  description: 'Scored 98.5 percentile among 1 million+ candidates',
  icon: <GraduationCap className="w-8 h-8" />,
  color: 'from-lime-500 to-green-400',
  rank: '98.5 percentile',
}
  ];


  const codingProfiles = [
    {
      platform: 'Codeforces',
      url: 'https://codeforces.com/profile/dhakaprashant666',
      color: 'from-red-500 to-pink-500'
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/prashant_dhaka666/',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      platform: 'CodeChef',
      url: 'https://www.codechef.com/users/prashantdhaka',
      color: 'from-blue-500 to-purple-500'
    },
    {
      platform: 'AtCoder',
      url: 'https://atcoder.jp/users/dhakaprashant666',
      color: 'from-green-500 to-cyan-500'
    }
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        {/* Main Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-slate-800/30 backdrop-blur-lg border border-slate-700 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {achievement.icon}
                </div>
              </div>
              
              <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                {achievement.rank}
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-gray-300 text-sm">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>


        {/* Coding Profiles */}
        <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Coding Profiles</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-r ${profile.color} p-4 rounded-xl text-white font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105 transform`}
              >
                {profile.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;