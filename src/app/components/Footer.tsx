import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioConfig } from '@/config/portfolio.config';

export function Footer() {
  const [focused, setFocused] = useState(false);

  return (
    <footer id="contact" className="min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 py-20">
      <div className="max-w-5xl w-full mx-auto">
        <div className="mb-12 space-y-4">
          <div className="inline-block border border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">05_HANDSHAKE</span>
          </div>
          <h2
            className="font-mono text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            The Handshake
            <br />
            Protocol
          </h2>
          <div className="w-20 h-px bg-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="border border-border bg-card p-6 space-y-4">
              <div className="font-mono text-xs text-muted-foreground border-b border-border pb-2">
                CONNECTION_ENDPOINTS
              </div>

              <div className="space-y-3">
                {/* GitHub Link */}
                <motion.a
                  href={portfolioConfig.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 border border-border hover:border-accent/50 transition-all"
                  whileHover={{ x: 4, backgroundColor: 'rgba(0, 217, 255, 0.05)' }}
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="flex-1">
                    <div className="font-mono text-sm">GitHub</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      @{portfolioConfig.social.github.username}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    [Ctrl+G]
                  </div>
                </motion.a>

                {/* LinkedIn Link */}
                <motion.a
                  href={portfolioConfig.social.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-3 border border-border hover:border-accent/50 transition-all"
                  whileHover={{ x: 4, backgroundColor: 'rgba(0, 217, 255, 0.05)' }}
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="flex-1">
                    <div className="font-mono text-sm">LinkedIn</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {portfolioConfig.social.linkedin.handle}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    [Ctrl+L]
                  </div>
                </motion.a>

                {/* Email Link */}
                <motion.a
                  href={`mailto:${portfolioConfig.social.email.address}`}
                  className="group flex items-center gap-3 p-3 border border-border hover:border-accent/50 transition-all"
                  whileHover={{ x: 4, backgroundColor: 'rgba(0, 217, 255, 0.05)' }}
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div className="flex-1">
                    <div className="font-mono text-sm">Email</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {portfolioConfig.social.email.address}
                    </div>
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
                    [Ctrl+M]
                  </div>
                </motion.a>
              </div>
            </div>

            <div className="border border-border bg-card p-6 space-y-3">
              <div className="font-mono text-xs text-muted-foreground">RESPONSE_TIME</div>
              <p className="text-sm text-foreground/70">
                {portfolioConfig.responseTime}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-border bg-card p-6 space-y-4">
              <div className="font-mono text-xs text-muted-foreground border-b border-border pb-2">
                DIRECT_MESSAGE_PROTOCOL
              </div>

              <div className="space-y-4">
                <div
                  className={`border transition-colors ${
                    focused ? 'border-accent' : 'border-border'
                  } bg-input p-4 font-mono text-sm`}
                >
                  <div className="flex items-center gap-2 text-muted-foreground mb-3">
                    <span className="text-accent">{'>'}</span>
                    <span className="text-xs">initiate_contact()</span>
                  </div>

                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="name: string"
                      className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/50"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                    <input
                      type="email"
                      placeholder="email: string"
                      className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/50"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                    <textarea
                      placeholder="message: string"
                      rows={4}
                      className="w-full bg-transparent border-none outline-none text-sm text-foreground placeholder:text-muted-foreground/50 resize-none"
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50">
                    <div className="w-1.5 h-4 bg-accent animate-pulse" />
                    <span className="text-xs text-muted-foreground">Ready to execute</span>
                  </div>
                </div>

                <motion.button
                  className="group w-full flex items-center justify-between px-6 py-3 border border-accent bg-accent/10 overflow-hidden relative"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0, 217, 255, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="font-mono text-sm relative z-10 group-hover:text-background transition-colors">
                    EXECUTE_SEND()
                  </span>
                  <Send className="w-4 h-4 relative z-10 group-hover:text-background transition-colors" />
                </motion.button>
              </div>
            </div>

            <div className="font-mono text-xs text-muted-foreground text-center space-y-1">
              <div>SYSTEM_VERSION: 2026.04</div>
              <div>Built with React + TypeScript + Tailwind CSS</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Runtime: Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
