'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Award, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Basic scrolled state
      setScrolled(currentScrollY > 50);
      
      // Track scroll direction
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > 100);
      
      // Update scroll position
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/experience', label: 'Experience', icon: User },
    { href: '/projects', label: 'Projects', icon: Code },
    { href: '/research', label: 'Research', icon: Briefcase },
    { href: '/achievements', label: 'Achievements', icon: Award },
    { href: '/contact', label: 'Contact', icon: Mail },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  // Calculate dynamic values based on scroll
  const navOpacity = Math.max(0.85, 1 - scrollY * 0.0005);
  const navScale = Math.max(0.75, 1 - scrollY * 0.0003);
  const navBlur = Math.min(20, scrollY * 0.05);
  const navPadding = Math.max(16, 32 - scrollY * 0.02);
  const navRadius = Math.min(24, scrollY * 0.03);
  
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? 'bg-black/70 backdrop-blur-xl border-b border-white/20 shadow-2xl'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: 0,
          opacity: navOpacity,
          scale: navScale,
        }}
        transition={{ 
          duration: 0.5, 
          ease: 'easeInOut',
          scale: { duration: 0.4, ease: 'easeOut' }
        }}
        style={{
          boxShadow: scrolled ? `0 8px 32px rgba(0, 0, 0, ${Math.min(0.3, scrollY * 0.001)})` : 'none',
          backdropFilter: `blur(${navBlur}px)`
        }}
      >
        <motion.div 
          className="mx-auto px-4 sm:px-6 lg:px-8"
          animate={{
            maxWidth: scrolled ? '32rem' : '80rem',
            paddingLeft: `${navPadding}px`,
            paddingRight: `${navPadding}px`,
            borderRadius: `${navRadius}px`
          }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeInOut',
            maxWidth: { duration: 0.6, ease: 'easeOut' }
          }}
        >
          <motion.div 
            className="flex items-center"
            animate={{
              height: scrolled ? '70px' : '80px',
              paddingTop: scrolled ? '10px' : '12px',
              paddingBottom: scrolled ? '10px' : '12px',
              justifyContent: scrolled ? 'center' : 'space-between'
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {/* Enhanced Logo */}
            <Link href="/">
              <motion.div
                className="relative group"
                whileHover={{ scale: scrolled ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: scrolled ? 1 : 1
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Logo Background Glow */}
                                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-sm"
                    animate={{
                      opacity: scrolled ? 0.8 : 0.6,
                      scale: scrolled ? 1.2 : 1
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  />
                
                {/* Logo Text */}
                <motion.div
                  className="relative z-10 px-3 py-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  animate={{
                    fontSize: scrolled ? '1.125rem' : '1.25rem'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  PV
                </motion.div>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center"
              animate={{
                opacity: scrolled ? 1 : 1,
                scale: scrolled ? 0.85 : 1,
                x: scrolled ? 0 : 0
              }}
              style={{
                gap: scrolled ? '1rem' : '2rem'
              }}
              transition={{ 
                duration: 0.4, 
                ease: 'easeInOut',
                opacity: { duration: 0.3 }
              }}
            >
              {navItems.map((item, index) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className="relative flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: scrolled ? 0.9 : 1,
                      opacity: scrolled ? 1 : 1
                    }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * 0.02
                    }}
                  >
                    {/* Icon with enhanced animations */}
                    <motion.div
                      animate={{
                        scale: scrolled ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon className="w-4 h-4 group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
                    </motion.div>
                    
                    {/* Text with scroll-responsive size */}
                    <motion.span
                      animate={{
                        fontSize: scrolled ? '0.9rem' : '1rem'
                      }}
                      transition={{ duration: 0.3 }}
                      className="font-medium"
                    >
                      {item.label}
                    </motion.span>
                    
                    {/* Enhanced underline effect */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ 
                        width: '100%', 
                        opacity: 1,
                        boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Background glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </Link>
              ))}
            </motion.div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 rounded-lg"
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: scrolled ? 0 : 1,
                opacity: scrolled ? 0 : 1,
                x: scrolled ? 50 : 0
              }}
              transition={{ 
                duration: 0.4, 
                ease: 'easeInOut',
                opacity: { duration: 0.3 }
              }}
            >
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                className="w-6 h-6 flex items-center justify-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0 },
                    open: { rotate: 45 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.span>
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.nav>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Enhanced Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 bg-black/90 backdrop-blur-xl border-l border-white/20"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-8 px-8">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.href} 
                    variants={itemVariants}
                    custom={index}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      <motion.div
                        className="flex items-center space-x-4 text-lg font-medium group relative"
                        whileHover={{ x: 10, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <item.icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                        </motion.div>
                        <span className="group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                        
                        {/* Mobile item glow effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileHover={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  variants={itemVariants}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href="https://github.com/PR-ODINSON"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 hover:bg-primary/20 transition-colors backdrop-blur-sm border border-white/10"
                      whileHover={{ scale: 1.1, y: -2, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 