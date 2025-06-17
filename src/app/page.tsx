'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Code, Brain, Zap, Star, ChevronRight, Database, Globe, Cpu, BarChart3, FileCode, Users, Award, Zap as Lightning, Sword, Shield, Target, Crosshair, Rocket, Flame } from 'lucide-react';
import ParticleField from '@/components/ParticleField';
import TypewriterEffect from '@/components/TypewriterEffect';
import NeuralNetworkBackground from '@/components/NeuralNetworkBackground';

const HomePage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });

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
    
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 20,
          y: (e.clientY - rect.top - rect.height / 2) / 20,
        });
      }
    };

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', handleResize);
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

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <NeuralNetworkBackground />
      <ParticleField />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ x: mouseX, y: mouseY }}
      >
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary/40 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-accent/20 rounded-full animate-bounce" />
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-secondary/30 rounded-full animate-pulse" />
      </motion.div>

      <motion.section 
        ref={heroRef} 
        className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-24"
        style={{ y, opacity, scale }}
      >
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Revolutionary Hero Design */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="relative">
              {/* Glowing Orb Background */}
              <motion.div
                className="absolute inset-0 -top-20 -bottom-20 flex items-center justify-center"
                animate={{
                  scale: [0.8, 1.1, 0.8],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-72 h-72 rounded-full bg-gradient-to-r from-primary/15 via-secondary/20 to-accent/15 blur-3xl" />
              </motion.div>

              {/* Central Avatar with Holographic Effect */}
              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  className="relative mb-8"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15,
                    delay: 0.2
                  }}
                >
                  {/* Outer Holographic Ring */}
                  <motion.div
                    className="absolute -inset-8"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full rounded-full border-2 border-dashed border-gradient-to-r from-primary via-secondary to-accent opacity-60" />
                  </motion.div>

                  {/* Middle Energy Ring */}
                  <motion.div
                    className="absolute -inset-4"
                    animate={{
                      rotate: [360, 0],
                      scale: [0.95, 1.1, 0.95]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="w-full h-full rounded-full border border-primary/40 border-dotted" />
                  </motion.div>

                  {/* Avatar Container */}
                  <motion.div
                    className="relative w-32 h-32"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {/* Glowing Base */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-secondary/40 to-accent/30 blur-sm" />
                    
                    {/* Main Avatar */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl border border-primary/30 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="text-5xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        PV
                      </motion.div>
                      
                      {/* Inner Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"
                        animate={{
                          opacity: [0.5, 0.8, 0.5],
                          scale: [1, 1.02, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>

                    {/* Floating Tech Orbs */}
                    {[
                      { Icon: Brain, position: "-top-4 -right-4", color: "primary", delay: 0 },
                      { Icon: Code, position: "-bottom-3 -left-6", color: "secondary", delay: 1 },
                      { Icon: Database, position: "-top-6 -left-3", color: "accent", delay: 2 },
                      { Icon: Zap, position: "-bottom-4 -right-3", color: "primary", delay: 0.5 }
                    ].map((orb, index) => (
                      <motion.div
                        key={index}
                        className={`absolute ${orb.position} w-10 h-10`}
                        animate={{
                          y: [-10, 10, -10],
                          rotate: [0, 180, 360],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{
                          duration: 4 + index,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: orb.delay
                        }}
                      >
                        <div className={`w-full h-full rounded-full bg-${orb.color}/20 backdrop-blur-sm border border-${orb.color}/40 flex items-center justify-center`}>
                          <orb.Icon className={`w-5 h-5 text-${orb.color}`} />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* Status Indicator */}
                <motion.div
                  className="flex items-center space-x-3 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.div
                    className="w-3 h-3 rounded-full bg-green-400"
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
                  <span className="text-green-400 font-medium">Available for Collaboration</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Epic Name Reveal */}
          <motion.div variants={itemVariants} className="relative mb-12">
            <div className="relative">
              {/* Background Text Glow */}
              <motion.div
                className="absolute inset-0 text-4xl md:text-6xl font-bold text-primary/10 blur-sm"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Prithviraj Verma
              </motion.div>

              {/* Main Name */}
              <motion.h1
                className="relative text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  opacity: { duration: 1, delay: 0.5 },
                  y: { duration: 1, delay: 0.5 },
                  backgroundPosition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                style={{
                  backgroundSize: "400% 400%"
                }}
              >
                Prithviraj Verma
              </motion.h1>

              {/* Floating Sparkles */}
              {[
                { x: "10%", y: "20%", delay: 0, Icon: Sparkles, size: "w-4 h-4" },
                { x: "85%", y: "30%", delay: 1, Icon: Star, size: "w-3 h-3" },
                { x: "15%", y: "80%", delay: 2, Icon: Sparkles, size: "w-5 h-5" },
                { x: "90%", y: "70%", delay: 0.5, Icon: Star, size: "w-4 h-4" },
                { x: "50%", y: "10%", delay: 1.5, Icon: Sparkles, size: "w-3 h-3" }
              ].map((sparkle, index) => (
                <motion.div
                  key={index}
                  className="absolute pointer-events-none"
                  style={{ left: sparkle.x, top: sparkle.y }}
                  animate={{
                    scale: [0, 1.5, 0],
                    rotate: [0, 360, 720],
                    opacity: [0, 1, 0],
                    y: [-20, 0, -20]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: sparkle.delay
                  }}
                >
                  <sparkle.Icon className={`${sparkle.size} text-accent/60`} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Typewriter with Glowing Effects */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-xl rounded-2xl"
                animate={{
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 p-6">
                <TypewriterEffect
                  text="Full Stack & AI/ML Developer | Building the Future with Code & Intelligence"
                  className="text-lg md:text-xl font-light text-muted-foreground text-center"
                />
                
                {/* Animated Decorations */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{
                    rotate: [0, 360],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Zap className="w-8 h-8 text-accent" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{
                    rotate: [360, 0],
                    scale: [0.6, 1.4, 0.6]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Brain className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Epic Description with Stats */}
          <motion.div
            variants={itemVariants}
            className="mb-16 max-w-4xl mx-auto"
          >
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.span
                className="inline-block text-primary font-semibold"
                whileHover={{ scale: 1.05, color: "#60A5FA" }}
                transition={{ duration: 0.2 }}
              >
                Full Stack & AI/ML Intern
              </motion.span>{" "}
              at{" "}
              <motion.span
                className="inline-block text-secondary font-semibold"
                whileHover={{ scale: 1.05, color: "#34D399" }}
                transition={{ duration: 0.2 }}
              >
                Garnet AI
              </motion.span>{" "}
              |{" "}
              <motion.span
                className="inline-block text-accent font-semibold"
                whileHover={{ scale: 1.05, color: "#F59E0B" }}
                transition={{ duration: 0.2 }}
              >
                Ex-Research Intern @ IIT Delhi
              </motion.span>
            </motion.p>

            {/* Achievement Stats */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              {[
                { value: "100%", label: "Model Accuracy", icon: Target, color: "text-green-400" },
                { value: "15+", label: "AI/ML Projects", icon: Brain, color: "text-blue-400" },
                { value: "2K+", label: "GitHub Commits", icon: Code, color: "text-purple-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ 
                      duration: 10 + index * 2, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="mb-4"
                  >
                    <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                  </motion.div>
                  <motion.div 
                    className={`text-3xl font-bold ${stat.color} mb-2`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.8 + index * 0.2, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              Currently pioneering{" "}
              <motion.span
                className="inline-block text-primary font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Network Attack Detection
              </motion.span>{" "}
              with 100% F1-Score and{" "}
              <motion.span
                className="inline-block text-secondary font-semibold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Emotion Recognition
              </motion.span>{" "}
              using cutting-edge physiological signal analysis.
            </motion.p>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { href: "https://github.com/PR-ODINSON", icon: Github, color: "hover:text-primary" },
              { href: "https://www.linkedin.com/in/prithviraj-verma-b58707289", icon: Linkedin, color: "hover:text-blue-500" },
              { href: "mailto:i.prv.2509@gmail.com", icon: Mail, color: "hover:text-accent" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-6 transition-all duration-300 group relative overflow-hidden ${social.color}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <social.icon className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" />
              </motion.a>
            ))}
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-16"
          >
            <Link href="/projects">
              <motion.button
                className="group relative px-10 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 text-white rounded-xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
            
            <Link href="/experience">
              <motion.button
                className="group relative px-10 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
                <span className="relative z-10">Experience</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center space-y-2"
            >
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <motion.div
                className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
                whileHover={{ scale: 1.1 }}
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

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-4"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.p 
              className="text-muted-foreground font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Discover My Journey
            </motion.p>
            
            <motion.div
              className="relative"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="w-8 h-12 border-2 border-primary/60 rounded-full flex justify-center">
                <motion.div
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Tech Arsenal Section */}
      <section className="relative z-10 py-32 px-4 overflow-hidden">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-20"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              Tech Arsenal
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Cutting-edge technologies powering innovative solutions
            </motion.p>
          </motion.div>

          {/* Animated Tech Categories */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
                             {
                 category: "Machine Learning",
                 icon: Brain,
                 skills: ['Random Forest', 'scikit-learn', 'pandas', 'NumPy'],
                 color: "from-purple-500 to-pink-500"
               },
               {
                 category: "Data Science",
                 icon: Code,
                 skills: ['Python', 'Data Analysis', 'Feature Engineering', 'Model Evaluation'],
                 color: "from-blue-500 to-cyan-500"
               },
               {
                 category: "Development",
                 icon: Sparkles,
                 skills: ['Full Stack', 'GitHub', 'Technical Writing', 'Mentoring'],
                 color: "from-green-500 to-blue-500"
               }
            ].map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  className={`glass-card p-8 h-full bg-black/70 border-2 border-white/20 group-hover:border-white/40 transition-all duration-500`}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)"
                  }}
                >
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </motion.div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: skillIndex * 0.3
                          }}
                        />
                        <span className="text-sm font-medium text-muted-foreground group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating Tech Icons */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full opacity-30"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: categoryIndex * 0.5
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

                    {/* Interactive Double-Sided Tech Cards */}
          <motion.div
            className="relative mb-16"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.h3
              className="text-2xl font-bold text-center mb-10 text-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Interactive Tech Cards
            </motion.h3>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              viewport={{ once: true }}
            >
              {[
                { name: 'Python', icon: FileCode, description: 'Primary programming language for ML & Data Science', color: 'from-yellow-400 to-yellow-600' },
                { name: 'Machine Learning', icon: Brain, description: 'Random Forest, Classification, Model Training', color: 'from-purple-400 to-purple-600' },
                { name: 'Data Science', icon: BarChart3, description: 'Data Analysis, Visualization, Statistical Modeling', color: 'from-blue-400 to-blue-600' },
                { name: 'GitHub', icon: Github, description: 'Version Control, Open Source Contributions', color: 'from-gray-400 to-gray-600' },
                { name: 'Cybersecurity', icon: Zap, description: 'Network Security, Attack Detection Systems', color: 'from-red-400 to-red-600' },
                { name: 'Full Stack', icon: Globe, description: 'End-to-end web development and deployment', color: 'from-green-400 to-green-600' },
                { name: 'scikit-learn', icon: Cpu, description: 'Machine Learning library for Python', color: 'from-orange-400 to-orange-600' },
                { name: 'pandas', icon: Database, description: 'Data manipulation and analysis tool', color: 'from-teal-400 to-teal-600' },
                { name: 'Mentoring', icon: Users, description: 'AI/ML Mentor at Unstop, Community Building', color: 'from-pink-400 to-pink-600' },
                { name: 'Medium', icon: FileCode, description: 'Technical writing and knowledge sharing', color: 'from-indigo-400 to-indigo-600' },
                { name: 'JavaScript', icon: Lightning, description: 'Frontend development and interactive UIs', color: 'from-yellow-300 to-yellow-500' },
                { name: 'Research', icon: Award, description: 'Ex-Research Intern at IIT Delhi', color: 'from-emerald-400 to-emerald-600' }
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={{
                    hidden: { opacity: 0, rotateY: -90 },
                    visible: { opacity: 1, rotateY: 0 }
                  }}
                  className="relative group perspective-1000"
                  style={{ perspective: '1000px' }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className="relative w-full h-32 preserve-3d cursor-pointer"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front of Card */}
                    <motion.div
                      className={`absolute inset-0 w-full h-full rounded-xl bg-gradient-to-br ${tech.color} p-4 flex flex-col items-center justify-center backface-hidden border border-white/20 shadow-lg`}
                      style={{ backfaceVisibility: 'hidden' }}
                      animate={{
                        boxShadow: [
                          "0 4px 20px rgba(59, 130, 246, 0.3)",
                          "0 8px 30px rgba(147, 51, 234, 0.4)",
                          "0 4px 20px rgba(59, 130, 246, 0.3)"
                        ]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                      >
                        <tech.icon className="w-8 h-8 text-white mb-2" />
                      </motion.div>
                      <span className="text-white font-semibold text-sm text-center">
                        {tech.name}
                      </span>
                      
                      {/* Floating particles */}
                      <motion.div
                        className="absolute top-2 right-2 w-2 h-2 bg-white/50 rounded-full"
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.1
                        }}
                      />
                      <motion.div
                        className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-white/40 rounded-full"
                        animate={{
                          y: [0, -8, 0],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.15
                        }}
                      />
                    </motion.div>

                    {/* Back of Card */}
                    <motion.div
                      className="absolute inset-0 w-full h-full rounded-xl bg-black/90 p-4 flex flex-col items-center justify-center backface-hidden border border-white/30"
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <h4 className="text-white font-bold text-sm mb-2">{tech.name}</h4>
                        <p className="text-gray-300 text-xs leading-tight">
                          {tech.description}
                        </p>
                        
                        {/* Progress bar */}
                        <motion.div
                          className="w-full bg-white/20 rounded-full h-1.5 mt-3"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          <motion.div
                            className={`h-1.5 rounded-full bg-gradient-to-r ${tech.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.random() * 30 + 70}%` }}
                            transition={{ duration: 1, delay: 0.7 }}
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10`}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Flying Icons Across Screen */}
            {[
              { Icon: Sword, delay: 0, duration: 8, color: 'text-primary/40', rotation: 45 },
              { Icon: Shield, delay: 2, duration: 10, color: 'text-secondary/30', rotation: -30 },
              { Icon: Target, delay: 4, duration: 7, color: 'text-accent/35', rotation: 0 },
              { Icon: Crosshair, delay: 1, duration: 9, color: 'text-purple-400/25', rotation: 90 },
              { Icon: Rocket, delay: 3, duration: 6, color: 'text-blue-400/30', rotation: -45 },
              { Icon: Flame, delay: 5, duration: 11, color: 'text-red-400/20', rotation: 15 },
              { Icon: Lightning, delay: 6, duration: 8, color: 'text-yellow-400/25', rotation: -60 },
              { Icon: Zap, delay: 7, duration: 9, color: 'text-green-400/30', rotation: 30 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`absolute ${item.color} pointer-events-none z-0`}
                initial={{ 
                  x: -100, 
                  y: Math.random() * windowSize.height,
                  rotate: item.rotation,
                  scale: 0.5,
                  opacity: 0
                }}
                animate={{
                  x: windowSize.width + 100,
                  y: [
                    Math.random() * windowSize.height,
                    Math.random() * windowSize.height,
                    Math.random() * windowSize.height
                  ],
                  rotate: [item.rotation, item.rotation + 360, item.rotation + 720],
                  scale: [0.5, 1.2, 0.8, 1.5, 0.5],
                  opacity: [0, 0.6, 0.8, 0.4, 0]
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "linear"
                }}
              >
                <item.Icon className="w-8 h-8 md:w-12 md:h-12" />
              </motion.div>
            ))}

            {/* Diagonal Flying Icons */}
            {[
              { Icon: Code, delay: 0.5, duration: 12, color: 'text-cyan-400/20', path: 'diagonal-up' },
              { Icon: Brain, delay: 2.5, duration: 10, color: 'text-purple-500/25', path: 'diagonal-down' },
              { Icon: Database, delay: 4.5, duration: 14, color: 'text-green-500/20', path: 'diagonal-up' },
              { Icon: Globe, delay: 6.5, duration: 11, color: 'text-blue-500/25', path: 'diagonal-down' }
            ].map((item, index) => (
              <motion.div
                key={`diagonal-${index}`}
                className={`absolute ${item.color} pointer-events-none z-0`}
                initial={
                  item.path === 'diagonal-up' 
                    ? { x: -100, y: windowSize.height + 100, rotate: -45, scale: 0.3, opacity: 0 }
                    : { x: windowSize.width + 100, y: -100, rotate: 45, scale: 0.3, opacity: 0 }
                }
                animate={
                  item.path === 'diagonal-up'
                    ? {
                        x: windowSize.width + 100,
                        y: -100,
                        rotate: [-45, 315, 675],
                        scale: [0.3, 1, 0.6, 1.2, 0.3],
                        opacity: [0, 0.5, 0.7, 0.3, 0]
                      }
                    : {
                        x: -100,
                        y: windowSize.height + 100,
                        rotate: [45, 405, 765],
                        scale: [0.3, 1, 0.6, 1.2, 0.3],
                        opacity: [0, 0.5, 0.7, 0.3, 0]
                      }
                }
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.Icon className="w-6 h-6 md:w-10 md:h-10" />
              </motion.div>
            ))}

            {/* Vertical Flying Icons */}
            {[
              { Icon: Star, delay: 1, duration: 9, color: 'text-yellow-300/30', direction: 'up' },
              { Icon: Sparkles, delay: 3, duration: 7, color: 'text-pink-400/25', direction: 'down' },
              { Icon: Award, delay: 5, duration: 10, color: 'text-orange-400/20', direction: 'up' }
            ].map((item, index) => (
              <motion.div
                key={`vertical-${index}`}
                className={`absolute ${item.color} pointer-events-none z-0`}
                style={{
                  left: `${20 + (index * 30)}%`
                }}
                initial={
                  item.direction === 'up'
                    ? { y: windowSize.height + 100, rotate: 0, scale: 0.4, opacity: 0 }
                    : { y: -100, rotate: 180, scale: 0.4, opacity: 0 }
                }
                animate={
                  item.direction === 'up'
                    ? {
                        y: -100,
                        rotate: [0, 180, 360],
                        scale: [0.4, 1.1, 0.7, 1.3, 0.4],
                        opacity: [0, 0.6, 0.8, 0.4, 0],
                        x: [0, 50, -30, 20, 0]
                      }
                    : {
                        y: windowSize.height + 100,
                        rotate: [180, 360, 540],
                        scale: [0.4, 1.1, 0.7, 1.3, 0.4],
                        opacity: [0, 0.6, 0.8, 0.4, 0],
                        x: [0, -50, 30, -20, 0]
                      }
                }
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.Icon className="w-7 h-7 md:w-11 md:h-11" />
              </motion.div>
            ))}

            {/* Curved Path Icons */}
            {[
              { Icon: Cpu, delay: 2, duration: 15, color: 'text-indigo-400/25' },
              { Icon: Users, delay: 4, duration: 13, color: 'text-teal-400/20' }
            ].map((item, index) => (
              <motion.div
                key={`curved-${index}`}
                className={`absolute ${item.color} pointer-events-none z-0`}
                animate={{
                  x: [
                    -100,
                    windowSize.width * 0.2,
                    windowSize.width * 0.8,
                    windowSize.width + 100
                  ],
                  y: [
                    windowSize.height * 0.8,
                    windowSize.height * 0.2,
                    windowSize.height * 0.6,
                    windowSize.height * 0.1
                  ],
                  rotate: [0, 90, 180, 270, 360],
                  scale: [0.3, 0.8, 1.2, 0.9, 0.3],
                  opacity: [0, 0.4, 0.7, 0.5, 0]
                }}
                transition={{
                  duration: item.duration,
                  repeat: Infinity,
                  delay: item.delay,
                  ease: "easeInOut"
                }}
              >
                <item.Icon className="w-8 h-8 md:w-12 md:h-12" />
              </motion.div>
            ))}

            {/* Instructions */}
            <motion.div
              className="text-center mt-12"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.p
                className="text-gray-400 text-sm mb-2"
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                ✨ Hover over the cards to see them flip and reveal details ✨
              </motion.p>
              <motion.p
                className="text-xs text-gray-500"
                animate={{
                  y: [0, -2, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Double-sided tech mastery cards with interactive animations
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div
            className="text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Link href="/experience">
              <motion.button
                className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: -45 }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Explore Full Experience
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Background Decorations */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>

      {/* Enhanced Current Focus Section */}
      <section className="relative z-10 py-32 px-4 bg-gradient-to-b from-background/50 to-background overflow-hidden">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-20"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Current Research Focus
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Pushing the boundaries of AI and human-computer interaction
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
                         {[
               {
                 title: "Network Attack Detection",
                 subtitle: "Machine Learning for Cybersecurity",
                 icon: Brain,
                 description: "Developed a robust Random Forest Classifier achieving an exceptional F1 score of 1.0 for detecting network attacks using comprehensive traffic statistics and feature engineering.",
                 color: "from-purple-500 to-pink-500",
                 highlights: ["Random Forest Classifier", "Data Preprocessing", "Feature Engineering"]
               },
               {
                 title: "AI/ML Mentorship",
                 subtitle: "Unstop & Community Building",
                 icon: Sparkles,
                 description: "Mentoring aspiring AI/ML engineers at Unstop, sharing knowledge through Medium blogs, and building the next generation of data scientists and machine learning practitioners.",
                 color: "from-blue-500 to-cyan-500",
                 highlights: ["Technical Mentorship", "Content Creation", "Community Engagement"]
               }
             ].map((focus, index) => (
              <motion.div
                key={focus.title}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <motion.div
                  className={`glass-card p-8 h-full bg-black/80 border-2 border-white/20 group-hover:border-white/40 transition-all duration-500 relative overflow-hidden`}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -10,
                    boxShadow: "0 30px 60px rgba(59, 130, 246, 0.2)"
                  }}
                >
                  {/* Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-5"
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: "20px 20px"
                    }}
                  />

                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${focus.color} bg-opacity-20 backdrop-blur-sm`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <focus.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{focus.title}</h3>
                      <p className="text-sm text-primary opacity-80">{focus.subtitle}</p>
                    </div>
                  </motion.div>

                  <motion.p
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {focus.description}
                  </motion.p>

                  <div className="space-y-3">
                    {focus.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={highlight}
                        className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.3) + (hIndex * 0.1) }}
                        whileHover={{ x: 5 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: hIndex * 0.4
                          }}
                        />
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Corner Decoration */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20"
                    animate={{
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Collaboration CTA */}
          <motion.div
            className="text-center mt-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Interested in collaboration? Let's build the future together.
            </motion.p>
            
            <Link href="/contact">
              <motion.button
                className="group relative px-10 py-4 text-lg font-semibold border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ scale: 0, rotate: 45 }}
                  whileHover={{ scale: 1.5, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  Start Collaboration
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-8 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-lg"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-8 w-24 h-24 bg-gradient-to-bl from-accent/10 to-primary/10 rounded-full blur-lg"
          animate={{
            y: [0, 20, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.8, 0.3, 0.8]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </section>
    </div>
  );
};

export default HomePage; 