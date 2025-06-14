import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimateProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'stagger-children';
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  className?: string;
}

export const ScrollAnimate: React.FC<ScrollAnimateProps> = ({
  children,
  animation = 'slide-up',
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true,
  delay = 0,
  className = ''
}) => {
  const { elementRef, isVisible } = useScrollAnimation({
    threshold,
    rootMargin,
    triggerOnce
  });

  const animationClass = `${animation} ${isVisible ? 'animate-in' : ''}`;
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={elementRef}
      className={`${animationClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};
