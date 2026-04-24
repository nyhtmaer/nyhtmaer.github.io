import { Award, AlertTriangle } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const timeline = [
  {
    version: 'v2024.03',
    company: 'TechCorp',
    role: 'Senior Software Engineer',
    period: 'Mar 2024 - Present',
    type: 'current',
    achievements: [
      'Led migration of monolith to microservices architecture, reducing deployment time by 80%',
      'Architected real-time data pipeline processing 2M+ events daily',
      'Mentored 5 junior engineers through pair programming and design reviews',
    ],
    techDebt: null,
  },
  {
    version: 'v2022.08',
    company: 'StartupXYZ',
    role: 'Full-Stack Engineer',
    period: 'Aug 2022 - Feb 2024',
    type: 'stable',
    achievements: [
      'Built GraphQL API serving 50K+ daily active users with 99.9% uptime',
      'Implemented CI/CD pipeline reducing deployment time from 2 hours to 10 minutes',
      'Designed and launched 3 customer-facing features from concept to production',
    ],
    techDebt: null,
  },
  {
    version: 'v2021.01',
    company: 'InnovateLabs',
    role: 'Software Engineer',
    period: 'Jan 2021 - Jul 2022',
    type: 'stable',
    achievements: [
      'Developed real-time collaborative editor using WebSockets and CRDT algorithms',
      'Optimized database queries reducing average response time by 60%',
      'Contributed to open-source projects used by 10K+ developers',
    ],
    techDebt: null,
  },
  {
    version: 'v2020.09',
    company: 'University of Technology',
    role: 'Computer Science, B.S.',
    period: 'Sep 2020 - May 2024',
    type: 'learning',
    achievements: [
      'Graduated with Honors, 3.8 GPA',
      'Research in distributed systems and consensus algorithms',
      'Teaching Assistant for Data Structures & Algorithms',
    ],
    techDebt: 'Currently deepening expertise in Rust and systems programming',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="min-h-screen px-4 md:px-8 lg:px-16 py-20 border-b border-border">
      <div className="max-w-5xl w-full mx-auto">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-border px-4 py-2">
            <span className="font-mono text-xs text-muted-foreground">04_CHANGELOG</span>
          </div>
          <h2
            className="font-mono text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Version History
          </h2>
          <div className="w-20 h-px bg-accent" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {timeline.map((entry, index) => (
              <motion.div
                key={entry.version}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8"
              >
                <motion.div
                  className={`absolute left-0 top-2 w-2 h-2 rounded-full -translate-x-[3.5px] ${
                    entry.type === 'current'
                      ? 'bg-accent'
                      : entry.type === 'learning'
                      ? 'bg-chart-4'
                      : 'bg-foreground/40'
                  }`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
                >
                  {entry.type === 'current' && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>

                <motion.div
                  className="border border-border bg-card p-6 space-y-4 hover:border-accent/30 transition-colors"
                  whileHover={{ x: 4, boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)' }}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs px-2 py-1 bg-accent/10 text-accent border border-accent/30">
                          {entry.version}
                        </span>
                        {entry.type === 'current' && (
                          <span className="font-mono text-[10px] px-2 py-0.5 bg-chart-5/10 text-chart-5 border border-chart-5/30">
                            ACTIVE
                          </span>
                        )}
                        {entry.type === 'learning' && (
                          <span className="font-mono text-[10px] px-2 py-0.5 bg-chart-4/10 text-chart-4 border border-chart-4/30">
                            EDUCATION
                          </span>
                        )}
                      </div>
                      <h3 className="font-mono text-xl mb-1">{entry.company}</h3>
                      <p className="text-sm text-muted-foreground">{entry.role}</p>
                    </div>
                    <div className="font-mono text-xs text-muted-foreground">
                      {entry.period}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {entry.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Award className="w-3 h-3 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {entry.techDebt && (
                    <div className="border-l-2 border-chart-4/50 pl-4 py-2 bg-chart-4/5">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-3 h-3 text-chart-4 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-mono text-[10px] text-chart-4 mb-1">
                            TECHNICAL_DEBT
                          </div>
                          <p className="text-xs text-foreground/60">{entry.techDebt}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
