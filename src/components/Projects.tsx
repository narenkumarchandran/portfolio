import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, FileText, Globe, Cpu, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';

// ── Main resume projects ────────────────────────────────────────────────────
const MAIN_PROJECTS = [
  {
    id: 'movie-streaming',
    label: 'FULL-STACK / WEB',
    date: 'Sep 2025',
    title: 'Movie Streaming Website',
    subtitle: 'Full-Stack Streaming Platform with JWT Auth & TMDB API',
    description:
      'Engineered a full-stack streaming platform to enable personalized watch-list management by implementing secure JWT authentication and a custom responsive UI, resulting in a seamless cross-device experience and reduced unauthorized access risks.',
    bullets: [
      'Engineered a full-stack streaming platform with secure JWT authentication and custom responsive UI',
      'Developed a React (Vite) interface with debounced live search, genre-based filtering, and dynamic hover-triggered backgrounds',
      'Sourced live metadata from the TMDB API for a smooth and accurate browsing experience',
    ],
    tags: ['React', 'Vite', 'MongoDB', 'Express', 'Node.js', 'JWT', 'TMDB API'],
    github: 'https://github.com/narenkumarchandran/nkmoviesdemo',
    live: 'https://nkmoviesdemo-td7u.vercel.app/',
    report: null as string | null,
    accent: 'cyan',
    icon: Globe,
  },
  {
    id: 'rewear',
    label: 'FULL-STACK / AI',
    date: 'Jan 2026',
    title: 'ReWear Clothing Exchange',
    subtitle: 'AI-Powered Second-Hand Clothing Marketplace',
    description:
      "Implemented an AI-powered second-hand clothing marketplace to streamline sellers so they don't have to manually write product details — using Gemini 2.0 Flash to extract title, description, category, size, and condition directly from an uploaded clothing image.",
    bullets: [
      'Used Gemini 2.0 Flash to auto-extract listing details (title, description, category, size, condition) from clothing images',
      'Architected a personalized recommendation and safety layer combining a hybrid KNN + BERT engine with NSFW content moderation',
      'Built a Gemini-powered shopping assistant for conversational product discovery',
    ],
    tags: ['React', 'Vite', 'MongoDB', 'Express', 'Node.js', 'JavaScript', 'Gemini 2.0 Flash', 'TailwindCSS'],
    github: 'https://github.com/narenkumarchandran/ReWear-second_hand_clothes_exchange_web',
    live: 'https://re-wear-second-hand-clothes-exchang-mu.vercel.app/',
    report: null as string | null,
    accent: 'neon',
    icon: Zap,
  },
  {
    id: 'smart-ambu',
    label: 'EMBEDDED / IOT',
    date: 'April 2026',
    title: 'IoT-Based Smart Ambu Bag Monitor',
    subtitle: 'Real-Time Pressure Sensing & Remote Monitoring System',
    description:
      'Designed a real-time pressure-sensing module to give operators feedback that manual Ambu bags normally lack — sampling an MPX5010DP sensor on an Arduino at ~20Hz to compute pressure and breathing rate.',
    bullets: [
      'Designed a real-time pressure-sensing module using MPX5010DP on Arduino at ~20Hz for pressure and breathing rate',
      'Configured a wireless alert and monitoring pipeline so clinicians can track ventilation remotely using an ESP32 to relay data over MQTT to a Node-RED dashboard',
      'Built threshold alarms in Node-RED for unsafe pressure levels, enabling remote intervention',
    ],
    tags: ['ESP32', 'Arduino', 'MPX5010DP Pressure Sensor', 'MQTT', 'Node-RED', 'JSON', 'IoT'],
    github: 'https://github.com/narenkumarchandran/Smart-AMBU-MONITOR',
    live: null as string | null,
    report: 'https://github.com/narenkumarchandran/Smart-AMBU-MONITOR/blob/main/docs/Mini-Project_Report.pdf',
    accent: 'amber',
    icon: Cpu,
  },
];

