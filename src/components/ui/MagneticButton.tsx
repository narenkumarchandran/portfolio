import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a' | 'div';
  href?: string;
  target?: string;
  rel?: string;
  magneticPull?: number; // How strong the pull is (higher = stronger)
}

const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  className = '',
  as = 'button',
  magneticPull = 0.3, // Reduced pull for a more subtle, premium feel
  href,
  target,
  rel,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });
  const y = useSpring(0, { stiffness: 300, damping: 20, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    x.set(distanceX * magneticPull);
    y.set(distanceY * magneticPull);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const InnerComponent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ x, y }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block" {...(props as any)}>
        {InnerComponent}
      </a>
    );
  }

  if (as === 'div') {
    return (
      <div className="inline-block" {...(props as any)}>
        {InnerComponent}
      </div>
    );
  }

  return (
    <button className="inline-block outline-none" {...props}>
      {InnerComponent}
    </button>
  );
};

export default MagneticButton;
