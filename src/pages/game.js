import React, { Component } from "react"

import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import Icon from "../components/icon"

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

              <div className={"cell large-6"}>
                <strong>{general.homeClub.name}</strong>
                {this.renderLineup(lineup.home, substitutes.home)}
              </div>
              <div className={"cell large-6"}>
                <strong>{general.awayClub.name}</strong>
                {this.renderLineup(lineup.away, substitutes.away)}
              </div>

              <div className={"cell large-12"}>
                <strong>Events</strong>
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
      <div className={"event__wrapper"}>
        {events.map((element, i) => this.renderEventLine(i, element, homeTeamId))}
      </div>
    )
  }

  renderEventLine(i, element, homeTeamId) {
    return (
      <div
        className={`event__row ${element.clubId == homeTeamId ? 'event__row--home' : 'event__row--away'} grid-x grid-margin-x`}
        key={i}
      >
        <span className={"event__row__item event__row__item--home lineup__item--name cell small-10 large-4"}>
          {element.playerName}
        </span>
        <span className={"event__row__item event__row__item--home lineup__item--number cell small-1 center"}>
          {element.action}
        </span>
        <span className={"event__row__item lineup__item--time cell small-1 large-2 center"}>
          {element.minute}'
        </span>
        <span className={"event__row__item event__row__item--away lineup__item--number cell small-1 center"}>
          {element.action}
        </span>
        <span className={"event__row__item event__row__item--away lineup__item--name cell small-10 large-4"}>
          {element.playerName}
        </span>
      </div>
    )
  }
  renderLineup(lineup, substitutes) {
    return (
      <div className={"lineup__wrapper"}>
        {this.renderLineupHeader()}
        {lineup.map((element, i) => this.renderLineupLine(i, element))}
        {substitutes.map((element, i) => this.renderSubLine(i, element))}
      </div>
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
        <span className={"lineup__row__item lineup__item--status cell small-1"}>
          {element.status}
        </span>
        <span className={"lineup__row__item lineup__item--number cell small-1"}>
          {element.number}
        </span>
        <span className={"lineup__row__item lineup__item--name cell small-9"}>
          {element.playerName}
        </span>
        <span className={"lineup__row__item lineup__item--time cell small-1 right"}>
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
        <span className={"lineup__row__item lineup__item--status cell small-1"}>
          {element.status}
        </span>
        <span className={"lineup__row__item lineup__item--number cell small-1"}>
          {element.number}
        </span>
        <span className={"lineup__row__item lineup__item--name cell small-9"}>
          {element.playerName} {element.captain && `(C)`}
        </span>
        <span className={"lineup__row__item lineup__item--time cell small-1 right"}>
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
