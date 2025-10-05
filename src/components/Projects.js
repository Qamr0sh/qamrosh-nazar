'use client';

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [displayCount, setDisplayCount] = useState(3);

  const designShowcase = {
    5: { // Green Metro Coaches UK
      title: 'Green Metro Coaches UK',
      description: 'Professional logo design for UK transportation company',
      image: '/images/green_metro_coaches_logo.jpg',
      website: 'https://greenmetrocoaches.co.uk',
      details: 'Modern, eco-friendly design reflecting sustainable transportation values with clean typography and green color palette.'
    },
    6: { // Spectrave Solar Inspection
      title: 'Spectrave Solar Inspection',
      description: 'Logo for AI-powered solar inspection company',
      image: '/images/spectrave_logo.jpg',
      website: 'https://spectrave.com',
      details: 'Futuristic design combining solar energy symbolism with drone and AI elements, using modern gradients and geometric shapes.'
    }
  };

  const openDesignModal = (projectId) => {
    setSelectedDesign(designShowcase[projectId]);
  };

  const closeDesignModal = () => {
    setSelectedDesign(null);
  };

  const projects = [
    {
      id: 1,
      title: 'Smart Parking Management System',
      category: 'iot',
      type: 'Academic Project',
      description: 'Computer Vision and IoT-based solution for automated parking management with real-time monitoring and mobile app control.',
      longDescription: 'Developed a comprehensive smart parking system using computer vision for vehicle detection, OCR for license plate recognition, and IoT sensors for real-time monitoring. The system provides automated parking space allocation and mobile app integration for users.',
      tech: ['Python', 'OpenCV', 'OCR', 'C++', 'Kotlin', 'IoT', 'Computer Vision'],
      techColors: {
        'Python': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
        'OpenCV': 'bg-green-500/10 text-green-600 border-green-500/20',
        'OCR': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'C++': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'Kotlin': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'IoT': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
        'Computer Vision': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20'
      },
      features: ['Real-time vehicle detection', 'License plate recognition', 'IoT sensor integration', 'Mobile app control', 'Automated parking allocation'],
      status: 'Completed',
      year: '2023'
    },
    {
      id: 7,
      title: 'MZ Food Complete Solution',
      category: 'mobile',
      type: 'Client Project',
      description: 'Comprehensive food delivery solution for Afghanistan with separate apps for customers and vendors, featuring real-time tracking and local payment integration.',
      longDescription: 'Developed a complete food delivery ecosystem for the Afghan market with dual applications - a customer app for ordering and a vendor app for restaurant management. Features real-time order tracking, local payment methods, and culturally adapted UX design.',
      tech: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Payment Integration', 'Real-time Tracking', 'Multi-vendor Support'],
      techColors: {
        'Flutter': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'Firebase': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'Node.js': 'bg-green-500/10 text-green-600 border-green-500/20',
        'MongoDB': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        'Payment Integration': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'Real-time Tracking': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
        'Multi-vendor Support': 'bg-pink-500/10 text-pink-600 border-pink-500/20'
      },
      features: ['Dual app architecture', 'Real-time order tracking', 'Local payment methods', 'Multi-vendor management', 'Customer & vendor dashboards', 'Afghan market adaptation'],
      status: 'Live',
      year: '2025'
    },
    {
      id: 2,
      title: 'Sunnis4Marriage',
      category: 'mobile',
      type: 'Client Project',
      description: 'Modern matchmaking application connecting Sunni Muslim singles worldwide with advanced filtering and privacy features.',
      longDescription: 'Built a comprehensive matchmaking platform with user verification, advanced search filters, privacy controls, and real-time messaging. The app serves the Sunni Muslim community with culturally appropriate features and modern UX design.',
      tech: ['Flutter', 'Firebase', 'Dart', 'REST APIs', 'Push Notifications', 'Payment Integration'],
      techColors: {
        'Flutter': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'Firebase': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'Dart': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
        'REST APIs': 'bg-green-500/10 text-green-600 border-green-500/20',
        'Push Notifications': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'Payment Integration': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
      },
      features: ['User verification system', 'Advanced search filters', 'Real-time messaging', 'Privacy controls', 'Payment integration', 'Cross-platform compatibility'],
      status: 'Live',
      year: '2024'
    },
    {
      id: 3,
      title: 'Document Organizer',
      category: 'mobile',
      type: 'Company Project',
      description: 'Corporate document management system with cloud synchronization, encryption, and collaborative features.',
      longDescription: 'Developed a secure document management solution for enterprises with end-to-end encryption, cloud synchronization, version control, and collaborative editing capabilities. Features offline access and secure sharing.',
      tech: ['Flutter', 'Encryption', 'Cloud Sync', 'SQLite', 'File Management', 'Payment Integration'],
      techColors: {
        'Flutter': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'Encryption': 'bg-red-500/10 text-red-600 border-red-500/20',
        'Cloud Sync': 'bg-sky-500/10 text-sky-600 border-sky-500/20',
        'SQLite': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        'File Management': 'bg-gray-500/10 text-gray-600 border-gray-500/20',
        'Payment Integration': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
      },
      features: ['End-to-end encryption', 'Cloud synchronization', 'Offline access', 'Version control', 'Collaborative editing', 'Payment integration'],
      status: 'Deployed',
      year: '2025'
    },
    {
      id: 4,
      title: 'Password Manager',
      category: 'mobile',
      type: 'Company Project',
      description: 'Secure password management solution with multi-device sync, biometric authentication, and enterprise-grade security.',
      longDescription: 'Built a comprehensive password management system for enterprises with military-grade encryption, biometric authentication, cross-device synchronization, and secure sharing capabilities. Includes audit trails and compliance features.',
      tech: ['Flutter', 'Biometric Auth', 'Encryption', 'Secure Storage', 'Cross-platform Sync', 'Payment Integration'],
      techColors: {
        'Flutter': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'Biometric Auth': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'Encryption': 'bg-red-500/10 text-red-600 border-red-500/20',
        'Secure Storage': 'bg-amber-500/10 text-amber-600 border-amber-500/20',
        'Cross-platform Sync': 'bg-teal-500/10 text-teal-600 border-teal-500/20',
        'Payment Integration': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20'
      },
      features: ['Military-grade encryption', 'Biometric authentication', 'Multi-device sync', 'Secure sharing', 'Audit trails', 'Payment integration'],
      status: 'Under Development',
      year: '2025'
    },
    {
      id: 5,
      title: 'Green Metro Coaches UK',
      category: 'design',
      type: 'Brand Identity',
      description: 'Professional logo design for UK-based transportation company specializing in eco-friendly coach services.',
      longDescription: 'Created a modern, professional logo that reflects the company\'s commitment to sustainable transportation. The design incorporates green elements while maintaining a professional appearance suitable for the transportation industry.',
      tech: ['Adobe Illustrator', 'Brand Strategy', 'Typography', 'Color Theory'],
      techColors: {
        'Adobe Illustrator': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'Brand Strategy': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        'Typography': 'bg-pink-500/10 text-pink-600 border-pink-500/20',
        'Color Theory': 'bg-violet-500/10 text-violet-600 border-violet-500/20'
      },
      features: ['Vector graphics', 'Scalable design', 'Brand consistency', 'Print-ready files'],
      status: 'Delivered',
      year: '2023'
    },
    {
      id: 6,
      title: 'Spectrave Solar Inspection',
      category: 'design',
      type: 'Brand Identity',
      description: 'Modern logo design for AI-powered solar inspection company using drone technology and machine learning.',
      longDescription: 'Designed a futuristic logo that represents advanced technology and solar energy. The design incorporates elements suggesting aerial inspection, artificial intelligence, and renewable energy themes.',
      tech: ['Adobe Illustrator', 'AI Concepts', 'Solar Energy Theme', 'Drone Imagery'],
      techColors: {
        'Adobe Illustrator': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'AI Concepts': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'Solar Energy Theme': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
        'Drone Imagery': 'bg-slate-500/10 text-slate-600 border-slate-500/20'
      },
      features: ['Futuristic design', 'Technology integration', 'Energy symbolism', 'Professional aesthetics'],
      status: 'Delivered',
      year: '2025'
    },
    {
      id: 8,
      title: 'WS8108 Matrix Controller',
      category: 'iot',
      type: 'Hardware Project',
      description: 'WiFi-enabled LED matrix controller with Android app for remote control and pattern programming.',
      longDescription: 'Developed a comprehensive LED matrix control system using ESP32 microcontroller with WiFi connectivity. The system includes an Android app built with Flutter for remote control, pattern creation, and real-time synchronization across multiple devices.',
      tech: ['Flutter', 'C++', 'ESP32', 'WiFi Networks', 'Bluetooth', 'Real-time Communication'],
      techColors: {
        'Flutter': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'C++': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'ESP32': 'bg-green-500/10 text-green-600 border-green-500/20',
        'WiFi Networks': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20',
        'Bluetooth': 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20',
        'Real-time Communication': 'bg-orange-500/10 text-orange-600 border-orange-500/20'
      },
      features: ['WiFi connectivity', 'Mobile app control', 'Pattern programming', 'Multi-device sync', 'Real-time updates', 'ESP32 integration'],
      status: 'Completed',
      year: '2024'
    },
    {
      id: 9,
      title: 'Water Level Monitoring System',
      category: 'iot',
      type: 'Hardware Project',
      description: 'Automated water level monitoring and control system with web dashboard and mobile notifications.',
      longDescription: 'Built a complete water level monitoring solution using NodeMCU microcontroller with ultrasonic sensors, automatic pump control, and web-based dashboard. Includes mobile app integration for real-time monitoring and alert notifications.',
      tech: ['NodeMCU', 'C++', 'Flutter', 'HTML', 'CSS', 'JavaScript', 'IoT Sensors'],
      techColors: {
        'NodeMCU': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        'C++': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'Flutter': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'HTML': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'CSS': 'bg-pink-500/10 text-pink-600 border-pink-500/20',
        'JavaScript': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
        'IoT Sensors': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20'
      },
      features: ['Water level monitoring', 'Automatic pump control', 'Web dashboard', 'Mobile notifications', 'Sensor integration', 'Real-time alerts'],
      status: 'Deployed',
      year: '2024'
    },
    {
      id: 10,
      title: 'Contextual Lighting System',
      category: 'iot',
      type: 'Hardware Project',
      description: 'Windows screen color capture system that analyzes display content and syncs ambient lighting to ESP32 LED matrix.',
      longDescription: 'Developed an intelligent lighting system that captures colors from Windows screen content using computer vision techniques. The system analyzes visual data in real-time and sends color information to ESP32-controlled LED matrices for synchronized ambient lighting that matches on-screen content.',
      tech: ['Python', 'Computer Vision', 'C++', 'ESP32', 'OpenCV', 'Real-time Processing', 'Windows API'],
      techColors: {
        'Python': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
        'Computer Vision': 'bg-green-500/10 text-green-600 border-green-500/20',
        'C++': 'bg-purple-500/10 text-purple-600 border-purple-500/20',
        'ESP32': 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
        'OpenCV': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
        'Real-time Processing': 'bg-orange-500/10 text-orange-600 border-orange-500/20',
        'Windows API': 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20'
      },
      features: ['Screen color capture', 'Real-time analysis', 'ESP32 integration', 'Ambient lighting sync', 'Computer vision processing', 'Windows system integration'],
      status: 'Completed',
      year: '2024'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'iot', name: 'IoT & Hardware' },
    { id: 'design', name: 'Design & Branding' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
        switch(activeFilter) {
          case 'mobile': return project.category === 'mobile';
          case 'iot': return project.category === 'iot';
          case 'design': return project.category === 'design';
          case 'enterprise': return project.type === 'Enterprise Solution';
          default: return true;
        }
      });

  const displayedProjects = filteredProjects.slice(0, displayCount);

  return (
    <section id="projects" className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-background to-background/95">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm sm:text-base font-space-grotesk text-blue-500 font-semibold uppercase tracking-wider mb-4">
            Featured Projects
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-space-grotesk font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Portfolio Showcase
            </span>
          </h2>
          <p className="text-foreground/60 font-inter text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-12">
            A collection of innovative projects spanning mobile development, IoT solutions, enterprise applications,
            and creative design work that demonstrate technical expertise and problem-solving capabilities.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-inter text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-foreground/5 text-foreground/60 hover:bg-foreground/10 hover:text-foreground border border-foreground/10'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-2xl p-6 hover:bg-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.category === 'mobile' ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20' :
                    project.category === 'iot' ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20' :
                    project.category === 'design' ? 'bg-pink-500/10 text-pink-600 border border-pink-500/20' :
                    'bg-green-500/10 text-green-600 border border-green-500/20'
                  }`}>
                    {project.type}
                  </span>
                  <span className="text-xs text-foreground/40 font-inter">{project.year}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-space-grotesk font-bold text-foreground mb-3 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <p className="text-foreground/70 font-inter text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">Technologies Used</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${project.techColors[tech]}`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-foreground/10 text-foreground/60 border border-foreground/20">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">Key Features</p>
                <ul className="text-sm text-foreground/70 space-y-1">
                  {project.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Status */}
              <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  project.status === 'Live' ? 'bg-green-500/10 text-green-600 border border-green-500/20' :
                  project.status === 'Deployed' ? 'bg-blue-500/10 text-blue-600 border border-blue-500/20' :
                  project.status === 'Completed' ? 'bg-purple-500/10 text-purple-600 border border-purple-500/20' :
                  project.status === 'In Development' ? 'bg-orange-500/10 text-orange-600 border border-orange-500/20' :
                  'bg-gray-500/10 text-gray-600 border border-gray-500/20'
                }`}>
                  {project.status}
                </span>
                <div className="flex items-center gap-2">
                  {project.category === 'design' && (
                    <button
                      onClick={() => openDesignModal(project.id)}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      View Design
                    </button>
                  )}
                  <span className="text-xs text-foreground/40 font-inter">
                    Project #{project.id}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredProjects.length > displayCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => {
                if (displayCount + 3 >= filteredProjects.length) {
                  setDisplayCount(filteredProjects.length);
                } else {
                  setDisplayCount(displayCount + 3);
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-space-grotesk font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Load More Projects ({filteredProjects.length - displayCount} remaining)
            </button>
          </div>
        )}

        {/* Show Less Projects Button */}
        {displayCount > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setDisplayCount(3)}
              className="px-8 py-4 bg-foreground/10 text-foreground font-space-grotesk font-semibold rounded-full hover:bg-foreground/20 transition-all duration-300"
            >
              Show Less Projects
            </button>
          </div>
        )}

        {/* Additional Projects Note */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-foreground/5 to-foreground/10 border border-foreground/10 rounded-full">
            <span className="text-sm text-foreground/60 font-inter">
              + 15+ additional freelancing projects across various domains and technologies
            </span>
          </div>
        </div>
      </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
      

      {/* Design Showcase Modal */}
      {selectedDesign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-background border border-foreground/10 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-space-grotesk font-bold text-foreground">
                {selectedDesign.title}
              </h3>
              <button
                onClick={closeDesignModal}
                className="w-8 h-8 bg-foreground/10 hover:bg-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              {/* Logo Image */}
              <div className="aspect-video bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-xl border border-foreground/10 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedDesign.image}
                  alt={`${selectedDesign.title} Logo`}
                  className="w-full h-full object-contain p-8"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="text-center hidden">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {selectedDesign.title.split(' ')[0].charAt(0)}
                    </span>
                  </div>
                  <p className="text-foreground/60 font-inter">Logo Preview</p>
                  <p className="text-sm text-foreground/40 mt-1">Design available for download</p>
                </div>
              </div>

              <div>
                <h4 className="font-space-grotesk font-semibold text-foreground mb-2">Project Details</h4>
                <p className="text-foreground/70 font-inter leading-relaxed">
                  {selectedDesign.details}
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <a
                  href={selectedDesign.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-space-grotesk font-semibold rounded-lg hover:shadow-lg transition-all duration-300 text-center"
                >
                  Visit Website
                </a>
                <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-space-grotesk font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                  Download Files
                </button>
                <button
                  onClick={closeDesignModal}
                  className="px-4 py-3 bg-foreground/10 text-foreground font-space-grotesk font-semibold rounded-lg hover:bg-foreground/20 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </section>
  );
}
