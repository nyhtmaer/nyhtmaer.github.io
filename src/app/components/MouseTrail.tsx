import { useEffect, useState } from 'react';

interface Trail {
  x: number;
  y: number;
  id: number;
}

export function MouseTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);

  useEffect(() => {
    let lastTime = 0;
    const throttle = 50;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttle) return;
      lastTime = now;

      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
      };

      setTrails((prev) => [...prev.slice(-8), newTrail]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-1 h-1 rounded-full bg-accent"
          style={{
            left: trail.x,
            top: trail.y,
            opacity: (index + 1) / trails.length * 0.3,
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
}
