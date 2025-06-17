'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Code, Award, Mail, ChevronRight } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
    };

    // Intersection Observer for active section detection
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -80% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe sections if on homepage
    if (pathname === '/') {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.observe(section));
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const navItems = [
    { href: '/', label: 'Home', icon: Home, id: 'home' },
    { href: '/experience', label: 'Experience', icon: User, id: 'experience' },
    { href: '/projects', label: 'Projects', icon: Code, id: 'projects' },
    { href: '/research', label: 'Research', icon: Briefcase, id: 'research' },
    { href: '/achievements', label: 'Achievements', icon: Award, id: 'achievements' },
    { href: '/contact', label: 'Contact', icon: Mail, id: 'contact' },
  ];

  const isActive = (href: string, id: string) => {
    if (pathname === href) return true;
    if (pathname === '/' && activeSection === id) return true;
    return false;
  };

  const menuVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
    closed: {
      y: 20,
      opacity: 0,
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Enhanced Sticky Navigation */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-strong shadow-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            
            {/* Enhanced Logo */}
            <Link href="/" onClick={closeMenu}>
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Logo Background Glow */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"
                  layoutId="logoGlow"
                />
                
                {/* Logo Container */}
                <div className="relative flex items-center space-x-3 px-3 py-2">
                  {/* Logo Icon */}
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">PV</span>
                  </div>
                  
                  {/* Logo Text - Hidden on mobile */}
                  <div className="hidden sm:block">
                    <div className="text-lg font-semibold gradient-text">
                      Prithviraj
                    </div>
                    <div className="text-xs text-muted-foreground -mt-1">
                      Developer
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href, item.id);
                
                return (
                  <Link key={item.href} href={item.href}>
                    <motion.div
                      className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 group ${
                        active
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Active Indicator */}
                      {active && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-primary rounded-lg opacity-10"
                          layoutId="activeTab"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      {/* Icon */}
                      <Icon 
                        size={16} 
                        className={`transition-colors ${
                          active ? 'text-primary' : 'group-hover:text-primary'
                        }`} 
                      />
                      
                      {/* Label */}
                      <span className="text-sm font-medium">
                        {item.label}
                      </span>
                      
                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-primary rounded-lg opacity-0 group-hover:opacity-5 transition-opacity duration-200"
                        initial={false}
                      />
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors duration-200"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="w-6 h-6 relative">
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0"
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Enhanced Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] glass-strong border-l border-white/10 z-50 md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">PV</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Prithviraj Verma</div>
                    <div className="text-sm text-muted-foreground">Full Stack Developer</div>
                  </div>
                </div>
                <motion.button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              {/* Menu Items */}
              <div className="px-6 py-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(item.href, item.id);
                  
                  return (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link href={item.href} onClick={closeMenu}>
                        <motion.div
                          className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group ${
                            active
                              ? 'bg-gradient-primary text-white'
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                          }`}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Icon */}
                          <div className={`p-2 rounded-lg ${
                            active 
                              ? 'bg-white/20' 
                              : 'bg-muted/50 group-hover:bg-primary/10'
                          }`}>
                            <Icon 
                              size={20} 
                              className={active ? 'text-white' : 'group-hover:text-primary'} 
                            />
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1">
                            <div className="font-medium">{item.label}</div>
                            <div className={`text-sm ${
                              active ? 'text-white/70' : 'text-muted-foreground'
                            }`}>
                              {item.href === '/' ? 'Welcome page' : 
                               item.href === '/experience' ? 'My journey' :
                               item.href === '/projects' ? 'My work' :
                               item.href === '/research' ? 'Publications' :
                               item.href === '/achievements' ? 'Recognition' :
                               'Get in touch'}
                            </div>
                          </div>
                          
                          {/* Arrow */}
                          <ChevronRight 
                            size={16} 
                            className={`transition-transform group-hover:translate-x-1 ${
                              active ? 'text-white/70' : 'text-muted-foreground'
                            }`} 
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Menu Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-2">
                    Ready to collaborate?
                  </div>
                  <Link href="/contact" onClick={closeMenu}>
                    <motion.div
                      className="btn btn-primary w-full"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Mail size={16} />
                      Let's Connect
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary origin-left z-50"
        style={{
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0
        }}
        initial={{ scaleX: 0 }}
        animate={{ 
          scaleX: typeof window !== 'undefined' ? 
            (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) : 0 
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default Navigation; 