require(`dotenv`).config()

module.exports = {
  siteMetadata: {
    title: `KCVV Elewijt`,
    subTitle: `Er is maar één plezante compagnie`,
    description: `KCVV Elewijt voetbalclub met stamnummer 55 - Er is maar één plezante compagnie`,
    author: `@KevinVRansbeeck`,
    kcvvPsdApi: `${process.env.KCVV_PSD_API}`,
    siteUrl: `https://www.kcvvelewijt.be`,
    twitterHandle: `kcvve`,
    fbAppId: `679332239478086`,
  },
  flags: {
    FAST_DEV: true,
    // LMDB_STORE: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PARALLEL_SOURCING: true,
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
    `gatsby-plugin-image`,
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
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATSBY_GTM_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: `gatsby`, branch: process.env.BRANCH },
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
    `gatsby-plugin-netlify`,
    `gatsby-plugin-use-query-params`,
  ],
}
