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

class TeamCalendarMatches extends React.Component {
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

    fetch(
      `${this.apiServerUrl}/seasons/${season}/regions/${province}/matches/${division}`
    )
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
    let moment = require('moment')
    let timezone = require('moment-timezone')
    moment.locale('nl-BE')

    if (this.state.loading === false && this.state.data) {
      const elewijtMatches = this.state.data
        .filter(
          ({ regNumberHome, regNumberAway }) =>
            regNumberHome === '00055' || regNumberAway === '00055'
        )
        .sort((a, b) =>
          a.dateTime > b.dateTime ? 1 : b.dateTime > a.dateTime ? -1 : 0
        )

      return (
        <table className="rankingTable">
          <thead>
            <tr className="rankingRow">
              <th className="rankingRow-Position rankingRow-Integer">Datum</th>
              <th className="rankingRow-Teamname">Uur</th>
              <th className="rankingRow-Matches rankingRow-Integer">
                Thuisploeg
              </th>
              <th className="rankingRow-Wins rankingRow-Integer">Score</th>
              <th className="rankingRow-Draws rankingRow-Integer">Uitploeg</th>
              <th className="rankingRow-Losses rankingRow-Integer">Status</th>
            </tr>
          </thead>
          <tbody>
            {elewijtMatches.map((result, i) => {
              const d = new moment(result.dateTime)
              const date = d.format('dddd D MMMM YYYY')
              const dateShort = d.format('DD/MM/YYYY')
              const time = d.format('HH:mm')
              return (
                <tr>
                  <td className={'display-desktop'}>{date}</td>
                  <td className={'display-mobile'}>{dateShort}</td>
                  <td>{time}</td>
                  <td>{result.home}</td>
                  <td>
                    {typeof result.resultHome !== 'undefined' &&
                    typeof result.resultAway !== 'undefined'
                      ? `${result.resultHome} - ${result.resultAway}`
                      : 'vs'}
                  </td>
                  <td>{result.away}</td>
                  <td>{result.status}</td>
                </tr>
              )
            })}
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
      <TeamCalendarMatches
        config={data}
        season={season}
        province={province}
        division={division}
      />
    )}
  />
)
