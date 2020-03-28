import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import defaultOgImage from "../images/preseason.jpg"

// function SEO({ description, lang, meta, keywords, title }) {
function SEO({ lang, title, description, meta, keywords, path, image }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site }) => {
        const metaDescription = description || site.siteMetadata.description
        const canonicalUrl = site.siteMetadata.siteUrl + path
        const imageUrl = site.siteMetadata.siteUrl + image
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                property: `fb:app_id`,
                content: site.siteMetadata.fbAppId,
              },
              {
                property: `og:url`,
                content: canonicalUrl,
              },
              {
                property: `og:image`,
                content: imageUrl,
              },
            ]
              .concat(
                keywords.length > 0
                  ? {
                      name: `keywords`,
                      content: keywords.join(`, `),
                    }
                  : []
              )
              .concat(meta)}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `nl-BE`,
  meta: [],
  keywords: [],
  path: "/",
  image: defaultOgImage,
}

SEO.propTypes = {
  subtitle: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  image: PropTypes.string,
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        subTitle
        description
        author
        siteUrl
        fbAppId
      }
    }
  }
`
