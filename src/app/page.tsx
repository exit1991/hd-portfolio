'use client';
import { useEffect } from 'react';
import SplashScreen from '@/components/elements/SplashScreen';
import TopAbout from '@/components/elements/TopAbout';
import TopWorks from '@/components/elements/TopWorks';
import PageLogo from '@/components/svg/PageLogo';
import { TopThreeProcessing } from '@/utils/topThreeProcessing';

const LOADING_TIME: number = 2200;

export default function Home() {
  useEffect(() => {
    new TopThreeProcessing().exec();
  }, []);

  return (
    <>
      <SplashScreen visibleTime={LOADING_TIME} />
      <canvas className="js-webgl p-bg-canvas"></canvas>
      <main className="l-main">
        <nav className="p-main-manu">
          <div className="p-main-manu__logo">
            <a href="./">
              <PageLogo />
            </a>
          </div>
          <ul>
            <li className="c-manu-item">
              <a className="c-manu-item__link c-manu-item__link--top" href="#">
                top
              </a>
            </li>
            <li className="c-manu-item">
              <a
                className="c-manu-item__link c-manu-item__link--about"
                href="#about"
              >
                about
              </a>
            </li>
            <li className="c-manu-item">
              <a
                className="c-manu-item__link c-manu-item__link--works"
                href="#works"
              >
                works
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-hero">
          <div className="p-hero-logo">
            <h1 className="p-hero-logo__txt">hdeg</h1>
          </div>
        </div>
        <section id="about" className="p-portfolio-content">
          <h1 className="p-portfolio-content__ttl">about</h1>
          <div className="p-portfolio-content__desc--about">
            <TopAbout />
          </div>
        </section>
        <section id="works" className="p-portfolio-content">
          <h1 className="p-portfolio-content__ttl">works</h1>
          <div className="p-portfolio-content__desc--works">
            <TopWorks />
          </div>
        </section>
      </main>
    </>
  );
}
