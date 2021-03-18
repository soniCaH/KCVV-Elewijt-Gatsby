import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"

import { translateGameResult } from "../scripts/helper"

import Icon from "../components/icon"

import iconBench from "../images/i_bench_2.png"
import iconCleansheet from "../images/i_cleansheet.png"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellowRed from "../images/i_card_yellow_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconGoal from "../images/i_goal.png"
import iconStart from "../images/i_start.png"
import iconSubIn from "../images/i_sub_in.png"
import iconSubOut from "../images/i_sub_out.png"

import "./team--stats.scss"

class TeamStats extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    const {
      config: {
        site: {
          siteMetadata: { kcvvPsdApi },
        },
      },
      // player: { field_vv_id: playerId },
    } = this.props

    this.kcvvPsdApi = kcvvPsdApi
    this.teamId = 1
  }

  updateData() {
    if (this.teamId === null) {
      return
    }

    const apiUrl = `${this.kcvvPsdApi}/stats/team/${this.teamId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
  }

  componentDidMount() {
    this.updateData()
  }

  mapGameStatus(status) {

  }

  renderTeamStats = (team) => {
    if (this.state.loading === false && this.state.data) {
      const {
        extraStats = {}
      } = this.state.data
      return (
        <article className={"team__stats__detail card"}>
          <header className={"card__header"}>
            <h4>Overzicht</h4>
          </header>
          <div className={"card__content  team__stats__detail--team_stats"}>
            <span className={"team__stats--label"}>Gespeeld</span>
            <span className={"team__stats--stat"}>
              {extraStats.gamesPlayed}
            </span>
            <span className={"team__stats--label"}>Gewonnen</span>
            <span className={"team__stats--stat"}>{extraStats.gamesWon}</span>
            <span className={"team__stats--label"}>Gelijk</span>
            <span className={"team__stats--stat"}>{extraStats.gamesEqual}</span>
            <span className={"team__stats--label"}>Verloren</span>
            <span className={"team__stats--stat"}>{extraStats.gamesLost}</span>
            <span className={"team__stats--label"}>Doelpunten</span>
            <span className={"team__stats--stat"}>
              {extraStats.goalsScored} voor / {extraStats.goalsAgainst} tegen
            </span>
            <span className={"team__stats--label"}>Cleansheets</span>
            <span className={"team__stats--stat"}>
              {extraStats.cleanSheets}
            </span>
            <span className={"team__stats--label"}>Gele kaarten</span>
            <span className={"team__stats--stat"}>
              {extraStats.yellowCards}
            </span>
            <span className={"team__stats--label"}>Rode kaarten</span>
            <span className={"team__stats--stat"}>{extraStats.redCards}</span>
            <span className={"team__stats--label"}>
              Wedstrijden niet gescoord
            </span>
            <span className={"team__stats--stat"}>{extraStats.notScored}</span>
            <span className={"team__stats--label"}>Grootste overwinning</span>
            <span className={"team__stats--stat"}>
              {extraStats.biggestWin.result} tegen{" "}
              {extraStats.biggestWin.opponent}
            </span>
            <span className={"team__stats--label"}>Grootste verlies</span>
            <span className={"team__stats--stat"}>
              {extraStats.biggestLoss.result} tegen{" "}
              {extraStats.biggestLoss.opponent}
            </span>
            <span className={"team__stats--label"}>Meeste doelpunten</span>
            <span className={"team__stats--stat"}>
              {extraStats.mostGoals.result} tegen{" "}
              {extraStats.mostGoals.opponent}
            </span>
            <span className={"team__stats--label"}>Topschutters</span>
            <span className={"team__stats--stat"}>
              {extraStats.topscorers.sort((a, b) => b.value - a.value).map((player, i) => (
                <>{player.firstName} {player.lastName} ({player.value})<br/></>
              ))}
            </span>
            <span className={"team__stats--label"}>Laatste wedstrijden</span>
            <span className={"team__stats--stat"}>
              {extraStats.gameStreak.map((game, i) => (
                <span
                  className={`team__stats__streak team__stats__streak--${game.result.toLowerCase()}`}
                  title={`${translateGameResult(game.result)}`}
                >
                  {game.result.charAt(0) !== "E" ? game.result.charAt(0) : "D"}
                </span>
              ))}
            </span>
          </div>
        </article>
      )
    }
  }

  renderTeamSquadStats = (team) => {
    if (this.state.loading === false && this.state.data) {
      const {
        squadPlayerStatistics = [],
      } = this.state.data

      squadPlayerStatistics.sort((a, b) => b.minutes - a.minutes)

      return (
        <article className={"team__stats__detail card"}>
          <header className={"card__header"}>
            <h4>Spelers</h4>
          </header>
          <div className={"card__content"}>
            <table className={"team__stats__table team__stats__table--players"}>
              <thead>
                <tr>
                  <th
                    className={
                      "team__stats__column team__stats__column--string"
                    }
                  >
                    Speler
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <span title="Wedstrijden gespeeld">P</span>
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <span title="Wedstrijden gewonnen">W</span>
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <span title="Wedstrijden gelijkgespeeld">D</span>
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <span title="Wedstrijden verloren">L</span>
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <img
                      src={iconCardYellow}
                      title="Gele kaart"
                      alt="Gele kaart"
                      className="team__stats__header_icon"
                    />
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <img
                      src={iconCardRed}
                      title="Rode kaart"
                      alt="Rode kaart"
                      className="team__stats__header_icon"
                    />
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <img
                      src={iconGoal}
                      title="Doelpunt(en) gescoord"
                      alt="Doelpunt(en) gescoord"
                      className="team__stats__header_icon"
                    />
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
                    <img
                      src={iconCleansheet}
                      title="Cleansheets"
                      alt="Cleansheets"
                      className="team__stats__header_icon"
                    />
                  </th>
                  <th
                    className={
                      "team__stats__column team__stats__column--number"
                    }
                  >
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
                      <td
                        className={
                          "team__stats__column team__stats__column--string"
                        }
                      >
                        {player.firstName} {player.lastName}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.gamesPlayed}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.gamesWon}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.gamesEqual}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.gamesLost}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.yellowCards}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.redCards}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.goals}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.cleanSheets}
                      </td>
                      <td
                        className={
                          "team__stats__column team__stats__column--number"
                        }
                      >
                        {player.minutes || "0"}'
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </article>
      )
    }
  }

  render () {
    const { team } = this.props;

    return (
      <section className={"team__stats__wrapper"}>{this.renderTeamStats(team)}{this.renderTeamSquadStats(team)}</section>
    )
  }
}

// Retrieve endpoint of the logo's api from the site metadata (gatsby-config.js).
const query = graphql`
  query {
    site {
      siteMetadata {
        kcvvPsdApi
      }
    }
  }
`

export default ({ team }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <TeamStats
        // Data is the result of our query.
        config={data}
        team={team}
      />
    )}
  />
)
