'use client';
import Image from 'next/image';
import {
  faCodeBranch,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { portfolioData } from '@/config/portfolioData';

const SITE_IMAGE_DIR: string = '/images/siteimage/';

export default function Home() {
  return (
    <>
      {portfolioData.works.map((data, index) => {
        return (
          <section key={index} className="p-works-section">
            <div className="p-site-image-set">
              {data.image.map((image, imageIndex) => {
                const imagePath = SITE_IMAGE_DIR + image;
                return (
                  <Image
                    src={imagePath}
                    alt={''}
                    width={1358}
                    height={895}
                    className="p-site-image-set__image"
                    key={imageIndex}
                  />
                );
              })}
            </div>
            <div>
              <h2 className="p-works-section__ttl">{data.title}</h2>
              <div className="p-works-section__desc">
                {data.desc.map((desc, descIndex) => {
                  return <p key={descIndex}>{desc}</p>;
                })}
              </div>
              <ul className="p-works-section__content">
                {data.website.map((website, websiteIndex) => {
                  return (
                    <li key={websiteIndex} className="p-works-section__list">
                      <FontAwesomeIcon
                        icon={faWindowMaximize}
                        className="p-works-section__list-icon"
                      />
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {website}
                      </a>
                    </li>
                  );
                })}
                {data.code.map((code, codeIndex) => {
                  return (
                    <li key={codeIndex} className="p-works-section__list">
                      <FontAwesomeIcon
                        icon={faCodeBranch}
                        className="p-works-section__list-icon"
                      />
                      <a href={code} target="_blank" rel="noopener noreferrer">
                        {code}
                      </a>
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
