import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';

const navItems = [
  { label: 'home', id: 'home' },
  { label: 'about', id: 'about' },
  { label: 'projects', id: 'projects' },
  { label: 'contact', id: 'contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map(n => n.id);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY + 120 >= el.offsetTop) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-void/95 backdrop-blur-md border-b border-void-300'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 group"
          >
            <Terminal className="w-4 h-4 text-neon" />
            <span className="font-mono text-neon text-sm font-bold tracking-widest">
              NC<span className="text-white">://</span>
              <span className="inline-block w-[7px] h-[13px] bg-neon ml-0.5 animate-cursor-blink align-text-bottom" />
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative font-mono text-xs tracking-widest px-4 py-2 transition-colors group"
              >
                <span className={`transition-colors ${
                  activeSection === item.id
                    ? 'text-neon'
                    : 'text-white/50 hover:text-white'
                }`}>
                  [{item.label}]
                </span>
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon"
                  />
                )}
              </button>
            ))}
            <a
              href={`${import.meta.env.BASE_URL}Resume1.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon ml-4"
            >
              <span>./resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neon p-2 border border-neon/30"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 py-4 border-t border-void-300 bg-void"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left px-4 py-3 font-mono text-xs tracking-widest text-white/60 hover:text-neon transition-colors"
                >
                  $ ./{item.label}
                </button>
              ))}
              <a
                href={`${import.meta.env.BASE_URL}Resume1.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 font-mono text-xs tracking-widest text-neon"
              >
                $ ./resume --download
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
