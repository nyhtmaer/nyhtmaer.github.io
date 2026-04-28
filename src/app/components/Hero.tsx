import { useState, useEffect } from 'react';
import { Terminal, Activity } from 'lucide-react';
import { motion } from 'motion/react';
import { GlitchText } from './GlitchText';

export function Hero() {
  const [bootSequence, setBootSequence] = useState(0);
  const sequences = [
    '> INITIALIZING SYSTEM...',
    '> LOADING CORE MODULES...',
    '> RUNTIME: ACTIVE',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBootSequence((prev) => (prev + 1) % sequences.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 border-b border-border">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 bg-accent/5"
          >
            <Terminal className="w-3 h-3 text-accent" />
            <span className="font-mono text-xs text-accent tracking-wider">
              {sequences[bootSequence]}
            </span>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1
              className="font-mono text-5xl md:text-7xl lg:text-8xl tracking-tight"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              <span className="text-muted-foreground">{'<'}</span>
              <GlitchText>VEDH</GlitchText>
              <br />
              <GlitchText>CHENGAPPA</GlitchText>
              <span className="text-muted-foreground">{' />'}</span>
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <p className="font-mono text-sm text-muted-foreground">
                Building distributed systems that scale.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border-l-2 border-accent/50 pl-6 py-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-base md:text-lg text-foreground/80 max-w-2xl">
              Full-stack engineer specializing in cloud-native architectures,
              real-time data pipelines, and developer tooling. I turn complex
              problems into elegant, maintainable solutions.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-6 py-3 border border-accent bg-accent/10 overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-mono text-sm text-accent">
                {'> VIEW_PROJECTS()'}
              </span>
              <motion.div
                className="absolute inset-0 bg-accent/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 border border-border"
              whileHover={{ scale: 1.05, borderColor: 'rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="font-mono text-sm">INITIATE_CONTACT()</span>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="lg:col-span-4 space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="border border-border bg-card p-6 space-y-4"
            whileHover={{
              rotateY: 2,
              rotateX: -2,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-mono text-xs text-muted-foreground">SYSTEM_STATUS</span>
              <Activity className="w-4 h-4 text-accent" />
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Runtime</span>
                <span className="text-accent">Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span className="text-foreground">Bangalore, India</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focus</span>
                <span className="text-foreground">Distributed Systems</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Availability</span>
                <span className="text-accent">Open to Opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="border border-border bg-card p-6 space-y-3"
            whileHover={{
              rotateY: 2,
              rotateX: -2,
              transition: { duration: 0.3 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="font-mono text-xs text-muted-foreground border-b border-border pb-2">
              RECENT_ACTIVITY
            </div>
            <div className="space-y-2 font-mono text-xs text-foreground/60">
              <div className="flex items-start gap-2">
                <span className="text-accent">›</span>
                <span>Deployed microservices migration</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">›</span>
                <span>Optimized GraphQL resolvers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-accent">›</span>
                <span>Published open-source CLI tool</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
