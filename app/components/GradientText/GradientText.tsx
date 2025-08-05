'use client';
import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  // showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  // showBorder = false,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(270deg, ${colors.join(', ')})`,
    backgroundSize: '300% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: `gradient ${animationSpeed}s ease infinite`,
  } as React.CSSProperties;

  return (
    <span
      className={`inline-block text-transparent animate-gradient ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
