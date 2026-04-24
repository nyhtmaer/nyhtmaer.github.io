import { useRef } from 'react';
import { ChevronDown, ExternalLink, Github, TrendingUp } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import { motion, useInView } from 'motion/react';
import { portfolioConfig } from '@/config/portfolio.config';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const projects = portfolioConfig.projects;

  return (
    <section ref={ref} id="projects" className="min-h-screen px-4 md:px-8 lg:px-16 py-20 border-b border-border">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">03_PRODUCTION</span>
          </div>
          <h2
            className="font-mono text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            The Production
            <br />
            Environment
          </h2>
          <div className="w-20 h-px bg-accent" />
        </motion.div>

        <Accordion.Root type="single" collapsible className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Accordion.Item
                value={project.id}
                className="border border-border bg-card overflow-hidden group hover:shadow-[0_0_30px_rgba(0,217,255,0.1)] transition-shadow"
              >
              <motion.div
                className="p-6 space-y-6"
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-muted-foreground">
                        RELEASE_{String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 text-accent border border-accent/30">
                        {project.version}
                      </span>
                    </div>
                    <h3 className="font-mono text-2xl mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-1 border border-border text-foreground/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <a
                        href={project.link}
                        className="p-2 border border-border hover:border-accent/50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="p-2 border border-border hover:border-accent/50 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border-l-2 border-destructive/50 pl-4 space-y-1">
                    <div className="font-mono text-[10px] text-destructive">THE_EXCEPTION</div>
                    <p className="text-sm text-foreground/70">{project.exception}</p>
                  </div>

                  <div className="border-l-2 border-accent/50 pl-4 space-y-1">
                    <div className="font-mono text-[10px] text-accent">THE_ALGORITHM</div>
                    <p className="text-sm text-foreground/70">{project.algorithm}</p>
                  </div>

                  <div className="border-l-2 border-chart-5/50 pl-4 space-y-2">
                    <div className="font-mono text-[10px] text-chart-5">THE_OUTPUT</div>
                    <div className="space-y-1">
                      {Object.entries(project.output).map(([key, value]) => (
                        <div key={key} className="flex items-start gap-2">
                          <TrendingUp className="w-3 h-3 text-chart-5 mt-0.5 flex-shrink-0" />
                          <span className="text-xs text-foreground/70">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Accordion.Trigger className="w-full flex items-center justify-between py-3 border-t border-border hover:text-accent transition-colors group">
                  <span className="font-mono text-xs">VIEW_POST_MORTEM()</span>
                  <ChevronDown className="w-4 h-4 transition-transform group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>

                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                  <div className="pt-2 pb-4 border-t border-border/50">
                    <div className="font-mono text-[10px] text-muted-foreground mb-2">
                      REFLECTIONS & CHALLENGES:
                    </div>
                    <p className="text-sm text-foreground/60 leading-relaxed italic">
                      {project.postmortem}
                    </p>
                  </div>
                </Accordion.Content>
              </motion.div>
            </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
