import React from 'react'

interface VTLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export default function VTLogo({ className, ...props }: VTLogoProps) {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {/* Top Spire */}
      <rect x="48.5" y="8" width="3" height="8" rx="0.5" fill="currentColor" />
      
      {/* Platform 1 (under spire) */}
      <rect x="44" y="16" width="12" height="2" rx="0.5" fill="currentColor" />
      
      {/* Tier 1 Block with pointed roof and cutout */}
      <path
        d="M 45,37 H 55 V 23.5 L 50,18 L 45,23.5 Z M 48.5,33.5 V 26 C 48.5,24.5 51.5,24.5 51.5,26 V 33.5 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      
      {/* Platform 2 (under tier 1) */}
      <rect x="40" y="37" width="20" height="2.5" rx="0.5" fill="currentColor" />
      
      {/* Tier 2 Block with slot cutout */}
      <path
        d="M 42,39.5 H 58 V 64 H 42 Z M 47.5,45 H 52.5 V 59 H 47.5 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      
      {/* Platform 3 (under tier 2) */}
      <rect x="36" y="64" width="28" height="2.5" rx="0.5" fill="currentColor" />
      
      {/* Tier 3 (Bottom) Block with large pointed arch cutout */}
      <path
        d="M 38,66.5 H 62 V 105 H 38 Z M 44,105 V 82 C 44,77 50,74 50,74 C 50,74 56,77 56,82 V 105 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      
      {/* Left Inner Pillar */}
      <rect x="30" y="50" width="4" height="55" rx="0.5" fill="currentColor" />
      
      {/* Right Inner Pillar */}
      <rect x="66" y="50" width="4" height="55" rx="0.5" fill="currentColor" />
      
      {/* Left Outer Pillar */}
      <rect x="22" y="64" width="4" height="41" rx="0.5" fill="currentColor" />
      
      {/* Right Outer Pillar */}
      <rect x="74" y="64" width="4" height="41" rx="0.5" fill="currentColor" />
    </svg>
  )
}
