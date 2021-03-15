import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { mapPositionCode } from "../scripts/helper"

import moment from "moment"

import "./player.scss"
import { Link } from "gatsby"

import Icon from "../components/icon"

import iconBench from "../images/i_bench_2.png"
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

      return (
        <aside className={"player-detail__statistics"}>
          <section className={"player-detail__statistics-item"}>
            <div className={"player-detail__statistics-item__number"}>
              {playerStatistics[0]?.gamesPlayed || "0"}
            </div>
            <div className={"player-detail__statistics-item__label"}>
              Wedstrijden
            </div>
          </section>

          {(player.field_position === "k" || player.field_position === "d") && (
            <section className={"player-detail__statistics-item"}>
              <div className={"player-detail__statistics-item__number"}>
                {playerStatistics[0]?.cleanSheets || "0"}
              </div>
              <div className={"player-detail__statistics-item__label"}>
                Cleansheets
              </div>
            </section>
          )}
          {player.field_position !== "k" && (
            <section className={"player-detail__statistics-item"}>
              <div className={"player-detail__statistics-item__number"}>
                {playerStatistics[0]?.goals || "0"}
              </div>
              <div className={"player-detail__statistics-item__label"}>
                Doelpunten
              </div>
            </section>
          )}
          <section className={"player-detail__statistics-item"}>
            <div className={"player-detail__statistics-item__number"}>
              {playerStatistics[0]?.yellowCards || "0"}
            </div>
            <div className={"player-detail__statistics-item__label"}>
              Gele kaarten
            </div>
          </section>
          <section className={"player-detail__statistics-item"}>
            <div className={"player-detail__statistics-item__number"}>
              {playerStatistics[0]?.redCards|| "0"}
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
        <article
          className={"player-detail__stats medium-12 large-12 cell card"}
        >
          <header className={"card__header"}>
            <h4>Statistieken</h4>
          </header>
          <div className={"card__content"}>
            <table className={"player-detail__stats__table"}>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>
                    <span title="Wedstrijden gespeeld">P</span>
                  </th>
                  <th>
                    <span title="Wedstrijden gewonnen">W</span>
                  </th>
                  <th>
                    <span title="Wedstrijden gelijkgespeeld">D</span>
                  </th>
                  <th>
                    <span title="Wedstrijden verloren">L</span>
                  </th>
                  <th>
                    <img
                      src={iconCardYellow}
                      title="Gele kaart"
                      alt="Gele kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th>
                    <img
                      src={iconCardRed}
                      title="Rode kaart"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th>
                    <img
                      src={iconGoal}
                      title="Doelpunten gescoord"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th>
                    <span title="Cleansheets">C</span>
                  </th>
                  <th>
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
                      <td>{stats.team.replace("Voetbal : ", "")}</td>
                      <td>{stats.gamesPlayed}</td>
                      <td>{stats.gamesWon}</td>
                      <td>{stats.gamesEqual}</td>
                      <td>{stats.gamesLost}</td>
                      <td>{stats.yellowCards}</td>
                      <td>{stats.redCards}</td>
                      <td>{stats.goals}</td>
                      <td>{stats.cleanSheets}</td>
                      <td>{stats.minutes}'</td>
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
          className={"player-detail__games medium-12 large-12 cell card"}
        >
          <header className={"card__header"}>
            <h4>Wedstrijden</h4>
          </header>
          <div className={"card__content"}>
            <table className={"player-detail__games__table responsive-card-table"}>
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Type</th>
                  <th>Datum</th>
                  <th><span title="Thuis/uit">H/A</span></th>
                  <th>Score</th>
                  <th>Tegenstander</th>
                  <th>
                    <img
                      src={iconCardYellow}
                      title="Gele kaart"
                      alt="Gele kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th>
                    <img
                      src={iconCardRed}
                      title="Rode kaart"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th>
                    <img
                      src={iconGoal}
                      title="Doelpunten gescoord"
                      alt="Rode kaart"
                      className="player-detail__stats--header_icon"
                    />
                  </th>
                  <th>
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
                      <td data-label="Team">{game.team.replace("Voetbal : ", "")}</td>
                      <td data-label="Type">{game.competition}</td>
                      <td data-label="Datum">{moment(game.date).format("DD/MM/YYYY")}</td>
                      <td data-label="Thuis/uit">
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
                      <td data-label="Score">
                        {game.goalsHomeTeam}&nbsp;-&nbsp;{game.goalsAwayTeam}
                      </td>
                      <td data-label="Tegenstander">{game.opponent}</td>
                      <td data-label="Gele kaart(en)">{game.yellowCards}</td>
                      <td  data-label="Rode kaart(en)">{game.redCards}</td>
                      <td data-label="Doelpunten">{game.goals}</td>
                      <td data-label="Speeltijd">{game.minutesPlayed}'</td>
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
