import React, { Component, Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
import MatchWithLogo from "./match-with-logo"

import "./team-calendar-meta-matches.scss"

class TeamCalendarMetaMatches extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    this.uuid = props.division.toLowerCase()

    this.apiServerUrl = props.config.site.siteMetadata.serverUrl
    this.apiRefreshRate = props.config.site.siteMetadata.refreshRate
    this.timeout = {}
  }

  updateData() {
    const { season, region, division, regnumber } = this.props

    fetch(
      `${this.apiServerUrl}/meta/${season}/${region}/${division}/${regnumber}`
    )
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))

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
      const { next, previous } = this.state.data

      if (previous || next) {
        return (
          <Fragment>
            <div className={"team-calendar-meta-matches"}>
              {previous && (
                <MatchWithLogo match={previous.match} lazyload={true} />
              )}
              {next && <MatchWithLogo match={next.match} lazyload={true} />}
            </div>
          </Fragment>
        )
      } else {
        return null
      }
    } else {
      return null
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

export default ({ season, region, division, regnumber }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <TeamCalendarMetaMatches
        config={data}
        season={season}
        region={region}
        division={division}
        regnumber={regnumber}
      />
    )}
  />
)
