'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Brain, Zap, 
  Star, ChevronRight, Database, Globe, Cpu, BarChart3, FileCode, 
  Users, Award, Rocket, Target, Download, ExternalLink, Play,
  CheckCircle, TrendingUp, Lightbulb, Shield, Eye, Heart, 
  Coffee, MapPin, Calendar, Trophy, Briefcase
} from 'lucide-react';
import ParticleField from '@/components/ParticleField';
import TypewriterEffect from '@/components/TypewriterEffect';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const springConfig = { stiffness: 300, damping: 30, restDelta: 0.001 };
  const mouseX = useSpring(mousePosition.x, springConfig);
  const mouseY = useSpring(mousePosition.y, springConfig);

  useEffect(() => {
    setIsLoaded(true);
    
    // Update time every minute for dynamic greeting
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      clearInterval(timer);
    };
  }, []);

  // Dynamic greeting based on time
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const skills = [
    { name: 'Python', icon: FileCode, level: 95, color: 'from-yellow-500 to-yellow-600', experience: '3+ years' },
    { name: 'AI/ML', icon: Brain, level: 92, color: 'from-purple-500 to-pink-500', experience: '2+ years' },
    { name: 'React/Next.js', icon: Code, level: 90, color: 'from-blue-500 to-cyan-500', experience: '2+ years' },
    { name: 'TensorFlow', icon: Cpu, level: 88, color: 'from-orange-500 to-red-500', experience: '2+ years' },
    { name: 'Cloud/DevOps', icon: Globe, level: 85, color: 'from-green-500 to-emerald-500', experience: '1+ years' },
    { name: 'Data Science', icon: BarChart3, level: 87, color: 'from-indigo-500 to-purple-500', experience: '2+ years' },
  ];

  const achievements = [
    { icon: Trophy, label: 'Awards Won', value: '15+', description: 'Hackathons & Competitions' },
    { icon: Code, label: 'Projects Built', value: '50+', description: 'AI/ML & Web Projects' },
    { icon: Users, label: 'People Mentored', value: '100+', description: 'Through Unstop & Community' },
    { icon: Star, label: 'GitHub Stars', value: '200+', description: 'Across Repositories' },
  ];

  const featuredProjects = [
    {
      title: 'Neural Interface Laboratory',
      description: 'Advanced emotion recognition AI with real-time physiological signal analysis',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'React'],
      link: '/projects',
      github: 'https://github.com/PR-ODINSON',
      demo: 'https://demo.com',
      status: 'Live',
      impact: '95% accuracy',
      category: 'AI/ML'
    },
    {
      title: 'Seismic Prediction Reactor',
      description: 'ML-powered earthquake prediction system with 87% precision rate',
      tech: ['Python', 'Scikit-learn', 'FastAPI', 'Docker'],
      link: '/projects',
      github: 'https://github.com/PR-ODINSON',
      demo: 'https://demo.com',
      status: 'Research',
      impact: '87% precision',
      category: 'Research'
    },
    {
      title: 'Cybersecurity Fortress',
      description: 'Network security monitoring with AI threat detection and real-time alerts',
      tech: ['Python', 'TensorFlow', 'MongoDB', 'Next.js'],
      link: '/projects',
      github: 'https://github.com/PR-ODINSON',
      demo: 'https://demo.com',
      status: 'Production',
      impact: '99.8% uptime',
      category: 'Security'
    }
  ];

  const techStack = [
    { name: 'Python', icon: '🐍', category: 'Language' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI/ML' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Git', icon: '📝', category: 'Tools' },
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <NeuralNetworkBackground />
      <ParticleField />
      
      {/* Floating Mouse-Following Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-5"
        style={{ x: mouseX, y: mouseY }}
      >
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-accent/20 rounded-full animate-bounce" />
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-secondary/30 rounded-full animate-pulse" />
      </motion.div>
      
      {/* Revolutionary Hero Section */}
      <motion.section 
        id="home"
        ref={heroRef} 
        className="relative z-10 min-h-screen flex items-center justify-center section-padding"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Dynamic Greeting & Status */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">Available for Opportunities</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-full bg-muted/50 backdrop-blur-sm">
                <MapPin size={14} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Ahmedabad, India</span>
              </div>
            </div>
            
            <motion.div
              className="text-lg text-muted-foreground mb-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {getGreeting()}!
            </motion.div>
          </motion.div>

          {/* Animated Avatar/Profile */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.div
              className="relative w-32 h-32 mx-auto mb-6"
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
            >
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Avatar Container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20 backdrop-blur-sm border-2 border-primary/30 flex items-center justify-center overflow-hidden">
                <motion.div
                  className="text-4xl font-bold gradient-text"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  PV
                </motion.div>
                
                {/* Floating Tech Icons */}
                {['🧠', '⚛️', '🐍', '☁️'].map((emoji, index) => (
                  <motion.div
                    key={index}
                    className="absolute text-lg"
                    style={{
                      top: `${20 + index * 15}%`,
                      left: `${10 + index * 20}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 180, 360],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3 + index,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {emoji}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="text-foreground">I Engineer </span>
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Intelligent
              </motion.span>
              <span className="text-foreground"> Systems</span>
            </motion.h1>
            
            <div className="text-2xl md:text-4xl text-foreground-secondary font-medium mb-6">
              <TypewriterEffect 
                texts={[
                  "AI/ML Engineer & Researcher",
                  "From Research to Production",
                  "Solving Complex Problems with Code"
                ]}
                speed={80}
                deleteSpeed={40}
                delaySpeed={3000}
              />
            </div>
          </motion.div>

          {/* Concise Description */}
          <motion.div variants={itemVariants} className="mb-10">
            <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto text-balance leading-relaxed font-medium">
              <motion.span
                className="inline-block text-primary"
                whileHover={{ scale: 1.05 }}
              >
                Transforming breakthrough research into production-ready AI solutions.
              </motion.span>
              <br />
              <span className="text-foreground-secondary">
                Ready to push the boundaries of what's possible?
              </span>
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-12">
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
                  <Eye size={20} />
                  <span className="relative z-10">View Projects</span>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              
              <a href="/Prithviraj_CV.pdf" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="btn btn-outline group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  <span>Download Resume</span>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </a>

              <Link href="/contact">
                <motion.div
                  className="btn btn-ghost group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={20} className="group-hover:text-red-500 transition-colors" />
                  <span>Let's Collaborate</span>
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats Counter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "50K+", label: "Code Lines", icon: Code },
                { value: "15+", label: "Awards", icon: Trophy },
                { value: "100+", label: "Mentored", icon: Users },
                { value: "95%", label: "Accuracy", icon: Target }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary/10 rounded-full mb-2 group-hover:bg-gradient-primary/20 transition-colors">
                    <stat.icon size={20} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links with Personality */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center justify-center space-x-6">
              {[
                { href: "https://github.com/PR-ODINSON", icon: Github, label: "GitHub", color: "hover:text-gray-600" },
                { href: "https://linkedin.com/in/prithviraj-verma", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
                { href: "mailto:i.prv.2509@gmail.com", icon: Mail, label: "Email", color: "hover:text-green-600" }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full glass transition-all duration-300 group ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} className="text-foreground-secondary group-hover:text-current transition-colors" />
                </motion.a>
              ))}
            </div>
            <motion.p
              className="text-sm text-muted-foreground mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ☕ Always up for a coffee chat about AI, tech, or the future!
            </motion.p>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 text-muted-foreground cursor-pointer group"
              onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            >
              <span className="text-sm group-hover:text-primary transition-colors">Discover my journey</span>
              <motion.div
                className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center group-hover:border-primary/60 transition-colors"
              >
                <motion.div
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Tech Stack Carousel */}
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
              <span className="gradient-text">Tech Stack</span> ⚡
            </h2>
            <p className="text-muted-foreground">Technologies I love working with</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 flex items-center space-x-3 px-6 py-3 bg-card rounded-full border border-border"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <div>
                    <div className="font-medium">{tech.name}</div>
                    <div className="text-xs text-muted-foreground">{tech.category}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of sections remain the same but will be enhanced in next iteration */}
      {/* Enhanced Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills & Expertise</span> 🎯
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Mastering the technologies that power tomorrow's innovations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="card group relative overflow-hidden"
                >
                  {/* Skill Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <motion.div 
                      className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{skill.experience}</p>
                    </div>
                  </div>
                  
                  {/* Progress Ring */}
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-muted stroke-current"
                        strokeDasharray="100, 100"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="2"
                      />
                      <motion.path
                        className={`stroke-current`}
                        strokeDasharray={`${skill.level}, 100`}
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{
                          stroke: `url(#gradient-${index})`
                        }}
                        initial={{ strokeDasharray: "0, 100" }}
                        whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                        transition={{ duration: 1.5, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={skill.color.includes('yellow') ? '#EAB308' : 
                                                     skill.color.includes('purple') ? '#A855F7' :
                                                     skill.color.includes('blue') ? '#3B82F6' :
                                                     skill.color.includes('orange') ? '#F97316' :
                                                     skill.color.includes('green') ? '#22C55E' : '#6366F1'} />
                          <stop offset="100%" stopColor={skill.color.includes('yellow') ? '#CA8A04' : 
                                                       skill.color.includes('purple') ? '#EC4899' :
                                                       skill.color.includes('blue') ? '#06B6D4' :
                                                       skill.color.includes('orange') ? '#DC2626' :
                                                       skill.color.includes('green') ? '#059669' : '#8B5CF6'} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-primary">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg"
                    initial={false}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects with Cards */}
      <section id="featured-projects" className="section-padding bg-background-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span> 🚀
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
              Showcasing innovative solutions that make a real-world impact
            </p>
            
            {/* Project Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              {['All', 'AI/ML', 'Research', 'Security'].map((filter) => (
                <motion.button
                  key={filter}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="card group cursor-pointer relative overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-mesh rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="text-4xl">
                      {project.category === 'AI/ML' ? '🧠' : 
                       project.category === 'Research' ? '🔬' : '🛡️'}
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                      project.status === 'Research' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                      'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}>
                      {project.status}
                    </div>
                  </div>

                  {/* Impact Badge */}
                  <div className="absolute top-3 left-3">
                    <div className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/20">
                      {project.impact}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs font-medium hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <Link href={project.link}>
                    <motion.div
                      className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform"
                      whileHover={{ x: 4 }}
                    >
                      Learn More
                      <ChevronRight size={16} className="ml-1" />
                    </motion.div>
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-muted-foreground hover:text-foreground" />
                    </motion.a>
                    
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="text-muted-foreground hover:text-foreground" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg pointer-events-none"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/projects">
              <motion.div
                className="btn btn-outline group inline-flex"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target size={20} />
                View All Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Achievements with Timeline */}
      <section id="achievements" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Achievements</span> 🏆
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Numbers that reflect passion, dedication, and continuous growth
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={32} className="text-white" />
                  </motion.div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-primary mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    {achievement.value}
                  </motion.div>
                  <div className="text-sm text-foreground font-medium mb-1">
                    {achievement.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {achievement.description}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="cta" className="section-padding bg-background-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card glass-strong relative overflow-hidden"
          >
            {/* Background Animation */}
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
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  Ready to Build Something <span className="gradient-text">Amazing</span>? 🚀
                </motion.h2>
                <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                  Let's collaborate on your next project. Whether it's AI/ML solutions, 
                  full-stack development, or innovative problem-solving, I'm here to help turn your ideas into reality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
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
                    <Rocket size={20} />
                    <span className="relative z-10">Start a Project</span>
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </Link>
                
                <Link href="/experience">
                  <motion.div
                    className="btn btn-outline group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Briefcase size={20} />
                    <span>View Experience</span>
                  </motion.div>
                </Link>

                <a href="mailto:i.prv.2509@gmail.com">
                  <motion.div
                    className="btn btn-ghost group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Coffee size={20} />
                    <span>Coffee Chat</span>
                  </motion.div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 