'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Award, Trophy, Star, Calendar, ExternalLink, Github, Code, Brain, Target, Sword, Shield, Zap, Crown, Gem, Flame, Sparkles, Atom, Rocket, Database, Eye, Network, Cpu, Activity, Microscope, GitBranch, TrendingUp, BookOpen, Users, Globe } from 'lucide-react';

const AchievementsPage = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null);
  const [discoveredAchievements, setDiscoveredAchievements] = useState<string[]>([]);
  const [explorerLevel, setExplorerLevel] = useState(42);
  const [isCosmicMode, setIsCosmicMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cosmicRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const stellarY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPlanet) {
        setSelectedPlanet(null);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mouseX, mouseY, selectedPlanet]);

  // Disable body scroll when modal is open and handle focus
  useEffect(() => {
    if (selectedPlanet) {
      // Disable body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus the modal content for accessibility
      setTimeout(() => {
        if (modalContentRef.current) {
          modalContentRef.current.focus();
        }
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedPlanet]);

  // Stellar Achievement Planets - Each represents a major achievement constellation
  const achievementPlanets = [
    {
      id: 1,
      name: 'Innovation Nebula',
      title: 'Hackathon Constellation',
      description: 'A brilliant star cluster formed through competitive coding victories and breakthrough innovations',
      power: 'Rapid Prototype Genesis',
      rarity: 'Supernova',
      discoveredDate: '2024',
      achievements: [
        { name: 'Hackathon Champion', desc: 'Multiple hackathon victories with innovative solutions', impact: 5000, icon: Trophy },
        { name: 'Time Pressure Master', desc: '48-hour coding marathons conquered', impact: 4200, icon: Zap },
        { name: 'Team Leadership Ace', desc: 'Led teams to victory under extreme pressure', impact: 3800, icon: Crown },
        { name: 'Innovation Catalyst', desc: 'Created game-changing solutions in limited time', impact: 4500, icon: Sparkles }
      ],
      x: 15,
      y: 25,
      orbitRadius: 120,
      orbitSpeed: 0.5,
      planetSize: 'large',
      color: 'gold',
      element: 'Innovation',
      classification: 'Alpha Prime',
      stellarAbility: 'Innovation Burst Field',
      hackathonWins: 5,
      prizes: ['Best Innovation Award', 'People\'s Choice Award', 'Technical Excellence Prize']
    },
    {
      id: 2,
      name: 'Knowledge Cosmos',
      title: 'Certification Galaxy',
      description: 'A vast galaxy of accumulated knowledge, where each certification forms a new star system of expertise',
      power: 'Infinite Learning Matrix',
      rarity: 'Binary Star',
      discoveredDate: '2023-2024',
      achievements: [
        { name: 'Certification Master', desc: 'Accumulated multiple professional certifications', impact: 4500, icon: Award },
        { name: 'Skill Validator', desc: 'Industry-recognized expertise across domains', impact: 3800, icon: Shield },
        { name: 'Continuous Learner', desc: 'Never stops acquiring new knowledge', impact: 4200, icon: BookOpen },
        { name: 'Excellence Seeker', desc: 'Pursues perfection in every domain', impact: 3600, icon: Star }
      ],
      x: 75,
      y: 20,
      orbitRadius: 100,
      orbitSpeed: 0.3,
      planetSize: 'medium',
      color: 'emerald',
      element: 'Knowledge',
      classification: 'Beta System',
      stellarAbility: 'Knowledge Synthesis Network',
      certificateCount: 12,
      certifications: ['AWS Cloud Practitioner', 'Google AI/ML', 'Microsoft Azure', 'Python Professional', 'Data Science Specialist']
    },
    {
      id: 3,
      name: 'Tech Forge Sector',
      title: 'Project Constellation',
      description: 'A stellar manufacturing zone where groundbreaking projects are assembled from cosmic code',
      power: 'Solution Materialization',
      rarity: 'Pulsar',
      discoveredDate: '2024',
      achievements: [
        { name: 'Earthquake Predictor', desc: 'ML model for seismic activity prediction', impact: 3200, icon: Target },
        { name: 'Face Recognition Master', desc: 'Advanced computer vision system', impact: 2800, icon: Eye },
        { name: 'Security Guardian', desc: 'Network anomaly detection system', impact: 3000, icon: Shield },
        { name: 'Healthcare AI Healer', desc: 'Vaccine prediction optimization', impact: 3500, icon: Microscope }
      ],
      x: 60,
      y: 70,
      orbitRadius: 90,
      orbitSpeed: 0.4,
      planetSize: 'medium',
      color: 'emerald',
      element: 'Creation',
      classification: 'Gamma Forge',
      stellarAbility: 'Rapid Build Synthesis'
    },
    {
      id: 4,
      name: 'Community Nexus',
      title: 'Open Source Hub',
      description: 'A collaborative space station where developers unite to build the future together',
      power: 'Collective Intelligence',
      rarity: 'Quasar',
      discoveredDate: '2023',
      achievements: [
        { name: 'GitHub Contributor', desc: 'Active open source contributor', impact: 2000, icon: Github },
        { name: 'Knowledge Sharer', desc: 'Teaching and mentoring others', impact: 1800, icon: Users },
        { name: 'Code Documenter', desc: 'Well-documented project repositories', impact: 1500, icon: GitBranch },
        { name: 'Community Builder', desc: 'Building developer community presence', impact: 2200, icon: Network }
      ],
      x: 20,
      y: 75,
      orbitRadius: 80,
      orbitSpeed: 0.6,
      planetSize: 'small',
      color: 'amber',
      element: 'Unity',
      classification: 'Delta Hub',
      stellarAbility: 'Collaborative Field'
    },
    {
      id: 5,
      name: 'Victory Supernova',
      title: 'Achievement Core',
      description: 'A brilliant supernova born from countless victories, radiating excellence across the achievement universe',
      power: 'Excellence Radiation',
      rarity: 'Hypernova',
      discoveredDate: '2023-2024',
      achievements: [
        { name: 'Prize Collector Supreme', desc: 'Accumulated multiple competition prizes and awards', impact: 5500, icon: Gem },
        { name: 'Recognition Magnet', desc: 'Consistently recognized for excellence', impact: 4800, icon: Crown },
        { name: 'Competitive Spirit', desc: 'Thrives in high-stakes competitive environments', impact: 4200, icon: Flame },
        { name: 'Excellence Incarnate', desc: 'Every achievement raises the bar higher', impact: 5000, icon: Trophy }
      ],
      x: 85,
      y: 55,
      orbitRadius: 110,
      orbitSpeed: 0.2,
      planetSize: 'large',
      color: 'rainbow',
      element: 'Glory',
      classification: 'Omega Core',
      stellarAbility: 'Excellence Amplification',
      totalPrizes: 15,
      recentPrizes: ['Best Hack Award 2024', 'Innovation Excellence Prize', 'Technical Leadership Award', 'Outstanding Achievement Recognition']
    }
  ];

  // Skill Constellation Network - Connected skill stars
  const skillConstellations = [
    { name: 'Python', level: 95, x: 30, y: 40, connections: [1, 2, 3], constellation: 'Code Mastery' },
    { name: 'AI/ML', level: 90, x: 45, y: 35, connections: [0, 4, 5], constellation: 'Intelligence' },
    { name: 'React', level: 85, x: 60, y: 45, connections: [0, 1, 6], constellation: 'Frontend' },
    { name: 'Data Science', level: 88, x: 35, y: 55, connections: [0, 7], constellation: 'Analytics' },
    { name: 'PyTorch', level: 82, x: 55, y: 25, connections: [1, 8], constellation: 'Deep Learning' },
    { name: 'TensorFlow', level: 80, x: 70, y: 35, connections: [1, 4], constellation: 'Neural Networks' },
    { name: 'JavaScript', level: 87, x: 75, y: 55, connections: [2, 9], constellation: 'Web Tech' },
    { name: 'MongoDB', level: 75, x: 25, y: 65, connections: [3], constellation: 'Database' },
    { name: 'Computer Vision', level: 85, x: 65, y: 15, connections: [4], constellation: 'Vision AI' },
    { name: 'Node.js', level: 78, x: 85, y: 65, connections: [6], constellation: 'Backend' }
  ];

  // Stellar Explorer Stats
  const explorerStats = {
    totalImpact: 67500, // Increased due to hackathons and prizes
    level: explorerLevel,
    nextLevelImpact: 72000,
    achievements: 42, // More achievements with hackathons and certificates
    projects: 15, // Including hackathon projects
    explorations: 156,
    stellarPoints: 385, // Higher stellar points
    prestigeRank: 'Cosmic Pioneer',
    titles: ['Innovation Navigator', 'Prize Collector', 'Knowledge Seeker', 'Innovation Catalyst', 'Stellar Achiever']
  };

  // Color themes for different stellar classifications
  const stellarThemes = {
    'Binary Star': {
      primary: 'text-yellow-400',
      secondary: 'text-yellow-300',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-400/30',
      glow: 'shadow-yellow-400/20',
      particle: 'bg-yellow-400'
    },
    Supernova: {
      primary: 'text-purple-400',
      secondary: 'text-purple-300',
      bg: 'bg-purple-500/10',
      border: 'border-purple-400/30',
      glow: 'shadow-purple-400/20',
      particle: 'bg-purple-400'
    },
    Pulsar: {
      primary: 'text-emerald-400',
      secondary: 'text-emerald-300',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-400/30',
      glow: 'shadow-emerald-400/20',
      particle: 'bg-emerald-400'
    },
    Quasar: {
      primary: 'text-blue-400',
      secondary: 'text-blue-300',
      bg: 'bg-blue-500/10',
      border: 'border-blue-400/30',
      glow: 'shadow-blue-400/20',
      particle: 'bg-blue-400'
    },
    Hypernova: {
      primary: 'text-pink-400',
      secondary: 'text-pink-300',
      bg: 'bg-gradient-to-br from-pink-500/10 to-purple-500/10',
      border: 'border-pink-400/30',
      glow: 'shadow-pink-400/20',
      particle: 'bg-pink-400'
    },
    gold: {
      primary: 'text-amber-300',
      secondary: 'text-amber-200',
      bg: 'bg-amber-500/15',
      border: 'border-amber-400/40',
      glow: 'shadow-amber-400/30',
      particle: 'bg-amber-300'
    },
    rainbow: {
      primary: 'text-pink-400',
      secondary: 'text-pink-300',
      bg: 'bg-gradient-to-br from-pink-500/10 to-purple-500/10',
      border: 'border-pink-400/30',
      glow: 'shadow-pink-400/20',
      particle: 'bg-pink-400'
    }
  };

  // Floating Planet Component with stellar effects
  const FloatingPlanet = ({ planet, index }: { planet: any, index: number }) => {
    const theme = stellarThemes[planet.rarity as keyof typeof stellarThemes];
    
    return (
      <motion.div
        className="absolute cursor-pointer"
        style={{
          left: `${planet.x}%`,
          top: `${planet.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{ 
          duration: 1, 
          delay: index * 0.3,
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: planet.orbitSpeed * 20, repeat: Infinity, ease: "linear" }
        }}
        whileHover={{ 
          scale: 1.1, 
          transition: { duration: 0.3 }
        }}
        onClick={() => setSelectedPlanet(planet.id)}
      >
        {/* Planet Orbital Glow */}
        <motion.div
          className={`absolute inset-0 w-24 h-24 ${theme.bg} rounded-full blur-xl ${theme.glow} shadow-2xl`}
          animate={{ 
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Planet Core */}
        <motion.div
          className={`relative w-20 h-20 rounded-full border-2 ${theme.border} ${theme.glow} shadow-2xl overflow-hidden`}
          style={{
            background: planet.rarity === 'Supernova' 
              ? `radial-gradient(circle at 30% 30%, ${theme.particle}, #1e293b, #0f172a)`
              : `radial-gradient(circle at 30% 30%, ${theme.particle}, #374151, #1f2937)`,
          }}
          animate={{
            boxShadow: [
              `0 0 15px ${theme.particle}`,
              `0 0 30px ${theme.particle}`,
              `0 0 15px ${theme.particle}`
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          {/* Planet Surface Details */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-white/20 rounded-full blur-sm" />
          <div className="absolute top-4 right-3 w-2 h-2 bg-cyan-300/40 rounded-full" />
          <div className="absolute bottom-3 left-4 w-1.5 h-1.5 bg-white/30 rounded-full blur-sm" />
          
          {/* Element Core Symbol */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-xs font-bold ${theme.primary} opacity-70`}>
              {planet.element.slice(0, 2).toUpperCase()}
            </div>
          </div>
          
          {/* Orbital Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            style={{ transform: 'scale(1.4)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-white/5"
            style={{ transform: 'scale(1.6)' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Stellar Particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${theme.particle} opacity-60`}
              style={{
                width: i % 3 === 0 ? '2px' : '1px',
                height: i % 3 === 0 ? '2px' : '1px',
                left: `${15 + i * 10}%`,
                top: `${20 + i * 8}%`
              }}
              animate={{
                x: [0, Math.random() * 30 - 15, 0],
                y: [0, Math.random() * 25 - 12, 0],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: planet.rarity === 'Supernova' ? 2 : 3,
                repeat: Infinity,
                delay: i * 0.4
              }}
            />
          ))}
          
          {/* Victory Supernova Effect */}
          {planet.name.includes('Victory') && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 80%)',
                  'radial-gradient(circle, rgba(147,51,234,0.2) 0%, transparent 80%)',
                  'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 80%)',
                  'radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 80%)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          )}
          
          {/* Innovation Nebula Effect */}
          {planet.name.includes('Innovation') && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(255,215,0,0.3) 30%, transparent 70%)',
                  'radial-gradient(circle, rgba(255,165,0,0.3) 30%, transparent 70%)',
                  'radial-gradient(circle, rgba(255,140,0,0.3) 30%, transparent 70%)',
                  'radial-gradient(circle, rgba(255,215,0,0.3) 30%, transparent 70%)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
        
        {/* Planet Name Tag */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className={`px-3 py-1 ${theme.bg} ${theme.border} border rounded-lg backdrop-blur-sm`}>
            <div className={`text-xs font-bold ${theme.primary}`}>{planet.name}</div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Skill Constellation Star Component
  const SkillStar = ({ skill, index }: { skill: any, index: number }) => (
    <motion.div
      className="absolute cursor-pointer group"
      style={{
        left: `${skill.x}%`,
        top: `${skill.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.5 }}
    >
      {/* Star Glow */}
      <motion.div
        className="absolute inset-0 w-8 h-8 bg-cyan-400/20 rounded-full blur-md"
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Star Core */}
      <div className="relative w-8 h-8 bg-gradient-to-br from-cyan-300 to-cyan-600 rounded-full border border-cyan-400 shadow-lg shadow-cyan-400/30">
        <Star className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-current" />
      </div>
      
      {/* Skill Info Tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      >
        <div className="bg-slate-800/90 border border-cyan-400/30 rounded-lg px-3 py-2 text-xs whitespace-nowrap backdrop-blur-sm">
          <div className="text-cyan-400 font-bold">{skill.name}</div>
          <div className="text-cyan-300">Level {skill.level}</div>
        </div>
      </motion.div>
    </motion.div>
  );

  // Constellation Connection Lines
  const ConstellationLines = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34, 211, 238, 0.3)" />
          <stop offset="50%" stopColor="rgba(34, 211, 238, 0.8)" />
          <stop offset="100%" stopColor="rgba(34, 211, 238, 0.3)" />
        </linearGradient>
      </defs>
      {skillConstellations.map((skill, index) =>
        skill.connections.map(connectionIndex => {
          const connectedSkill = skillConstellations[connectionIndex];
          if (!connectedSkill) return null;
          
          return (
            <motion.line
              key={`${index}-${connectionIndex}`}
              x1={`${skill.x}%`}
              y1={`${skill.y}%`}
              x2={`${connectedSkill.x}%`}
              y2={`${connectedSkill.y}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ 
                duration: 2, 
                delay: index * 0.2,
                pathLength: { type: "spring" }
              }}
            />
          );
        })
      )}
    </svg>
  );

  // Stellar Explorer Display Component
  const ExplorerDisplay = () => (
    <motion.div
      className="fixed top-24 right-8 z-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-slate-800/90 border border-cyan-400/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-400/10">
        {/* Explorer Avatar */}
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full border-2 border-cyan-400 shadow-lg shadow-cyan-400/30"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Rocket className="w-8 h-8 text-slate-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <motion.div
              className="absolute -inset-2 border-2 border-cyan-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <div>
            <div className="text-cyan-400 font-bold text-xl">Prithviraj</div>
            <div className="text-cyan-300 text-sm">{explorerStats.prestigeRank}</div>
          </div>
        </div>
        
        {/* Level and Impact */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-cyan-400 font-bold">Level {explorerStats.level}</span>
            <span className="text-cyan-300 text-sm">{explorerStats.totalImpact.toLocaleString()} Impact</span>
          </div>
          
          {/* Impact Progress Bar */}
          <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(explorerStats.totalImpact / explorerStats.nextLevelImpact) * 100}%` }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="text-center">
              <div className="text-cyan-400 font-bold text-lg">{explorerStats.achievements}</div>
              <div className="text-cyan-300">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 font-bold text-lg">{explorerStats.projects}</div>
              <div className="text-cyan-300">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="fixed inset-0 z-0">
        {/* Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
        
        {/* Nebula Effects */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{ rotate: cosmicRotation }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>

      {/* Explorer Display */}
      <ExplorerDisplay />

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-16 px-4">
        {/* Epic Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            STELLAR ACHIEVEMENTS
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Explore the cosmic constellation of accomplishments scattered across the digital universe. 
            Each achievement planet represents a milestone in the journey through technology and innovation.
          </motion.p>
          
          {/* Cosmic Mode Toggle */}
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsCosmicMode(!isCosmicMode)}
          >
            {isCosmicMode ? 'Exit Cosmic View' : 'Enter Stellar Observatory'}
          </motion.button>
        </motion.div>

        {/* Achievement Planets Galaxy */}
        <motion.section
          className="relative h-screen mb-32"
          style={{ y: stellarY }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ rotate: isCosmicMode ? cosmicRotation : 0 }}
          >
            {/* Cosmic Observatory Platform */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isCosmicMode ? 0.2 : 0, scale: isCosmicMode ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full border border-cyan-400/20 backdrop-blur-sm" />
              <div className="absolute inset-8 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-full border border-blue-400/15" />
            </motion.div>

            {/* Floating Planets */}
            {achievementPlanets.map((planet, index) => (
              <FloatingPlanet key={planet.id} planet={planet} index={index} />
            ))}
          </motion.div>
          
          {/* Center Title */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <h2 className="text-4xl font-bold text-cyan-400 mb-2">Stellar Constellation</h2>
            <p className="text-slate-300">Click any planet to explore its achievements</p>
          </motion.div>
        </motion.section>

        {/* Skill Constellation Network */}
        <motion.section
          className="relative h-96 mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">Skill Constellation Network</h2>
          
          <div className="relative max-w-4xl mx-auto h-full">
            <ConstellationLines />
            {skillConstellations.map((skill, index) => (
              <SkillStar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Call to Action - Stellar Mission */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Stellar Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5" />
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center space-x-4 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Rocket className="w-8 h-8 text-cyan-400" />
                <h2 className="text-4xl font-bold text-cyan-400">Ready for Cosmic Missions?</h2>
                <Sparkles className="w-8 h-8 text-blue-400" />
              </motion.div>
              
              <p className="text-slate-300 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                The universe awaits new explorers. Join forces with a stellar innovator 
                and let's build groundbreaking solutions that will illuminate the cosmos of technology.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 px-8 py-4 text-lg font-bold text-slate-900 rounded-2xl shadow-lg shadow-cyan-400/30 hover:shadow-cyan-400/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 Join My Mission
                </motion.a>
                <motion.a
                  href="/projects"
                  className="bg-slate-700/50 border border-slate-500 px-8 py-4 text-lg font-bold text-slate-300 rounded-2xl hover:bg-slate-600/50 transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⭐ Explore Creations
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Planet Detail Modal */}
      <AnimatePresence>
        {selectedPlanet && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPlanet(null)}
            onWheel={(e) => {
              // Prevent any scroll events on the overlay
              e.preventDefault();
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              // Prevent touch scroll on the overlay
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-cyan-400/30 rounded-3xl max-w-4xl w-full max-h-[85vh] backdrop-blur-xl shadow-2xl shadow-cyan-400/10 flex flex-col focus:outline-none"
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              onClick={e => e.stopPropagation()}
              tabIndex={-1}
              role="dialog"
              aria-modal="true"
              aria-labelledby="planet-title"
            >
              {(() => {
                const planet = achievementPlanets.find(k => k.id === selectedPlanet);
                if (!planet) return null;
                const theme = stellarThemes[planet.rarity as keyof typeof stellarThemes];

                return (
                  <div className="flex flex-col h-full relative">
                    {/* Scrollable Content */}
                    <div 
                      ref={modalContentRef}
                      className="flex-1 overflow-y-auto p-8 scrollbar-thin smooth-scroll"
                      tabIndex={0}
                      onWheel={(e) => {
                        // Allow scrolling within the modal content
                        const element = e.currentTarget;
                        const isScrollable = element.scrollHeight > element.clientHeight;
                        
                        if (isScrollable) {
                          // Check if we're at the top or bottom of the scrollable area
                          const atTop = element.scrollTop === 0 && e.deltaY < 0;
                          const atBottom = element.scrollTop >= element.scrollHeight - element.clientHeight && e.deltaY > 0;
                          
                          // Only prevent default if we're not at the boundaries
                          if (!atTop && !atBottom) {
                            e.stopPropagation();
                          }
                        }
                      }}
                      onTouchMove={(e) => {
                        // Prevent touch scroll from bubbling to the parent
                        e.stopPropagation();
                      }}
                    >
                      {/* Planet Header */}
                      <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-6">
                        <motion.div
                          className={`p-4 ${theme.bg} rounded-2xl ${theme.border} border ${theme.glow} shadow-xl`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Globe className={`w-12 h-12 ${theme.primary}`} />
                        </motion.div>
                        <div>
                          <h3 id="planet-title" className={`text-3xl font-bold ${theme.primary} mb-2`}>{planet.name}</h3>
                          <p className="text-xl text-slate-300 mb-2">{planet.title}</p>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 ${theme.bg} ${theme.border} border rounded-full text-sm ${theme.primary} font-bold`}>
                              {planet.rarity}
                            </span>
                            <span className="text-slate-400 text-sm">Discovered: {planet.discoveredDate}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedPlanet(null)}
                        className="text-slate-400 hover:text-white transition-colors text-2xl"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Enhanced Planet Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>{planet.element}</div>
                        <div className="text-xs text-slate-400">Element</div>
                      </div>
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>{planet.classification}</div>
                        <div className="text-xs text-slate-400">Classification</div>
                      </div>
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>{planet.achievements.length}</div>
                        <div className="text-xs text-slate-400">Achievements</div>
                      </div>
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>
                          {planet.hackathonWins || planet.certificateCount || planet.totalPrizes || 'MAX'}
                        </div>
                        <div className="text-xs text-slate-400">
                          {planet.hackathonWins ? 'Hackathon Wins' : 
                           planet.certificateCount ? 'Certificates' : 
                           planet.totalPrizes ? 'Total Prizes' : 'Stellar Power'}
                        </div>
                      </div>
                    </div>

                    {/* Special Collections */}
                    {(planet.prizes || planet.certifications || planet.recentPrizes) && (
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">
                          {planet.prizes ? 'Hackathon Prizes' : 
                           planet.certifications ? 'Professional Certifications' : 
                           'Recent Achievements'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {(planet.prizes || planet.certifications || planet.recentPrizes || []).map((item, idx) => (
                            <motion.div
                              key={idx}
                              className={`flex items-center space-x-3 p-3 ${theme.bg} ${theme.border} border rounded-lg`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <Trophy className={`w-5 h-5 ${theme.primary} flex-shrink-0`} />
                              <span className="text-slate-300 text-sm">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                      {planet.description}
                    </p>

                    {/* Achievement List */}
                    <h4 className="text-xl font-bold text-white mb-6">Stellar Accomplishments</h4>
                    <div className="space-y-4">
                      {planet.achievements.map((achievement, index) => {
                        const IconComponent = achievement.icon;
                        return (
                          <motion.div
                            key={index}
                            className="flex items-center space-x-4 p-4 bg-slate-700/30 rounded-xl border border-slate-600/30"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className={`p-3 ${theme.bg} rounded-lg ${theme.border} border`}>
                              <IconComponent className={`w-6 h-6 ${theme.primary}`} />
                            </div>
                            <div className="flex-1">
                              <h5 className="font-bold text-white">{achievement.name}</h5>
                              <p className="text-slate-400 text-sm">{achievement.desc}</p>
                            </div>
                            <div className="text-right">
                              <div className={`text-lg font-bold ${theme.primary}`}>+{achievement.impact}</div>
                              <div className="text-xs text-slate-400">Impact</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Stellar Ability */}
                    <motion.div
                      className={`mt-8 p-6 ${theme.bg} ${theme.border} border rounded-2xl text-center`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className={`text-xl font-bold ${theme.primary} mb-2`}>Stellar Ability</h4>
                      <p className={`text-lg ${theme.secondary} font-bold`}>{planet.stellarAbility}</p>
                      <p className="text-slate-400 text-sm mt-2">{planet.power}</p>
                    </motion.div>
                    </div>
                    
                    {/* Scroll Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-slate-800/90 to-transparent pointer-events-none rounded-b-3xl"></div>
                    
                    {/* Scroll Hint - Only visible on larger content */}
                    <motion.div
                      className="absolute bottom-2 right-4 text-cyan-400/60 text-xs flex items-center space-x-1 pointer-events-none"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.5 }}
                    >
                      <span>Scroll for more</span>
                      <motion.div
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        ↓
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AchievementsPage; 