import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SpotlightCard from './ui/SpotlightCard';
import MagneticButton from './ui/MagneticButton';

// ── Timeline data ────────────────────────────────────────────────────────────
const TIMELINE = [
  {
    date: 'Aug 2023',
    role: 'B.Tech CSE (IoT)',
    org: 'Shiv Nadar University, Chennai',
    detail: 'CGPA 8.9 · Coursework: DSA, DBMS, OS, CN, AI/ML',
    accent: 'neon',
    current: false,
    link: null as string | null,
  },
  {
    date: 'Aug 2024',
    role: 'POC Member',
    org: 'SNUC Potential — Robotics Club',
    detail: 'Started as core member; contributed to early-stage embedded systems workshops.',
    accent: 'amber',
    current: false,
    link: null as string | null,
  },
  {
    date: 'Early 2025',
    role: 'Technical Lead',
    org: 'SNUC Potential — Robotics Club',
    detail: 'Led robotics project teams; organised IoT and microcontroller sessions.',
    accent: 'amber',
    current: false,
    link: null as string | null,
  },
  {
    date: 'Late 2025',
    role: 'Deputy Club Head',
    org: 'SNUC Potential — Robotics Club',
    detail: 'Conducted hands-on workshops on Arduino, ESP32, Raspberry Pi and IoT fundamentals; organised hackathons.',
    accent: 'amber',
    current: true,
    link: null as string | null,
  },
  {
    date: 'Jul 2026',
    role: 'AI/ML Intern',
    org: 'Infosys Springboard',
    detail: 'Built AI-powered Internship Assistant API using FastAPI, PostgreSQL, Groq API (LLaMA 3.3-70B), and RAG pipeline.',
    accent: 'cyan',
    current: true,
    link: 'https://github.com/narenkumarchandran/AI_Internship_Assistant',
  },
];

// ── Certifications ───────────────────────────────────────────────────────────
const CERTIFICATIONS = [
  {
    title: 'Intro to Large Language Models',
    issuer: 'NPTEL · IIT Delhi & Bombay',
    date: 'Jul 2025',
    url: 'https://drive.google.com/file/d/1yxOiEgDK5vcgRh5t9EXZaKdKKUV6193w/view',
    color: 'neon',
  },
  {
    title: 'Ethical Hacking',
    issuer: 'NPTEL · IIT Kharagpur',
    date: 'Nov 2025',
    url: 'https://drive.google.com/file/d/1DXFAJte__oM8QKQVBp_pZk8Lt7CLGqDQ/view',
    color: 'cyber',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte · Forage',
    date: 'Apr 2026',
    url: 'https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_69d4b39307f4b1c2513fb203_1775550158691_completion_certificate.pdf',
    color: 'amber',
  },
];

