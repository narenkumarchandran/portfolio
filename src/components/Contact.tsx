import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, ArrowRight } from 'lucide-react';

const COMMANDS = [
  {
    cmd: 'contact --email',
    output: 'Opening mail client → narenkumarchandran@gmail.com',
    action: () => window.open('mailto:narenkumarchandran@gmail.com'),
    accent: 'neon',
  },
  {
    cmd: 'socials --github',
    output: 'Redirecting → github.com/narenkumarchandran',
    action: () => window.open('https://github.com/narenkumarchandran', '_blank'),
    accent: 'cyber',
  },
  {
    cmd: 'socials --linkedin',
    output: 'Redirecting → linkedin.com/in/narenkumarchandran',
    action: () => window.open('https://linkedin.com/in/narenkumarchandran', '_blank'),
    accent: 'cyber',
  },
  {
    cmd: 'resume --download',
    output: `Opening resume PDF → ${window.location.origin}${import.meta.env.BASE_URL}Resume1.pdf`,
    action: () => window.open(`${import.meta.env.BASE_URL}Resume1.pdf`, '_blank'),
    accent: 'amber',
  },
];

type TerminalLine = {
  type: 'prompt' | 'output' | 'error';
  text: string;
  accent?: string;
};

const INITIAL_LINES: TerminalLine[] = [
  { type: 'output', text: '╔══════════════════════════════════════════╗' },
  { type: 'output', text: '║  narenkumar@portfolio — contact terminal  ║' },
  { type: 'output', text: '╚══════════════════════════════════════════╝' },
  { type: 'output', text: '' },
  { type: 'output', text: 'Type a command below or click a shortcut.' },
  { type: 'output', text: 'Available: contact --email | socials --github | socials --linkedin | resume --download' },
  { type: 'output', text: '' },
];

const Contact: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState('');
  const termBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (termBodyRef.current) {
      termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = (cmd: string, customOutput?: string, accent?: string, actionFn?: () => void) => {
    const found = COMMANDS.find(c => c.cmd === cmd.trim());

    setLines(prev => [
      ...prev,
      { type: 'prompt', text: `narenkumar@portfolio:~$ ./${cmd}` },
    ]);

    setTimeout(() => {
      if (found || customOutput) {
        const output = customOutput || found!.output;
        setLines(prev => [
          ...prev,
          { type: 'output', text: `> ${output}`, accent: accent || found?.accent },
        ]);
        if (actionFn) setTimeout(actionFn, 600);
        else if (found) setTimeout(found.action, 600);
      } else {
        setLines(prev => [
          ...prev,
          { type: 'error', text: `> command not found: ${cmd}. Try: contact --email` },
        ]);
      }
      setLines(prev => [...prev, { type: 'output', text: '' }]);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input.trim());
    setInput('');
  };

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label">// CONTACT.SH</p>
          <h2 className="text-5xl lg:text-6xl font-display font-bold text-white">
            Let's<span className="neon-text"> Connect</span>
          </h2>
          <p className="mt-4 text-white/40 font-mono text-sm max-w-xl">
            Open to collaborations, hackathons, embedded systems / ML projects, and internship opportunities.
            Execute a command or click a shortcut below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="terminal h-full flex flex-col">
              {/* Terminal header */}
              <div className="terminal-header">
                <span className="terminal-dot bg-[#ff5f56]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-neon" />
                <span className="font-mono text-xs text-white/30 ml-4">
                  narenkumar@portfolio — contact.sh
                </span>
                <Terminal className="w-3 h-3 text-white/20 ml-auto" />
              </div>

              {/* Terminal output */}
              <div
                ref={termBodyRef}
                className="terminal-body flex-1 overflow-y-auto max-h-72 space-y-0.5 text-xs"
              >
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`leading-6 font-mono ${
                      line.type === 'prompt'
                        ? 'text-white/60'
                        : line.type === 'error'
                        ? 'text-red-400'
                        : line.accent === 'neon'
                        ? 'text-neon'
                        : line.accent === 'cyber'
                        ? 'text-cyber'
                        : line.accent === 'amber'
                        ? 'text-amber'
                        : 'text-neon/50'
                    }`}
                  >
                    {line.text || '\u00A0'}
                  </div>
                ))}
              </div>

              {/* Input */}
              <form
                onSubmit={handleSubmit}
                className="border-t border-void-300 px-5 py-3 flex items-center gap-2"
              >
                <span className="font-mono text-xs text-neon/60 flex-shrink-0">narenkumar@portfolio:~$ ./</span>
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="contact --email"
                  className="flex-1 bg-transparent font-mono text-xs text-neon outline-none placeholder:text-white/15"
                  autoComplete="off"
                  spellCheck={false}
                />
                <button type="submit" className="text-neon/40 hover:text-neon transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick shortcuts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <p className="font-mono text-xs text-white/20 tracking-widest mb-2">QUICK EXEC</p>

            {[
              {
                icon: Mail,
                label: 'Send Email',
                cmd: 'contact --email',
                sub: 'narenkumarchandran@gmail.com',
                accent: 'neon',
              },
              {
                icon: Github,
                label: 'GitHub Profile',
                cmd: 'socials --github',
                sub: 'github.com/narenkumarchandran',
                accent: 'cyan',
              },
              {
                icon: Linkedin,
                label: 'LinkedIn',
                cmd: 'socials --linkedin',
                sub: 'linkedin.com/in/narenkumarchandran',
                accent: 'cyan',
              },
            ].map(({ icon: Icon, label, cmd, sub, accent }) => (
              <button
                key={cmd}
                onClick={() => runCommand(cmd)}
                className={`brutalist-card p-4 text-left transition-all duration-200 w-full group
                  ${accent === 'neon' ? 'border-l-neon hover:bg-neon/5' : 'border-l-cyber hover:bg-cyber/5'}`}
              >
                <div className="flex items-center gap-3 mb-1">
                  <Icon className={`w-4 h-4 ${accent === 'neon' ? 'text-neon' : 'text-cyber'} opacity-70`} />
                  <span className="font-display font-semibold text-sm text-white group-hover:text-white">{label}</span>
                </div>
                <div className="font-mono text-[10px] text-white/30 pl-7">{sub}</div>
                <div className={`font-mono text-[10px] pl-7 mt-1 ${accent === 'neon' ? 'text-neon/50' : 'text-cyber/50'}`}>
                  $ ./{cmd}
                </div>
              </button>
            ))}

            {/* Info card */}
            <div className="brutalist-card brutalist-card-amber p-4 mt-2">
              <div className="font-mono text-[10px] text-amber/60 tracking-widest mb-2">LOCATION</div>
              <div className="text-white text-sm font-display font-semibold">Chennai, Tamil Nadu</div>
              <div className="font-mono text-[10px] text-white/30 mt-1">India · IST (UTC+5:30)</div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-void-300 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="font-mono text-xs text-white/20">
            © 2026 Narenkumar C · All systems nominal
          </div>
          <div className="font-mono text-xs text-white/20">
            Built with{' '}
            <span className="text-neon/60">React</span> +{' '}
            <span className="text-cyber/60">Vite</span> +{' '}
            <span className="text-amber/60">shadcn/ui</span> +{' '}
            <span className="text-neon/60">Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
