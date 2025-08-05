import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColorLight?: string;
  spotlightColorDark?: string;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColorLight = "rgba(0, 0, 0, 0.15)",
  spotlightColorDark = "rgba(255, 255, 255, 0.15)",
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative card flex flex-col items-stretch w-full md:min-w-[450px] md:max-w-[500px] p-5 md:p-[18px] overflow-hidden ${className}`}
    >
      {/* Spotlight Background */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `
            radial-gradient(circle at ${position.x}px ${position.y}px,
              ${spotlightColorLight} 0%,
              transparent 80%)
          `,
          transition: "background-position 0.2s ease",
          zIndex: 1,
        }}
      />

      {/* Dark mode overlay */}
      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          opacity,
          background: `
            radial-gradient(circle at ${position.x}px ${position.y}px,
              ${spotlightColorDark} 0%,
              transparent 80%)
          `,
          transition: "background-position 0.2s ease",
          zIndex: 1,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;
