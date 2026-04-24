import { motion, useScroll, useTransform } from 'motion/react';

export function SystemGrid() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  return (
    <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-0">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 217, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 217, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      <div
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />
      <div
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
      />
      <div
        className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-accent/20 to-transparent"
      />
    </motion.div>
  );
}
