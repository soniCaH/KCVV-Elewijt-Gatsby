import "./Ranking.scss"

import React, { Fragment } from "react"
import { graphql, useStaticQuery } from "gatsby"

import Spinner from "./Spinner"
import { sortRankings } from "../scripts/helper"

class Ranking extends React.Component<RankingProps, RankingState> {
  public static defaultProps = {
    teamId: 1,
  }

  teamId: number
  kcvvPsdApi: string

  constructor(props: RankingProps) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    this.kcvvPsdApi = ``
    this.teamId = props.teamId
  }

  updateData(): void {
    if (this.teamId === null || this.kcvvPsdApi === ``) {
      return
    }

    const apiUrl = `${this.kcvvPsdApi}/ranking/${this.teamId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
  }

  componentDidMount(): void {
    this.updateData()
  }

  renderRanking = (ranking: RankingDataObject, i: number): JSX.Element => {
    return (
      <div className={`ranking`} key={i}>
        <h4>{ranking.name.replace(`Voetbal : `, ``)}</h4>
        <table>
          <thead>
            <tr>
              <th className={`table__column__number`}>#</th>
              <th className={`table__column__string`}>Team</th>
              <th className={`table__column__number show-for-medium`}>P</th>
              <th className={`table__column__number`}>W</th>
              <th className={`table__column__number`}>D</th>
              <th className={`table__column__number`}>L</th>
              <th className={`table__column__number show-for-medium`}>G+</th>
              <th className={`table__column__number show-for-medium`}>G-</th>
              <th className={`table__column__number`}>+/-</th>
              <th className={`table__column__number`}>Pts</th>
            </tr>
          </thead>
          <tbody>
            {ranking.teams.sort(sortRankings).map((team: RankingDataTeamObject, j: number) => (
              <tr key={j}>
                <td className={`table__column__number`}>{team.rank || `-`}</td>
                <td
                  className={`table__column__string ${
                    team.team?.club?.localName?.toLowerCase().includes(`elewijt`) ? `table__column--highlight` : ``
                  }`}
                >
                  {team.team?.club?.localName || ``}
                </td>
                <td className={`table__column__number show-for-medium`}>{team.matchesPlayed || `0`}</td>
                <td className={`table__column__number`}>{team.wins || `0`}</td>
                <td className={`table__column__number`}>{team.draws || `0`}</td>
                <td className={`table__column__number`}>{team.losses || `0`}</td>
                <td className={`table__column__number show-for-medium`}>{team.goalsScored || `0`}</td>
                <td className={`table__column__number show-for-medium`}>{team.goalsConceded || `0`}</td>
                <td className={`table__column__number`}>{team.goalsScored - team.goalsConceded || `0`}</td>
                <td className={`table__column__number`}>{team.points || `0`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  renderRankings = (): JSX.Element => {
    if (this.state.loading === false && this.state.data) {
      const rankings = this.state.data
      return (
        <Fragment>
          {rankings
            .filter((ranking: RankingDataObject) => ranking.teams.length > 0)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((ranking: RankingDataObject, i: number) => {
              return this.renderRanking(ranking, i)
            })}
        </Fragment>
      )
    } else {
      return <Spinner />
    }
  }

  render(): JSX.Element {
    const config: RankingData = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            kcvvPsdApi
          }
        }
      }
    `)

    this.kcvvPsdApi = config.site.siteMetadata.kcvvPsdApi

    return <section className={`ranking__wrapper`}>{this.renderRankings()}</section>
  }
}

export default Ranking
