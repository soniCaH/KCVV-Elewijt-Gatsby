import React, { Component } from 'react'
import defaultLogo from '../images/default.png'
import { graphql, StaticQuery } from 'gatsby'

class ClubLogo extends Component {
  constructor(props) {
    super(props)

    this.apiLogoUrl = props.config.site.siteMetadata.logoUrl
  }

  render() {
    const logoUrl = `${this.apiLogoUrl}/${this.props.regNumber}`

    return (
      <img
        src={logoUrl}
        onError={e => {
          e.target.onerror = null
          e.target.src = defaultLogo
        }}
        alt={this.props.title}
        className={this.props.className}
      />
    )
  }
}

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
  regNumber = '00055',
  title = 'KCVV Elewijt',
  className = '',
}) => (
  <StaticQuery
    query={query}
    render={data => (
      <ClubLogo
        config={data}
        regNumber={regNumber}
        title={title}
        className={className}
      />
    )}
  />
)
