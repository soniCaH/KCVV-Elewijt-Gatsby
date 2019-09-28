require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `KCVV Elewijt`,
    subTitle: `Er is maar één plezante compagnie`,
    description: `Website van KCVV Elewijt voetbalclub`,
    author: `@KevinVRansbeeck`,
    serverUrl: `${process.env.FOOTBEL_API_DOMAIN}`,
    logoUrl: `${process.env.FOOTBEL_API_DOMAIN}/logo`,
    refreshRate: 360000,
    url: "https://preview.kcvvelewijt.be",
    twitterHandle: "kcvve"
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GTM_ID,

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    // 'social-media-feed',
    // `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     /*
    //      * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
    //      * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
    //      */
    //     baseUrl: 'kcvvelewijt.be',
    //     // The protocol. This can be http or https.
    //     protocol: 'https',
    //     // Indicates whether the site is hosted on wordpress.com.
    //     // If false, then the assumption is made that the site is self hosted.
    //     // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
    //     // If your site is hosted on wordpress.org, then set this to false.
    //     hostingWPCOM: false,
    //     // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
    //     // This feature is untested for sites hosted on wordpress.com.
    //     // Defaults to true.
    //     useACF: false,
    //     // Include specific ACF Option Pages that have a set post ID
    //     // Regardless if an ID is set, the default options route will still be retrieved
    //     // Must be using V3 of ACF to REST to include these routes
    //     // Example: `["option_page_1", "option_page_2"]` will include the proper ACF option
    //     // routes with the ID option_page_1 and option_page_2
    //     // Dashes in IDs will be converted to underscores for use in GraphQL
    //     acfOptionPageIds: [],

    //     // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
    //     // It can help you debug specific API Endpoints problems.
    //     verboseOutput: true,
    //     // Set how many pages are retrieved per API request.
    //     perPage: 100,
    //     // Search and Replace Urls across WordPress content.
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: 'https://source-url.com',
    //       replacementUrl: 'https://replacement-url.com',
    //     },
    //     // Set how many simultaneous requests are sent at once.
    //     concurrentRequests: 10,
    //     // Set WP REST API routes whitelists
    //     // and blacklists using glob patterns.
    //     // Defaults to whitelist the routes shown
    //     // in the example below.
    //     // See: https://github.com/isaacs/minimatch
    //     // Example:  `["/*/*/comments", "/yoast/**"]`
    //     // ` will either include or exclude routes ending in `comments` and
    //     // all routes that begin with `yoast` from fetch.
    //     // Whitelisted routes using glob patterns
    //     includedRoutes: [
    //       '**/*/*/categories',
    //       '**/*/*/categories/**',
    //       '**/*/*/posts',
    //       '**/*/*/posts/**',
    //       // '**/*/*/pages',
    //       // '**/*/*/pages/**',
    //       '**/*/*/media',
    //       '**/*/*/media/**',
    //       // '**/*/*/tags',
    //       // '**/*/*/tags/**',
    //       // '**/*/*/taxonomies',
    //       // '**/*/*/taxonomies/**',
    //       // "**/*/*/users",
    //     ],
    //     // Blacklisted routes using glob patterns
    //     // excludedRoutes: ["**/*/*/posts/1456"],
    //     // use a custom normalizer which is applied after the built-in ones.
    //     // normalizer: function({ entities }) {
    //     //   return entities
    //     // },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
