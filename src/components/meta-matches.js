import React, { Component, Fragment } from "react"
import { graphql, StaticQuery } from "gatsby"
// import './meta-matches.scss'
import MatchWithLogo from "./match-with-logo"
import MiniRanking from "./mini-ranking"

class MetaMatches extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      globalRanking: [],
      loading1: true,
      loading2: true,
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
      .then((json) => this.setState({ data: json, loading1: false }))

    fetch(
      `${this.apiServerUrl}/seasons/${season}/regions/${region}/rankings/${division}`
    )
      .then((response) => response.json())
      .then((json) => this.setState({ globalRanking: json, loading2: false }))

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
    if (
      this.state.loading1 === false &&
      this.state.loading2 === false &&
      this.state.data
    ) {
      const { next, previous, ranking } = this.state.data
      return (
        <Fragment>
          <ul className="widget__filter" data-tabs id={`matches-${this.uuid}`}>
            <li className="tabs-title">
              <a href={`#matches-${this.uuid}-prev`}>Vorige</a>
            </li>
            <li className="tabs-title is-active">
              <a href={`#matches-${this.uuid}-next`}>Volgende</a>
            </li>
            <li className="tabs-title">
              <a href={`#matches-${this.uuid}-rank`}>Ranking</a>
            </li>
          </ul>
          <div data-tabs-content={`matches-${this.uuid}`}>
            <div className="tabs-panel" id={`matches-${this.uuid}-prev`}>
              {previous && (
                <MatchWithLogo match={previous.match} lazyload={true} />
              )}
              {previous && (
                <MiniRanking ranking={[previous.opponent.ranking, ranking]} />
              )}

              {!previous && <div className="matches_overview__wrapper">Geen vorige wedstrijden gevonden</div>}
            </div>
            <div
              className="tabs-panel is-active"
              id={`matches-${this.uuid}-next`}
            >
              {next && <MatchWithLogo match={next.match} lazyload={true} />}
              {next && (
                <MiniRanking ranking={[next.opponent.ranking, ranking]} />
              )}
              {!next && <div className="matches_overview__wrapper">Geen volgende wedstrijden gevonden</div>}
            </div>
            <div className="tabs-panel" id={`matches-${this.uuid}-rank`}>
              <MiniRanking ranking={this.state.globalRanking} />
            </div>
          </div>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <ul className="widget__filter" data-tabs id={`matches-${this.uuid}`}>
            <li className="tabs-title">
              <a href={`#matches-${this.uuid}-prev`}>Vorige</a>
            </li>
            <li className="tabs-title is-active">
              <a href={`#matches-${this.uuid}-next`}>Volgende</a>
            </li>
            <li className="tabs-title">
              <a href={`#matches-${this.uuid}-rank`}>Ranking</a>
            </li>
          </ul>
          <div data-tabs-content={`matches-${this.uuid}`}>
            <div className="tabs-panel" id={`matches-${this.uuid}-prev`} />
            <div
              className="tabs-panel is-active"
              id={`matches-${this.uuid}-next`}
            >
              Nog geen wedstrijden gekend
            </div>
            <div className="tabs-panel" id={`matches-${this.uuid}-rank`} />
          </div>
        </Fragment>
      )
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
      <MetaMatches
        config={data}
        season={season}
        region={region}
        division={division}
        regnumber={regnumber}
      />
    )}
  />
)
