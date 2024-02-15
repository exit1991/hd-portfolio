'use client';
import { useState, useEffect } from 'react';

const ANIMATION_START_TIME: number = 50;

export default function Home() {
  const [svgClassName, setSvgClassName] = useState('');
  useEffect(() => {
    setTimeout(() => setSvgClassName('active'), ANIMATION_START_TIME);
  }, []);

  return (
    <svg
      width={200}
      height={201}
      viewBox="0 0 500 501"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M495 250.203c0 135.31-109.69 245-245 245s-245-109.69-245-245 109.69-245 245-245 245 109.69 245 245z"
        fill="#EDEDED"
        stroke="#EDEDED"
        strokeWidth={10}
        className="svg-elem-1"
      />
      <path
        d="M142.836 242.118h177.5v177.5h-177.5v-177.5z"
        fill="#84CFE9"
        stroke="#84CFE9"
        strokeWidth={10}
        className="svg-elem-2"
      />
      <path
        d="M236.586 148.368h177.5v177.5h-177.5v-177.5z"
        fill="#FFE153"
        stroke="#FFE153"
        strokeWidth={10}
        className="svg-elem-3"
      />
      <path
        d="M95.96 101.493h177.501v177.5h-177.5v-177.5z"
        fill="#EE806A"
        stroke="#EE806A"
        strokeWidth={10}
        className="svg-elem-4"
      />
    </svg>
  );
}
