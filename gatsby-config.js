require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `KCVV Elewijt`,
    subTitle: `Er is maar één plezante compagnie`,
    description: `KCVV Elewijt voetbalclub met stamnummer 55 - Er is maar één plezante compagnie`,
    author: `@KevinVRansbeeck`,
    serverUrl: `${process.env.FOOTBEL_API_DOMAIN}`,
    logoUrl: `${process.env.FOOTBEL_API_DOMAIN}/logo`,
    refreshRate: 360000,
    siteUrl: "https://www.kcvvelewijt.be",
    twitterHandle: "kcvve",
    fbAppId: "679332239478086",
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
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GATSBY_GTM_ID,
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
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
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        // Find the view id in the GA admin in a section labeled "views"
        GAViewID: `200450650`,
        // Add a JWT to get data from GA
        jwt: {
          client_email: `jwt-gatsby-guess@kcvv-gatsby.iam.gserviceaccount.com`,
          private_key: `-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDXXa7hfRITQV8w\nkUqe063AESL+ozxySG1D8SIqu5cWTaUoMmGgUEZUB9RM9Lj3f3qrQzJrVmcLyluc\nuFTeFWpzkQNjB2ITRkykNEme+tcm3yGS4tFRa4Ijov8V8PKdKFFo9xEPO1jL2ekX\n+n3Mm9cED7gSacCkZ3165Is/GKBNZyAkRD0SS/sQfreZ63rI1g/m8X5NW1RPM5K7\nvlWsF3gV7pO7rE6VuZg+ReHsNuDwEaKxQ06bHyO7XIYFcv/p6Icg5A2dJCpPZcNK\nNz9BL6xpAhWb4zkkE8bT2TBMsAHoU7FPqw8sGdGZBdmiyHruGEguiu9QAzHWj1Nz\n3vhDmsVjAgMBAAECggEAD1FlKY9Gby2BzRKIcYOHeCxqhhyreqAW0B5L2n49NiOP\nplbvBVgFqIm7WpM4FLfHIdHwZBy2d5WNA+NDJgif6a2xb/m2dWh/9a3tDpcIy9r9\nqFTkTnDhxhHHKD2wWT06N8ewOZp0VmDJaMsy52VY2xEYe+F0XOfUz54xyUBse79t\n6XvWuD61Ui5CBOAiLe/pvIBq/+w2KR0Uhgc0ZMfLCGDp86oy+KEbjQINsk++mSnh\nXjOQ/dEul/BytU+bqIdK0tP3RU6jqdNb7BIv7bVkkp5BJMiJxOaWK1YF+m++bmb2\n1BZqJwSbR8EaDD2inFvBYFl4v2BoEo26sDnRy3geAQKBgQDyPxGvSYxKvsHkuwY7\nuCN5+BuSyRbcQDC5ZSBAMPc4mm+5ysfH+QgGgrNykC8RplkQ6SJMcCXd2j2Dlir8\ngy0hTpxc9bqpxCe0/weNlRfiPMSTNk4zQwq+kEKhYUtAOBHwCvSvqF8IY5NhgSAs\ngWQWXun6bzfTsHwue/ZNAzhkKwKBgQDjl+uozNgiNgIDBzLFnXh2M/1X340RiruC\nd6hZXN+GpjCEdC35RqXqljYq32ScazuBhV5FKtq3BqpvFFppw7bR7w0j17XAObjC\nwVTR5cvNP2q0BiYXTRketlLTJDIuwF0AONrKRf6dLgfAoBBZ4oq57vWxUQ9/q51B\nMx8J3NZvqQKBgQDfX3agKnJ5rcI+dpI92QKlgjlytYgl2e7T1ULSzhP4lrd1G13y\nsFhNIJH1jqxIWxp/tGmTEEpqcsYMIxlKNG8V6lXWhiP0TNLMW+mMDTGzxJMCp62e\nKTCsHXvDMWLhOZKYxJFxtBDFPIR3AUk4oKs40ZZw/cL9qRwpBNdNli2WdwKBgDwl\n4jnyKQyhiVaTiG+BdlyG0OVwRy/jojqQtQUo7kn/kcLvkVbXvPGKUTZzY3uTO163\niHpvIO5N7Kz+jAZ3mtFQhAB8+aObnaCax3fRa1MK94AsP9TYo1LijHEQl9KTNADj\nBa9/YBLaH2Jg6vFWVaNd68C404fCKwUYJZPNsT5BAoGBAKlGiGN7+zFt6TOl1GsI\nFl4diNKUtug5d1mh+55hDxS/Imdc7XjupAEhZQrhY/kd00QRUXaWnWYqhzV0onVU\nfjcm9WfZB9pxiLAppm3/Dhtiqa37WeNE7styLax+syET2L6gRjet9L7sHerd+2CP\nSl7GSKKZ/pzspK1H2ZG82/H0\n-----END PRIVATE KEY-----\n`,
        },
        minimumThreshold: 0.03,
        // The "period" for fetching analytic data.
        period: {
          startDate: new Date("2020-1-1"),
          endDate: new Date(),
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-netlify-cache`,
  ],
}
