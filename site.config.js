const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'SilverTree-KR',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: '',
    bio: '게임을 좋아하는 개발자입니다.',
    email: 'silvertree4693@gmail.com',
    linkedin: '',
    github: 'SilverTree-KR',
    instagram: '',
  },
  projects: [
    
  ],
  // blog setting (required)
  blog: {
    title: '나무의 개발 블로그',
    description: '나무의 개발 블로그에 오신 것을 환영합니다 !',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://morethan-log.vercel.app',
  since: 2023, // If leave this empty, current year will be used.
  lang: 'ko-KR', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: '', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['마인크래프트', '은색나무', '스크립트 아카이브', '스크립트', '스크립트아카이브'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'SilverTree/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
