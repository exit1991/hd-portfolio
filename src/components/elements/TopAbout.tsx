'use client';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
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
            <div>
              <h2 className="p-about-section__ttl">{data.title}</h2>
              <ul className="p-about-section__content">
                {data.list.map((contents, contentsIndex) => {
                  return (
                    <li key={contentsIndex}>
                      <FontAwesomeIcon icon={faCheck} className="c-list-icon" />
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
