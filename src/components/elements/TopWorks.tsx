'use client';

import {
  faCodeBranch,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '@/config/portfolioData';

export default function Home() {
  return (
    <>
      {portfolioData.works.map((data, index) => {
        return (
          <section key={index} className="p-works-section">
            <h2 className="p-works-section__ttl">{data.title}</h2>
            <div className="p-works-section__desc">
              {data.desc.map((desc, descIndex) => {
                return <p key={descIndex}>{desc}</p>;
              })}
            </div>
            <ul className="p-works-section__content">
              <li>
                <FontAwesomeIcon
                  icon={faWindowMaximize}
                  className="c-list-icon"
                />
                <a href={data.website}>{data.website}</a>
              </li>
              {data.code.map((code, codeIndex) => {
                return (
                  <li key={codeIndex}>
                    <FontAwesomeIcon
                      icon={faCodeBranch}
                      className="c-list-icon"
                    />
                    <a href={code}>{code}</a>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </>
  );
}
