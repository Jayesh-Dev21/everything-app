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
      {/* Top horizontal block */}
      <rect x="45" y="16" width="10" height="4" fill="currentColor" />
      
      {/* Central upper tower with square and vertical slit cutouts */}
      <path
        d="M 42,24 H 58 V 48 H 62 V 62 H 38 V 48 H 42 Z M 47,31 H 53 V 37 H 51 V 62 H 49 V 37 H 47 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      
      {/* Bottom arch block with sharp pointed arch cutout */}
      <path
        d="M 38,66 H 62 V 105 H 38 Z M 44,105 V 80 L 50,72 L 56,80 V 105 Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      
      {/* Left Outer Pillar */}
      <rect x="22" y="66" width="4" height="39" fill="currentColor" />
      
      {/* Left Inner Pillar */}
      <rect x="30" y="40" width="4" height="65" fill="currentColor" />
      
      {/* Right Inner Pillar */}
      <rect x="66" y="40" width="4" height="65" fill="currentColor" />
      
      {/* Right Outer Pillar */}
      <rect x="74" y="66" width="4" height="39" fill="currentColor" />
    </svg>
  )
}
