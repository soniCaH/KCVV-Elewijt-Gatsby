import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

import defaultOgImage from "../images/preseason.jpg"

// function SEO({ description, lang, meta, keywords, title }) {
function SEO({ lang, title, description, meta, keywords, path, image: metaImage }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={({ site }) => {
        const metaDescription = description || site.siteMetadata.description
        const canonicalUrl = path ? `${site.siteMetadata.siteUrl}${path}` : null

        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            link={canonicalUrl ? [{ rel: `canonical`, href: canonicalUrl }] : []}
            meta={
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
  path: `/`,
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