// ── Extra / older projects ───────────────────────────────────────────────────
const EXTRA_PROJECTS = [
  {
    title: 'AI-Powered Internship Assistant API',
    desc: 'Built with FastAPI, PostgreSQL, SQLAlchemy, and Groq API (LLaMA 3.3-70B) — features JWT auth, resume upload/storage, and LLM parsing pipeline for structured candidate data extraction.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'LLaMA 3.3-70B', 'Groq API', 'JWT'],
    github: 'https://github.com/narenkumarchandran/AI_Internship_Assistant',
    live: null as string | null,
    accent: 'neon',
    icon: Zap,
    org: 'Infosys Springboard',
  },
  {
    title: 'GPU Price Monitoring System',
    desc: 'Real-time GPU price tracker scraping Newegg with automated 10-minute updates, SQL historical analysis, and Flask web interface with price alerts and visualizations.',
    tags: ['Python', 'Flask', 'SQL', 'Selenium', 'Web Scraping'],
    github: 'https://github.com/narenkumarchandran/GPU-Monitoring-System',
    live: null as string | null,
    accent: 'cyan',
    icon: Cpu,
    org: null as string | null,
  },
  {
    title: 'Social Media Feed Parser',
    desc: 'Automated investigation tool to extract posts, messages, and follower data from social media accounts using Selenium, with SQL storage and compliance with data laws.',
    tags: ['Python', 'Selenium', 'SQL', 'OSINT'],
    github: 'https://github.com/aerosibin/Social-Media-Parsing-Tool',
    live: null as string | null,
    accent: 'amber',
    icon: Globe,
    org: null as string | null,
  },
  {
    title: 'Voice Controlled RGB LED System',
    desc: 'Hands-free LED controller using Hugging Face Whisper ASR and Arduino. Streamlit interface for real-time voice and manual control via serial communication.',
    tags: ['Python', 'Whisper', 'Arduino', 'Streamlit', 'Serial Comm'],
    github: 'https://github.com/aerosibin/Voice-Controlled-LED-Interface',
    live: null as string | null,
    accent: 'neon',
    icon: Cpu,
    org: null as string | null,
  },
  {
    title: 'IoT Object Detection Aid',
    desc: 'Arduino-based obstacle detection using HC-SR04 ultrasonic sensor and buzzer alerts. Low-cost proximity aid for visually impaired navigation assistance.',
    tags: ['Arduino', 'Embedded C', 'HC-SR04', 'IoT'],
    github: 'https://github.com/narenkumarchandran',
    live: null as string | null,
    accent: 'amber',
    icon: Cpu,
    org: null as string | null,
  },
];

