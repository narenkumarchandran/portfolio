import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(0, 255, 65, 0.1)', // Default neon green
  enableTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  // 3D Tilt properties
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    setPosition({ x: cursorX, y: cursorY });
    setOpacity(1);

    if (enableTilt) {
      const width = rect.width;
      const height = rect.height;

      const xPct = cursorX / width - 0.5;
      const yPct = cursorY / height - 0.5;

      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (enableTilt) {
      x.set(0);
      y.set(0);
    }
  };

  // Ensure styles reset if tilt is disabled dynamically
  useEffect(() => {
    if (!enableTilt) {
      x.set(0);
      y.set(0);
    }
  }, [enableTilt, x, y]);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: enableTilt ? rotateX : 0,
        rotateY: enableTilt ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      {/* Animated Glowing Border */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* 
        This pseudo-border acts as a 1px border. 
        It sits just inside the container and masks the background so only the edges glow. 
      */}
      <div className="absolute inset-[1px] z-0 bg-void rounded-[inherit] pointer-events-none" />

      {/* Spotlight Gradient inside the card */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor.replace(/[\d.]+\)$/g, '0.05)')}, transparent 40%)`,
        }}
      />
      
      {/* Content wrapper to ensure z-index is above spotlight */}
      <div className="relative z-10 w-full h-full" style={{ transform: enableTilt ? 'translateZ(20px)' : 'none' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default SpotlightCard;
