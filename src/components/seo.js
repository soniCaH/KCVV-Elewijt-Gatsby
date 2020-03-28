import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import defaultOgImage from "../images/preseason.jpg"

// function SEO({ description, lang, meta, keywords, title }) {
function SEO({
  lang,
  title,
  description,
  meta,
  keywords,
  path,
  image: metaImage,
}) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site }) => {
        const metaDescription = description || site.siteMetadata.description
        const canonicalUrl = path ? `${site.siteMetadata.siteUrl}${path}` : null
        const image =
          metaImage && metaImage.src
            ? `${site.siteMetadata.siteUrl}${metaImage.src}`
            : null
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            link={
              canonicalUrl
                ? [
                    {
                      rel: "canonical",
                      href: canonicalUrl,
                    },
                  ]
                : []
            }
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
            ]
              .concat(
                canonicalUrl
                  ? {
                      property: `og:url`,
                      content: canonicalUrl,
                    }
                  : []
              )
              .concat(
                metaImage
                  ? [
                      {
                        property: "og:image",
                        content: image,
                      },
                      {
                        property: "og:image:width",
                        content: metaImage.width,
                      },
                      {
                        property: "og:image:height",
                        content: metaImage.height,
                      },
                      {
                        name: "twitter:card",
                        content: "summary_large_image",
                      },
                    ]
                  : [
                      {
                        name: "twitter:card",
                        content: "summary",
                      },
                    ]
              )
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
  image: {
    src: defaultOgImage,
    width: 2000,
    height: 1000,
  },
}

SEO.propTypes = {
  subtitle: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  path: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
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
