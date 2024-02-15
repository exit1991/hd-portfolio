'use client';
import { useState, useEffect } from 'react';
import SplashLogo from '../svg/SplashLogo';

type Props = {
  visibleTime: number;
};

export default function Home({ visibleTime }: Props) {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), visibleTime);
  }, [visibleTime]);

  return (
    <>
      <div className={`p-splash-screen ${isLoading ? '' : 'is-hide'}`}>
        <div className="p-splash-screen__logo">
          <SplashLogo />
        </div>
      </div>
    </>
  );
}
