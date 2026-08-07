import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const outerPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const animFrame = useRef<number>(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.left = `${e.clientX}px`;
        innerRef.current.style.top = `${e.clientY}px`;
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      outerPos.current.x = lerp(outerPos.current.x, pos.current.x, 0.12);
      outerPos.current.y = lerp(outerPos.current.y, pos.current.y, 0.12);
      if (outerRef.current) {
        outerRef.current.style.left = `${outerPos.current.x}px`;
        outerRef.current.style.top = `${outerPos.current.y}px`;
      }
      animFrame.current = requestAnimationFrame(animate);
    };

    const handleHoverIn = () => setHovering(true);
    const handleHoverOut = () => setHovering(false);

    document.addEventListener('mousemove', handleMove);
    const interactives = document.querySelectorAll('a, button, [data-cursor]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });
    animFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
      cancelAnimationFrame(animFrame.current);
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className={`cursor-outer ${hovering ? 'hovering' : ''}`} />
      <div ref={innerRef} className="cursor-inner" />
    </>
  );
};

export default CustomCursor;
