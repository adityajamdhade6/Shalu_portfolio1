import React from "react";

interface LogoProps {
  text?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ text = "shalu", className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-center -mt-1 group ${className}`}>
      {/* Hand-drawn style SVG Eye */}
      <svg
        width="48"
        height="32"
        viewBox="0 0 100 80"
        className="text-foreground stroke-current transform group-hover:scale-105 transition-transform duration-300"
        fill="none"
      >
        {/* Rough hand-drawn outer eye */}
        <path
          d="M 10 50 C 30 25, 70 25, 90 50 C 70 75, 30 75, 10 50 Z"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* The Pupil */}
        <path
          d="M 38 50 C 38 38, 62 38, 62 50 C 62 62, 38 62, 38 50 Z"
          className="fill-current"
        />
        {/* Glare in the pupil */}
        <path
          d="M 45 48 C 48 52, 52 52, 55 48"
          stroke="var(--background)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Eyelashes (top 3) */}
        <path d="M 33 30 L 22 8" strokeWidth="6" strokeLinecap="round" />
        <path d="M 50 25 L 50 0" strokeWidth="6" strokeLinecap="round" />
        <path d="M 67 30 L 78 8" strokeWidth="6" strokeLinecap="round" />
        
        {/* Side dashes/eyelashes */}
        <path d="M 15 45 L 8 30" strokeWidth="5" strokeLinecap="round" />
        <path d="M 85 45 L 92 30" strokeWidth="5" strokeLinecap="round" />
      </svg>

      {/* Handwriting style text */}
      <span 
        className="font-mono text-sm font-bold tracking-widest mt-0.5 group-hover:opacity-80 transition-opacity"
        style={{ letterSpacing: "0.2em" }}
      >
        {text}
      </span>
    </div>
  );
};

export default Logo;
