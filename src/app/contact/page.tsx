'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Send, ExternalLink, Zap, Radio, Satellite, Atom, MessageCircle, Eye, Orbit } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activePortal, setActivePortal] = useState<string | null>(null);
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [portalEnergy, setPortalEnergy] = useState(0);
  const [dimensionalRift, setDimensionalRift] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cosmic particle field effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    // Create cosmic particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 3 + 1,
        color: ['#60a5fa', '#a855f7', '#34d399'][Math.floor(Math.random() * 3)],
        alpha: Math.random() * 0.8 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.save();
        ctx.globalAlpha = particle.alpha;
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Portal energy animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPortalEnergy(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const communicationPortals = [
    {
      id: 'email',
      title: 'Email Transmission Portal',
      description: 'Direct quantum-encrypted communication',
      icon: Mail,
      color: 'from-blue-500 to-cyan-400',
      dimension: 'Digital Realm',
      contact: 'i.prv.2509@gmail.com',
      link: 'mailto:i.prv.2509@gmail.com',
      particles: 25,
      energy: 'High Frequency'
    },
    {
      id: 'github',
      title: 'Code Repository Gateway',
      description: 'Access the source dimension',
      icon: Github,
      color: 'from-purple-500 to-pink-400',
      dimension: 'Code Universe',
      contact: '@PR-ODINSON',
      link: 'https://github.com/PR-ODINSON',
      particles: 30,
      energy: 'Data Stream'
    },
    {
      id: 'linkedin',
      title: 'Professional Network Bridge',
      description: 'Connect across professional dimensions',
      icon: Linkedin,
      color: 'from-blue-600 to-indigo-500',
      dimension: 'Corporate Reality',
      contact: 'Prithviraj Verma',
      link: 'https://www.linkedin.com/in/prithviraj-verma-b58707289',
      particles: 20,
      energy: 'Network Sync'
    },
    {
      id: 'location',
      title: 'Spatial Coordinates Portal',
      description: 'Physical dimension anchor point',
      icon: MapPin,
      color: 'from-green-500 to-emerald-400',
      dimension: 'Physical Realm',
      contact: 'India',
      particles: 15,
      energy: 'Geo-Lock'
    }
  ];

  const dimensionalProjects = [
    {
      title: 'AI/ML Research Dimension',
      description: 'Explore consciousness and emotion through PPG signals',
      icon: '🧠',
      status: 'Active Portal',
      energy: 'Neural Frequency'
    },
    {
      title: 'Open Source Universe',
      description: 'Collaborative coding across realities',
      icon: '🔧',
      status: 'Open Gateway',
      energy: 'Code Harmony'
    },
    {
      title: 'Healthcare AI Realm',
      description: 'Healing through artificial intelligence',
      icon: '🏥',
      status: 'Medical Portal',
      energy: 'Life Force'
    },
    {
      title: 'Generative AI Cosmos',
      description: 'Creating new realities with AI',
      icon: '✨',
      status: 'Creation Zone',
      energy: 'Genesis Wave'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    setDimensionalRift(true);
    
    setTimeout(() => {
      const subject = encodeURIComponent(formData.subject || 'Interdimensional Communication');
      const body = encodeURIComponent(
        `Greetings from another dimension!\n\n${formData.message}\n\nTransmitted through the cosmic web by:\n${formData.name}\nReturn portal: ${formData.email}`
      );
      window.open(`mailto:i.prv.2509@gmail.com?subject=${subject}&body=${body}`);
      setIsTransmitting(false);
      setDimensionalRift(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 relative overflow-hidden">
      {/* Cosmic Particle Field Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }}
      />

      {/* Dimensional Energy Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500/10 to-transparent"
          style={{
            transform: `rotate(${portalEnergy}deg)`,
            transition: 'transform 0.1s linear'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Portal Gateway Header */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent"
            animate={{
              textShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(34, 211, 238, 0.8)',
                '0 0 20px rgba(59, 130, 246, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            INTERDIMENSIONAL
            <br />
            COMMUNICATION PORTAL
          </motion.h1>

          <motion.p 
            className="text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to the nexus of reality convergence. Here, messages transcend dimensional boundaries,
            traveling through cosmic highways to establish connection across infinite possibilities.
          </motion.p>

          <motion.div
            className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-cyan-400/30"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-cyan-200 font-medium">Portal Status: ACTIVE</span>
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Communication Portals Grid */}
        <motion.section 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-200">
            Choose Your Dimensional Gateway
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {communicationPortals.map((portal, index) => {
              const Icon = portal.icon;
              const isActive = activePortal === portal.id;
              
              return (
                <motion.div
                  key={portal.id}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  onHoverStart={() => setActivePortal(portal.id)}
                  onHoverEnd={() => setActivePortal(null)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 ${
                    isActive 
                      ? 'border-cyan-400/60 bg-gradient-to-br from-blue-500/20 to-cyan-500/20' 
                      : 'border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/40'
                  }`}>
                    
                    <div className="relative flex items-center justify-center mb-6">
                      <motion.div
                        className={`p-6 rounded-full bg-gradient-to-r ${portal.color} relative`}
                        animate={isActive ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    <div className="text-center relative z-10">
                      <h3 className="text-2xl font-bold mb-3 text-cyan-200">
                        {portal.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {portal.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Dimension:</span>
                          <span className="text-cyan-300 font-medium">{portal.dimension}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">Energy Type:</span>
                          <span className="text-purple-300 font-medium">{portal.energy}</span>
                        </div>
                      </div>

                      {portal.link ? (
                        <motion.a
                          href={portal.link}
                          target={portal.id === 'email' ? '_self' : '_blank'}
                          rel={portal.id === 'email' ? undefined : 'noopener noreferrer'}
                          className={`inline-flex items-center space-x-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r ${portal.color} text-white`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Open Portal</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      ) : (
                        <div className="text-cyan-300 font-semibold">{portal.contact}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Dimensional Message Transmission Portal */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dimensional Message Transmission
            </h2>
            <p className="text-cyan-200 max-w-2xl mx-auto">
              Compose your message and watch it travel through interdimensional space-time 
              to reach its destination across the cosmic web.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <motion.div 
              className={`relative p-10 rounded-2xl border backdrop-blur-sm transition-all duration-1000 ${
                dimensionalRift 
                  ? 'border-purple-400/80 bg-gradient-to-br from-purple-500/30 to-pink-500/30' 
                  : 'border-cyan-400/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50'
              }`}
            >
              <AnimatePresence>
                {isTransmitting && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-2xl backdrop-blur-sm z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-6 border-4 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Transmitting Through Dimensions
                      </h3>
                      <p className="text-purple-100">
                        Your message is traveling through the cosmic web...
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="text-center mb-8">
                  <motion.div
                    className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Radio className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-200 font-medium">Quantum Communication Array</span>
                    <Satellite className="w-5 h-5 text-pink-400" />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-cyan-200 font-medium mb-3">
                      <Atom className="w-4 h-4 inline mr-2" />
                      Sender Identity
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your dimensional signature..."
                    />
                  </div>
                  
                  <div className="relative">
                    <label className="block text-cyan-200 font-medium mb-3">
                      <Radio className="w-4 h-4 inline mr-2" />
                      Return Portal Frequency
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-6 py-4 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.portal@cosmic.web"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label className="block text-cyan-200 font-medium mb-3">
                    <Zap className="w-4 h-4 inline mr-2" />
                    Transmission Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-4 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Dimensional collaboration, cosmic alliance..."
                  />
                </div>
                
                <div className="relative">
                  <label className="block text-cyan-200 font-medium mb-3">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Interdimensional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl bg-slate-800/50 border border-cyan-400/30 text-white placeholder-slate-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30 transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Share your visions of collaboration across dimensions..."
                  />
                </div>
                
                <div className="text-center pt-4">
                  <motion.button
                    type="submit"
                    disabled={isTransmitting}
                    className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center space-x-3">
                      <Send className="w-5 h-5" />
                      <span>{isTransmitting ? 'Transmitting...' : 'Initiate Transmission'}</span>
                      <Zap className="w-5 h-5" />
                    </span>
                  </motion.button>
                  
                  <p className="text-slate-400 text-sm mt-4">
                    Your message will traverse quantum channels and arrive in the primary dimension
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.section>

        {/* Dimensional Collaboration Zones */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Active Collaboration Dimensions
            </h2>
            <p className="text-cyan-200 max-w-3xl mx-auto">
              These are the dimensional zones currently accessible for collaboration and project convergence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {dimensionalProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 backdrop-blur-sm hover:border-green-400/30 transition-all duration-500">
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-6xl">{project.icon}</span>
                      <div className="text-right">
                        <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium">
                          {project.status}
                        </div>
                        <div className="text-xs text-slate-400 mt-1">{project.energy}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-green-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Portal Status & Quick Access */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="relative p-12 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-400/30 backdrop-blur-sm">
              <motion.div
                className="mb-8"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/30">
                  <Eye className="w-6 h-6 text-cyan-400" />
                  <span className="text-2xl font-bold text-cyan-200">Portal Matrix Online</span>
                  <Orbit className="w-6 h-6 text-blue-400" />
                </div>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Establish Cross-Dimensional Connection
              </h2>
              
              <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                The interdimensional communication matrix is fully operational. Whether you seek 
                collaboration in AI, wish to contribute to the cosmic code repository, or explore 
                uncharted dimensions of innovation, the portal awaits your signal.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <motion.a
                  href="mailto:i.prv.2509@gmail.com?subject=Interdimensional%20Collaboration"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full inline-flex items-center space-x-3 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Primary Portal</span>
                </motion.a>
                
                <motion.a
                  href="https://www.linkedin.com/in/prithviraj-verma-b58707289"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-400 text-white font-bold rounded-full inline-flex items-center space-x-3 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Network Bridge</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/PR-ODINSON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold rounded-full inline-flex items-center space-x-3 text-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Code Universe</span>
                </motion.a>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-400">99.9%</div>
                    <div className="text-slate-400">Portal Stability</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-400">24/7</div>
                    <div className="text-slate-400">Dimensional Access</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">∞</div>
                    <div className="text-slate-400">Collaboration Potential</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ContactPage;