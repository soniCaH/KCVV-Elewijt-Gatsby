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
    url: 'https://preview.kcvvelewijt.be',
    twitterHandle: 'kcvve',
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_API_DOMAIN,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
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

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    `gatsby-plugin-preact`,
    // 'social-media-feed',
    // `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KCVV Elewijt Voetbalclub`,
        description: `Website voor de voetbalclub KCVV Elewijt.`,
        short_name: `KCVVElewijt`,
        start_url: `/`,
        lang: `nl`,
        background_color: `#4B9B48`,
        theme_color: `#6b374B9B48bf`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        crossOrigin: `use-credentials`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
