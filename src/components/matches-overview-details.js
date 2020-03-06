import React, { Component, Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
import "./matches-overview.scss"
import MatchWithLogo from "./match-with-logo"

class MatchesOverviewDetails extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    this.apiServerUrl = props.config.site.siteMetadata.serverUrl
    this.apiLogoUrl = props.config.site.siteMetadata.logoUrl
    this.apiRefreshRate = props.config.site.siteMetadata.refreshRate
    this.timeout = {}
  }

  updateData() {
    const { season, regnumber, previous = false } = this.props
    let apiUrl = `${this.apiServerUrl}/seasons/${season}/matches/upcoming/${regnumber}`

    if (previous) {
      apiUrl = `${this.apiServerUrl}/seasons/${season}/matches/previous/${regnumber}`
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(json => this.setState({ data: json, loading: false }))

    this.timeout = setTimeout(() => {
      this.updateData(() => {})
    }, this.apiRefreshRate)
  }

  componentDidMount() {
    this.updateData()
  }

  componentWillUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    if (this.state.loading === false && this.state.data) {
      this.state.data.sort(
        (a, b) => a.dateTime - b.dateTime || a.division - b.division
      )

      if (this.state.data.length <= 0) {
        return (
          <div className="matches_overview__wrapper">
            Geen wedstrijden gevonden.
          </div>
        )
      }

      const ignore = this.props.exclude || []

      return (
        <div className="matches_overview__wrapper matches_overview__wrapper--details">
          {this.state.data.map((match, i) => {
            if (ignore.includes(match.division)) {
              return <Fragment key={i} />
            }

            return <MatchWithLogo match={match} lazyload={true} />
          })}
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        serverUrl
        refreshRate
      }
    }
  }
`

export default ({ season, regnumber, exclude, previous }) => (
  <StaticQuery
    query={query}
    render={data => (
      <MatchesOverviewDetails
        config={data}
        season={season}
        regnumber={regnumber}
        exclude={exclude}
        previous={previous}
      />
    )}
  />
)
