import React, { useRef, useState } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  as: Component = 'div',
  spotlightColor = 'rgba(43, 102, 255, 0.14)',
  ...props
}) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Component
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/80 dark:border-white/[0.08] dark:bg-zinc-900/40 backdrop-blur-md transition-colors duration-300 hover:border-spark-500/40 dark:hover:border-spark-400/30 ${className}`}
      {...props}
    >
      {/* Top laser highlight line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-spark-500/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Cursor-tracking radial spotlight */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />

      <div className="relative z-10 h-full">{children}</div>
    </Component>
  );
}
