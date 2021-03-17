import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { mapPositionCode } from "../scripts/helper"

import moment from "moment"

import "./player.scss"
import { Link } from "gatsby"

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

// eslint-disable-next-line
String.prototype.replaceAll = function (search, replacement) {
  var target = this
  return target.replace(new RegExp(search, "g"), replacement)
}

/**
 */
class PlayerDetail extends Component {
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
      player: { field_vv_id: playerId },
    } = this.props

    this.kcvvPsdApi = kcvvPsdApi
    this.playerId = playerId
  }

  updateData() {
    if (this.matchId === null) {
      return
    }

    const apiUrl = `${this.kcvvPsdApi}/stats/player/${this.playerId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
  }

  componentDidMount() {
    this.updateData()
  }

  renderPlayerName = (player) => (
    <h1 className={"player-detail__name"}>
      <span className={"player-detail__name-first"}>
        {player.field_firstname}
      </span>
      <span className={"player-detail__name-last"}>
        {player.field_lastname}
      </span>
    </h1>
  )
  renderPlayerImage = (player) => (
    <div className={"bg-green-mask"}>
      <div
        className={"player-detail__bg-avatar"}
        style={
          player.relationships.field_image && {
            backgroundImage: `url(${player.relationships.field_image.localFile.childImageSharp.fixed.src})`,
          }
        }
      />
      <div className={"bg-white-end"} />
    </div>
  )
  renderPlayerHeader = (player) => (
    <header className={"player-detail__header"}>
      {this.renderPlayerName(player)}
      {this.renderPlayerImage(player)}

      <div className={"player-detail__bg-shirt-number"} aria-hidden="true">
        {player.field_shirtnumber || ""}
      </div>
    </header>
  )
  renderPlayerStats = (player) => {
    if (this.state.loading === false && this.state.data) {
      const {
        playerStatistics = [],
      } = this.state.data

      console.log(playerStatistics.reduce((a, b) => a + b?.gamesPlayed, 0))

      return (
        <aside className={"player-detail__statistics"}>
          <section className={"player-detail__statistics-item"}>
            <div className={"player-detail__statistics-item__number"}>
              {playerStatistics.reduce((a, b) => a + (b?.gamesPlayed || 0), 0) || "0"}
            </div>
            <div className={"player-detail__statistics-item__label"}>
              Wedstrijden
            </div>
          </section>

          {(player.field_position === "k" || player.field_position === "d") && (
            <section className={"player-detail__statistics-item"}>
              <div className={"player-detail__statistics-item__number"}>
              {playerStatistics.reduce((a, b) => a + (b?.cleanSheets || 0), 0) || "0"}
              </div>
              <div className={"player-detail__statistics-item__label"}>
                Cleansheets
              </div>
            </section>
          )}
          {player.field_position !== "k" && (
            <section className={"player-detail__statistics-item"}>
              <div className={"player-detail__statistics-item__number"}>
              {playerStatistics.reduce((a, b) => a + (b?.goals || 0), 0) || "0"}
              </div>
              <div className={"player-detail__statistics-item__label"}>
                Doelpunten
              </div>
            </section>
          )}
          <section className={"player-detail__statistics-item"}>
            <div className={"player-detail__statistics-item__number"}>
            {playerStatistics.reduce((a, b) => a + (b?.yellowCards || 0), 0) || "0"}
            </div>
            <div className={"player-detail__statistics-item__label"}>
              Gele kaarten
            </div>
          </section>
          <section className={"player-detail__statistics-item"}>
            <div className={"player-detail__statistics-item__number"}>
            {playerStatistics.reduce((a, b) => a + (b?.redCards || 0), 0) || "0"}
            </div>
            <div className={"player-detail__statistics-item__label"}>
              Rode kaarten
            </div>
          </section>
        </aside>
      )
    }
  }

  renderPlayerStatsFull = (player) => {
    if (this.state.loading === false && this.state.data) {
      const {
        playerStatistics = [],
      } = this.state.data

      return (
        <article className={"player-detail__stats card"}>
          <header className={"card__header"}>
            <h4>Statistieken</h4>
          </header>
          <div className={"card__content"}>
            <table className={"player-detail__stats__table"}>
              <thead>
                <tr>
                  <th
                    className={
                      "player-detail__column player-detail__column--string"
                    }
                  >
                    Team
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <span title="Wedstrijden gespeeld">P</span>
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <span title="Wedstrijden gewonnen">W</span>
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <span title="Wedstrijden gelijkgespeeld">D</span>
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <span title="Wedstrijden verloren">L</span>
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <img
                      src={iconCardYellow}
                      title="Gele kaart"
                      alt="Gele kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <img
                      src={iconCardRed}
                      title="Rode kaart"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <img
                      src={iconGoal}
                      title="Doelpunt(en) gescoord"
                      alt="Doelpunt(en) gescoord"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <img
                      src={iconCleansheet}
                      title="Cleansheets"
                      alt="Cleansheets"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th
                    className={
                      "player-detail__column player-detail__column--number"
                    }
                  >
                    <span title="Minuten gespeeld">
                      <Icon icon="fa-clock-o" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {playerStatistics.map(function (stats) {
                  return (
                    <tr>
                      <td
                        className={
                          "player-detail__column player-detail__column--string"
                        }
                      >
                        {stats.team.replace("Voetbal : ", "")}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.gamesPlayed}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.gamesWon}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.gamesEqual}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.gamesLost}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.yellowCards}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.redCards}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.goals}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.cleanSheets}
                      </td>
                      <td
                        className={
                          "player-detail__column player-detail__column--number"
                        }
                      >
                        {stats.minutes}'
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
  renderPlayerGamesFull = (player) => {
    if (this.state.loading === false && this.state.data) {
      const {
        gameReports = [],
      } = this.state.data

      return (
        <article
          className={"player-detail__games card"}
        >
          <header className={"card__header"}>
            <h4>Wedstrijden</h4>
          </header>
          <div className={"card__content"}>
            <table className={"player-detail__games__table responsive-card-table"}>
              <thead>
                <tr>
                  <th className={"player-detail__column player-detail__column--string"}>Team</th>
                  <th className={"player-detail__column player-detail__column--string"}>Type</th>
                  <th className={"player-detail__column player-detail__column--string"}>Datum</th>
                  <th className={"player-detail__column player-detail__column--number"}><span title="Thuis/uit">H/A</span></th>
                  <th className={"player-detail__column player-detail__column--score"}>Score</th>
                  <th className={"player-detail__column player-detail__column--string"}>Tegenstander</th>
                  <th className={"player-detail__column player-detail__column--number"}>
                    <img
                      src={iconCardYellow}
                      title="Gele kaart"
                      alt="Gele kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th className={"player-detail__column player-detail__column--number"}>
                    <img
                      src={iconCardRed}
                      title="Rode kaart"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th className={"player-detail__column player-detail__column--number"}>
                    <img
                      src={iconGoal}
                      title="Doelpunten gescoord"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th className={"player-detail__column player-detail__column--number"}>
                    <span title="Minuten gespeeld">
                      <Icon icon="fa-clock-o" />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {gameReports.map(function (game) {
                  return (
                    <tr>
                      <td data-label="Team" className={"player-detail__column player-detail__column--string"}>{game.team.replace("Voetbal : ", "")}</td>
                      <td data-label="Type" className={"player-detail__column player-detail__column--string"}>{game.competition}</td>
                      <td data-label="Datum" className={"player-detail__column player-detail__column--string"}>{moment(game.date).format("DD/MM/YYYY")}</td>
                      <td data-label="Thuis/uit" className={"player-detail__column player-detail__column--number"}>
                        {game.home ? (
                          <span
                            className={"player-detail__games__home"}
                            title="Thuiswedstrijd"
                          >
                            H
                          </span>
                        ) : (
                          <span
                            className={"player-detail__games__away"}
                            title="Uitwedstrijd"
                          >
                            A
                          </span>
                        )}
                      </td>
                      <td data-label="Score" className={"player-detail__column player-detail__column--score"}>
                        {game.goalsHomeTeam}&nbsp;-&nbsp;{game.goalsAwayTeam}
                      </td>
                      <td data-label="Tegenstander" className={"player-detail__column player-detail__column--string"}>{game.opponent}</td>
                      <td data-label="Gele kaart(en)" className={"player-detail__column player-detail__column--number"}>{game.yellowCards}</td>
                      <td  data-label="Rode kaart(en)" className={"player-detail__column player-detail__column--number"}>{game.redCards}</td>
                      <td data-label="Doelpunten" className={"player-detail__column player-detail__column--number"}>{game.goals}</td>
                      <td data-label="Speeltijd" className={"player-detail__column player-detail__column--number"}>{game.minutesPlayed}'</td>
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

  renderPlayerBirthdate = (player) => (
    <div
      className={"player-detail__data-item player-detail__data-item--birthdate"}
    >
      <span className={"player-detail__data-item__label"}>Geboortedatum</span>
      <span className={"player-detail__data-item__data"}>
        {player.field_birth_date || "Onbekend"}
      </span>
    </div>
  )
  renderPlayerPosition = (player) => (
    <div
      className={"player-detail__data-item player-detail__data-item--position"}
    >
      <span className={"player-detail__date-item__data"}>
        {player.field_position && mapPositionCode(player.field_position)}
      </span>
      <span className={"player-detail__data-item__label"}>
        {player.relationships.node__team && (
          <Link to={player.relationships.node__team[0].path.alias}>
            {player.relationships.node__team[0].title}
          </Link>
        )}
      </span>
    </div>
  )
  renderPlayerJoinDate = (player) => {
    const currentlyPlaying = !player.field_date_leave
    return (
      <div
        className={
          "player-detail__data-item player-detail__data-item--joindate"
        }
      >
        <span className={"player-detail__data-item__label"}>
          {currentlyPlaying && "Speler bij KCVV sinds"}
          {!currentlyPlaying && "Speler tussen"}
        </span>
        <span className={"player-detail__data-item__data"}>
          {player.field_join_date || "Onbekend"}
          {!currentlyPlaying && (
            <>
              <span className={"text--regular"}> en </span>{" "}
              {player.field_date_leave}
            </>
          )}
        </span>
      </div>
    )
  }
  renderPlayerData = (player) => (
    <section className={"player-detail__data"}>
      {this.renderPlayerBirthdate(player)}
      {this.renderPlayerPosition(player)}
      {this.renderPlayerJoinDate(player)}
    </section>
  )
  renderPlayerBody = (player) => {
    const cleanBody =
      (player.body &&
        player.body.processed.replaceAll(
          "/sites/default/",
          `${process.env.GATSBY_API_DOMAIN}/sites/default/`
        )) ||
      ""

    return (
      <section className={"player-detail__body"}>
        <div dangerouslySetInnerHTML={{ __html: cleanBody }} />
      </section>
    )
  }
  render() {
    const { player } = this.props

    return (
      <article className={"player-detail"}>
        {this.renderPlayerHeader(player)}
        {this.renderPlayerStats(player)}
        <div className={"player-break"}></div>
        {this.renderPlayerData(player)}
        {this.renderPlayerBody(player)}
        {this.renderPlayerStatsFull(player)}
        {this.renderPlayerGamesFull(player)}
      </article>
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

export default ({ player }) => (
  <StaticQuery
    query={query}
    render={(data) => (
      <PlayerDetail
        // Data is the result of our query.
        config={data}
        player={player}
      />
    )}
  />
)
