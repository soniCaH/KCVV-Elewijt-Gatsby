import React, { Component } from "react"
import LazyLoad from "react-lazy-load"

import { graphql } from "gatsby"

import moment from "moment"
import "moment/locale/nl-be"

import { mapPsdStatus } from "../scripts/helper"

import Layout from "../layouts/index"
import SEO from "../components/seo"
import Icon from "../components/icon"

import iconBench from "../images/i_bench_2.png"
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
    moment.locale("nl-be")

    if (this.state.loading === false && this.state.data) {
      const {
        general = {},
        substitutes = {},
        lineup = {},
        events = [],
      } = this.state.data
      const homeTeamId = general.homeClub.id
      const ogImage = {
        src: general?.homeClub.logo,
        width: 180,
        height: 180,
      }

      const { home: homeLineup = [], away: awayLineup = [] } = lineup || {}
      const { home: homeSubs = [], away: awaySubs = [] } = substitutes || {}

      const matchTime = moment(general.date)

      return (
        <Layout>
          <SEO
            lang="nl-BE"
            title={`Matchverslag ${general?.homeClub?.name} - ${general?.awayClub?.name}`}
            description={`Matchverslag ${general?.homeClub?.name} - ${general?.awayClub?.name}`}
            path={`/game/${general?.id}`}
            image={ogImage}
          />

          <section className="grid-container game-stats">
            <div className="grid-x grid-margin-x">
              <div className={"cell large-12 center game__details"}>
                <div className="game__teams">
                  <div className={"game__teams-inner"}>
                    <LazyLoad debounce={false}>
                      <img
                        src={general.homeClub.logo}
                        alt={general.homeClub.name}
                      />
                    </LazyLoad>
                  </div>
                  {this.renderScore(general.goalsHomeTeam, general.goalsAwayTeam)}
                  <div className={"game__teams-inner"}>
                    <LazyLoad debounce={false}>
                      <img
                        src={general.awayClub.logo}
                        alt={general.awayClub.name}
                      />
                    </LazyLoad>
                  </div>
                </div>
                <h1>{`${general.homeClub.name} - ${general.awayClub.name}`}</h1>
                <h4>{general.competitionType}</h4>
                <time dateTime={matchTime.format("YYYY-MM-DD - H:mm")}>
                  {matchTime.format("dddd DD MMMM YYYY - H:mm")}
                </time>
                <br />
                {general.status !== 0 && mapPsdStatus(general.status)}
                <br />
              </div>

              {(homeLineup.length !== 0 || awayLineup.length !== 0) && (
                <div
                  className={
                    "lineup__wrapper grid-x grid-margin-x cell large-12"
                  }
                >
                  <div className={"cell large-6 lineup__wrapper--home"}>
                    <h3>{general.homeClub.name}</h3>
                    {homeLineup && this.renderLineup(homeLineup, homeSubs)}
                  </div>
                  <div className={"cell large-6 lineup__wrapper--away"}>
                    <h3>{general.awayClub.name}</h3>
                    {awayLineup && this.renderLineup(awayLineup, awaySubs)}
                  </div>
                </div>
              )}

              {events.length !== 0 && (
                <div className={"cell large-12 event__wrapper"}>
                  <h3>Gebeurtenissen</h3>
                  {events && this.renderEvents(events, homeTeamId)}
                </div>
              )}
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

  renderScore = (resultHome, resultAway) => {
    return  resultHome !== null && resultAway !== null ? (
      <div className={"match-details__vs match-details__vs--score"}>
        {this.renderScoreWithWinnerIndicator(resultHome, resultAway, "home")}
        <span className={"match-details__divider"}> - </span>
        {this.renderScoreWithWinnerIndicator(resultAway, resultHome, "away")}
      </div>
    ) : (
      <div className={"match-details__vs"}>VS</div>
    )
  }

  renderScoreWithWinnerIndicator = (result1, result2, extraClass) => {
    return result1 > result2 ? (
      <span
        className={`match-details__winner match-details__winner--${extraClass}`}
      >
        {result1}
      </span>
    ) : (
      <span className={"match-details__loser"}>{result1}</span>
    )
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
      case "tweedegeel":
        actionIcon = iconCardYellowRed
        actionText = "Tweede gele kaart voor"
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
