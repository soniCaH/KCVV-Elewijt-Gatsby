import React, { Component } from "react"
import { graphql, StaticQuery } from "gatsby"
import { mapPositionCode } from "../scripts/helper"

import "./player.scss"
import { Link } from "gatsby"

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
        goals = [],
        gameReports = [],
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
        {this.renderPlayerBody(player)} */}
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
