'use client';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '@/config/portfolioData';

export default function Home() {
  return (
    <>
      {portfolioData.about.map((data, index) => {
        return (
          <section key={index} className="p-about-section">
            <div>
              <FontAwesomeIcon
                icon={data.icon}
                className="p-about-section__icon"
              />
            </div>
            <div className="p-about-section__txt-container">
              <h2 className="p-about-section__ttl">{data.title}</h2>
              <ul className="p-about-section__content">
                {data.list.map((contents, contentsIndex) => {
                  return (
                    <li key={contentsIndex} className="p-about-section__list">
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        className="p-about-section__list-icon"
                      />
                      {contents}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}