// ── Accent helpers ───────────────────────────────────────────────────────────
const AC = {
  neon: {
    border: 'border-l-neon',
    badge: 'tech-badge',
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,65,0.1)]',
    text: 'text-neon',
    bg: 'bg-neon/5',
    dot: 'bg-neon',
    btn: '',
  },
  cyan: {
    border: 'border-l-cyber',
    badge: 'tech-badge tech-badge-cyan',
    glow: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.1)]',
    text: 'text-cyber',
    bg: 'bg-cyber/5',
    dot: 'bg-cyber',
    btn: 'btn-cyan',
  },
  amber: {
    border: 'border-l-amber',
    badge: 'tech-badge tech-badge-amber',
    glow: 'hover:shadow-[0_0_30px_rgba(255,170,0,0.1)]',
    text: 'text-amber',
    bg: 'bg-amber/5',
    dot: 'bg-amber',
    btn: 'btn-amber',
  },
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label">// PROJECTS.DIR</p>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white">
            What I've<span className="neon-text"> Built</span>
          </h2>
        </motion.div>

        {/* ── Main resume projects ─────────────────────────────────────────── */}
        <div className="space-y-6">
          {MAIN_PROJECTS.map((project, i) => {
            const ac = AC[project.accent as keyof typeof AC];
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={project.accent === 'neon' ? 'rgba(0, 255, 65, 0.15)' : project.accent === 'cyan' ? 'rgba(0, 255, 255, 0.15)' : 'rgba(255, 170, 0, 0.15)'}
                  className={`brutalist-card p-0 ${ac.glow} border-l-[3px] ${ac.border} transition-all duration-300`}
                >
                  {/* Top bar */}
                  <div className={`px-6 py-3 border-b border-void-300 ${ac.bg} flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${ac.text} opacity-70`} />
                      <span className={`font-mono text-[10px] tracking-widest ${ac.text} opacity-70`}>{project.label}</span>
                    </div>
                    <span className="font-mono text-[10px] text-white/30">{project.date}</span>
                  </div>

                  <div className="p-6">
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Left */}
                      <div>
                        <h3 className="font-display font-bold text-white text-2xl mb-1">{project.title}</h3>
                        <p className={`font-mono text-xs ${ac.text} mb-4 opacity-60`}>{project.subtitle}</p>
                        <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>
                        <ul className="space-y-2">
                          {project.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-xs text-white/40 font-mono leading-relaxed">
                              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${ac.dot}`} />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <p className="font-mono text-[10px] text-white/20 tracking-widest mb-3">TECH STACK</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map(tag => (
                              <span key={tag} className={ac.badge}>{tag}</span>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-4 border-t border-void-300">
                          {/* GitHub */}
                          <MagneticButton
                            as="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn-neon ${ac.btn} flex items-center gap-2 text-xs`}
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>SOURCE CODE</span>
                          </MagneticButton>

                          {/* Live Demo */}
                          {project.live && (
                            <MagneticButton
                              as="a"
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-white border border-void-300 hover:border-white/30 px-4 py-2 transition-all"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              LIVE DEMO
                            </MagneticButton>
                          )}

                          {/* Report */}
                          {project.report && (
                            <MagneticButton
                              as="a"
                              href={project.report}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-white border border-void-300 hover:border-white/30 px-4 py-2 transition-all"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              REPORT PDF
                            </MagneticButton>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>

        {/* ── See All Projects toggle ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <button
            onClick={() => setShowAll(v => !v)}
            className="w-full flex items-center justify-between px-6 py-4 border border-void-300 hover:border-neon/40 hover:bg-neon/3 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neon/60 tracking-widest">// MORE.PROJECTS</span>
              <span className="font-display font-semibold text-white group-hover:text-neon transition-colors">
                {showAll ? 'Hide older projects' : `See all projects  (+${EXTRA_PROJECTS.length} more)`}
              </span>
            </div>
            <div className={`text-neon/50 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}>
              <ChevronDown className="w-5 h-5" />
            </div>
          </button>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                  {EXTRA_PROJECTS.map((project, i) => {
                    const ac = AC[project.accent as keyof typeof AC];
                    const Icon = project.icon;
                    return (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.06 }}
                        className="h-full"
                      >
                        <SpotlightCard
                          enableTilt={false}
                          spotlightColor={project.accent === 'neon' ? 'rgba(0, 255, 65, 0.1)' : project.accent === 'cyan' ? 'rgba(0, 255, 255, 0.1)' : 'rgba(255, 170, 0, 0.1)'}
                          className={`brutalist-card ${ac.glow} h-full p-5 border-l-[3px] ${ac.border} flex flex-col transition-all duration-300 group`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Icon className={`w-4 h-4 ${ac.text} opacity-50`} />
                            {project.org && (
                              <span className={`font-mono text-[9px] ${ac.text} opacity-50 tracking-widest`}>
                                {project.org.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/30 hover:text-white transition-colors"
                              aria-label="GitHub"
                            >
                              <Github className="w-3.5 h-3.5" />
                            </a>
                            {project.live && (
                              <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/30 hover:text-white transition-colors"
                                aria-label="Live Demo"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className={`font-display font-bold text-white text-base mb-2 group-hover:${ac.text} transition-colors`}>
                          {project.title}
                        </h3>
                        <p className="text-white/40 text-xs leading-relaxed flex-1 mb-4">{project.desc}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map(tag => (
                              <span key={tag} className={`${ac.badge} text-[10px]`}>{tag}</span>
                            ))}
                          </div>
                        </SpotlightCard>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <MagneticButton
            as="a"
            href="https://github.com/narenkumarchandran"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon inline-flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            <span>VIEW ALL ON GITHUB</span>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
