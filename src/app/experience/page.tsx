'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Calendar, MapPin, Building, Award, Code, Brain, Database, Globe, 
  Briefcase, Star, Zap, Target, Users, ArrowRight, Sparkles, 
  TrendingUp, Lightbulb, Rocket, ExternalLink, Github, 
  CheckCircle, Trophy, BookOpen, Cpu, Heart, Coffee,
  BarChart3, Layers, Shield, Smartphone, Monitor
} from 'lucide-react';
import { useRef, useState } from 'react';
import Link from 'next/link';

const ExperiencePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const experiences = [
    {
      id: 1,
      title: 'Full Stack & AI/ML Developer',
      company: 'Garnet AI',
      logo: '🤖', // Using emoji as placeholder for company logo
      type: 'Internship',
      period: 'Jan 2024 - Present',
      duration: '8+ months',
      location: 'Remote',
      status: 'Current',
      statusColor: 'bg-green-500',
      description: 'Leading development of cutting-edge AI/ML solutions and scalable full-stack applications that serve thousands of users daily.',
      technologies: ['Python', 'React', 'TensorFlow', 'PyTorch', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      achievements: [
        { icon: Rocket, text: 'Built AI trading bot using Reinforcement Learning', metric: '92% ROI' },
        { icon: Zap, text: 'Deployed ML models serving requests', metric: '10K+ daily' },
        { icon: TrendingUp, text: 'Reduced model inference time', metric: '40% faster' },
        { icon: Users, text: 'Collaborated with cross-functional teams', metric: '15+ members' },
        { icon: Shield, text: 'Maintained application uptime', metric: '99.9%' }
      ],
      highlights: ['🚀 Production ML Systems', '⚡ Real-time Processing', '📊 Data Analytics'],
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500/30',
      year: '2024',
      category: 'Professional'
    },
    {
      id: 2,
      title: 'AI Research Intern',
      company: 'IIT Delhi',
      logo: '🎓', 
      type: 'Research',
      period: 'Jun 2024 - Aug 2024',
      duration: '3 months',
      location: 'Delhi, India',
      status: 'Completed',
      statusColor: 'bg-purple-500',
      description: 'Conducted groundbreaking research in emotion recognition using physiological signals with world-class researchers.',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Signal Processing', 'PyTorch', 'OpenCV'],
      achievements: [
        { icon: Brain, text: 'Developed emotion recognition model', metric: '95% accuracy' },
        { icon: BookOpen, text: 'Published research paper', metric: 'IEEE Access' },
        { icon: Award, text: 'Presented at conferences', metric: '3 major events' },
        { icon: Users, text: 'Collaborated with PhD researchers', metric: '5+ experts' },
        { icon: Database, text: 'Processed physiological datasets', metric: '10K+ samples' }
      ],
      highlights: ['🧠 Deep Learning', '📊 Signal Processing', '📝 Research Publication'],
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      year: '2024',
      category: 'Research'
    },
    {
      id: 3,
      title: 'AI/ML Mentor & Instructor',
      company: 'Unstop',
      logo: '🎯',
      type: 'Mentorship',
      period: 'Mar 2024 - Present',
      duration: '9+ months',
      location: 'Remote',
      status: 'Current',
      statusColor: 'bg-green-500',
      description: 'Empowering the next generation of AI/ML engineers through comprehensive mentorship and hands-on training programs.',
      technologies: ['Teaching', 'Python', 'Machine Learning', 'Curriculum Design', 'Project Guidance'],
      achievements: [
        { icon: Users, text: 'Mentored aspiring AI/ML engineers', metric: '100+ students' },
        { icon: Sparkles, text: 'Conducted workshops and masterclasses', metric: '25+ sessions' },
        { icon: Heart, text: 'Student satisfaction rate', metric: '95% positive' },
        { icon: Trophy, text: 'Students placed in top companies', metric: '30+ placements' },
        { icon: Lightbulb, text: 'Created learning resources', metric: '50+ tutorials' }
      ],
      highlights: ['👨‍🏫 Expert Mentoring', '🎓 Curriculum Design', '🏆 Student Success'],
      color: 'from-green-500 to-emerald-500',
      borderColor: 'border-green-500/30',
      year: '2024',
      category: 'Education'
    },
    {
      id: 4,
      title: 'Technical Content Creator',
      company: 'Medium & Tech Community',
      logo: '✍️',
      type: 'Content',
      period: 'Jan 2023 - Present',
      duration: '1+ years',
      location: 'Global',
      status: 'Current',
      statusColor: 'bg-orange-500',
      description: 'Creating viral technical content that educates and inspires developers worldwide while building a strong personal brand.',
      technologies: ['Technical Writing', 'AI/ML', 'Data Science', 'Content Strategy', 'Community Building'],
      achievements: [
        { icon: BookOpen, text: 'Published viral technical articles', metric: '50+ posts' },
        { icon: Users, text: 'Built engaged follower base', metric: '5K+ followers' },
        { icon: TrendingUp, text: 'Generated article views', metric: '100K+ reads' },
        { icon: Star, text: 'Featured in top publications', metric: '10+ features' },
        { icon: Globe, text: 'Global reach across platforms', metric: '25+ countries' }
      ],
      highlights: ['📝 Viral Content', '🌍 Global Reach', '⭐ Top Publications'],
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500/30',
      year: '2023',
      category: 'Content'
    },
    {
      id: 5,
      title: 'Open Source Maintainer',
      company: 'GitHub Ecosystem',
      logo: '🌟',
      type: 'Open Source',
      period: 'Jun 2023 - Present',
      duration: '1+ years',
      location: 'Global',
      status: 'Current',
      statusColor: 'bg-yellow-500',
      description: 'Building and maintaining open-source projects used by developers worldwide, contributing to the global ecosystem.',
      technologies: ['Python', 'JavaScript', 'React', 'Machine Learning', 'Git', 'Docker', 'CI/CD'],
      achievements: [
        { icon: Star, text: 'GitHub stars across repositories', metric: '5K+ stars' },
        { icon: Code, text: 'Commits to open source projects', metric: '2K+ commits' },
        { icon: Layers, text: 'Maintained active repositories', metric: '10+ repos' },
        { icon: Globe, text: 'Contributed to ML frameworks', metric: '5+ frameworks' },
        { icon: Users, text: 'Community contributors gained', metric: '100+ devs' }
      ],
      highlights: ['⭐ GitHub Stars', '🌍 Global Impact', '🤝 Community Building'],
      color: 'from-yellow-500 to-amber-500',
      borderColor: 'border-yellow-500/30',
      year: '2023',
      category: 'Open Source'
    },
    {
      id: 6,
      title: 'Competitive Programming Expert',
      company: 'Global Platforms',
      logo: '⚡',
      type: 'Programming',
      period: 'Sep 2022 - Present',
      duration: '2+ years',
      location: 'Worldwide',
      status: 'Current',
      statusColor: 'bg-violet-500',
      description: 'Mastering algorithmic problem-solving and competing against the world\'s best programmers on global platforms.',
      technologies: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Mathematics', 'Competitive Programming'],
      achievements: [
        { icon: Zap, text: 'Solved complex algorithmic problems', metric: '1000+ problems' },
        { icon: Trophy, text: 'Achieved top ranking in contests', metric: 'Top 10%' },
        { icon: Lightbulb, text: 'Built problem-solving expertise', metric: 'Expert level' },
        { icon: Users, text: 'Mentored competitive programmers', metric: '50+ students' },
        { icon: Target, text: 'Contest participation rate', metric: '95% active' }
      ],
      highlights: ['⚡ Algorithm Expert', '🏆 Top Rankings', '🎯 Problem Solving'],
      color: 'from-violet-500 to-purple-500',
      borderColor: 'border-violet-500/30',
      year: '2022',
      category: 'Programming'
    }
  ];

  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science Engineering',
    institution: 'Institute of Technology',
    logo: '🎓',
    location: 'Ahmedabad, India',
    period: '2021 - 2025',
    duration: '4 years',
    status: 'Final Year',
    statusColor: 'bg-blue-500',
    gpa: '8.7/10',
    description: 'Building a comprehensive foundation in Computer Science with specialized focus on AI/ML, Software Engineering, and Research.',
    highlights: [
      { icon: Brain, text: 'AI/ML Research Specialization', metric: 'Top 5%' },
      { icon: BookOpen, text: 'Published Research Papers', metric: '3+ papers' },
      { icon: Users, text: 'Technical Society Leadership', metric: 'President' },
      { icon: Award, text: 'Academic Excellence Recognition', metric: 'Dean\'s List' },
      { icon: Trophy, text: 'Department Rank', metric: 'Top 10' }
    ],
    color: 'from-blue-500 to-indigo-500',
    borderColor: 'border-blue-500/30'
  };

  const filters = ['All', 'Professional', 'Research', 'Education', 'Content', 'Open Source', 'Programming'];

  const filteredExperiences = selectedFilter === 'All' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-32 h-32 mx-auto mb-8">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/30 via-secondary/40 to-accent/30 backdrop-blur-sm border-4 border-primary/30 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-4xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  💼
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            My <span className="gradient-text">Journey</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From competitive programming to AI research, from mentoring to building production systems - 
            here's how I've grown as a <span className="text-primary font-semibold">technology leader</span> 
            and <span className="text-secondary font-semibold">innovation driver</span>.
          </motion.p>

          <motion.div
            className="flex items-center justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border">
              <Calendar size={16} className="text-primary" />
              <span className="text-sm font-medium">2+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border">
              <Trophy size={16} className="text-accent" />
              <span className="text-sm font-medium">15+ Awards</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border">
              <Users size={16} className="text-secondary" />
              <span className="text-sm font-medium">100+ Mentored</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-background-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Professional Experience</span> 💼
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
              Filter by category to explore different aspects of my journey
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-card hover:bg-muted border border-border'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`card relative overflow-hidden group ${exp.borderColor} border-l-4`}
              >
                {/* Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  initial={false}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                      {/* Company Logo */}
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        {exp.logo}
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          <div className={`w-3 h-3 ${exp.statusColor} rounded-full animate-pulse`} />
                        </div>
                        
                        <div className="flex items-center space-x-4 text-foreground-secondary mb-2">
                          <div className="flex items-center space-x-2">
                            <Building size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                            {exp.type}
                          </span>
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                            {exp.duration}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            exp.status === 'Current' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                          }`}>
                            {exp.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-card border border-border rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                      <Trophy size={20} className="text-accent" />
                      <span>Key Achievements</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, idx) => {
                        const Icon = achievement.icon;
                        return (
                          <motion.div
                            key={idx}
                            className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group/achievement"
                            whileHover={{ scale: 1.02 }}
                          >
                            <Icon size={18} className="text-primary flex-shrink-0" />
                            <div className="flex-1">
                              <span className="text-sm text-foreground-secondary">{achievement.text}</span>
                              <div className="text-lg font-bold text-primary">{achievement.metric}</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground-secondary mb-3 flex items-center space-x-2">
                      <Code size={16} />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium hover:bg-primary/20 transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Education</span> 🎓
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Building a strong academic foundation in Computer Science and AI/ML
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.01 }}
            className={`card relative overflow-hidden group ${education.borderColor} border-l-4`}
          >
            {/* Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${education.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              initial={false}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 md:mb-0">
                  {/* Institution Logo */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${education.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {education.logo}
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {education.degree}
                      </h3>
                      <div className={`w-3 h-3 ${education.statusColor} rounded-full animate-pulse`} />
                    </div>
                    
                    <div className="text-lg font-semibold text-secondary mb-2">
                      {education.field}
                    </div>

                    <div className="flex items-center space-x-4 text-foreground-secondary mb-2">
                      <div className="flex items-center space-x-2">
                        <Building size={16} />
                        <span className="font-semibold">{education.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{education.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${education.color} text-white`}>
                        {education.status}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                        {education.duration}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        GPA: {education.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground-muted leading-relaxed mb-6">
                {education.description}
              </p>

              {/* Academic Highlights */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
                  <Award size={20} className="text-accent" />
                  <span>Academic Highlights</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {education.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Icon size={18} className="text-primary flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-sm text-foreground-secondary">{highlight.text}</span>
                          <div className="text-lg font-bold text-primary">{highlight.metric}</div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card glass-strong relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-mesh opacity-5"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Want to Learn More About My <span className="gradient-text">Journey</span>? 🚀
                </h2>
                <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                  Explore my projects, research work, or get in touch to discuss potential collaborations and opportunities.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/projects">
                  <motion.div
                    className="btn btn-primary group relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <Code size={20} />
                    <span className="relative z-10">View My Projects</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
                
                <Link href="/research">
                  <motion.div
                    className="btn btn-outline group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen size={20} />
                    <span>Research Work</span>
                  </motion.div>
                </Link>

                <Link href="/contact">
                  <motion.div
                    className="btn btn-ghost group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Coffee size={20} />
                    <span>Let's Connect</span>
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage; 