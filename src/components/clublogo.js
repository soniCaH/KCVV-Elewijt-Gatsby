import React, { Component } from 'react'
import defaultLogo from '../images/default.png'
import { graphql, StaticQuery } from 'gatsby'

import LogoFlat from '../images/logo-flat.png';

/**
 * Render club logo based on the registration number of a club.
 *
 * If Logo was not found (HTTP error) a default shield is shown as fallback.
 */
class ClubLogo extends Component {
  constructor(props) {
    super(props)

    // Retrieve endpoint of the logo's api.
    this.apiLogoUrl = props.config.site.siteMetadata.logoUrl
  }

  render() {
    if (this.props.regNumber === '00055') {
      return <img src={LogoFlat} alt="KCVV Elewijt" className={this.props.className} />
    }
    const logoUrl = `${this.apiLogoUrl}/${this.props.regNumber}`

    return (
      <img
        src={logoUrl}
        onError={({target}) => {
          target.onerror = null
          target.src = defaultLogo
        }}
        alt={this.props.title}
        className={this.props.className}
      />
    );
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
  regNumber = '00055',
  title = 'KCVV Elewijt',
  className = '',
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
      />
    )}
  />
)
