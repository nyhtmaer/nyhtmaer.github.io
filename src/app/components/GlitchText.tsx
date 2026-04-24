import { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: string;
  className?: string;
}

export function GlitchText({ children, className = '' }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={glitching ? 'opacity-0' : ''}>{children}</span>
      {glitching && (
        <>
          <span
            className="absolute top-0 left-0 text-accent opacity-70"
            style={{
              transform: 'translate(-2px, -2px)',
              clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            }}
          >
            {children}
          </span>
          <span
            className="absolute top-0 left-0 text-destructive opacity-70"
            style={{
              transform: 'translate(2px, 2px)',
              clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            }}
          >
            {children}
          </span>
        </>
      )}
    </span>
  );
}
