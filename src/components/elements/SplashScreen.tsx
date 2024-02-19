'use client';
import { useState, useEffect } from 'react';
import SplashLogo from '../svg/SplashLogo';

type Props = {
  visibleTime: number;
};

export default function Home({ visibleTime }: Props) {
  const [isLoading, setLoading] = useState(true);
  const [isDisplay, setDisplay] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), visibleTime);
    setTimeout(() => setDisplay(false), visibleTime + 1000);
  }, [visibleTime]);

  return (
    <>
      <div
        className={`p-splash-screen ${isLoading ? '' : 'is-hide'} ${
          isDisplay ? '' : 'is-display-none'
        }`}
      >
        <div className="p-splash-screen__logo">
          <SplashLogo />
        </div>
      </div>
    </>
  );
}
