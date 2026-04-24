import { Database, Server, Code2, Cloud, GitBranch, Layout } from 'lucide-react';
import { motion } from 'motion/react';
import { useRef, useState } from 'react';
import { useInView } from 'motion/react';

const modules = [
  {
    id: 'backend',
    icon: Server,
    label: '<Backend_Logic>',
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Redis', 'GraphQL'],
    opinion: 'Performance isn\'t just about speed—it\'s about predictable, observable systems that scale gracefully under load.',
  },
  {
    id: 'frontend',
    icon: Layout,
    label: '<Frontend_Interface>',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Zustand'],
    opinion: 'The best UIs feel inevitable—minimal cognitive overhead, maximum clarity, zero unnecessary abstraction.',
  },
  {
    id: 'infrastructure',
    icon: Cloud,
    label: '<Infrastructure>',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    opinion: 'Infrastructure as code isn\'t a luxury, it\'s the foundation. Reproducibility beats heroics every time.',
  },
  {
    id: 'database',
    icon: Database,
    label: '<Data_Layer>',
    technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB', 'Prisma'],
    opinion: 'Schema design is architecture. Get your data model right and everything else follows naturally.',
  },
  {
    id: 'tools',
    icon: GitBranch,
    label: '<DevOps_Tooling>',
    technologies: ['Git', 'CI/CD', 'Monitoring', 'Sentry', 'DataDog', 'Grafana'],
    opinion: 'If it\'s not monitored, it doesn\'t exist. Observability is a first-class citizen, not an afterthought.',
  },
  {
    id: 'languages',
    icon: Code2,
    label: '<Core_Languages>',
    technologies: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL', 'Bash'],
    opinion: 'The right tool for the right job. Polyglot engineers build better systems because they know the trade-offs.',
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section ref={ref} className="min-h-screen flex items-center px-4 md:px-8 lg:px-16 py-20 border-b border-border">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">02_MODULES</span>
          </div>
          <h2
            className="font-mono text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Core Modules &<br />Dependencies
          </h2>
          <div className="w-20 h-px bg-accent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredCard(module.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group bg-background p-6 border border-border hover:border-accent/50 transition-all relative overflow-hidden cursor-pointer"
              >
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-accent/5"
                  initial={{ x: 40, y: -40 }}
                  animate={
                    hoveredCard === module.id
                      ? { x: 0, y: 0 }
                      : { x: 40, y: -40 }
                  }
                  transition={{ duration: 0.3 }}
                />

                <div className="relative space-y-4">
                  <div className="flex items-start justify-between">
                    <Icon className="w-6 h-6 text-accent" />
                    <span className="font-mono text-[10px] text-muted-foreground">v1.0</span>
                  </div>

                  <div>
                    <h3 className="font-mono text-lg text-accent mb-3">
                      {module.label}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {module.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2 py-1 border border-border bg-card text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="font-mono text-[10px] text-muted-foreground mb-2">
                      OPINION:
                    </div>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {module.opinion}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
