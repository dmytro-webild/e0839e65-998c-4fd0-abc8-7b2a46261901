import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
  dominantBaseline?: 'auto' | 'alphabetic' | 'hanging' | 'ideographic' | 'mathematical' | 'text-before-edge' | 'middle' | 'central' | 'text-after-edge' | 'use-script' | 'no-change' | 'reset-size' | 'inherit';
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 48,
  fontWeight = 700,
  letterSpacing = 2,
  dominantBaseline = 'middle',
}) => {
  return (
    <svg
      viewBox="0 0 1000 200"
      width="100%"
      height="auto"
      className={className}
      role="img"
      aria-label={text}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline={dominantBaseline}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill="currentColor"
        className="font-sans"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
