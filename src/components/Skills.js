'use client';

import { useState, useRef } from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Flutter', level: 92, color: 'from-blue-500 to-cyan-500' },
        { name: 'React Native', level: 55, color: 'from-blue-600 to-blue-400' },
        { name: 'Dart', level: 80, color: 'from-blue-500 to-indigo-500' },
      ]
    },
    {
      title: 'Backend & Programming',
      icon: '⚙️',
      skills: [
        { name: 'Python', level: 75, color: 'from-yellow-500 to-orange-500' },
        { name: 'JavaScript', level: 55, color: 'from-yellow-400 to-yellow-600' },
        { name: 'TypeScript', level: 35, color: 'from-blue-600 to-blue-800' },
        { name: 'Node.js', level: 65, color: 'from-green-500 to-green-700' },
      ]
    },
    {
      title: 'IoT & Hardware',
      icon: '🔌',
      skills: [
        { name: 'Esp 32 Programming', level: 88, color: 'from-purple-500 to-purple-700' },
        { name: 'IoT Development', level: 85, color: 'from-indigo-500 to-purple-500' },
        { name: 'Arduino', level: 82, color: 'from-green-600 to-teal-600' },
        { name: 'Smart Solutions', level: 85, color: 'from-red-500 to-pink-500' },
      ]
    },
    {
      title: 'Design & Creative',
      icon: '🎨',
      skills: [
        { name: 'Adobe Illustrator', level: 80, color: 'from-orange-400 to-red-500' },
        { name: 'Filmora', level: 75, color: 'from-blue-400 to-purple-500' },
        { name: 'Figma', level: 82, color: 'from-pink-400 to-purple-400' },
        { name: 'UI/UX Design', level: 78, color: 'from-cyan-400 to-blue-500' },
      ]
    },
    {
      title: 'System & Tools',
      icon: '🛠️',
      skills: [
        { name: 'Computer Troubleshooting', level: 90, color: 'from-gray-600 to-gray-800' },
        { name: 'Linux', level: 75, color: 'from-gray-700 to-black' },
        { name: 'Git & Version Control', level: 88, color: 'from-red-600 to-orange-600' },
        { name: 'Windows Troubleshooting', level: 95, color: 'from-blue-500 to-cyan-600' },
      ]
    },
    {
      title: 'Network Infrastructure',
      icon: '🌐',
      skills: [
        { name: 'Cloud Services', level: 78, color: 'from-sky-500 to-blue-600' },
        { name: 'Baremetal Hypervisor', level: 82, color: 'from-slate-500 to-gray-700' },
        { name: 'Network Monitoring', level: 85, color: 'from-emerald-500 to-teal-600' },
        { name: 'UniFi Wireless P2P', level: 80, color: 'from-orange-500 to-red-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background via-background/95 to-background">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm sm:text-base font-space-grotesk text-blue-500 font-semibold uppercase tracking-wider mb-4">
            Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Expertise Across Domains
            </span>
          </h2>
          <p className="text-foreground/60 font-inter text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            From mobile app development to IoT solutions, my diverse skill set enables me to tackle complex challenges
            across multiple technology domains with creativity and precision.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-105"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="text-2xl mr-3">{category.icon}</div>
                <h3 className="text-lg sm:text-xl font-space-grotesk font-bold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    {/* Skill Header */}
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className={`font-space-grotesk text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2 bg-foreground/10 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Category Stats */}
              <div className="mt-6 pt-4 border-t border-foreground/10">
                <div className="flex justify-between items-center text-xs text-foreground/60">
                  <span>{category.skills.length} Skills</span>
                  <span className="font-space-grotesk font-bold">
                    Avg: {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/60 mb-6 font-inter">
            Always learning and exploring new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'Cloud Computing', 'Cybersecurity',
              'Database Design', 'API Development', 'Agile Methodology',
              'Project Management', 'Technical Writing', 'Mentoring'
            ].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10 rounded-full text-xs sm:text-sm font-medium text-foreground/80 hover:border-foreground/20 hover:bg-foreground/15 transition-all duration-300 hover:scale-105"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/3 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
