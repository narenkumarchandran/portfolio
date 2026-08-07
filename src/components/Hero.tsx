import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Cpu } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';

const BOOT_SEQUENCE = [
  { text: '> BIOS v2.6.0 — Narenkumar C | Chennai, India', delay: 0 },
  { text: '> [OK] B.Tech CSE (IoT) @ Shiv Nadar University: CGPA 8.9', delay: 400 },
  { text: '> [OK] Shiv Nadar University: B.Tech CSE (IoT) · CGPA 8.9', delay: 800 },
  { text: '> [OK] Infosys AI/ML Internship: FastAPI + LLaMA 3.3-70B', delay: 1200 },
  { text: '> [OK] Smart-AMBU: MPX5010DP + Arduino + MQTT + Node-RED', delay: 1600 },
  { text: '> [OK] ReWear: Gemini 2.0 Flash + KNN + BERT pipeline', delay: 2000 },
  { text: '> [OK] Movie Streaming: React + JWT + TMDB API', delay: 2400 },
  { text: '> [OK] Deputy Club Head @ SNUC Potential Robotics Club', delay: 2800 },
  { text: '> [OK] NPTEL: LLM · Ethical Hacking | Deloitte: Data Analytics', delay: 3200 },
  { text: '> ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', delay: 3600 },
  { text: '> SYSTEM READY. Welcome, Narenkumar C.', delay: 3900, highlight: true },
];

const TAGLINES = [
  'Full-Stack Web Development',
  'IoT & Embedded Systems',
  'AI/ML Engineering',
  'RAG-Powered Applications',
  'Real-Time IoT Monitoring',
];

const Hero: React.FC = () => {
  const [bootLines, setBootLines] = useState<typeof BOOT_SEQUENCE>([]);
  const [taglineIdx, setTaglineIdx] = useState(0);
  const [displayTagline, setDisplayTagline] = useState('');
  const [taglineTyping, setTaglineTyping] = useState(true);
  const bootDone = useRef(false);

  useEffect(() => {
    if (bootDone.current) return;
    bootDone.current = true;
    BOOT_SEQUENCE.forEach((line) => {
      setTimeout(() => {
        setBootLines(prev => [...prev, line]);
      }, line.delay);
    });
  }, []);

  useEffect(() => {
    const target = TAGLINES[taglineIdx];
    let i = 0;
    setDisplayTagline('');
    setTaglineTyping(true);

    const type = setInterval(() => {
      if (i < target.length) {
        setDisplayTagline(target.slice(0, i + 1));
        i++;
      } else {
        clearInterval(type);
        setTaglineTyping(false);
        setTimeout(() => {
          setTaglineIdx(idx => (idx + 1) % TAGLINES.length);
        }, 2200);
      }
    }, 60);

    return () => clearInterval(type);
  }, [taglineIdx]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-10 px-6 overflow-hidden">
      <div className="grid-bg" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Main content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse-neon" />
              <span className="font-mono text-xs text-neon/70 tracking-widest">SYSTEM ONLINE — OPEN TO OPPORTUNITIES</span>
            </div>

            <div className="mb-4 overflow-hidden">
              <h1
                className="text-6xl lg:text-8xl font-display font-bold leading-none text-white glitch cursor-pointer select-none"
                data-text="NAREN"
              >
                NAREN
              </h1>
              <h1
                className="text-6xl lg:text-8xl font-display font-bold leading-none neon-text glitch cursor-pointer select-none"
                data-text="KUMAR"
              >
                KUMAR
              </h1>
              <div className="flex items-end gap-3 mt-1">
                <span className="font-mono text-white/30 text-base tracking-[0.3em] uppercase">CHANDRAN</span>
                <Cpu className="w-4 h-4 text-neon/40 mb-1" />
              </div>
            </div>

            <div className="mb-8 h-10 flex items-center">
              <span className="font-mono text-base lg:text-lg text-white/60 mr-2">~/</span>
              <span className="font-mono text-base lg:text-lg text-cyber">
                {displayTagline}
              </span>
              {taglineTyping && <span className="cursor-blink" />}
            </div>

            <p className="text-white/50 text-sm leading-relaxed max-w-md mb-10 font-mono">
              B.Tech CSE (IoT) @ Shiv Nadar University · CGPA 8.9 ·
              Deputy Club Head @ SNUC Potential Robotics Club ·
              AI/ML Intern @ Infosys Springboard.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <MagneticButton onClick={scrollToProjects} className="btn-neon group flex items-center gap-2">
                <span>VIEW PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href={`${import.meta.env.BASE_URL}Resume1.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon btn-cyan flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD CV</span>
              </MagneticButton>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-white/20 tracking-widest">CONNECT://</span>
              <MagneticButton
                as="a"
                href="https://github.com/narenkumarchandran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-void-300 text-white/50 hover:border-neon hover:text-neon transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://linkedin.com/in/narenkumarchandran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-void-300 text-white/50 hover:border-cyber hover:text-cyber transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="mailto:narenkumarchandran@gmail.com"
                className="p-2.5 border border-void-300 text-white/50 hover:border-amber hover:text-amber transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </MagneticButton>
            </div>
          </motion.div>

          {/* Right — Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <SpotlightCard enableTilt={false} className="terminal shadow-[0_0_80px_rgba(0,255,65,0.08)] border-none">
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff5f56]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-neon" />
                <span className="font-mono text-xs text-white/30 ml-4 tracking-wider">
                  narenkumar@portfolio:~$ boot --init
                </span>
              </div>

              <div className="terminal-body space-y-0.5">
                {bootLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-xs leading-6 ${
                      line.highlight ? 'text-neon font-bold neon-text' : 'text-neon/60'
                    }`}
                  >
                    {line.text}
                  </motion.div>
                ))}
                {bootLines.length < BOOT_SEQUENCE.length && <span className="cursor-blink" />}
                {bootLines.length === BOOT_SEQUENCE.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs text-white/40 mt-4 flex items-center gap-2"
                  >
                    <span>narenkumar@portfolio:~$</span>
                    <span className="cursor-blink" />
                  </motion.div>
                )}
              </div>

              <div className="border-t border-void-300 px-5 py-3 flex items-center justify-between">
                <div className="flex gap-6">
                  {[
                    { label: 'CGPA', value: '8.9' },
                    { label: 'CERTS', value: '3' },
                  ].map(stat => (
                    <div key={stat.label} className="text-center">
                      <div className="font-mono text-neon text-sm font-bold">{stat.value}</div>
                      <div className="font-mono text-white/30 text-[10px] tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="font-mono text-[10px] text-neon/30 tracking-wider">SYS:OK</div>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] text-white/20 tracking-widest">SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-[1px] h-8 bg-gradient-to-b from-neon/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
