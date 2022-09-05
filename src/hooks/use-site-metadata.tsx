import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetaData = (): Queries.SiteSiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subTitle
          description
          author
          siteUrl
          kcvvPsdApi
          twitterHandle
          fbAppId
        }
      }
    }
  `)

  return data.site.siteMetadata
}
