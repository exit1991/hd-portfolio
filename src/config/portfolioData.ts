import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBarsStaggered,
  faCloud,
  faCube,
  faDatabase,
  faShapes,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

type aboutData = {
  title: string;
  icon: IconProp;
  list: string[];
};

type PortfolioData = {
  about: aboutData[];
};

/**
 * ポートフォリオ掲載用データ
 */
export const portfolioData: PortfolioData = {
  about: [
    {
      title: 'hdeg',
      icon: faUser,
      list: ['1991年生まれ'],
    },
    {
      title: '言語',
      icon: faBarsStaggered,
      list: [
        'JavaScript',
        'TypeScript',
        'Java',
        'Python',
        'Swift',
        'VBA',
        'Bash',
        'HTML',
        'CSS',
        'SASS／SCSS',
        'SQL',
        'PL/pgSQL',
      ],
    },
    {
      title: 'フレームワーク・ライブラリ',
      icon: faCube,
      list: ['React', 'Next.js', 'Gatsby JS'],
    },
    {
      title: 'DB',
      icon: faDatabase,
      list: ['Oracle', 'PostgreSQL', 'Amazon Redshift'],
    },
    {
      title: 'Cloud',
      icon: faCloud,
      list: ['AWS'],
    },
    {
      title: '資格',
      icon: faShapes,
      list: [
        'Java SE Bronze／Silver',
        'HTML5プロフェッショナル認定試験 レベル1／レベル2',
        'Python 3 エンジニア認定基礎試験',
        'AWS Certified Cloud Practitioner',
        'ORACLE MASTER Bronze Oracle Database 12c',
        'LPIC-1',
        'VBAエキスパート試験 Excel VBA Basic／Standard',
        'ITパスポート',
        'ねこ検定 初級',
      ],
    },
  ],
};
