import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import LazyLoad from "react-lazy-load"

import defaultLogo from "../images/default.png"
import flatLogoElewijt from "../images/logo-flat.png"

/**
 * Render club logo based on the registration number of a club.
 *
 * If Logo was not found (HTTP error) a default shield is shown as fallback.
 */
class ClubLogo extends Component {
  constructor(props) {
    super(props)

    this.apiLogoUrl = props.config.site.siteMetadata.logoUrl
  }

  // Official logo @ KBVB is still old / wannabe 3D-ish.
  getLogoImageSrcUrl(regNumber) {
    if (regNumber === "00055") {
      return flatLogoElewijt
    }
    return `${this.apiLogoUrl}/${regNumber}`
  }

  render() {
    const { lazyload, regNumber, title, className } = this.props
    const logoSourceUrl = this.getLogoImageSrcUrl(regNumber)
    const image = (
      <img
        src={logoSourceUrl}
        role="presentation"
        onError={({ target }) => {
          target.onerror = null
          target.src = defaultLogo
        }}
        alt={title}
        className={className}
      />
    )

    if (lazyload === true) {
      return <LazyLoad debounce={false}>{image}</LazyLoad>
    } else {
      return image
    }
  }
}

// Retrieve endpoint of the logo's api from the site metadata (gatsby-config.js).
const query = graphql`
  query {
    site {
      siteMetadata {
        logoUrl
      }
    }
  }
`

export default ({
  // If no regnumber was given, we return the KCVV Elewijt logo by default.
  regNumber = "00055",
  title = "KCVV Elewijt",
  className = "",
  lazyload = false,
}) => (
  <StaticQuery
    query={query}
    render={data => (
      <ClubLogo
        // Data is the result of our query.
        config={data}
        regNumber={regNumber}
        title={title}
        className={className}
        lazyload={lazyload}
      />
    )}
  />
)
