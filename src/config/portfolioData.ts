import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faBarsStaggered,
  faCloud,
  faCube,
  faDatabase,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

type aboutData = {
  title: string;
  icon: IconProp;
  list: string[];
};

type worksData = {
  title: string;
  image: string[];
  desc: string[];
  website: string[];
  code: string[];
};

type PortfolioData = {
  about: aboutData[];
  works: worksData[];
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
      list: [
        'React',
        'Next.js',
        'Gatsby JS',
        'Three.js',
        'Phaser3',
        'Spring Boot',
      ],
    },
    {
      title: 'DB',
      icon: faDatabase,
      list: ['Oracle', 'PostgreSQL', 'Amazon Redshift'],
    },
    {
      title: 'Cloud',
      icon: faCloud,
      list: ['AWS', 'GCP'],
    },
    {
      title: '資格',
      icon: faTrophy,
      list: [
        'Java SE Bronze/Silver',
        'HTML 5 プロフェッショナル 認定試験 レベル1/レベル2',
        'Python 3 エンジニア認定基礎試験',
        'AWS Certified Cloud Practitioner',
        'ORACLE MASTER Bronze Oracle Database 12c',
        'LPIC-1',
        'VBA エキスパート試験 Excel VBA Basic/Standard',
        'ITパスポート',
        'ねこ検定 初級',
      ],
    },
  ],
  works: [
    {
      title: 'Cafein',
      image: ['cafein_01.png', 'cafein_02.png', 'cafein_03.png'],
      desc: ['駅カフェ路線図掲載サイト、Cafein (カフェイン)'],
      website: ['https://take4b-cafein.netlify.app/'],
      code: ['https://github.com/take4bcreators/cafe-train-prj'],
    },
    {
      title: 'TEMPORALLY',
      image: ['temporally_01.png', 'temporally_02.png', 'temporally_03.png'],
      desc: ['すごろく拡張ツール、TEMPORALLY (テンポラリー)'],
      website: ['https://extensionlab-temporally.netlify.app/'],
      code: [
        'https://github.com/take4bcreators/expand-sugoroku-project-front',
        'https://github.com/take4bcreators/expand-sugoroku-project-batch',
        'https://github.com/take4bcreators/expand-sugoroku-project-server',
      ],
    },
    {
      title: 'フリフリフリック',
      image: [
        'furifuriflick_01.png',
        'furifuriflick_02.png',
        'furifuriflick_03.png',
      ],
      desc: ['WEBゲーム'],
      website: [
        'https://extensionlab-temporally.netlify.app/minigame/furiwake/',
      ],
      code: [
        'https://github.com/take4bcreators/expand-sugoroku-minigame-furiwake',
      ],
    },
    {
      title: 'extensionLAB',
      image: [
        'extensionlab_01.png',
        'extensionlab_02.png',
        'extensionlab_03.png',
      ],
      desc: ['WEBツール紹介サイト、extensionLAB（エクステンション・ラボ）'],
      website: ['https://extensionlab.netlify.app/'],
      code: [],
    },
    {
      title: 'シンケイスイジャックポッド',
      image: [
        'shinkeisuijackpot_01.png',
        'shinkeisuijackpot_02.png',
        'shinkeisuijackpot_03.png',
      ],
      desc: ['トランプ拡張ツール'],
      website: ['https://extensionlab.netlify.app/app/app01/'],
      code: [],
    },
    {
      title: '大富豪スイッチ',
      image: [
        'daihugoswitch_01.png',
        'daihugoswitch_02.png',
        'daihugoswitch_03.png',
      ],
      desc: ['トランプ拡張ツール'],
      website: ['https://extensionlab.netlify.app/app/app02/'],
      code: [],
    },
    {
      title: 'STURTER',
      image: ['sturter_01.png', 'sturter_02.png', 'sturter_03.png'],
      desc: ['自作iPhoneアプリ紹介サイト'],
      website: ['https://exit1991.github.io/sturter/'],
      code: ['https://github.com/exit1991/sturter'],
    },
    {
      title: 'POINTS',
      image: ['points_01.png', 'points_02.png', 'points_03.png'],
      desc: ['WEBツール'],
      website: ['https://dexit-output-points.netlify.app/'],
      code: ['https://github.com/exit1991/simple-web-score'],
    },
    {
      title: 'WOLFFICE',
      image: ['wolffice_01.png', 'wolffice_02.png', 'wolffice_03.png'],
      desc: ['人狼パーティツール、WOLFFICE（ウルフィス）'],
      website: [],
      code: [
        'https://github.com/take4bcreators/jinro-party-frontend',
        'https://github.com/take4bcreators/jinro-party-backend',
        'https://github.com/take4bcreators/jinro-party-server',
      ],
    },
  ],
};
