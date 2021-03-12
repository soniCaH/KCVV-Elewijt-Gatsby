import React, { Component } from "react"

import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import Icon from "../components/icon"

import iconBench from "../images/i_bench.png"
import iconCardRed from "../images/i_card_red.png"
import iconCardYellowRed from "../images/i_card_yellow_red.png"
import iconCardYellow from "../images/i_card_yellow.png"
import iconGoal from "../images/i_goal.png"
import iconStart from "../images/i_start.png"
import iconSubIn from "../images/i_sub_in.png"
import iconSubOut from "../images/i_sub_out.png"

class GamePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      loading: true,
    }

    const {
      data: {
        site: {
          siteMetadata: { kcvvPsdApi, refreshRate },
        },
      },
    } = this.props

    this.kcvvPsdApi = kcvvPsdApi
    this.apiRefreshRate = refreshRate
    this.timeout = {}
    this.matchId = this.props.id || null
  }

  updateData() {
    const apiUrl = `${this.kcvvPsdApi}/match/${this.matchId}`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => this.setState({ data: json, loading: false }))
  }

  componentDidMount() {
    this.updateData()
  }

  render() {
    if (this.state.loading === false && this.state.data) {
      const { general, substitutes, lineup, events } = this.state.data
      const homeTeamId = general.homeClub.id
      const awayTeamId = general.awayClub.id
      const ogImage = {
        src: general?.homeClub.logo,
        width: 180,
        height: 180,
      }

      return (
        <Layout>
          <SEO
            lang="nl-BE"
            title={`Matchverslag ${general?.homeClub?.name} - ${general?.awayClub?.name}`}
            description={`Matchverslag ${general?.homeClub?.name} - ${general?.awayClub?.name}`}
            path={`/game/${general?.id}`}
            image={ogImage}
          />
          <section className="grid-container site-content">
            <div className="grid-x grid-margin-x">
              <div className={"cell large-12 center"}>
                {general.date}
                <br />
                {general.status}
                <br />
                {general.homeClub.name}
                <img src={general.homeClub.logo} alt={general.homeClub.name} />
                {general.goalsHomeTeam} - {general.goalsAwayTeam}
                {general.awayClub.name}
                <img src={general.awayClub.logo} alt={general.awayClub.name} />
                <br />
                {general.competitionType}
              </div>

              <div className={"lineup__wrapper grid-x grid-margin-x cell large-12"}>
                <div className={"cell large-6 lineup__wrapper--home"}>
                  <h3>{general.homeClub.name}</h3>
                  {this.renderLineup(lineup.home, substitutes.home)}
                </div>
                <div className={"cell large-6 lineup__wrapper--away"}>
                  <h3>{general.awayClub.name}</h3>
                  {this.renderLineup(lineup.away, substitutes.away)}
                </div>
              </div>

              <div className={"cell large-12 event__wrapper"}>
                <h3>Events</h3>
                {this.renderEvents(events, homeTeamId)}
              </div>
            </div>
          </section>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <section className="grid-container site-content">
            Matchverslag inladen...
          </section>
        </Layout>
      )
    }
  }

  renderEvents(events, homeTeamId) {
    return (
      <>
        {events.map((element, i) =>
          this.renderEventLine(i, element, homeTeamId)
        )}
      </>
    )
  }

  renderEventLine(i, element, homeTeamId) {
    const homeTeam = element.clubId == homeTeamId
    let actionIcon = null
    let actionText = ""

    switch (element.action) {
      case "geel":
        actionIcon = iconCardYellow
        actionText = "Gele kaart voor"
        break
      case "rood":
        actionIcon = iconCardRed
        actionText = "Rode kaart voor"
        break
      case "doelpunt":
        actionIcon = iconGoal
        actionText = `${element?.goalsHome} - ${element?.goalsAway} — Doelpunt gescoord door`
        break
    }

    return (
      <div
        className={`event__row ${
          homeTeam ? "event__row--home" : "event__row--away"
        } grid-x grid-margin-x`}
        key={i}
      >
        {homeTeam && (
          <span
            className={
              "event__row__item event__row__item--home lineup__item--name cell small-10 large-4"
            }
          >
            {actionText} {element.playerName}
          </span>
        )}
        {homeTeam && (
          <span
            className={
              "event__row__item event__row__item--home lineup__item--action cell small-1 center"
            }
            style={{ backgroundImage: `url(${actionIcon})` }}
          ></span>
        )}
        <span
          className={
            "event__row__item lineup__item--time cell small-1 large-2 center"
          }
        >
          {element.minute}'
        </span>
        {homeTeam || (
          <span
            className={
              "event__row__item event__row__item--away lineup__item--action cell small-1 center"
            }
            style={{ backgroundImage: `url(${actionIcon})` }}
          ></span>
        )}
        {homeTeam || (
          <span
            className={
              "event__row__item event__row__item--away lineup__item--name cell small-10 large-4"
            }
          >
            {actionText} {element.playerName}
          </span>
        )}
      </div>
    )
  }
  renderLineup(lineup, substitutes) {
    return (
      <>
        {this.renderLineupHeader()}
        {lineup.map((element, i) => this.renderLineupLine(i, element))}
        <hr />
        {substitutes.map((element, i) => this.renderSubLine(i, element))}
      </>
    )
  }

  renderLineupHeader() {
    return (
      <div className={"lineup__header grid-x grid-margin-x"}>
        <span
          className={"lineup__header__item lineup__item--status cell small-1"}
        ></span>
        <span
          className={"lineup__header__item lineup__item--number cell small-1"}
        >
          #
        </span>
        <span
          className={"lineup__header__item lineup__item--name cell small-9"}
        >
          Name
        </span>
        <span
          className={"lineup__header__item lineup__item--time cell small-1"}
        >
          <Icon icon="fa-clock-o" />
        </span>
      </div>
    )
  }

  renderSubLine(i, element) {
    return (
      <div
        className={"lineup__row lineup__row--substitute grid-x grid-margin-x"}
        key={i}
      >
        <span
          className={"lineup__row__item lineup__item--status cell small-1"}
          style={{
            backgroundImage: `url(${element.changed ? iconSubIn : iconBench})`,
          }}
        ></span>
        <span className={"lineup__row__item lineup__item--number cell small-1"}>
          {element.number}
        </span>
        <span className={"lineup__row__item lineup__item--name cell small-9"}>
          {element.playerName}
        </span>
        <span className={"lineup__row__item lineup__item--time cell small-1"}>
          {element.minutesPlayed}'
        </span>
      </div>
    )
  }

  renderLineupLine(i, element) {
    return (
      <div
        className={"lineup__row lineup__row--lineup grid-x grid-margin-x"}
        key={i}
      >
        <span
          className={"lineup__row__item lineup__item--status cell small-1"}
          style={{
            backgroundImage: `url(${element.changed ? iconSubOut : iconStart})`,
          }}
        ></span>
        <span className={"lineup__row__item lineup__item--number cell small-1"}>
          {element.number}
        </span>
        <span className={"lineup__row__item lineup__item--name cell small-9"}>
          {element.playerName} {element.captain && `(C)`}
        </span>
        <span className={"lineup__row__item lineup__item--time cell small-1"}>
          {element.minutesPlayed}'
        </span>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        kcvvPsdApi
        refreshRate
      }
    }
  }
`

export default GamePage
