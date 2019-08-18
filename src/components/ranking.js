import React, { Component } from 'react'
import { graphql, StaticQuery } from 'gatsby'

import './ranking.scss';

class RankingRow extends Component {
  render() {
    return (
      <tr
        className={
          this.props.result.team === this.props.highlight
            ? 'team-ranking__row--highlight team-ranking__row'
            : 'team-ranking__row'
        }
      >
        <td className={"team-ranking__column team-ranking__column--number team-ranking__column--ranking"}>{this.props.result.position}</td>
        <td className={"team-ranking__column team-ranking__column--string team-ranking__column--team"}>{this.props.result.team}</td>
        <td className={"team-ranking__column team-ranking__column--number"}>{this.props.result.matches}</td>
        <td className={"team-ranking__column team-ranking__column--number"}>{this.props.result.wins}</td>
        <td className={"team-ranking__column team-ranking__column--number"}>{this.props.result.draws}</td>
        <td className={"team-ranking__column team-ranking__column--number"}>{this.props.result.losses}</td>
        <td className={"team-ranking__column team-ranking__column--number team-ranking__column--goals-pro"}>{this.props.result.goalsPro}</td>
        <td className={"team-ranking__column team-ranking__column--number team-ranking__column--goals-against"}> {this.props.result.goalsAgainst}</td>
        <td className={"team-ranking__column team-ranking__column--number team-ranking__column--goals-difference"}>{this.props.result.goalsPro - this.props.result.goalsAgainst}</td>
        <td className={"team-ranking__column team-ranking__column--number team-ranking__column--points"}>{this.props.result.points}</td>
      </tr>
    )
  }
}

class Ranking extends Component {
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
        <div className={"team-ranking"}>
        <table className={"team-ranking__table"}>
          <thead className={"team-ranking__header"}>
            <tr className={"team-ranking__row"}>
              <th className={"team-ranking__column team-ranking__column--number team-ranking__column--ranking"}>#</th>
              <th className={"team-ranking__column team-ranking__column--string team-ranking__column--team"}>Team</th>
              <th className={"team-ranking__column team-ranking__column--number"}>M</th>
              <th className={"team-ranking__column team-ranking__column--number"}>W</th>
              <th className={"team-ranking__column team-ranking__column--number"}>D</th>
              <th className={"team-ranking__column team-ranking__column--number"}>L</th>
              <th className={"team-ranking__column team-ranking__column--number team-ranking__column--goals-pro"}>G+</th>
              <th className={"team-ranking__column team-ranking__column--number team-ranking__column--goals-against"}>G-</th>
              <th className={"team-ranking__column team-ranking__column--number team-ranking__column--goals-difference"}>+/-</th>
              <th className={"team-ranking__column team-ranking__column--number team-ranking__column--points"}>Pts</th>
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
        </table></div>
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
