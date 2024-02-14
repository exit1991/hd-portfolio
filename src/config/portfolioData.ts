type aboutData = {
  title: string;
  icon: string;
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
      title: '言語',
      icon: 'fa-solid fa-bars-staggered',
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
      icon: 'fa-solid fa-cube',
      list: ['React', 'Next.js', 'Gatsby JS'],
    },
    {
      title: 'DB',
      icon: 'fa-solid fa-database',
      list: ['Oracle', 'PostgreSQL', 'Amazon Redshift'],
    },
    {
      title: 'Cloud',
      icon: 'fa-solid fa-cloud',
      list: ['AWS'],
    },
    {
      title: '資格',
      icon: 'fa-solid fa-shapes',
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
