'use client';
import { useEffect } from 'react';
import TopAbout from '@/components/elements/TopAbout';
import TopWorks from '@/components/elements/TopWorks';
import PageLogo from '@/components/svg/PageLogo';
import { TopThreeProcessing } from '@/utils/topThreeProcessing';

export default function Home() {
  useEffect(() => {
    new TopThreeProcessing().exec();
  }, []);

  return (
    <>
      <canvas className="js-webgl p-bg-canvas"></canvas>
      <main className="l-main">
        <nav className="p-main-manu">
          <ul>
            <li className="c-manu-item">
              <a className="c-manu-item__link" href="/">
                about
              </a>
            </li>
            <li className="c-manu-item">
              <a className="c-manu-item__link" href="/">
                works
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-hero">
          <div className="p-hero-logo">
            <div className="p-hero-logo__icon">
              <PageLogo />
            </div>
            <h1 className="p-hero-logo__txt">hdeg</h1>
          </div>
        </div>
        <section className="p-portfolio-content">
          <h1 className="p-portfolio-content__ttl">about</h1>
          <div className="p-portfolio-content__desc--about">
            <TopAbout />
          </div>
        </section>
        <section className="p-portfolio-content">
          <h1 className="p-portfolio-content__ttl">works</h1>
          <div className="p-portfolio-content__desc--works">
            <TopWorks />
          </div>
        </section>
      </main>
    </>
  );
}
