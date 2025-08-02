'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect, useCallback } from 'react';
import { Github, ExternalLink, Code, Brain, Shield, Activity, Eye, Zap, Star, Rocket, Sparkles, Target, TrendingUp, Cpu, Database, Globe, Atom, Layers, Play, ArrowRight, ChevronRight, Maximize2, Beaker, Microscope, Orbit, Gauge, FlaskConical, Atom as AtomIcon } from 'lucide-react';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [universeState, setUniverseState] = useState<'stable' | 'expanding' | 'collapsing'>('stable');
  const [particleIntensity, setParticleIntensity] = useState(100);
  const [hologramMode, setHologramMode] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Color theme mappings
  const colorThemes = {
    blue: {
      icon: 'text-blue-400',
      iconBg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/30',
      iconBorder: 'border-blue-400/20',
      subtitle: 'text-blue-300',
      progress: 'bg-gradient-to-r from-blue-500 to-blue-400',
      tech: 'text-blue-300 border-blue-400/20',
      button: 'bg-gradient-to-r from-blue-500/20 to-blue-600/30 border-blue-400/30 text-blue-300 hover:from-blue-500/30 hover:to-blue-600/40',
      stats: 'text-blue-400',
      gradient: 'from-blue-500/20 to-indigo-500/20'
    },
    amber: {
      icon: 'text-amber-400',
      iconBg: 'bg-gradient-to-br from-amber-500/20 to-amber-600/30',
      iconBorder: 'border-amber-400/20',
      subtitle: 'text-amber-300',
      progress: 'bg-gradient-to-r from-amber-500 to-amber-400',
      tech: 'text-amber-300 border-amber-400/20',
      button: 'bg-gradient-to-r from-amber-500/20 to-amber-600/30 border-amber-400/30 text-amber-300 hover:from-amber-500/30 hover:to-amber-600/40',
      stats: 'text-amber-400',
      gradient: 'from-amber-500/20 to-orange-500/20'
    },
    emerald: {
      icon: 'text-emerald-400',
      iconBg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/30',
      iconBorder: 'border-emerald-400/20',
      subtitle: 'text-emerald-300',
      progress: 'bg-gradient-to-r from-emerald-500 to-emerald-400',
      tech: 'text-emerald-300 border-emerald-400/20',
      button: 'bg-gradient-to-r from-emerald-500/20 to-emerald-600/30 border-emerald-400/30 text-emerald-300 hover:from-emerald-500/30 hover:to-emerald-600/40',
      stats: 'text-emerald-400',
      gradient: 'from-emerald-500/20 to-teal-500/20'
    },
    purple: {
      icon: 'text-purple-400',
      iconBg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/30',
      iconBorder: 'border-purple-400/20',
      subtitle: 'text-purple-300',
      progress: 'bg-gradient-to-r from-purple-500 to-purple-400',
      tech: 'text-purple-300 border-purple-400/20',
      button: 'bg-gradient-to-r from-purple-500/20 to-purple-600/30 border-purple-400/30 text-purple-300 hover:from-purple-500/30 hover:to-purple-600/40',
      stats: 'text-purple-400',
      gradient: 'from-purple-500/20 to-violet-500/20'
    },
    teal: {
      icon: 'text-teal-400',
      iconBg: 'bg-gradient-to-br from-teal-500/20 to-teal-600/30',
      iconBorder: 'border-teal-400/20',
      subtitle: 'text-teal-300',
      progress: 'bg-gradient-to-r from-teal-500 to-teal-400',
      tech: 'text-teal-300 border-teal-400/20',
      button: 'bg-gradient-to-r from-teal-500/20 to-teal-600/30 border-teal-400/30 text-teal-300 hover:from-teal-500/30 hover:to-teal-600/40',
      stats: 'text-teal-400',
      gradient: 'from-teal-500/20 to-cyan-500/20'
    },
    rose: {
      icon: 'text-rose-400',
      iconBg: 'bg-gradient-to-br from-rose-500/20 to-rose-600/30',
      iconBorder: 'border-rose-400/20',
      subtitle: 'text-rose-300',
      progress: 'bg-gradient-to-r from-rose-500 to-rose-400',
      tech: 'text-rose-300 border-rose-400/20',
      button: 'bg-gradient-to-r from-rose-500/20 to-rose-600/30 border-rose-400/30 text-rose-300 hover:from-rose-500/30 hover:to-rose-600/40',
      stats: 'text-rose-400',
      gradient: 'from-rose-500/20 to-pink-500/20'
    }
  };

  const projects = [
    {
      id: 1,
      title: '📌 AscendOS',
      subtitle: 'Full-Stack Productivity OS',
      description: 'A complete productivity operating system with Notion-style UI and integrated AI agents for resume parsing and intelligent job matching.',
      technologies: ['Next.js', 'TailwindCSS', 'PostgreSQL', 'NestJS', 'Python', 'Cursor API'],
      category: 'product',
      status: 'In Development',
      completion: 85,
      githubUrl: 'https://github.com/PR-ODINSON/solo-leveling',
      liveUrl: '#',
      icon: Rocket,
      year: '2024',
      stats: { 
        features: '15+ modules', 
        ai_agents: '3 integrated', 
        performance: 'Optimized',
        stack: 'Full-stack'
      },
      color: 'blue',
      particleCount: 15,
      energyType: 'product'
    },
    {
      id: 2,
      title: '📌 Startup Validator',
      subtitle: 'AI-Powered Idea Validation',
      description: 'Intelligent tool that evaluates startup ideas and provides comprehensive validation scores using advanced market analysis and keyword clustering.',
      technologies: ['Python', 'OpenAI API', 'Streamlit', 'BeautifulSoup', 'LDA', 'NLTK'],
      category: 'ai',
      status: 'Production Ready',
      completion: 100,
      githubUrl: 'https://github.com/PR-ODINSON/startup-validator',
      liveUrl: '#',
      icon: TrendingUp,
      year: '2024',
      stats: { 
        accuracy: '92%', 
        startups: '500+ validated', 
        metrics: '12 factors',
        speed: 'Real-time'
      },
      color: 'emerald',
      particleCount: 12,
      energyType: 'ai'
    },
    {
      id: 3,
      title: '📌 Mindscan',
      subtitle: 'Mental Health Prediction ML',
      description: 'Advanced machine learning model that predicts mental health issues using survey responses with industry-leading 95%+ accuracy rates.',
      technologies: ['Scikit-learn', 'Python', 'Logistic Regression', 'Pandas', 'Seaborn'],
      category: 'ml',
      status: 'Model Complete',
      completion: 100,
      githubUrl: 'https://github.com/PR-ODINSON/mindscan',
      liveUrl: '#',
      icon: Brain,
      year: '2024',
      stats: { 
        accuracy: '95.3%', 
        precision: '94.8%', 
        recall: '96.1%',
        f1_score: '95.4%'
      },
      color: 'purple',
      particleCount: 10,
      energyType: 'ml'
    },
    {
      id: 4,
      title: '📌 AI Telemedicine System',
      subtitle: 'Intelligent Medical Assistant',
      description: 'Sophisticated virtual medical assistant that recommends personalized treatments based on symptoms using NLP and comprehensive medical databases.',
      technologies: ['Python', 'OpenAI API', 'LangChain', 'FastAPI', 'MongoDB'],
      category: 'ai',
      status: 'Beta Testing',
      completion: 90,
      githubUrl: 'https://github.com/PR-ODINSON/ai-telemedicine',
      liveUrl: '#',
      icon: Activity,
      year: '2024',
      stats: { 
        accuracy: '89%', 
        response_time: '150ms', 
        conditions: '200+ covered',
        database: '50K+ records'
      },
      color: 'teal',
      particleCount: 14,
      energyType: 'ai'
    },
    {
      id: 5,
      title: '📌 Sleep Disorder Research',
      subtitle: 'Published Research & Detection',
      description: 'Cutting-edge research projects on insomnia and sleep disorder detection using PPG, EEG/ECG signals with deep learning architectures.',
      technologies: ['PyTorch', 'CWT', 'CNN', 'ViT', 'Signal Processing', 'MATLAB'],
      category: 'research',
      status: 'Published & Under Review',
      completion: 95,
      githubUrl: 'https://github.com/PR-ODINSON/ppg-insomnia-detection',
      githubUrl2: 'https://github.com/PR-ODINSON/sleep-disorder-detection',
      liveUrl: '#',
      icon: Microscope,
      year: '2024',
      stats: { 
        publications: '2 papers', 
        accuracy: '93.2%', 
        datasets: '3 validated',
        citations: 'Pending'
      },
      color: 'rose',
      particleCount: 16,
      energyType: 'research'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: AtomIcon, count: projects.length },
    { id: 'ai', label: 'AI', icon: Brain, count: projects.filter(p => p.category === 'ai').length },
    { id: 'ml', label: 'ML', icon: Cpu, count: projects.filter(p => p.category === 'ml').length },
    { id: 'research', label: 'Research', icon: Microscope, count: projects.filter(p => p.category === 'research').length },
    { id: 'product', label: 'Product', icon: Rocket, count: projects.filter(p => p.category === 'product').length }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const getStatusColor = (status: string) => {
    if (status.includes('Active') || status.includes('Online')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40';
    if (status.includes('Complete')) return 'bg-blue-500/20 text-blue-300 border-blue-400/40';
    return 'bg-amber-500/20 text-amber-300 border-amber-400/40';
  };

  // ULTIMATE FLOATING HOLOGRAPHIC CARD - PURE PERFECTION
  const HolographicProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const [clickRipples, setClickRipples] = useState<{id: number, x: number, y: number}[]>([]);
    const cardRef = useRef<HTMLDivElement>(null);
    const ProjectIcon = project.icon;
    const theme = colorThemes[project.color as keyof typeof colorThemes];

    // Mouse tracking for magnetic effect
    const handleMouseMove = useCallback((e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      setMousePosition({ 
        x: mouseX * 0.1, // Magnetic strength
        y: mouseY * 0.1 
      });
    }, []);

    // Click ripple effect
    const handleClick = (e: React.MouseEvent) => {
      const rect = cardRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };
      
      setClickRipples(prev => [...prev, newRipple]);
      setTimeout(() => {
        setClickRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
    };

    return (
      <motion.div
        ref={cardRef}
        className="relative w-full max-w-sm mx-auto h-[580px] perspective-1000"
        initial={{ opacity: 0, y: 100, rotateX: 45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: index * 0.1,
          type: "spring",
          stiffness: 80
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        onClick={handleClick}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FLOATING HOLOGRAPHIC CARD */}
        <motion.div
          className="relative w-full h-full cursor-pointer group"
          animate={{
            rotateX: mousePosition.y * 0.5,
            rotateY: mousePosition.x * 0.5,
            z: isHovered ? 50 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.98 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* HOLOGRAPHIC GLOW LAYERS */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-30"
            style={{
              background: `linear-gradient(45deg, ${theme.icon.replace('text-', '')}, transparent, ${theme.icon.replace('text-', '')})`,
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* MAGNETIC FIELD VISUALIZATION */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 opacity-20"
            style={{
              borderColor: theme.icon.replace('text-', ''),
              background: `conic-gradient(from 0deg, transparent, ${theme.icon.replace('text-', '')}20, transparent)`
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* MAIN CARD BODY - GLASS MORPHISM */}
          <motion.div
            className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, 
                rgba(255,255,255,0.1) 0%, 
                rgba(255,255,255,0.05) 50%, 
                ${theme.gradient.replace('from-', 'rgba(').replace('to-', ', rgba(').replace('/20', ', 0.1)')} 100%
              )`,
              boxShadow: `
                0 25px 50px -12px ${theme.icon.replace('text-', '')}40,
                inset 0 1px 0 rgba(255,255,255,0.2),
                0 0 0 1px rgba(255,255,255,0.1)
              `
            }}
            animate={{
              borderColor: isHovered 
                ? `${theme.icon.replace('text-', '')}80` 
                : 'rgba(255,255,255,0.2)'
            }}
          >
            {/* CLICK RIPPLES */}
            {clickRipples.map((ripple) => (
              <motion.div
                key={ripple.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  background: `radial-gradient(circle, ${theme.icon.replace('text-', '')}60 0%, transparent 70%)`,
                }}
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={{ 
                  width: 400, 
                  height: 400, 
                  opacity: 0,
                  x: -200,
                  y: -200
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            ))}

            {/* FLOATING PARTICLES */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className={`absolute w-1 h-1 ${theme.icon} rounded-full`}
                  style={{
                    left: `${20 + i * 10}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    x: [0, Math.sin(i) * 15, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>

            {/* CARD CONTENT */}
            <div className="relative z-10 p-8 h-full flex flex-col">
              
              {/* FLOATING PROJECT ICON */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{
                  y: [0, -10, 0],
                  rotateY: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className={`relative p-6 ${theme.iconBg} rounded-2xl border-2 ${theme.iconBorder} shadow-xl`}
                  style={{
                    background: `linear-gradient(45deg, ${theme.iconBg.replace('bg-gradient-to-br ', '').replace(' to-', ', ')})`,
                    boxShadow: `0 0 40px ${theme.icon.replace('text-', '')}60`
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotateY: 180,
                    transition: { duration: 0.3 }
                  }}
                >
                  <ProjectIcon className={`w-12 h-12 ${theme.icon}`} />
                  
                  {/* ICON GLOW PULSE */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl ${theme.iconBg} opacity-50`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* PROJECT TITLE */}
              <motion.h3 
                className="text-2xl font-bold text-white mb-2 text-center leading-tight"
                animate={isHovered ? {
                  scale: [1, 1.05, 1],
                  color: theme.icon.replace('text-', '#')
                } : {}}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>

              {/* SUBTITLE */}
              <motion.p 
                className={`text-sm ${theme.subtitle} text-center mb-4 opacity-80`}
                animate={isHovered ? { opacity: 1 } : { opacity: 0.8 }}
              >
                {project.subtitle}
              </motion.p>

              {/* STATUS BADGE WITH PULSE */}
              <motion.div 
                className="flex justify-center mb-6"
                whileHover={{ scale: 1.1 }}
              >
                <motion.span 
                  className={`px-4 py-2 rounded-full text-sm border-2 ${getStatusColor(project.status)} font-semibold relative overflow-hidden`}
                  animate={{
                    boxShadow: [
                      `0 0 20px ${theme.icon.replace('text-', '')}40`,
                      `0 0 30px ${theme.icon.replace('text-', '')}80`,
                      `0 0 20px ${theme.icon.replace('text-', '')}40`
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <span className="relative z-10">⚡ {project.status}</span>
                </motion.span>
              </motion.div>

              {/* PROGRESS RING - ENHANCED */}
              <div className="flex justify-center mb-6">
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <motion.circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke={`url(#gradient-${project.id})`}
                      strokeWidth="6"
                      fill="transparent"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: project.completion / 100 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      style={{
                        filter: `drop-shadow(0 0 10px ${theme.icon.replace('text-', '')})`
                      }}
                    />
                    <defs>
                      <linearGradient id={`gradient-${project.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={theme.icon.replace('text-', '')} />
                        <stop offset="100%" stopColor={theme.icon.replace('text-', '').replace('400', '600')} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.span 
                      className="text-lg font-bold text-white"
                      animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
                    >
                      {project.completion}%
                    </motion.span>
                  </div>
                </div>
              </div>

              {/* STATS GRID - ENHANCED */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.entries(project.stats).slice(0, 4).map(([key, value], statIndex) => (
                  <motion.div
                    key={key}
                    className="relative p-3 bg-black/20 rounded-xl border border-white/10 backdrop-blur-sm text-center overflow-hidden"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: statIndex * 0.1 + index * 0.05 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderColor: theme.icon.replace('text-', '') + '60'
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                      animate={{
                        x: ['-100%', '100%']
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                        delay: statIndex * 0.5
                      }}
                    />
                    <div className={`text-lg font-bold ${theme.stats} relative z-10`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 capitalize relative z-10">
                      {key}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ACTION BUTTONS - FLOATING */}
              <motion.div 
                className="flex justify-center space-x-3 mt-auto flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? 0 : 10 }}
                transition={{ duration: 0.3 }}
              >
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative px-4 py-2 ${theme.iconBg} rounded-lg border-2 ${theme.iconBorder} shadow-lg backdrop-blur-sm font-medium text-white overflow-hidden group text-sm`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: `0 10px 30px ${theme.icon.replace('text-', '')}60`
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center space-x-1">
                    <Github className="w-3 h-3" />
                    <span>{project.githubUrl2 ? 'GitHub 1' : 'GitHub'}</span>
                  </span>
                </motion.a>

                {/* Second GitHub link for research projects */}
                {project.githubUrl2 && (
                  <motion.a
                    href={project.githubUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative px-4 py-2 ${theme.iconBg} rounded-lg border-2 ${theme.iconBorder} shadow-lg backdrop-blur-sm font-medium text-white overflow-hidden group text-sm`}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -2,
                      boxShadow: `0 10px 30px ${theme.icon.replace('text-', '')}60`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center space-x-1">
                      <Github className="w-3 h-3" />
                      <span>GitHub 2</span>
                    </span>
                  </motion.a>
                )}

                <motion.button
                  onClick={() => setSelectedProject(project.id)}
                  className="relative px-6 py-3 bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-400/40 rounded-xl shadow-lg backdrop-blur-sm font-semibold text-white overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: '0 10px 30px rgba(168, 85, 247, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10 flex items-center space-x-2">
                    <Orbit className="w-4 h-4" />
                    <span>Explore</span>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* HOLOGRAPHIC SCAN LINES */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${theme.icon.replace('text-', '')}20 50%, transparent 100%)`,
                width: '2px',
              }}
              animate={{
                x: ['-10px', '400px'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.5
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950/20 to-slate-950">
      
      {/* Dimensional Grid Background */}
      <div className="fixed inset-0 opacity-15 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-transparent to-purple-950/20" />
        {/* Floating Energy Orbs */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-2 h-2 bg-blue-400/40 rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [0, Math.sin(i) * 10, 0],
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Hexagonal Laboratory Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-6 mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="p-4 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl border-2 border-blue-400/40 shadow-2xl"
              animate={{ 
                rotate: [0, 360],
                boxShadow: [
                  '0 0 30px rgba(59, 130, 246, 0.5)',
                  '0 0 60px rgba(59, 130, 246, 0.8)',
                  '0 0 30px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <FlaskConical className="w-10 h-10 text-blue-400" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Holographic Showcase
            </h1>
            <motion.div
              className="p-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl border-2 border-purple-400/40 shadow-2xl"
              animate={{ 
                rotate: [0, -360],
                boxShadow: [
                  '0 0 30px rgba(168, 85, 247, 0.5)',
                  '0 0 60px rgba(168, 85, 247, 0.8)',
                  '0 0 30px rgba(168, 85, 247, 0.5)'
                ]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              <AtomIcon className="w-10 h-10 text-purple-400" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to the <span className="text-blue-400 font-semibold">Ultimate Holographic Project Showcase</span> - 
            where cutting-edge projects float in mesmerizing 3D space. Each holographic card responds to your presence with 
            magnetic attraction, ripple effects, and mind-bending animations that make you WANT to click and explore!
          </motion.p>
        </motion.div>

        {/* Quantum Experiment Filter Matrix */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = filter === category.id;
            return (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group relative flex items-center space-x-3 px-6 py-4 rounded-2xl border-2 transition-all duration-500 backdrop-blur-xl shadow-lg ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400/60 text-blue-300'
                    : 'bg-gradient-to-r from-black/40 to-black/20 border-white/20 text-gray-400 hover:from-white/10 hover:to-white/5 hover:border-white/30 hover:text-white'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -4,
                  boxShadow: isActive 
                    ? '0 10px 40px rgba(59, 130, 246, 0.4)' 
                    : '0 10px 30px rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  animate={isActive ? { rotate: [0, 360] } : {}}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <span className="font-semibold">{category.label}</span>
                <motion.span 
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    isActive 
                      ? 'bg-blue-400/30 text-blue-200 border border-blue-400/40' 
                      : 'bg-white/10 text-gray-400 border border-white/20'
                  }`}
                  animate={isActive ? {
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {category.count}
                </motion.span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* MODERN PROJECT SHOWCASE GRID */}
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <HolographicProjectCard 
                key={project.id} 
                project={project} 
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Quantum Collaboration Portal */}
        <motion.section
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/90 backdrop-blur-2xl border-2 border-white/20 rounded-3xl p-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-6 mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="p-4 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-3xl border-2 border-blue-400/40"
                  animate={{ 
                    rotate: [0, 360],
                    boxShadow: [
                      '0 0 30px rgba(59, 130, 246, 0.5)',
                      '0 0 60px rgba(59, 130, 246, 0.8)',
                      '0 0 30px rgba(59, 130, 246, 0.5)'
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Rocket className="w-10 h-10 text-blue-400" />
                </motion.div>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Join the Quantum Revolution
                </h2>
                <motion.div
                  className="p-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl border-2 border-purple-400/40"
                  animate={{ 
                    rotate: [0, -360],
                    boxShadow: [
                      '0 0 30px rgba(168, 85, 247, 0.5)',
                      '0 0 60px rgba(168, 85, 247, 0.8)',
                      '0 0 30px rgba(168, 85, 247, 0.5)'
                    ]
                  }}
                  transition={{ 
                    rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                    boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                >
                  <Sparkles className="w-10 h-10 text-purple-400" />
                </motion.div>
              </motion.div>
              
              <p className="text-gray-300 mb-12 max-w-4xl mx-auto text-xl leading-relaxed">
                Ready to transcend dimensional boundaries and collaborate on reality-bending projects? 
                Join forces with a quantum researcher pushing the limits of technological consciousness 
                across multiple universes. Together, we'll create experiments that reshape reality itself.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-blue-600 px-10 py-5 text-xl font-bold text-white rounded-2xl shadow-2xl border-2 border-blue-400/40"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: '0 20px 50px rgba(59, 130, 246, 0.5)',
                    borderColor: 'rgba(59, 130, 246, 0.8)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  🌌 Open Dimensional Portal
                </motion.a>
                
                <motion.a
                  href="https://github.com/PR-ODINSON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 border-2 border-purple-400/40 px-10 py-5 text-xl font-bold text-white rounded-2xl backdrop-blur-sm shadow-2xl"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: '0 20px 50px rgba(168, 85, 247, 0.5)',
                    borderColor: 'rgba(168, 85, 247, 0.8)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚡ Access Quantum Repository
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ProjectsPage; 