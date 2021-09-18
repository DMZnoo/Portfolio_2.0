module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.danieljnwlee.com',
  changefreq: 'daily',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}