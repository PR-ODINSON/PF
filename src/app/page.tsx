'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Brain, Zap, 
  Star, ChevronRight, Database, Globe, Cpu, BarChart3, FileCode, 
  Users, Award, Rocket, Target, Download, ExternalLink, Play,
  CheckCircle, TrendingUp, Lightbulb, Shield
} from 'lucide-react';
import ParticleField from '@/components/ParticleField';
import TypewriterEffect from '@/components/TypewriterEffect';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

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
    };
  }, []);

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
    { name: 'React/Next.js', icon: Code, level: 95, color: 'from-blue-500 to-cyan-500' },
    { name: 'AI/ML', icon: Brain, level: 90, color: 'from-purple-500 to-pink-500' },
    { name: 'Python', icon: FileCode, level: 92, color: 'from-green-500 to-emerald-500' },
    { name: 'Cloud/DevOps', icon: Globe, level: 85, color: 'from-orange-500 to-red-500' },
    { name: 'Databases', icon: Database, level: 88, color: 'from-indigo-500 to-purple-500' },
    { name: 'Analytics', icon: BarChart3, level: 87, color: 'from-cyan-500 to-blue-500' },
  ];

  const achievements = [
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: Code, label: 'Projects Built', value: '50+' },
    { icon: Users, label: 'Clients Served', value: '25+' },
    { icon: Star, label: 'Years Experience', value: '3+' },
  ];

  const featuredProjects = [
    {
      title: 'Neural Interface Laboratory',
      description: 'Advanced emotion recognition AI with real-time analysis',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'React'],
      link: '/projects',
      status: 'Live',
      impact: '95% accuracy'
    },
    {
      title: 'Seismic Prediction Reactor',
      description: 'ML-powered earthquake prediction system',
      tech: ['Python', 'Scikit-learn', 'FastAPI', 'Docker'],
      link: '/projects',
      status: 'Research',
      impact: '87% precision'
    },
    {
      title: 'Cybersecurity Fortress',
      description: 'Network security monitoring with AI threat detection',
      tech: ['Python', 'TensorFlow', 'MongoDB', 'Next.js'],
      link: '/projects',
      status: 'Production',
      impact: '99.8% uptime'
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <NeuralNetworkBackground />
      <ParticleField />
      
      {/* Enhanced Hero Section */}
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
          {/* Hero Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Available for New Opportunities</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-balance mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Prithviraj</span>
            </h1>
            <div className="text-2xl md:text-3xl text-foreground-secondary font-medium mb-4">
              <TypewriterEffect 
                texts={[
                  "Full Stack Developer",
                  "AI/ML Engineer", 
                  "Problem Solver",
                  "Innovation Driver"
                ]}
                speed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </div>
          </motion.div>

          {/* Hero Description */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto text-balance leading-relaxed">
              I craft intelligent solutions that bridge the gap between cutting-edge AI technology 
              and real-world applications. From emotion recognition systems to predictive analytics, 
              I turn complex problems into elegant, scalable solutions.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/projects">
                <motion.div
                  className="btn btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket size={20} />
                  Explore My Work
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              
              <Link href="/contact">
                <motion.div
                  className="btn btn-outline group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Let's Connect
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>

              <a href="/Prithviraj_CV.pdf" target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="btn btn-ghost group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.div>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center justify-center space-x-6">
              <motion.a
                href="https://github.com/PR-ODINSON"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-foreground-secondary group-hover:text-primary transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/in/prithviraj-verma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="text-foreground-secondary group-hover:text-primary transition-colors" />
              </motion.a>
              
              <motion.a
                href="mailto:prithviraj@example.com"
                className="p-3 rounded-full glass hover:bg-primary/10 transition-colors group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="text-foreground-secondary group-hover:text-primary transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 text-muted-foreground"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="section-padding bg-background-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Expertise</span>
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
                  whileHover={{ y: -5 }}
                  className="card group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto mb-8">
              Showcasing innovative solutions that make a real-world impact
            </p>
            <Link href="/projects">
              <motion.div
                className="btn btn-outline group inline-flex"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target size={20} />
                View All Projects
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    project.status === 'Research' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                  }`}>
                    {project.status}
                  </div>
                  <div className="text-sm font-medium text-primary">{project.impact}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link href={project.link}>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-background-secondary/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Achievements</span>
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
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-foreground-muted font-medium">
                    {achievement.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card glass-strong"
          >
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Something <span className="gradient-text">Amazing</span>?
              </h2>
              <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                Let's collaborate on your next project. Whether it's AI/ML solutions, 
                full-stack development, or innovative problem-solving, I'm here to help.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <motion.div
                  className="btn btn-primary group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Rocket size={20} />
                  Start a Project
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </Link>
              
              <Link href="/experience">
                <motion.div
                  className="btn btn-outline group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users size={20} />
                  View Experience
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 