'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { 
  Brain, Activity, Users, BookOpen, ExternalLink, Calendar, Target, 
  Microscope, Atom, Rocket, Sparkles, Zap, Globe, Network, Database, 
  Cpu, Eye, Shield, GitBranch, TrendingUp, Star, Beaker, FlaskConical, 
  TestTube, ChevronRight, Play, FileText, Download, Code, Award,
  Clock, MapPin, DollarSign, Tag, Search, Filter, SortAsc, SortDesc
} from 'lucide-react';
import Link from 'next/link';

const ResearchPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortBy, setSortBy] = useState('year');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedAbstract, setExpandedAbstract] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Neural Network Research Areas - Optimized positioning for perfect alignment
  const researchNeurons = [
    {
      id: 1,
      title: 'Emotion Recognition',
      subtitle: 'PPG Signal Processing',
      description: 'Advanced machine learning algorithms for emotion recognition using physiological signals. Breakthrough research in affective computing and human-AI interaction.',
      icon: Activity,
      status: 'Active',
      progress: 85,
      publications: 3,
      collaborators: 5,
      impact: 'High',
      x: 40,  // Central hub - adjusted for alignment
      y: 35,  // Central hub positioning
      connections: [2, 4],  // Reduced connections for cleaner look
      color: 'emerald',
      researchType: 'current',
      timeline: '2024-Present',
      funding: '$50K',
      technologies: ['PyTorch', 'Signal Processing', 'Deep Learning', 'Python', 'TensorFlow'],
      achievements: [
        '95% accuracy in emotion classification',
        'Real-time processing capabilities',
        'Novel PPG feature extraction methods',
        'Published in top-tier conferences'
      ],
      quantumState: 'superposition'
    },
    {
      id: 2,
      title: 'Multimodal AI',
      subtitle: 'Cross-Modal Learning',
      description: 'Combining vision, audio, and physiological signals for comprehensive AI understanding. Revolutionary approach to human-computer interaction.',
      icon: Brain,
      status: 'Planning',
      progress: 25,
      publications: 0,
      collaborators: 8,
      impact: 'Revolutionary',
      x: 80,  // Top right corner - aligned
      y: 20,  // Elevated position
      connections: [1],
      color: 'blue',
      researchType: 'future',
      timeline: '2024-2026',
      funding: 'Seeking',
      technologies: ['Computer Vision', 'NLP', 'Sensor Fusion', 'Neural Networks'],
      achievements: [
        'Prototype development initiated',
        'Cross-modal architecture designed',
        'Preliminary experiments conducted'
      ],
      quantumState: 'entangled'
    },
    {
      id: 3,
      title: 'Healthcare AI',
      subtitle: 'Medical Intelligence',
      description: 'AI-powered diagnostic and monitoring systems for healthcare applications. Focus on preventive care and early detection systems.',
      icon: Microscope,
      status: 'Research',
      progress: 60,
      publications: 2,
      collaborators: 12,
      impact: 'Clinical',
      x: 20,  // Bottom left corner - aligned
      y: 80,  // Lower positioning
      connections: [1],
      color: 'purple',
      researchType: 'current',
      timeline: '2023-2025',
      funding: '$75K',
      technologies: ['Medical AI', 'Data Analysis', 'Machine Learning', 'Cloud Computing'],
      achievements: [
        'Clinical trial participation',
        'FDA pathway consultation',
        'Hospital partnerships established',
        'Patient outcome improvements'
      ],
      quantumState: 'coherent'
    },
    {
      id: 4,
      title: 'Ethical AI',
      subtitle: 'Responsible Technology',
      description: 'Investigating bias, fairness, and privacy in AI systems. Developing frameworks for ethical AI deployment in sensitive applications.',
      icon: Shield,
      status: 'Ongoing',
      progress: 40,
      publications: 4,
      collaborators: 15,
      impact: 'Societal',
      x: 75,  // Bottom right corner - aligned
      y: 75,  // Better spacing
      connections: [1],
      color: 'amber',
      researchType: 'current',
      timeline: '2023-2024',
      funding: '$30K',
      technologies: ['Ethics Framework', 'Bias Detection', 'Privacy Tech', 'Governance'],
      achievements: [
        'Ethics framework published',
        'Industry adoption guidelines',
        'Policy recommendations',
        'Open-source tools released'
      ],
      quantumState: 'measured'
    },
    {
      id: 5,
      title: 'Quantum Computing',
      subtitle: 'Next-Gen Processing',
      description: 'Exploring quantum algorithms for machine learning acceleration. Investigating quantum advantage in AI computations.',
      icon: Atom,
      status: 'Exploration',
      progress: 15,
      publications: 1,
      collaborators: 6,
      impact: 'Theoretical',
      x: 65,  // Right-center positioning - aligned
      y: 50,  // Middle of network
      connections: [],
      color: 'cyan',
      researchType: 'future',
      timeline: '2025-2027',
      funding: 'Seeking',
      technologies: ['Quantum Algorithms', 'Quantum ML', 'Qiskit', 'Quantum Circuits'],
      achievements: [
        'Quantum ML prototype',
        'Algorithm optimization',
        'Quantum simulator tests',
        'Theoretical breakthroughs'
      ],
      quantumState: 'uncertain'
    }
  ];

  // Lab Equipment Data - Better spacing
  const labEquipment = [
    { name: 'Neural Processor', icon: Cpu, x: 10, y: 15, active: true, type: 'computation' },
    { name: 'Data Microscope', icon: Microscope, x: 85, y: 10, active: false, type: 'analysis' },
    { name: 'Quantum Chamber', icon: Atom, x: 90, y: 85, active: true, type: 'quantum' },
    { name: 'Bio Sensor', icon: Activity, x: 5, y: 90, active: false, type: 'biological' },
    { name: 'Knowledge Synthesizer', icon: Beaker, x: 50, y: 5, active: true, type: 'synthesis' }
  ];

  // Research Publications as Stars - Reduced for cleaner look
  const researchStars = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    title: `Research Paper ${i + 1}`,
    impact: Math.random() * 100,
    citations: Math.floor(Math.random() * 500),
    x: Math.random() * 100,
    y: Math.random() * 100,
    brightness: Math.random(),
    type: ['conference', 'journal', 'workshop'][Math.floor(Math.random() * 3)]
  }));

  const colorThemes = {
    emerald: {
      primary: 'text-emerald-400',
      secondary: 'text-emerald-300',
      bg: 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/30',
      border: 'border-emerald-400/30',
      glow: 'shadow-emerald-500/20'
    },
    blue: {
      primary: 'text-blue-400',
      secondary: 'text-blue-300',
      bg: 'bg-gradient-to-br from-blue-500/20 to-blue-600/30',
      border: 'border-blue-400/30',
      glow: 'shadow-blue-500/20'
    },
    purple: {
      primary: 'text-purple-400',
      secondary: 'text-purple-300',
      bg: 'bg-gradient-to-br from-purple-500/20 to-purple-600/30',
      border: 'border-purple-400/30',
      glow: 'shadow-purple-500/20'
    },
    amber: {
      primary: 'text-amber-400',
      secondary: 'text-amber-300',
      bg: 'bg-gradient-to-br from-amber-500/20 to-amber-600/30',
      border: 'border-amber-400/30',
      glow: 'shadow-amber-500/20'
    },
    cyan: {
      primary: 'text-cyan-400',
      secondary: 'text-cyan-300',
      bg: 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/30',
      border: 'border-cyan-400/30',
      glow: 'shadow-cyan-500/20'
    }
  };



  const NeuralConnection = ({ from, to, active, connectionIndex = 0 }: { from: any, to: any, active: boolean, connectionIndex?: number }) => {
    // Calculate smooth curve control points for organic neural pathways
    // Use the exact same positioning logic as the neurons
    const startX = from.x;
    const startY = from.y;
    const endX = to.x;
    const endY = to.y;
    
    // Create control points for smooth bezier curves
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const distance = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
    const curvature = Math.min(distance * 0.4, 18); // Enhanced curvature
    
    // Perpendicular offset for natural curve with variation
    const perpX = -(endY - startY) / distance * curvature * (1 + connectionIndex * 0.1);
    const perpY = (endX - startX) / distance * curvature * (1 + connectionIndex * 0.1);
    
    const cp1X = startX + (midX - startX) * 0.6 + perpX;
    const cp1Y = startY + (midY - startY) * 0.6 + perpY;
    const cp2X = endX + (midX - endX) * 0.6 + perpX;
    const cp2Y = endY + (midY - endY) * 0.6 + perpY;
    
    const pathId = `neural-path-${from.id}-${to.id}-${connectionIndex}`;
    const pathData = `M ${startX} ${startY} C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;
    
    // Synchronized timing for consistent animations
    const pulseDelay = connectionIndex * 0.3;
    const pulseDuration = 3; // Consistent 3-second cycles
    
    return (
      <motion.svg
        className="absolute inset-0 pointer-events-none"
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Enhanced glowing background path */}
        <motion.path
          id={`${pathId}-glow`}
          d={pathData}
          fill="none"
          stroke={active ? '#10b981' : '#374151'}
          strokeWidth={active ? '0.3' : '0.1'}
          opacity={active ? 0.2 : 0.05}
          filter="url(#neural-glow)"
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            opacity: active ? [0.4, 0.7, 0.4] : 0.15
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: pulseDuration, repeat: Infinity }
          }}
        />
        
        {/* Main connection path with consistent pulsing */}
        <motion.path
          id={pathId}
          d={pathData}
          fill="none"
          stroke={active ? '#10b981' : '#6b7280'}
          strokeWidth={active ? '0.15' : '0.05'}
          opacity={active ? 0.6 : 0.3}
          strokeDasharray={active ? "none" : "3 4"}
          initial={{ pathLength: 0 }}
          animate={{ 
            pathLength: 1,
            strokeWidth: active ? [0.6, 0.8, 0.6] : 0.2
          }}
          transition={{ 
            pathLength: { duration: 2.5, ease: "easeInOut" },
            strokeWidth: { duration: pulseDuration, repeat: Infinity }
          }}
        />
        
        {/* Enhanced neural signal pulses with perfect timing */}
        {active && (
          <>
                         {/* Primary pulse */}
             <motion.circle
               r="0.2"
               fill="#10b981"
               opacity="0.6"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ 
                duration: pulseDuration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: pulseDelay
              }}
            >
              <animateMotion dur={`${pulseDuration}s`} repeatCount="indefinite" begin={`${pulseDelay}s`}>
                <mpath href={`#${pathId}`} />
              </animateMotion>
            </motion.circle>
            
                         {/* Secondary pulse with synchronized timing */}
             <motion.circle
               r="0.15"
               fill="#34d399"
               opacity="0.4"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ 
                duration: pulseDuration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: pulseDelay + (pulseDuration * 0.33)
              }}
            >
              <animateMotion dur={`${pulseDuration}s`} repeatCount="indefinite" begin={`${pulseDelay + (pulseDuration * 0.33)}s`}>
                <mpath href={`#${pathId}`} />
              </animateMotion>
            </motion.circle>
            
                         {/* Trailing glow effect with precise synchronization */}
             <motion.circle
               r="0.3"
               fill="#6ee7b7"
               opacity="0.15"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ 
                duration: pulseDuration, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: pulseDelay + (pulseDuration * 0.15)
              }}
            >
              <animateMotion dur={`${pulseDuration}s`} repeatCount="indefinite" begin={`${pulseDelay + (pulseDuration * 0.15)}s`}>
                <mpath href={`#${pathId}`} />
              </animateMotion>
            </motion.circle>
          </>
        )}
        
        {/* Enhanced neural pathway definition for filters */}
        <defs>
          <filter id="neural-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1"/>
            <stop offset="50%" stopColor="#34d399" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.6"/>
          </linearGradient>
          
          <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="1"/>
            <stop offset="70%" stopColor="#34d399" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0"/>
          </radialGradient>
        </defs>
      </motion.svg>
    );
  };

  const ResearchNeuron = ({ neuron, index }: { neuron: any, index: number }) => {
    const theme = colorThemes[neuron.color as keyof typeof colorThemes];
    const IconComponent = neuron.icon;
    const isActive = activeNeuron === neuron.id;

    return (
      <motion.div
        className="absolute gpu-accelerated will-change-transform"
        style={{
          left: `${neuron.x}%`,
          top: `${neuron.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          delay: index * 0.2,
          type: "spring",
          stiffness: 200
        }}
        onMouseEnter={() => {
          if (hoverTimeout) clearTimeout(hoverTimeout);
          setStableActiveNeuron(neuron.id);
          setActiveNeuron(neuron.id);
        }}
        onMouseLeave={() => {
          if (hoverTimeout) clearTimeout(hoverTimeout);
          const timeout = setTimeout(() => {
            setActiveNeuron(null);
            setStableActiveNeuron(null);
          }, 150);
          setHoverTimeout(timeout);
        }}
        onClick={() => setSelectedResearch(neuron.id)}
      >
        {/* Quantum Uncertainty Effect */}
        {isQuantumMode && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.1, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        )}

        {/* Neural Body */}
        <motion.div
          className={`relative w-20 h-20 rounded-full ${theme.bg} ${theme.border} border-2 ${theme.glow} shadow-2xl backdrop-blur-xl cursor-pointer`}
          whileHover={{ 
            scale: 1.2,
            rotate: isQuantumMode ? [0, 5, -5, 0] : 0
          }}
          animate={isActive ? {
            boxShadow: [
              `0 0 20px rgba(var(--${neuron.color}-500), 0.5)`,
              `0 0 40px rgba(var(--${neuron.color}-500), 0.8)`,
              `0 0 20px rgba(var(--${neuron.color}-500), 0.5)`
            ]
          } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Enhanced Pulsing Core with Perfect Synchronization */}
          <motion.div
            className={`absolute inset-2 rounded-full ${theme.primary.replace('text-', 'bg-')}/30`}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.9, 0.4]
            }}
            transition={{ 
              duration: 3, // Synchronized with connection pulses
              repeat: Infinity,
              delay: index * 0.2, // Staggered start for visual appeal
              ease: "easeInOut"
            }}
          />

          {/* Secondary Core Ring */}
          <motion.div
            className={`absolute inset-3 rounded-full border ${theme.border}/40`}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2 + 0.5, // Offset from main pulse
              ease: "easeInOut"
            }}
          />

          {/* Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <IconComponent className={`w-8 h-8 ${theme.primary}`} />
          </div>

          {/* Enhanced Activity Indicator with Status Synchronization */}
          <motion.div
            className={`absolute -top-2 -right-2 w-5 h-5 rounded-full ${
              neuron.status === 'Active' ? 'bg-green-400' :
              neuron.status === 'Planning' ? 'bg-yellow-400' :
              neuron.status === 'Research' ? 'bg-blue-400' :
              neuron.status === 'Ongoing' ? 'bg-purple-400' : 'bg-gray-400'
            } shadow-lg`}
            animate={{ 
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 10px rgba(59, 130, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.6)',
                '0 0 10px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ 
              duration: 3, // Synchronized with core pulses
              repeat: Infinity,
              delay: index * 0.2 + 1, // Offset timing
              ease: "easeInOut"
            }}
          />

          {/* Status Ring */}
          <motion.div
            className={`absolute -top-3 -right-3 w-7 h-7 rounded-full border-2 ${
              neuron.status === 'Active' ? 'border-green-400/30' :
              neuron.status === 'Planning' ? 'border-yellow-400/30' :
              neuron.status === 'Research' ? 'border-blue-400/30' :
              neuron.status === 'Ongoing' ? 'border-purple-400/30' : 'border-gray-400/30'
            }`}
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 6, // Double the main pulse duration
              repeat: Infinity,
              delay: index * 0.2,
              ease: "linear"
            }}
          />
        </motion.div>

        {/* Neural Label */}
        <motion.div
          className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isActive ? 1 : 0.7, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`text-sm font-bold ${theme.primary} whitespace-nowrap`}>
            {neuron.title}
          </div>
          <div className="text-xs text-gray-400 whitespace-nowrap">
            {neuron.progress}% Complete
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const LabEquipmentItem = ({ equipment, index }: { equipment: any, index: number }) => {
    const IconComponent = equipment.icon;
    const isActive = labEquipmentActive.includes(equipment.name);

    return (
      <motion.div
        className="absolute gpu-accelerated"
        style={{
          left: `${equipment.x}%`,
          top: `${equipment.y}%`,
          transform: 'translate(-50%, -50%)'
        }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          delay: index * 0.3,
          type: "spring",
          stiffness: 150
        }}
        onMouseEnter={() => setLabEquipmentActive([...labEquipmentActive, equipment.name])}
        onMouseLeave={() => setLabEquipmentActive(labEquipmentActive.filter(name => name !== equipment.name))}
      >
        <motion.div
          className={`w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/50 to-slate-800/80 border border-white/20 backdrop-blur-xl shadow-2xl flex items-center justify-center cursor-pointer ${
            isActive ? 'shadow-blue-500/30' : ''
          }`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          animate={isActive ? {
            boxShadow: ['0 0 20px rgba(59, 130, 246, 0.3)', '0 0 40px rgba(59, 130, 246, 0.6)', '0 0 20px rgba(59, 130, 246, 0.3)']
          } : {}}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className={`w-8 h-8 ${isActive ? 'text-blue-400' : 'text-gray-400'}`} />
        </motion.div>
        
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-xs text-gray-300 whitespace-nowrap">
            {equipment.name}
          </div>
        </div>
      </motion.div>
    );
  };

  const ResearchStar = ({ star, index }: { star: any, index: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: star.brightness + 0.5, opacity: star.brightness }}
      transition={{ delay: index * 0.05 }}
    >
      <motion.div
        className={`w-2 h-2 rounded-full ${
          star.type === 'journal' ? 'bg-yellow-400' :
          star.type === 'conference' ? 'bg-blue-400' : 'bg-purple-400'
        }`}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    </motion.div>
  );

  return (
    <div ref={containerRef} className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Quantum Background */}
      <div className="fixed inset-0 opacity-20">
        <motion.div 
          className="absolute inset-0"
          style={{ rotate: quantumRotation }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-cyan-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.8, 0.2],
                x: [0, Math.random() * 50 - 25, 0],
                y: [0, Math.random() * 50 - 25, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Revolutionary Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center space-x-6 mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="p-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl border border-purple-400/20"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Brain className="w-10 h-10 text-purple-400" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Neural Research Lab
            </h1>
            
            <motion.div
              className="p-4 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-3xl border border-cyan-400/20"
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <Atom className="w-10 h-10 text-cyan-400" />
            </motion.div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Welcome to the quantum-enhanced neural research laboratory where artificial intelligence, 
            consciousness, and human potential converge. Explore cutting-edge research through our 
            interactive neural network interface.
          </motion.p>

          {/* Control Panel */}
          <motion.div
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.button
              onClick={() => setIsQuantumMode(!isQuantumMode)}
              className={`px-6 py-3 rounded-2xl border backdrop-blur-sm transition-all ${
                isQuantumMode 
                  ? 'bg-cyan-500/20 border-cyan-400/40 text-cyan-300' 
                  : 'bg-white/5 border-white/20 text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Atom className="w-5 h-5 inline mr-2" />
              Quantum Mode
            </motion.button>
            
            <motion.div
              className="px-6 py-3 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-sm"
            >
              <Network className="w-5 h-5 inline mr-2 text-emerald-400" />
              <span className="text-emerald-300">Neural Network Active</span>
            </motion.div>
            
            <motion.div
              className="px-6 py-3 bg-white/5 border border-white/20 rounded-2xl backdrop-blur-sm"
            >
              <Activity className="w-5 h-5 inline mr-2 text-blue-400" />
              <span className="text-blue-300">Lab Equipment Online</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Neural Research Network */}
        <motion.section
          className="relative h-screen mb-20"
          style={{ y: neuralY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-slate-900/50 rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden">
            
            {/* Neural Grid Background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="neural-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#10b981" strokeWidth="0.1"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#neural-grid)" />
              </svg>
            </div>
            
            {/* Research Stars Background */}
            {researchStars.map((star, index) => (
              <ResearchStar key={star.id} star={star} index={index} />
            ))}

            {/* Enhanced Neural Connections with Perfect Synchronization */}
            {researchNeurons.map((neuron, neuronIndex) => 
              neuron.connections.map((connectionId, connectionIdx) => {
                const targetNeuron = researchNeurons.find(n => n.id === connectionId);
                if (!targetNeuron) return null;
                const isActive = activeNeuron === neuron.id || activeNeuron === connectionId;
                const globalConnectionIndex = neuronIndex * 10 + connectionIdx; // Unique index for each connection
                
                return (
                  <div key={`connection-${neuron.id}-${connectionId}-${globalConnectionIndex}`}>
                    <NeuralConnection
                      from={neuron}
                      to={targetNeuron}
                      active={isActive}
                      connectionIndex={globalConnectionIndex}
                    />
                    {/* Enhanced bidirectional connection for central hub */}
                    {(neuron.id === 1 || connectionId === 1) && (
                      <NeuralConnection
                        from={targetNeuron}
                        to={neuron}
                        active={isActive}
                        connectionIndex={globalConnectionIndex + 100} // Offset for reverse direction
                      />
                    )}
                  </div>
                );
              })
            )}

            {/* Central Neural Hub Effect - Synced with actual neuron position */}
            <motion.div
              className="absolute"
              style={{
                left: '40%',
                top: '35%',
                transform: 'translate(-50%, -50%)'
              }}
              animate={{
                boxShadow: activeNeuron === 1 ? [
                  '0 0 50px rgba(16, 185, 129, 0.3)',
                  '0 0 100px rgba(16, 185, 129, 0.5)',
                  '0 0 50px rgba(16, 185, 129, 0.3)'
                ] : []
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-600/20 border border-emerald-400/20" />
            </motion.div>



            {/* Research Neurons */}
            {researchNeurons.map((neuron, index) => (
              <ResearchNeuron key={neuron.id} neuron={neuron} index={index} />
            ))}

            {/* Lab Equipment */}
            {labEquipment.map((equipment, index) => (
              <LabEquipmentItem key={equipment.name} equipment={equipment} index={index} />
            ))}

            {/* Neural Network Title */}
            <motion.div
              className="absolute top-8 left-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl font-bold text-white mb-2">Interactive Research Neural Network</h2>
              <p className="text-gray-400 text-sm">Hover over neurons to explore connections • Click to view details</p>
            </motion.div>

            {/* Lab Status */}
            <motion.div
              className="absolute top-8 right-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="text-right">
                <div className="text-sm text-gray-400 mb-1">Lab Status</div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">Fully Operational</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Research Details Panel */}
        <AnimatePresence>
          {selectedResearch && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResearch(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-white/20 rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto backdrop-blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                {(() => {
                  const research = researchNeurons.find(n => n.id === selectedResearch);
                  if (!research) return null;
                  const theme = colorThemes[research.color as keyof typeof colorThemes];
                  const IconComponent = research.icon;

                  return (
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-4 ${theme.bg} rounded-2xl ${theme.border} border`}>
                            <IconComponent className={`w-8 h-8 ${theme.primary}`} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{research.title}</h3>
                            <p className={`text-lg ${theme.secondary}`}>{research.subtitle}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => setSelectedResearch(null)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>

                      <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                        {research.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h4 className="text-lg font-bold text-white mb-4">Key Achievements</h4>
                          <div className="space-y-3">
                            {research.achievements.map((achievement, index) => (
                              <motion.div
                                key={index}
                                className="flex items-start space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <Star className={`w-4 h-4 ${theme.primary} mt-1 flex-shrink-0`} />
                                <span className="text-gray-300 text-sm">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-white mb-4">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {research.technologies.map((tech, index) => (
                              <motion.span
                                key={tech}
                                className={`px-3 py-1 text-xs ${theme.bg} ${theme.border} border ${theme.secondary} rounded-full backdrop-blur-sm`}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                          <div className={`text-2xl font-bold ${theme.primary}`}>{research.progress}%</div>
                          <div className="text-xs text-gray-400">Progress</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                          <div className={`text-2xl font-bold ${theme.primary}`}>{research.publications}</div>
                          <div className="text-xs text-gray-400">Publications</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                          <div className={`text-2xl font-bold ${theme.primary}`}>{research.collaborators}</div>
                          <div className="text-xs text-gray-400">Collaborators</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                          <div className={`text-2xl font-bold ${theme.primary}`}>{research.funding}</div>
                          <div className="text-xs text-gray-400">Funding</div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

                         {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
            
            <div className="relative z-10">
              <motion.div
                className="inline-flex items-center space-x-4 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <Rocket className="w-8 h-8 text-purple-400" />
                <h2 className="text-4xl font-bold text-white">Join the Research Revolution</h2>
                <Sparkles className="w-8 h-8 text-cyan-400" />
              </motion.div>
              
              <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                Ready to collaborate on breakthrough research? Join our neural network of innovators 
                and help shape the future of AI, consciousness, and human-computer interaction.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 text-lg font-semibold text-white rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Collaboration
                </motion.a>
                
                <motion.button
                  onClick={() => setIsQuantumMode(!isQuantumMode)}
                  className="bg-white/10 border border-white/20 px-8 py-4 text-lg font-semibold text-white rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Toggle Quantum Mode
                </motion.button>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ResearchPage; 