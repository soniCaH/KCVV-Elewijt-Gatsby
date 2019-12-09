require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `KCVV Elewijt`,
    subTitle: `Er is maar één plezante compagnie`,
    description: `Website van KCVV Elewijt voetbalclub`,
    author: `@KevinVRansbeeck`,
    serverUrl: `${process.env.FOOTBEL_API_DOMAIN}`,
    logoUrl: `${process.env.FOOTBEL_API_DOMAIN}/logo`,
    refreshRate: 360000,
    url: 'https://www.kcvvelewijt.be',
    siteUrl: 'https://www.kcvvelewijt.be',
    twitterHandle: 'kcvve',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_API_DOMAIN,
        apiBase: `jsonapi`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GATSBY_GTM_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KCVV Elewijt Voetbalclub`,
        description: `Website voor de voetbalclub KCVV Elewijt.`,
        short_name: `KCVVElewijt`,
        start_url: `/`,
        lang: `nl`,
        background_color: `#4B9B48`,
        theme_color: `#4B9B48`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
  ],
}
