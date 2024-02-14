'use client';
import { portfolioData } from '@/config/portfolioData';

export default function Home() {
  return (
    <>
      {portfolioData.about.map((data, index) => {
        return (
          <section key={index} className="p-about-section">
            <div>
              <div>{data.icon}</div>
            </div>
            <div>
              <h2 className="p-about-section__ttl">{data.title}</h2>
              <ul className="p-about-section__content">
                {data.list.map((contents, contentsIndex) => {
                  return <li key={contentsIndex}>{contents}</li>;
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}
