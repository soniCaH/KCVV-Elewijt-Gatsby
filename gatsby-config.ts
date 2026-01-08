import * as dotenv from "dotenv"
dotenv.config({ path: __dirname + `/.env` })

import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  graphqlTypegen: {
    typesOutputPath: `src/Types/gatsby-types.d.ts`,
  },
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
  trailingSlash: `always`,
  flags: {
    FAST_DEV: false,
    PARALLEL_SOURCING: false,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.GATSBY_API_DOMAIN,
        apiBase: `jsonapi`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        backgroundColor: `transparent`,
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      },
    },
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
        icon: `src/images/logo-flat.png`,
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

export default config
