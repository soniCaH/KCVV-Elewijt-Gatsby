import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { translateGameResult } from "../scripts/helper"
import Icon from "../components/Icon"

import iconCleansheet from "../images/i_cleansheet.png"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconGoal from "../images/i_goal.png"

import "./TeamStats.scss"
import Card from "./Card"

class TeamStats extends React.Component<TeamStatsProps, TeamStatsState> {
  public static defaultProps = {
    teamId: 1,
  }

  teamId: number
  kcvvPsdApi: string

  constructor(props: TeamStatsProps) {
    super(props)

    this.state = {
      data: {
        squadPlayerStatistics: [],
        goalsScored: [],
        goalsAgainst: [],
        extraStats: {
          gamesPlayed: 0,
          gamesWon: 0,
          gamesEqual: 0,
          gamesLost: 0,
          goalsScored: 0,
          goalsAgainst: 0,
          cleanSheets: 0,
          yellowCards: 0,
          redCards: 0,
          notScored: 0,
          biggestWin: {},
          biggestLoss: {},
          mostGoals: {},
          topscorers: [],
          gameStreak: [],
        },
      },
      loading: true,
    }

    this.kcvvPsdApi = ``
    this.teamId = props.teamId
  }

  updateData(): void {
    if (this.teamId === null || this.kcvvPsdApi === ``) {
      return
    }

    const apiUrl = `${this.kcvvPsdApi}/stats/team/${this.teamId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
  }

  componentDidMount(): void {
    this.updateData()
  }

  renderTeamStats = (): JSX.Element => {
    if (this.state.loading === false && this.state.data) {
      const { extraStats } = this.state.data
      return (
        <Card className={`team_stats__team`} title="Statistieken">
          <span className={`team_stats__label`}>Gespeeld</span>
          <span>{extraStats.gamesPlayed}</span>
          <span className={`team_stats__label`}>Gewonnen</span>
          <span>{extraStats.gamesWon}</span>
          <span className={`team_stats__label`}>Gelijk</span>
          <span>{extraStats.gamesEqual}</span>
          <span className={`team_stats__label`}>Verloren</span>
          <span>{extraStats.gamesLost}</span>
          <span className={`team_stats__label`}>Doelpunten</span>
          <span>
            {extraStats.goalsScored} voor / {extraStats.goalsAgainst} tegen
          </span>
          <span className={`team_stats__label`}>Cleansheets</span>
          <span>{extraStats.cleanSheets}</span>
          <span className={`team_stats__label`}>Gele kaarten</span>
          <span>{extraStats.yellowCards}</span>
          <span className={`team_stats__label`}>Rode kaarten</span>
          <span>{extraStats.redCards}</span>
          <span className={`team_stats__label`}>Wedstrijden niet gescoord</span>
          <span>{extraStats.notScored}</span>
          <span className={`team_stats__label`}>Grootste overwinning</span>
          <span>
            {extraStats.biggestWin.result} tegen {extraStats.biggestWin.opponent}
          </span>
          <span className={`team_stats__label`}>Grootste verlies</span>
          <span>
            {extraStats.biggestLoss.result} tegen {extraStats.biggestLoss.opponent}
          </span>
          <span className={`team_stats__label`}>Meeste doelpunten</span>
          <span>
            {extraStats.mostGoals.result} tegen {extraStats.mostGoals.opponent}
          </span>
          <span className={`team_stats__label`}>Topschutters</span>
          <ul className={`team_stats__list`}>
            {extraStats.topscorers
              .sort((a, b) => b.value - a.value)
              .map((player, i) => (
                <li key={i}>
                  {player.firstName} {player.lastName} ({player.value})
                </li>
              ))}
          </ul>
          <span className={`team_stats__label`}>Laatste wedstrijden</span>
          <span>
            {extraStats.gameStreak.map((game, i) => (
              <span
                className={`team_stats__streak team_stats__streak--${game.result.toLowerCase()}`}
                title={`${translateGameResult(game.result)}`}
              >
                {game.result.charAt(0) !== `E` ? game.result.charAt(0) : `D`}
              </span>
            ))}
          </span>
        </Card>
      )
    } else {
      return <div>Loading</div>
    }
  }

  renderTeamSquadStats = () => {
    if (this.state.loading === false && this.state.data) {
      const { squadPlayerStatistics } = this.state.data

      squadPlayerStatistics.sort((a, b) => b.minutes - a.minutes)

      return (
        <Card className="team_stats__players" title="Spelers" hasTable={true}>
          <table>
            <thead>
              <tr>
                <th className={`table__column__string`}>Speler</th>
                <th className={`table__column__number show-for-medium`}>
                  <span title="Wedstrijden gespeeld">P</span>
                </th>
                <th className={`table__column__number`}>
                  <span title="Wedstrijden gewonnen">W</span>
                </th>
                <th className={`table__column__number`}>
                  <span title="Wedstrijden gelijkgespeeld">D</span>
                </th>
                <th className={`table__column__number`}>
                  <span title="Wedstrijden verloren">L</span>
                </th>
                <th className={`table__column__number`}>
                  <img src={iconCardYellow} title="Gele kaart" alt="Gele kaart" className="table__header__icon" />
                </th>
                <th className={`table__column__number`}>
                  <img src={iconCardRed} title="Rode kaart" alt="Rode kaart" className="table__header__icon" />
                </th>
                <th className={`table__column__number`}>
                  <img
                    src={iconGoal}
                    title="Doelpunt(en) gescoord"
                    alt="Doelpunt(en) gescoord"
                    className="table__header__icon"
                  />
                </th>
                <th className={`table__column__number show-for-medium`}>
                  <img src={iconCleansheet} title="Cleansheets" alt="Cleansheets" className="table__header__icon" />
                </th>
                <th className={`table__column__number`}>
                  <span title="Minuten gespeeld">
                    <Icon icon="fa-clock-o" />
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {squadPlayerStatistics.map(function (player) {
                return (
                  <tr>
                    <td className={`table__column__string`}>
                      {player.firstName} {player.lastName}
                    </td>
                    <td className={`table__column__number show-for-medium`}>{player.gamesPlayed}</td>
                    <td className={`table__column__number`}>{player.gamesWon}</td>
                    <td className={`table__column__number`}>{player.gamesEqual}</td>
                    <td className={`table__column__number`}>{player.gamesLost}</td>
                    <td className={`table__column__number`}>{player.yellowCards}</td>
                    <td className={`table__column__number`}>{player.redCards}</td>
                    <td className={`table__column__number`}>{player.goals}</td>
                    <td className={`table__column__number show-for-medium`}>{player.cleanSheets}</td>
                    <td className={`table__column__number`}>{player.minutes || `0`}'</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Card>
      )
    }
  }

  render(): JSX.Element {
    const config: TeamStatsData = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            kcvvPsdApi
          }
        }
      }
    `)

    this.kcvvPsdApi = config.site.siteMetadata.kcvvPsdApi

    return (
      <section className={`team__stats__wrapper`}>
        {this.renderTeamStats()}
        {this.renderTeamSquadStats()}
      </section>
    )
  }
}

export default TeamStats
