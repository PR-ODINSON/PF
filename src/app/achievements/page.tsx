'use client';

import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Award, Trophy, Star, Calendar, ExternalLink, Github, Code, Brain, Target, Sword, Shield, Zap, Crown, Gem, Flame, Sparkles, Atom, Rocket, Database, Eye, Network, Cpu, Activity, Microscope, GitBranch, TrendingUp, BookOpen, Users, Globe } from 'lucide-react';

const AchievementsPage = () => {
  const [selectedKatana, setSelectedKatana] = useState<number | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [characterLevel, setCharacterLevel] = useState(42);
  const [isDojoMode, setIsDojoMode] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const galaxyRotation = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const dojoY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Legendary Achievement Katanas - Each represents a major achievement category
  const achievementKatanas = [
    {
      id: 1,
      name: 'Hackathon Devastator',
      title: 'Competition Dominator',
      description: 'Forged through victories in coding competitions and hackathons across multiple domains',
      power: 'Rapid Innovation Burst',
      rarity: 'Mythical',
      unlockedDate: '2024',
      achievements: [
        { name: 'Hackathon Champion', desc: 'Multiple hackathon victories with innovative solutions', xp: 5000, icon: Trophy },
        { name: 'Time Pressure Master', desc: '48-hour coding marathons conquered', xp: 4200, icon: Zap },
        { name: 'Team Leadership Ace', desc: 'Led teams to victory under extreme pressure', xp: 3800, icon: Crown },
        { name: 'Innovation Catalyst', desc: 'Created game-changing solutions in limited time', xp: 4500, icon: Sparkles }
      ],
      x: 15,
      y: 25,
      rotation: 25,
      color: 'gold',
      element: 'Victory',
      forgeLevel: 'Grandmaster',
      specialAbility: 'Unstoppable Innovation Storm',
      hackathonWins: 5, // Add your actual number
      prizes: ['Best Innovation Award', 'People\'s Choice Award', 'Technical Excellence Prize']
    },
    {
      id: 2,
      name: 'Certificate Collector\'s Blade',
      title: 'Knowledge Accumulator',
      description: 'Each certificate earned forges this blade stronger, representing endless pursuit of mastery',
      power: 'Infinite Learning Amplification',
      rarity: 'Legendary',
      unlockedDate: '2023-2024',
      achievements: [
        { name: 'Certification Master', desc: 'Accumulated multiple professional certifications', xp: 4500, icon: Award },
        { name: 'Skill Validator', desc: 'Industry-recognized expertise across domains', xp: 3800, icon: Shield },
        { name: 'Continuous Learner', desc: 'Never stops acquiring new knowledge', xp: 4200, icon: BookOpen },
        { name: 'Excellence Seeker', desc: 'Pursues perfection in every domain', xp: 3600, icon: Star }
      ],
      x: 75,
      y: 20,
      rotation: -35,
      color: 'emerald',
      element: 'Knowledge',
      forgeLevel: 'Master',
      specialAbility: 'Skill Synthesis Matrix',
      certificateCount: 12, // Add your actual number
      certifications: ['AWS Cloud Practitioner', 'Google AI/ML', 'Microsoft Azure', 'Python Professional', 'Data Science Specialist']
    },
    {
      id: 3,
      name: 'Project Destroyer',
      title: 'Legendary Builds',
      description: 'Epic projects that showcase technical mastery',
      power: 'Solution Manifestation',
      rarity: 'Epic',
      unlockedDate: '2024',
      achievements: [
        { name: 'Earthquake Predictor', desc: 'ML model for seismic activity prediction', xp: 3200, icon: Target },
        { name: 'Face Recognition Master', desc: 'Advanced computer vision system', xp: 2800, icon: Eye },
        { name: 'Security Guardian', desc: 'Network anomaly detection system', xp: 3000, icon: Shield },
        { name: 'Healthcare AI Healer', desc: 'Vaccine prediction optimization', xp: 3500, icon: Microscope }
      ],
      x: 60,
      y: 70,
      rotation: 15,
      color: 'emerald',
      element: 'Creation',
      forgeLevel: 'Expert',
      specialAbility: 'Build Acceleration'
    },
    {
      id: 4,
      name: 'Open Source Blade',
      title: 'Community Champion',
      description: 'Contributions to the global developer community',
      power: 'Collaboration Enhancement',
      rarity: 'Rare',
      unlockedDate: '2023',
      achievements: [
        { name: 'GitHub Contributor', desc: 'Active open source contributor', xp: 2000, icon: Github },
        { name: 'Knowledge Sharer', desc: 'Teaching and mentoring others', xp: 1800, icon: Users },
        { name: 'Code Documenter', desc: 'Well-documented project repositories', xp: 1500, icon: GitBranch },
        { name: 'Community Builder', desc: 'Building developer community presence', xp: 2200, icon: Network }
      ],
      x: 20,
      y: 75,
      rotation: -60,
      color: 'amber',
      element: 'Unity',
      forgeLevel: 'Advanced',
      specialAbility: 'Team Synergy'
    },
    {
      id: 5,
      name: 'Prize Hunter\'s Legendary Sword',
      title: 'Reward Reaper',
      description: 'Forged from countless victories, each prize won adds to its legendary power and prestige',
      power: 'Victory Manifestation',
      rarity: 'Mythical',
      unlockedDate: '2023-2024',
      achievements: [
        { name: 'Prize Collector Supreme', desc: 'Accumulated multiple competition prizes and awards', xp: 5500, icon: Gem },
        { name: 'Recognition Magnet', desc: 'Consistently recognized for excellence', xp: 4800, icon: Crown },
        { name: 'Competitive Spirit', desc: 'Thrives in high-stakes competitive environments', xp: 4200, icon: Flame },
        { name: 'Excellence Incarnate', desc: 'Every achievement raises the bar higher', xp: 5000, icon: Trophy }
      ],
      x: 85,
      y: 55,
      rotation: 75,
      color: 'rainbow',
      element: 'Glory',
      forgeLevel: 'Transcendent',
      specialAbility: 'Infinite Victory Cascade',
      totalPrizes: 15, // Add your actual number
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

  // Character Stats - RPG Style
  const characterStats = {
    totalXP: 67500, // Increased due to hackathons and prizes
    level: characterLevel,
    nextLevelXP: 72000,
    achievements: 42, // More achievements with hackathons and certificates
    projects: 15, // Including hackathon projects
    contributions: 156,
    skillPoints: 385, // Higher skill points
    prestigeRank: 'Hackathon Legend',
    titles: ['Competition Destroyer', 'Prize Collector', 'Certificate Master', 'Innovation Catalyst', 'Victory Seeker']
  };

  // Color themes for different rarities
  const rarityThemes = {
    Legendary: {
      primary: 'text-yellow-400',
      secondary: 'text-yellow-300',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-400/30',
      glow: 'shadow-yellow-400/20',
      particle: 'bg-yellow-400'
    },
    Mythical: {
      primary: 'text-purple-400',
      secondary: 'text-purple-300',
      bg: 'bg-purple-500/10',
      border: 'border-purple-400/30',
      glow: 'shadow-purple-400/20',
      particle: 'bg-purple-400'
    },
    Epic: {
      primary: 'text-emerald-400',
      secondary: 'text-emerald-300',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-400/30',
      glow: 'shadow-emerald-400/20',
      particle: 'bg-emerald-400'
    },
    Rare: {
      primary: 'text-blue-400',
      secondary: 'text-blue-300',
      bg: 'bg-blue-500/10',
      border: 'border-blue-400/30',
      glow: 'shadow-blue-400/20',
      particle: 'bg-blue-400'
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

  // Floating Katana Component with 3D effects
  const FloatingKatana = ({ katana, index }: { katana: any, index: number }) => {
    const theme = rarityThemes[katana.rarity as keyof typeof rarityThemes];
    
    return (
      <motion.div
        className="absolute cursor-pointer"
        style={{
          left: `${katana.x}%`,
          top: `${katana.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          rotate: katana.rotation,
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 1, 
          delay: index * 0.3,
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        whileHover={{ 
          scale: 1.2, 
          rotate: katana.rotation + 15,
          transition: { duration: 0.3 }
        }}
        onClick={() => setSelectedKatana(katana.id)}
      >
        {/* Katana Glow Effect */}
        <motion.div
          className={`absolute inset-0 w-32 h-8 ${theme.bg} rounded-full blur-xl ${theme.glow} shadow-2xl`}
          animate={{ 
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Epic Enhanced Katana Blade */}
        <motion.div
          className={`relative w-36 h-10 rounded-full border-2 ${theme.border} ${theme.glow} shadow-2xl`}
          style={{
            background: katana.rarity === 'Mythical' 
              ? `linear-gradient(90deg, #0f172a, ${theme.particle}, #ffffff, ${theme.particle}, #0f172a)`
              : `linear-gradient(90deg, #1e293b, ${theme.particle}, #ffffff, ${theme.particle}, #1e293b)`,
          }}
          animate={{
            boxShadow: [
              `0 0 20px ${theme.particle}`,
              `0 0 40px ${theme.particle}`,
              `0 0 20px ${theme.particle}`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Multi-layer Blade Edge Highlights */}
          <div className="absolute top-1 left-3 right-3 h-1 bg-white/80 rounded-full blur-sm" />
          <div className="absolute top-2 left-4 right-4 h-0.5 bg-cyan-300/60 rounded-full" />
          <div className="absolute bottom-1 left-3 right-3 h-1 bg-white/60 rounded-full blur-sm" />
          
          {/* Rune Inscriptions */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`text-xs font-bold ${theme.primary} opacity-60`}>
              {katana.element.slice(0, 3).toUpperCase()}
            </div>
          </div>
          
          {/* Enhanced Katana Handle */}
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-10 h-8 bg-gradient-to-r from-amber-700 to-amber-900 rounded-r-xl border-2 border-amber-600 shadow-lg">
            <div className="absolute inset-1 bg-gradient-to-r from-amber-600 to-amber-800 rounded-r-lg">
              <div className="w-full h-full bg-gradient-to-b from-amber-500 to-amber-700 rounded-r-md" />
              {/* Handle Grip Lines */}
              <div className="absolute inset-x-2 top-1 bottom-1 space-y-1">
                <div className="h-0.5 bg-amber-900/60 rounded-full" />
                <div className="h-0.5 bg-amber-900/60 rounded-full" />
                <div className="h-0.5 bg-amber-900/60 rounded-full" />
              </div>
            </div>
            
            {/* Pommel Gem */}
            <motion.div
              className={`absolute -right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 ${theme.bg} border ${theme.border} rounded-full`}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
          
          {/* Enhanced Epic Particles */}
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${theme.particle}`}
              style={{
                width: i % 2 === 0 ? '3px' : '2px',
                height: i % 2 === 0 ? '3px' : '2px',
                left: `${10 + i * 15}%`,
                top: i % 2 === 0 ? '20%' : '80%'
              }}
              animate={{
                x: [0, Math.random() * 40 - 20, 0],
                y: [0, Math.random() * 30 - 15, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5]
              }}
              transition={{
                duration: katana.rarity === 'Mythical' ? 1.5 : 2.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
          
          {/* Victory Aura for Prize Hunter */}
          {katana.name.includes('Prize') && (
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                background: [
                  'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(147,51,234,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)',
                  'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          )}
          
          {/* Hackathon Lightning Effect */}
          {katana.name.includes('Hackathon') && (
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(45deg, transparent 0%, rgba(255,215,0,0.4) 50%, transparent 100%)',
                  'linear-gradient(135deg, transparent 0%, rgba(255,215,0,0.4) 50%, transparent 100%)',
                  'linear-gradient(225deg, transparent 0%, rgba(255,215,0,0.4) 50%, transparent 100%)',
                  'linear-gradient(315deg, transparent 0%, rgba(255,215,0,0.4) 50%, transparent 100%)'
                ]
              }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
        </motion.div>
        
        {/* Katana Name Tag */}
        <motion.div
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className={`px-3 py-1 ${theme.bg} ${theme.border} border rounded-lg backdrop-blur-sm`}>
            <div className={`text-xs font-bold ${theme.primary}`}>{katana.name}</div>
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

  // Character Level Display Component
  const CharacterDisplay = () => (
    <motion.div
      className="fixed top-24 right-8 z-40"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-slate-800/90 border border-yellow-400/30 rounded-2xl p-6 backdrop-blur-xl shadow-2xl shadow-yellow-400/10">
        {/* Character Avatar */}
        <div className="flex items-center space-x-4 mb-4">
          <motion.div
            className="relative w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full border-2 border-yellow-400 shadow-lg shadow-yellow-400/30"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Crown className="w-8 h-8 text-slate-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <motion.div
              className="absolute -inset-2 border-2 border-yellow-400/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          
          <div>
            <div className="text-yellow-400 font-bold text-xl">Prithviraj</div>
            <div className="text-yellow-300 text-sm">{characterStats.prestigeRank}</div>
          </div>
        </div>
        
        {/* Level and XP */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-yellow-400 font-bold">Level {characterStats.level}</span>
            <span className="text-yellow-300 text-sm">{characterStats.totalXP.toLocaleString()} XP</span>
          </div>
          
          {/* XP Progress Bar */}
          <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(characterStats.totalXP / characterStats.nextLevelXP) * 100}%` }}
              transition={{ duration: 2, delay: 1.5 }}
            />
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="text-center">
              <div className="text-yellow-400 font-bold text-lg">{characterStats.achievements}</div>
              <div className="text-yellow-300">Achievements</div>
            </div>
            <div className="text-center">
              <div className="text-yellow-400 font-bold text-lg">{characterStats.projects}</div>
              <div className="text-yellow-300">Projects</div>
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
          style={{ rotate: galaxyRotation }}
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>

      {/* Character Display */}
      <CharacterDisplay />

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
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600 bg-clip-text text-transparent"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            SAMURAI CODEX
          </motion.h1>
          <motion.p 
            className="text-xl text-slate-300 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Witness the legendary achievements forged in the cosmic dojo of code. 
            Each katana represents mastery earned through dedication and countless battles in the realm of technology.
          </motion.p>
          
          {/* Dojo Mode Toggle */}
          <motion.button
            className="bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-3 rounded-full text-slate-900 font-bold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDojoMode(!isDojoMode)}
          >
            {isDojoMode ? 'Exit Dojo' : 'Enter Sacred Dojo'}
          </motion.button>
        </motion.div>

        {/* Achievement Katanas Galaxy */}
        <motion.section
          className="relative h-screen mb-32"
          style={{ y: dojoY }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ rotate: isDojoMode ? galaxyRotation : 0 }}
          >
            {/* Dojo Platform */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isDojoMode ? 0.3 : 0, scale: isDojoMode ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full border border-amber-400/30 backdrop-blur-sm" />
              <div className="absolute inset-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-full border border-amber-400/20" />
            </motion.div>

            {/* Floating Katanas */}
            {achievementKatanas.map((katana, index) => (
              <FloatingKatana key={katana.id} katana={katana} index={index} />
            ))}
          </motion.div>
          
          {/* Center Title */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <h2 className="text-4xl font-bold text-yellow-400 mb-2">Legendary Arsenal</h2>
            <p className="text-slate-300">Click any katana to reveal its power</p>
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

        {/* Call to Action - Epic Finale */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/80 backdrop-blur-xl border border-yellow-400/20 rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Epic Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-600/5" />
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"
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
                <Sword className="w-8 h-8 text-yellow-400" />
                <h2 className="text-4xl font-bold text-yellow-400">Ready for Epic Quests?</h2>
                <Sparkles className="w-8 h-8 text-amber-400" />
              </motion.div>
              
              <p className="text-slate-300 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
                The dojo is open for new challengers. Join forces with a true code samurai 
                and let's forge legendary solutions that will be remembered across the digital realms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="/contact"
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 px-8 py-4 text-lg font-bold text-slate-900 rounded-2xl shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/50 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ⚔️ Join My Guild
                </motion.a>
                <motion.a
                  href="/projects"
                  className="bg-slate-700/50 border border-slate-500 px-8 py-4 text-lg font-bold text-slate-300 rounded-2xl hover:bg-slate-600/50 transition-all backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🏆 View Conquests
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Katana Detail Modal */}
      <AnimatePresence>
        {selectedKatana && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedKatana(null)}
          >
            <motion.div
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-yellow-400/30 rounded-3xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto backdrop-blur-xl shadow-2xl shadow-yellow-400/10"
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              onClick={e => e.stopPropagation()}
            >
              {(() => {
                const katana = achievementKatanas.find(k => k.id === selectedKatana);
                if (!katana) return null;
                const theme = rarityThemes[katana.rarity as keyof typeof rarityThemes];

                return (
                  <div>
                    {/* Katana Header */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-6">
                        <motion.div
                          className={`p-4 ${theme.bg} rounded-2xl ${theme.border} border ${theme.glow} shadow-xl`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Sword className={`w-12 h-12 ${theme.primary}`} />
                        </motion.div>
                        <div>
                          <h3 className={`text-3xl font-bold ${theme.primary} mb-2`}>{katana.name}</h3>
                          <p className="text-xl text-slate-300 mb-2">{katana.title}</p>
                          <div className="flex items-center space-x-4">
                            <span className={`px-3 py-1 ${theme.bg} ${theme.border} border rounded-full text-sm ${theme.primary} font-bold`}>
                              {katana.rarity}
                            </span>
                            <span className="text-slate-400 text-sm">Forged: {katana.unlockedDate}</span>
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedKatana(null)}
                        className="text-slate-400 hover:text-white transition-colors text-2xl"
                      >
                        ✕
                      </button>
                    </div>

                    {/* Enhanced Katana Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>{katana.element}</div>
                        <div className="text-xs text-slate-400">Element</div>
                      </div>
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>{katana.forgeLevel}</div>
                        <div className="text-xs text-slate-400">Forge Level</div>
                      </div>
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>{katana.achievements.length}</div>
                        <div className="text-xs text-slate-400">Achievements</div>
                      </div>
                      <div className={`${theme.bg} ${theme.border} border rounded-xl p-4 text-center`}>
                        <div className={`text-2xl font-bold ${theme.primary}`}>
                          {katana.hackathonWins || katana.certificateCount || katana.totalPrizes || 'MAX'}
                        </div>
                        <div className="text-xs text-slate-400">
                          {katana.hackathonWins ? 'Hackathon Wins' : 
                           katana.certificateCount ? 'Certificates' : 
                           katana.totalPrizes ? 'Total Prizes' : 'Power Level'}
                        </div>
                      </div>
                    </div>

                    {/* Special Collections */}
                    {(katana.prizes || katana.certifications || katana.recentPrizes) && (
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-white mb-4">
                          {katana.prizes ? 'Hackathon Prizes' : 
                           katana.certifications ? 'Professional Certifications' : 
                           'Recent Achievements'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {(katana.prizes || katana.certifications || katana.recentPrizes || []).map((item, idx) => (
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
                      {katana.description}
                    </p>

                    {/* Achievement List */}
                    <h4 className="text-xl font-bold text-white mb-6">Legendary Deeds</h4>
                    <div className="space-y-4">
                      {katana.achievements.map((achievement, index) => {
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
                              <div className={`text-lg font-bold ${theme.primary}`}>+{achievement.xp}</div>
                              <div className="text-xs text-slate-400">XP</div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Special Ability */}
                    <motion.div
                      className={`mt-8 p-6 ${theme.bg} ${theme.border} border rounded-2xl text-center`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <h4 className={`text-xl font-bold ${theme.primary} mb-2`}>Special Ability</h4>
                      <p className={`text-lg ${theme.secondary} font-bold`}>{katana.specialAbility}</p>
                      <p className="text-slate-400 text-sm mt-2">{katana.power}</p>
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