// ── Tech stack marquee rows ──────────────────────────────────────────────────
const TECH_ROW1 = [
  { name: 'Python',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',        doc: 'https://docs.python.org/3/' },
  { name: 'C/C++',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',  doc: 'https://en.cppreference.com/w/' },
  { name: 'JavaScript',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',doc: 'https://developer.mozilla.org/' },
  { name: 'TypeScript',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',doc: 'https://www.typescriptlang.org/' },
  { name: 'Java',        img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg',    doc: 'https://docs.oracle.com/en/java/' },
  { name: 'SQL',         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', doc: 'https://dev.mysql.com/doc/' },
  { name: 'React',       img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',          doc: 'https://react.dev/' },
  { name: 'HTML/CSS',    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',          doc: 'https://developer.mozilla.org/' },
  { name: 'FastAPI',     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg',      doc: 'https://fastapi.tiangolo.com/' },
  { name: 'SQLAlchemy',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg', doc: 'https://www.sqlalchemy.org/' },
  { name: 'Groq API',    img: 'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/GCP-Dark.svg', doc: 'https://groq.com/' }, // Using generic for Groq
  { name: 'RAG',         img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg', doc: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/' },
];

const TECH_ROW2 = [
  { name: 'Node.js',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',          doc: 'https://nodejs.org/' },
  { name: 'Express',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',        doc: 'https://expressjs.com/' },
  { name: 'MongoDB',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',        doc: 'https://www.mongodb.com/docs/' },
  { name: 'PostgreSQL',   img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',  doc: 'https://www.postgresql.org/docs/' },
  { name: 'Arduino',      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg',        doc: 'https://docs.arduino.cc/' },
  { name: 'Raspberry Pi', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/raspberrypi/raspberrypi-original.svg',doc: 'https://www.raspberrypi.com/documentation/' },
  { name: 'Git',          img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',                doc: 'https://git-scm.com/doc' },
  { name: 'TailwindCSS',  img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',doc: 'https://tailwindcss.com/' },
  { name: 'Gemini 2.0',   img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png', doc: 'https://deepmind.google/technologies/gemini/' },
  { name: 'TMDB API',     img: 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg', doc: 'https://developer.themoviedb.org/docs' },
  { name: 'JWT',          img: 'https://jwt.io/img/pic_logo.svg', doc: 'https://jwt.io/' },
];

// ── Accent colours ───────────────────────────────────────────────────────────
const ACCENT = {
  neon:  { dot: 'bg-neon',   line: 'border-neon/30',  text: 'text-neon',  badge: 'tech-badge',             ring: 'ring-neon/30'  },
  cyan:  { dot: 'bg-cyber',  line: 'border-cyber/30', text: 'text-cyber', badge: 'tech-badge tech-badge-cyan', ring: 'ring-cyber/30' },
  amber: { dot: 'bg-amber',  line: 'border-amber/30', text: 'text-amber', badge: 'tech-badge tech-badge-amber', ring: 'ring-amber/30' },
};


const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7 }}
        >

          {/* ── Section header ──────────────────────────────────────── */}
          <div className="mb-16">
            <p className="section-label">// ABOUT.ME</p>
            <h2 className="text-5xl lg:text-6xl font-display font-bold text-white">
              Who Am I<span className="neon-text">?</span>
            </h2>
          </div>

          {/* ── Main grid ───────────────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* ── LEFT — Timeline ─────────────────────────────────── */}
            <div>
              <p className="font-mono text-xs text-neon/50 tracking-widest mb-8">// EXPERIENCE.TIMELINE</p>

              <div className="relative">
                {/* Vertical rail */}
                <div className="absolute left-[7px] top-2 bottom-0 w-[1px] bg-gradient-to-b from-neon/40 via-amber/20 to-transparent" />

                <div className="space-y-0">
                  {TIMELINE.map((item, i) => {
                    const ac = ACCENT[item.accent as keyof typeof ACCENT];
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        className="relative pl-8 pb-8 last:pb-0"
                      >
                        {/* Dot */}
                        <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-void-100 ${ac.dot} ${item.current ? `ring-2 ring-offset-1 ring-offset-void ${ac.ring}` : 'opacity-70'}`} />

                        {/* Card */}
                        <SpotlightCard
                          enableTilt={false}
                          spotlightColor={item.accent === 'neon' ? 'rgba(0, 255, 65, 0.1)' : item.accent === 'amber' ? 'rgba(255, 170, 0, 0.1)' : 'rgba(0, 255, 255, 0.1)'}
                          className={`brutalist-card p-4 border-l-2 ${item.accent === 'neon' ? 'border-l-neon/60' : item.accent === 'amber' ? 'border-l-amber/60' : 'border-l-cyber/60'} hover:translate-y-0 group`}
                        >
                          {/* Date + current badge */}
                          <div className="flex items-center justify-between mb-1">
                            <span className={`font-mono text-[10px] tracking-widest ${ac.text} opacity-60`}>{item.date}</span>
                            {item.current && (
                              <span className={`font-mono text-[9px] px-2 py-0.5 border ${item.accent === 'cyan' ? 'border-cyber/40 text-cyber' : 'border-amber/40 text-amber'}`}>
                                CURRENT
                              </span>
                            )}
                          </div>

                          {/* Role */}
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className={`font-display font-bold text-white text-base leading-tight`}>{item.role}</h3>
                              <p className={`font-mono text-xs ${ac.text} opacity-70 mb-1.5`}>{item.org}</p>
                            </div>
                            {item.link && (
                              <MagneticButton
                                as="a"
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/20 hover:text-white transition-colors flex-shrink-0 mt-0.5"
                                aria-label="View on GitHub"
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                              </MagneticButton>
                            )}
                          </div>

                          {/* Short detail */}
                          <p className="text-white/40 text-xs font-mono leading-relaxed">{item.detail}</p>
                        </SpotlightCard>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ── RIGHT — Skills + Certs ──────────────────────────── */}
            <div className="space-y-5">

              {/* Tech marquee */}
              <SpotlightCard enableTilt={false} className="brutalist-card p-5">
                <p className="font-mono text-xs text-neon/60 tracking-widest mb-1">// TECHNICAL SKILLS</p>
                <p className="font-mono text-[10px] text-white/20 mb-4">Languages · Frameworks · Tools</p>

                <div className="marquee-wrapper mb-3">
                  <div className="marquee-track">
                    {[...TECH_ROW1, ...TECH_ROW1].map((tech, i) => (
                      <a key={i} href={tech.doc} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center group min-w-[80px]">
                        <div className="w-20 h-20 flex items-center justify-center border border-void-300 bg-void-100 group-hover:border-neon/50 group-hover:bg-neon/5 transition-all duration-200">
                          <img src={tech.img} alt={tech.name} className="w-14 h-14 object-contain" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="marquee-wrapper">
                  <div className="marquee-track marquee-track-reverse">
                    {[...TECH_ROW2, ...TECH_ROW2].map((tech, i) => (
                      <a key={i} href={tech.doc} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center group min-w-[80px]">
                        <div className="w-20 h-20 flex items-center justify-center border border-void-300 bg-void-100 group-hover:border-cyber/50 group-hover:bg-cyber/5 transition-all duration-200">
                          <img src={tech.img} alt={tech.name} className="w-14 h-14 object-contain" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </SpotlightCard>

              {/* Certifications */}
              <SpotlightCard enableTilt={false} className="brutalist-card p-5">
                <p className="font-mono text-xs text-amber/60 tracking-widest mb-4">// CERTIFICATIONS</p>
                <div className="space-y-2">
                  {CERTIFICATIONS.map(cert => (
                    <MagneticButton
                      as="a"
                      key={cert.title}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex w-full items-center justify-between p-3 border cursor-pointer transition-all duration-200 group
                        ${cert.color === 'neon'  ? 'border-neon/10  hover:border-neon/40  hover:bg-neon/5'  :
                          cert.color === 'cyber' ? 'border-cyber/10 hover:border-cyber/40 hover:bg-cyber/5' :
                                                   'border-amber/10 hover:border-amber/40 hover:bg-amber/5'}`}
                    >
                      <div className="text-left">
                        <div className="font-display font-semibold text-sm text-white group-hover:text-white/90">{cert.title}</div>
                        <div className="font-mono text-[10px] text-white/30">{cert.issuer}</div>
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-3">
                        <span className={`font-mono text-[10px] ${
                          cert.color === 'neon' ? 'text-neon/60' : cert.color === 'cyber' ? 'text-cyber/60' : 'text-amber/60'
                        }`}>{cert.date}</span>
                        <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white/60 transition-colors" />
                      </div>
                    </MagneticButton>
                  ))}
                </div>
              </SpotlightCard>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
