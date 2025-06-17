'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, Award, Code, Brain, Database, Globe, Briefcase, Star, Zap, Target, Users, Building, ArrowRight, Sparkles, TrendingUp, Lightbulb, Rocket } from 'lucide-react';
import { useRef, useState } from 'react';

const ExperiencePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const experiences = [
    {
      id: 1,
      title: 'Full Stack & AI/ML Intern',
      company: 'Garnet AI',
      type: 'Internship',
      period: '2024 - Present',
      location: 'Remote',
      status: 'Current',
      description: 'Building cutting-edge AI/ML solutions and full-stack applications. Leading development of innovative features that impact thousands of users.',
      technologies: ['Python', 'React', 'TensorFlow', 'PyTorch', 'Node.js', 'MongoDB'],
      achievements: [
        'Deployed ML models serving 10K+ requests daily',
        'Built responsive applications with 99.9% uptime',
        'Reduced model inference time by 40%',
        'Collaborated with 15+ cross-functional team members'
      ],
      icon: Building,
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      year: '2024'
    },
    {
      id: 2,
      title: 'Research Intern',
      company: 'IIT Delhi',
      type: 'Research',
      period: '2024',
      location: 'Delhi, India',
      status: 'Completed',
      description: 'Conducted groundbreaking research in AI/ML with world-class researchers. Published findings that contribute to the global AI research community.',
      technologies: ['Python', 'Deep Learning', 'Computer Vision', 'Data Analysis', 'Research'],
      achievements: [
        'Published research paper with 95% accuracy',
        'Developed novel algorithms for image processing',
        'Presented findings at 3 major conferences',
        'Collaborated with PhD researchers and professors'
      ],
      icon: Brain,
      color: 'from-purple-500 via-pink-500 to-rose-500',
      gradient: 'from-purple-500/20 to-pink-500/20',
      year: '2024'
    },
    {
      id: 3,
      title: 'AI/ML Mentor',
      company: 'Unstop',
      type: 'Mentorship',
      period: '2024 - Present',
      location: 'Remote',
      status: 'Current',
      description: 'Empowering the next generation of AI/ML engineers. Guiding students through complex projects and helping them achieve their career goals.',
      technologies: ['Teaching', 'Python', 'Machine Learning', 'Mentoring', 'Curriculum Design'],
      achievements: [
        'Mentored 100+ aspiring AI/ML engineers',
        'Conducted 25+ workshops and masterclasses',
        'Created comprehensive learning resources',
        '95% student satisfaction rate'
      ],
      icon: Users,
      color: 'from-green-500 via-emerald-500 to-teal-500',
      gradient: 'from-green-500/20 to-emerald-500/20',
      year: '2024'
    },
    {
      id: 4,
      title: 'Technical Content Creator',
      company: 'Medium & Tech Community',
      type: 'Content Creation',
      period: '2023 - Present',
      location: 'Remote',
      status: 'Current',
      description: 'Creating viral technical content that educates and inspires developers worldwide. Building a strong personal brand in the tech community.',
      technologies: ['Technical Writing', 'AI/ML', 'Data Science', 'Content Strategy', 'Community Building'],
      achievements: [
        'Published 50+ viral technical articles',
        'Gained 5K+ engaged followers',
        'Featured in top tech publications',
        'Generated 100K+ article views'
      ],
      icon: Target,
      color: 'from-orange-500 via-red-500 to-pink-500',
      gradient: 'from-orange-500/20 to-red-500/20',
      year: '2023'
    },
    {
      id: 5,
      title: 'Open Source Maintainer',
      company: 'GitHub Ecosystem',
      type: 'Open Source',
      period: '2023 - Present',
      location: 'Global',
      status: 'Current',
      description: 'Building and maintaining open-source projects used by developers worldwide. Contributing to the global developer ecosystem.',
      technologies: ['Python', 'JavaScript', 'React', 'Machine Learning', 'Git', 'Docker'],
      achievements: [
        '5K+ GitHub stars across repositories',
        '2K+ commits to open source projects',
        'Maintained 10+ active repositories',
        'Contributed to major ML frameworks'
      ],
      icon: Code,
      color: 'from-yellow-500 via-amber-500 to-orange-500',
      gradient: 'from-yellow-500/20 to-amber-500/20',
      year: '2023'
    },
    {
      id: 6,
      title: 'Competitive Programming Champion',
      company: 'Global Platforms',
      type: 'Programming',
      period: '2022 - Present',
      location: 'Worldwide',
      status: 'Current',
      description: 'Mastering algorithmic problem-solving and competing against the world\'s best programmers. Building unshakeable logical foundations.',
      technologies: ['C++', 'Python', 'Algorithms', 'Data Structures', 'Mathematics'],
      achievements: [
        'Solved 1000+ complex algorithmic problems',
        'Achieved top 10% ranking in contests',
        'Built lightning-fast problem-solving skills',
        'Mentored 50+ competitive programmers'
      ],
      icon: Zap,
      color: 'from-violet-500 via-purple-500 to-indigo-500',
      gradient: 'from-violet-500/20 to-purple-500/20',
      year: '2022'
    }
  ];

  const education = {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science Engineering',
    institution: 'Premier Engineering College',
    location: 'India',
    period: '2021 - 2025',
    status: 'Final Year',
    description: 'Building a strong foundation in Computer Science with specialization in AI/ML and Software Engineering.',
    gpa: '8.7/10',
    highlights: [
      'AI/ML Research Specialization',
      'Published Research Papers',
      'Technical Society Leadership',
      'Dean\'s List Academic Excellence'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const seriesItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const FloatingParticle = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
      animate={{
        y: [-20, -80, -20],
        x: [-10, 10, -10],
        opacity: [0, 1, 0],
        scale: [0, 1, 0]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  const PulsingOrb = ({ color, size = "w-4 h-4" }: { color: string, size?: string }) => (
    <motion.div
      className={`${size} bg-gradient-to-r ${color} rounded-full`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Journey Series
            </h1>
            <TrendingUp className="w-8 h-8 text-primary animate-bounce" />
          </motion.div>
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Experience the dynamic evolution of my professional journey through an interactive series of achievements, 
            innovations, and continuous growth in the world of technology.
          </motion.p>
        </motion.div>

        {/* Education Foundation */}
        <motion.div
          className="mb-16 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-6 py-3 rounded-full border border-green-500/30"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <GraduationCap className="w-6 h-6 text-green-400" />
              <span className="text-lg font-bold text-green-400">Foundation</span>
              <PulsingOrb color="from-green-400 to-emerald-400" />
            </motion.div>
          </div>

          <motion.div
            className="glass-card p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/30 relative overflow-hidden"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Floating Particles */}
            <FloatingParticle delay={0} />
            <FloatingParticle delay={1} />
            <FloatingParticle delay={2} />

            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{education.degree}</h3>
                <h4 className="text-xl font-semibold text-green-400 mb-3">{education.field}</h4>
                <p className="text-lg text-muted-foreground mb-2">{education.institution}</p>
                
                <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{education.period}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{education.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {education.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 }}
                    >
                      <Lightbulb className="w-4 h-4 text-accent" />
                      <span className="text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    GPA: {education.gpa}
                  </span>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                    {education.status}
                  </span>
                </div>
                <PulsingOrb color="from-green-400 to-emerald-400" size="w-20 h-20" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Series */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Connection Line */}
          <svg className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full z-0" style={{ top: 0 }}>
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#seriesGradient)"
              strokeWidth="4"
              strokeDasharray="10,5"
              variants={lineVariants}
              className="drop-shadow-lg"
            />
            <defs>
              <linearGradient id="seriesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="25%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="75%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Experience Items */}
          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={exp.id}
                  className={`flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} relative z-10`}
                  variants={seriesItemVariants}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <motion.div
                      className={`glass-card p-6 bg-gradient-to-br ${exp.gradient} border-2 border-transparent hover:border-white/20 transition-all duration-500 relative overflow-hidden group`}
                      whileHover={{ y: -10, rotateY: isEven ? 5 : -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Floating Particles */}
                      <FloatingParticle delay={index * 0.5} />
                      <FloatingParticle delay={index * 0.5 + 1} />

                      {/* Background Glow */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />

                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className={`bg-gradient-to-r ${exp.color} p-3 rounded-xl shadow-lg`}
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Icon className="w-6 h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                              <p className="text-lg font-semibold text-secondary">{exp.company}</p>
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground mb-2">{exp.period}</div>
                            <span className={`px-3 py-1 rounded-full text-xs ${
                              exp.status === 'Current' 
                                ? 'bg-green-500/20 text-green-400 animate-pulse' 
                                : 'bg-blue-500/20 text-blue-400'
                            }`}>
                              {exp.status}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{exp.type}</span>
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4">{exp.description}</p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 flex items-center space-x-2">
                            <Code className="w-4 h-4 text-primary" />
                            <span>Tech Stack</span>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <motion.span
                                key={tech}
                                className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: techIndex * 0.1 }}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Key Achievement */}
                        <div className="bg-accent/10 border border-accent/20 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="w-4 h-4 text-accent" />
                            <span className="font-medium text-accent">Top Achievement</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{exp.achievements[0]}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Timeline Node */}
                  <div className="hidden md:flex w-2/12 justify-center items-center">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <PulsingOrb color={exp.color} size="w-16 h-16" />
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      
                      {/* Year Badge */}
                      <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <span className="text-xs font-bold text-white">{exp.year}</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Stats Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pl-12' : 'md:pr-12'} mt-6 md:mt-0`}>
                    <motion.div
                      className="glass-card p-4 bg-gradient-to-br from-white/5 to-white/10"
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <h4 className="font-semibold mb-3 flex items-center space-x-2">
                        <Award className="w-4 h-4 text-accent" />
                        <span>Key Achievements</span>
                      </h4>
                      <div className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start space-x-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Rocket className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                            <span className="text-xs text-muted-foreground">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.section
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass-card p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 relative overflow-hidden"
            whileHover={{ scale: 1.02, y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <TrendingUp className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">The Series Continues...</h2>
                <ArrowRight className="w-8 h-8 text-accent animate-pulse" />
              </motion.div>
              
              <p className="text-muted-foreground mb-8 max-w-4xl mx-auto text-lg">
                This journey is far from over. Each chapter brings new challenges, innovations, and opportunities to make an impact. 
                The next episodes promise even greater adventures in the world of technology and beyond.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  { icon: Brain, text: "AI Research & Innovation", color: "from-primary to-blue-600" },
                  { icon: Code, text: "Full Stack Mastery", color: "from-secondary to-purple-600" },
                  { icon: Users, text: "Community Leadership", color: "from-accent to-orange-600" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`px-6 py-3 bg-gradient-to-r ${item.color}/20 rounded-full flex items-center space-x-3 border border-white/10`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default ExperiencePage; 