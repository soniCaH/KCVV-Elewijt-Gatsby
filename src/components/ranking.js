import React, { Component, Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'

class RankingRow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <tr
        className={
          this.props.result.team === this.props.highlight
            ? 'highlightRow rankingRow'
            : 'rankingRow'
        }
      >
        <td className="rankingRow-Position rankingRow-Integer">
          {this.props.result.position}
        </td>
        <td className="rankingRow-Teamname">{this.props.result.team}</td>
        <td className="rankingRow-Matches rankingRow-Integer">
          {this.props.result.matches}
        </td>
        <td className="rankingRow-Wins rankingRow-Integer">
          {this.props.result.wins}
        </td>
        <td className="rankingRow-Draws rankingRow-Integer">
          {this.props.result.draws}
        </td>
        <td className="rankingRow-Losses rankingRow-Integer">
          {this.props.result.losses}
        </td>
        <td className="rankingRow-GoalsPro rankingRow-Integer">
          {this.props.result.goalsPro}
        </td>
        <td className="rankingRow-GoalsAgainst rankingRow-Integer">
          {this.props.result.goalsAgainst}
        </td>
        <td className="rankingRow-GoalsDiff rankingRow-Integer">
          {this.props.result.goalsPro - this.props.result.goalsAgainst}
        </td>
        <td className="rankingRow-Points rankingRow-Integer">
          {this.props.result.points}
        </td>
      </tr>
    )
  }
}

class Ranking extends React.Component {
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
    let { season, province, division } = this.props

    console.log('Fetching rankings')

    fetch(
        `${this.apiServerUrl}/seasons/${season}/regions/${province}/rankings/${division}`)

      .then(response => response.json())
      .then(json => this.setState({ data: json, loading: false }))

    this.timeout = setTimeout(() => {
      this.updateData(() => {
        console.log('Updating the rankings.')
      })
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
      this.state.data.sort((a, b) => {
        return a.position - b.position !== 0
          ? a.position - b.position
          : b.goalsPro - b.goalsAgainst - (a.goalsPro - a.goalsAgainst)
      })

      return (
        <table className="rankingTable">
          <thead>
            <tr className="rankingRow">
              <th className="rankingRow-Position rankingRow-Integer">#</th>
              <th className="rankingRow-Teamname">Team</th>
              <th className="rankingRow-Matches rankingRow-Integer">M</th>
              <th className="rankingRow-Wins rankingRow-Integer">W</th>
              <th className="rankingRow-Draws rankingRow-Integer">D</th>
              <th className="rankingRow-Losses rankingRow-Integer">L</th>
              <th className="rankingRow-GoalsPro rankingRow-Integer">G+</th>
              <th className="rankingRow-GoalsAgainst rankingRow-Integer">G-</th>
              <th className="rankingRow-GoalsDiff rankingRow-Integer">+/-</th>
              <th className="rankingRow-Points rankingRow-Integer">Pts</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((result, i) => (
              <RankingRow
                result={result}
                key={i}
                highlight={this.props.highlight}
              />
            ))}
          </tbody>
        </table>
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

export default ({ season, province, division, highlight }) => (
  <StaticQuery
    query={query}
    render={data => (
      <Ranking
        config={data}
        season={season}
        province={province}
        division={division}
        highlight={highlight}
      />
    )}
  />
)
