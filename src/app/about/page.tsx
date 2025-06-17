'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  Brain, Code, Rocket, Heart, Coffee, MapPin, Calendar, 
  Star, Trophy, Target, Lightbulb, Users, BookOpen, 
  Zap, Shield, Globe, Database, Cpu, BarChart3,
  Quote, CheckCircle, ArrowRight, Download, Mail,
  Github, Linkedin, ExternalLink, Award, Briefcase
} from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const personalFacts = [
    { icon: Coffee, text: "Powered by coffee and curiosity", color: "text-amber-500" },
    { icon: Brain, text: "Always learning something new", color: "text-purple-500" },
    { icon: Code, text: "Code is my second language", color: "text-blue-500" },
    { icon: Globe, text: "Dream of building global solutions", color: "text-green-500" },
    { icon: Heart, text: "Passionate about making impact", color: "text-red-500" },
    { icon: Rocket, text: "Aim for the stars, land on Mars", color: "text-orange-500" }
  ];

  const skills = [
    { category: "AI/ML", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"], icon: Brain, color: "from-purple-500 to-pink-500" },
    { category: "Backend", items: ["Node.js", "FastAPI", "Django", "MongoDB", "PostgreSQL"], icon: Database, color: "from-blue-500 to-cyan-500" },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], icon: Code, color: "from-green-500 to-emerald-500" },
    { category: "DevOps", items: ["Docker", "AWS", "Git", "CI/CD", "Linux"], icon: Shield, color: "from-orange-500 to-red-500" }
  ];

  const journey = [
    {
      year: "2024",
      title: "AI Research & Development",
      description: "Leading innovative AI projects and mentoring aspiring developers",
      icon: Rocket,
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      year: "2023",
      title: "Full Stack Mastery",
      description: "Expanded expertise in modern web technologies and cloud platforms",
      icon: Code,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500"
    },
    {
      year: "2022",
      title: "Machine Learning Journey",
      description: "Dove deep into AI/ML, building emotion recognition systems",
      icon: Brain,
      color: "bg-gradient-to-r from-green-500 to-emerald-500"
    },
    {
      year: "2021",
      title: "Programming Foundation",
      description: "Started with Python and discovered the joy of problem-solving",
      icon: Lightbulb,
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Always seeking creative solutions to complex problems",
      icon: Lightbulb,
      color: "text-yellow-500"
    },
    {
      title: "Quality Matters",
      description: "Writing clean, maintainable code that stands the test of time",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      title: "Continuous Learning",
      description: "Staying updated with the latest technologies and best practices",
      icon: BookOpen,
      color: "text-blue-500"
    },
    {
      title: "Collaboration",
      description: "Believing that the best solutions come from working together",
      icon: Users,
      color: "text-purple-500"
    }
  ];

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
    <div ref={containerRef} className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
        
        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto"
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <div className="relative w-40 h-40 mx-auto mb-8">
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
                  className="text-6xl font-bold gradient-text"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  PV
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="gradient-text">Me</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate <span className="text-primary font-semibold">AI Developer</span> and 
            <span className="text-secondary font-semibold"> Full Stack Engineer</span> who believes 
            in the power of technology to solve real-world problems and create meaningful impact.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center space-x-2">
            <MapPin size={20} className="text-muted-foreground" />
            <span className="text-muted-foreground">Ahmedabad, India</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-4" />
            <span className="text-green-600 font-medium">Available for opportunities</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Who Am I Section */}
      <section className="section-padding bg-background-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Who Am I?</span> 🤔
            </h2>
            <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
              Beyond the code and algorithms, here's what makes me tick
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg text-foreground-muted">
                <p className="text-lg leading-relaxed">
                  Hey there! I'm <span className="text-primary font-semibold">Prithviraj Verma</span>, 
                  but most people call me <span className="text-secondary font-semibold">PV</span>. 
                  I'm a 21-year-old tech enthusiast from Ahmedabad, India, who fell in love with 
                  programming and never looked back.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My journey started with curiosity about how things work, and that curiosity led me 
                  to discover the magical world of <span className="text-accent font-semibold">Artificial Intelligence</span>. 
                  Today, I'm passionate about building intelligent systems that can understand, learn, 
                  and adapt to solve complex real-world problems.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me mentoring fellow developers, participating in 
                  hackathons, or exploring the latest advancements in AI/ML. I believe in the power 
                  of community and love sharing knowledge with others.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {personalFacts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-card border border-border"
                    >
                      <Icon size={16} className={fact.color} />
                      <span className="text-sm font-medium">{fact.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card glass-strong p-8 relative overflow-hidden">
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
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Quote size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">My Mission</div>
                      <div className="text-sm text-muted-foreground">What drives me</div>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg font-medium text-foreground mb-4 italic">
                    "To bridge the gap between cutting-edge AI research and practical applications 
                    that make a positive impact on people's lives."
                  </blockquote>
                  
                  <div className="text-sm text-muted-foreground">
                    — Solving problems one model at a time
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
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
                  Let's Create Something <span className="gradient-text">Amazing</span> Together! 🚀
                </h2>
                <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                  Whether you have a project in mind, want to collaborate, or just want to chat about AI and technology, 
                  I'm always excited to connect with fellow innovators.
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
                    <Mail size={20} />
                    <span className="relative z-10">Get In Touch</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
                  </motion.div>
                </a>

                <Link href="/projects">
                  <motion.div
                    className="btn btn-ghost group"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Code size={20} />
                    <span>View My Work</span>
                  </motion.div>
                </Link>
              </div>

              <div className="flex items-center justify-center space-x-6 mt-8">
                {[
                  { href: "https://github.com/PR-ODINSON", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/prithviraj-verma", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:i.prv.2509@gmail.com", icon: Mail, label: "Email" }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass transition-all duration-300 group hover:text-primary"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={24} className="text-foreground-secondary group-hover:text-current transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 